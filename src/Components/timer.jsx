import React, { useState, useEffect } from "react";

const Timer = ({ ringBell, setCurrentIndex, currentIndex }) => {
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState(15);

  useEffect(() => {
    if (seconds <= time - 1) {
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      ringBell();
      setSeconds(0);
      setCurrentIndex(currentIndex + 1);
    }
  }, [seconds]);

  return <h3 className={"text-white"}>{seconds}</h3>;
};

export default Timer;
