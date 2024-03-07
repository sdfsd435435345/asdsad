
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetTime, onEnd }) => {
  const calculateTimeLeft = () => {
    const difference = targetTime - new Date().getTime();
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    return { minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      const time = calculateTimeLeft();
      setTimeLeft(time);

      if (time.minutes === 0 && time.seconds === 0) {
        clearInterval(interval);
        onEnd();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime, onEnd]);

  return (
    <div>
      <div>{`${timeLeft.minutes}:${timeLeft.seconds}`}</div>
    </div>
  );
};

export default CountdownTimer;