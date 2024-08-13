import { FC } from "react";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  comment: string;
  submit: any;
};

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // watch
  const lastName = watch("lastName");

  return (
    <div className="wrapper">
      <h1>React Form</h1>
      <section className="section">
        <h2>useState Form</h2>
        <p>React Hook Formを使用してformを作成した例です。</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-item">
            <label>
              <span className="label required">必須</span>
              <span>姓</span>
              <input
                type="text"
                {...register("lastName", {
                  required: "姓を入力してください",
                })}
              />
            </label>
            {errors.lastName?.message && (
              <p className="error-message">{errors.lastName?.message}</p>
            )}
          </div>
          <div className="form-item">
            <label>
              <span className="label required">必須</span>
              <span>名</span>
              <input
                type="text"
                {...register("firstName", {
                  required: "名を入力してください",
                })}
              />
            </label>
            {errors.firstName?.message && (
              <p className="error-message">{errors.firstName?.message}</p>
            )}
          </div>
          <div className="form-item">
            <label>
              <span className="label required">必須</span>
              <span>コメント</span>
              <textarea
                {...register("comment", {
                  required: true,
                  minLength: {
                    value: 10,
                    message: "10文字以上で入力してください",
                  },
                  maxLength: {
                    value: 20,
                    message: "20文字以下で入力してください",
                  },
                })}
              />
            </label>
            {errors.comment?.message && (
              <p className="error-message">{errors.comment.message}</p>
            )}
          </div>
          <div className="submit-button">
            <input type="submit" />
          </div>
        </form>
      </section>
      <p>姓: {lastName}</p>
    </div>
  );
};
export default Contact;