import React from 'react';

const Timer = ({ timeLeft, isActive }) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimerClass = () => {
    if (timeLeft <= 10) return 'timer critical';
    if (timeLeft <= 30) return 'timer warning';
    return 'timer';
  };

  return (
    <div className={getTimerClass()}>
      <div className="timer-icon">⏱️</div>
      <div className="timer-display">
        <span className="timer-label">Time</span>
        <span className="timer-value">{formatTime(timeLeft)}</span>
      </div>
    </div>
  );
};

export default Timer;