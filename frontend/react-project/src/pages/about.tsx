import React from 'react';
import './css/About.css';

const About: React.FC = () => {
  return (
    <div className="container">
      <div className="item image1">
        <img src="apple.png" alt="画像1" />
      </div>
      <div className="item desc1">
        <div className="description">
          <h2>画像1の説明</h2>
          <p>ここに画像1の説明文を入力します。これはサンプルのテキストです。</p>
        </div>
      </div>
      <div className="item desc2">
        <div className="description">
          <h2>画像2の説明</h2>
          <p>ここに画像2の説明文を入力します。これはサンプルのテキストです。</p>
        </div>
      </div>
      <div className="item image2">
        <img src="apple.png" alt="画像2" />
      </div>
      <div className="item image3">
        <img src="apple.png" alt="画像3" />
      </div>
      <div className="item desc3">
        <div className="description">
          <h2>画像3の説明</h2>
          <p>ここに画像3の説明文を入力します。これはサンプルのテキストです。</p>
        </div>
      </div>
    </div>
  );
};

export default About;
