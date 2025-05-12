import { useEffect, useState } from 'react';

function StarBackground() {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  const generateStars = () => {
    /*
     Get a random stars number based on the screen area 
     (larger one -> more stars, smaller one -> less stars)
    */
    const numOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 70000
    );
    const newStars = Array.from({ length: numOfStars }, (_, i) => {
      return {
        id: i,
        size: Math.round(Math.random() * 3 + 1),
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.round(Math.random() * 4 + 2),
      };
    });
    setStars(newStars);
  };

  const generateMeteors = () => {
    const numOfMeteors = 2;
    const newMeteors = Array.from({ length: numOfMeteors }, (_, i) => {
      return {
        id: i,
        size: Math.round(Math.random() * 2 + 1),
        x: Math.random() * 100,
        y: Math.random() * 10,
        delay: Math.random() * 15,
        animationDuration: Math.round(Math.random() * 3 + 3),
      };
    });
    setMeteors(newMeteors);
  };

  useEffect(() => {
    generateStars();
    generateMeteors();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDuration: `${star.animationDuration}s`,
            opacity: star.opacity,
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: `${meteor.size}px`,
            height: `${meteor.size}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDuration: `${meteor.animationDuration}s`,
            animationDelay: `${meteor.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default StarBackground;
