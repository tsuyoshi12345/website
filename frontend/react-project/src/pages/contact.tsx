import React, { useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

const schema = zod.object({
  name: zod.string().min(1, { message: "必須項目です" }),
  comment: zod.string().min(1, { message: "必須項目です" }),
});

const FormURL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfZ8FyoiaAjiK7G5lyHrvNXsFODo4iVTncL-94q8c1jk7kmxw/formResponse";

  const FormFieldNames = {
    name: "entry.1030514930",
    comment: "entry.323289088",
  };

  type FormData = {
    name: string;
    comment: string;
  };
  
  function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
   
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>({
      // zodを使用する設定
      resolver: zodResolver(schema),
    });
   
    const onSubmit: SubmitHandler<FormData> = async (data) => {
      try {
        // フォームデータをGoogleフォームに送信
        await fetch(FormURL, {
          method: "POST",
          // urlEncodeされた値をbodyに入れる
          body: provideUrlEncodedFormData(data),
          // 通常ではcorsに弾かれる (返却値のstatusは常に0 後述...)
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
   
        // 送信が成功したら、送信完了画面を表示
        setIsSubmitted(true);
      } catch (e) {
        //　送信に失敗した場合に表示する画面
        alert("送信に失敗しました。ネットワーク状況を確認してください");
      }
    };
   
    //　送信が完了した場合に表示する画面
    if (isSubmitted) {
      return (
        <div className="submitted-message">
          <h1>送信が完了しました</h1>
          <p>お問い合わせいただきありがとうございます。</p>
        </div>
      );
    }
   
    // まだ送信が完了していない場合、フォームを表示する
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-item">
            <label>
              <p>氏名</p>
              <input type="text" {...register("name")} />
            </label>
            <p className="error-message">{errors.name?.message}</p>
          </div>
          <div className="form-item">
            <label>
              <p>コメント</p>
              <textarea {...register("comment")} />
            </label>
            <p className="error-message">{errors.comment?.message}</p>
          </div>
          <button type="submit">送信</button>
        </form>
      </>
    );
  }
   
  // request bodyに必要なurlEncodeされた値を提供
  // originalのform情報を{entry.{number}: value}に変換する
  // フォームデータを適切な形式に変換して送信
  function provideUrlEncodedFormData(originalFormData: FormData) {
    const result: { [key: string]: string | number } = {};
    Object.keys(originalFormData).forEach(
      (key) => (result[FormFieldNames[key as keyof FormData]] = originalFormData[key as keyof FormData])
    );
    return new URLSearchParams(result as any).toString();
  }

  export default Contact;