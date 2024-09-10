import React, { useState, useEffect, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0); // Time in milliseconds
  const [isRunning, setIsRunning] = useState(false); // To track whether the stopwatch is running
  const intervalRef = useRef(null); // To store the interval ID

  // Start the stopwatch
  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1); // Increment time every millisecond
      }, 10); // Updating every 10 milliseconds for a more responsive UI
    }
  };

  // Stop the stopwatch
  const handleStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  // Reset the stopwatch
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  // Clean up the interval on component unmount
  // This useEffect ensures that when the component unmounts, any active intervals are cleared, preventing memory leaks and unexpected behavior
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  // Formatting time into minutes, seconds, and milliseconds
  const formatTime = () => {
    const minutes = Math.floor(time / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>{formatTime()}</h2>
      <button onClick={handleStart} disabled={isRunning}>Start</button>
      <button onClick={handleStop} disabled={!isRunning}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
