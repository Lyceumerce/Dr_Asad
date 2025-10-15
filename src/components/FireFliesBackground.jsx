"use client";
import React, { useEffect, useState } from "react";

const createStar = () => {
  const size = Math.random() * 3 + 2; // Random size between 2-5px
  const colors = [
    'rgba(0, 217, 255, 0.8)',   // Cyan
    'rgba(157, 78, 221, 0.8)',  // Purple
    'rgba(199, 125, 255, 0.8)', // Light Purple
    'rgba(0, 153, 255, 0.8)',   // Blue
  ];

  return {
    id: Math.random(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 8 + 6}s`,
    size: `${size}px`,
    color: colors[Math.floor(Math.random() * colors.length)],
    delay: `${Math.random() * 5}s`,
  };
};

const FireFliesBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const addStarPeriodically = () => {
      const newStar = createStar();
      setStars((currentStars) => [
        ...currentStars.slice(-20), // Increased from 14 to 20 for more stars
        newStar,
      ]);
    };

    const interval = setInterval(addStarPeriodically, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {stars.map((star) => {
        return (
          <div
            key={star.id}
            className="absolute rounded-full bg-firefly-radial"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animation: `move ${star.animationDuration} infinite alternate`,
              animationDelay: star.delay,
              boxShadow: `0 0 ${parseInt(star.size) * 2}px ${star.color}, 0 0 ${parseInt(star.size) * 4}px ${star.color}`,
              backgroundColor: star.color,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default FireFliesBackground;
