import React, { useState, useEffect }  from 'react';
import droneImage from '../assets/test.png'; // ドローンの写真をassetsフォルダに追加してください

const images: string[] = [
  '/test1.png',
  '/test2.png'
];

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{width: '100%', height: 'auto' }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            transition: 'opacity 1s',
            opacity: index === currentImageIndex ? 1 : 0
          }}
        />
      ))}
    </div>
  );
};

/*const Home: React.FC = () => {
  return (
    <div>
      <img src={droneImage} alt="ドローン" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};*/

export default Home;