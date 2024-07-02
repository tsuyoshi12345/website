import React from 'react';
import droneImage from '../assets/test.png'; // ドローンの写真をassetsフォルダに追加してください

const Home: React.FC = () => {
  return (
    <div>
      <img src={droneImage} alt="ドローン" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default Home;