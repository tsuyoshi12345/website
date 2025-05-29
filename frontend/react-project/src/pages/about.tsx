import React from 'react';
import '../css/About.css';

const About: React.FC = () => {
  return (
    <div className="container">
      <div className="item image1">
        <img src="apple.png" alt="画像1" />
      </div>
      <div className="item image2">
        <img src="apple.png" alt="画像2" />
      </div>
      <div className="item desc1">
        <div className="description">
          <h2>テロー</h2>
          <p>このドローンはPythonのプログラムで動かすことが可能です。</p>
          <p>kサークルでは中高生向けの体験会でドローン×プログラミング体験に活用ができます。</p>
          <p>ほかにも、キーボード操作や携帯でのアプリ操作も活用できるので初心者でも簡単に扱うことができます！</p>
        </div>
      </div>
      <div className="item desc2">
        <div className="description">
          <h2>みにどろーん</h2>
          <p>コントローラーを使用して操作する小さいドローン</p>
          <p>一応競技にもでれる</p>
          <p>最近新調したのでいっぱいあります！</p>
        </div>
      </div>
      <div className="item image3">
        <img src="apple.png" alt="画像3" />
      </div>
      <div className="item image4">
        <img src="apple.png" alt="画像4" />
      </div>
      <div className="item image5">
        <img src="apple.png" alt="画像5" />
      </div>
      <div className="item image6">
        <img src="apple.png" alt="画像6" />
      </div>
      <div className="item desc3">
        <div className="description">
          <h2>競技用どろーん</h2>
          <p>一番ごついドローンで外で飛ばすには免許が必要だったり？</p>
          <p>ドローンフィールドができたことによってそこならだれでも飛ばせるので、期待できる！</p>
          <p>体験などで使用することはあまりないので入部して触ろう。</p>
        </div>
      </div>
    </div>
  );
};

export default About;
