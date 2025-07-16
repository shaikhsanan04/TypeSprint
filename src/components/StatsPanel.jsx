import React from 'react';

const StatsPanel = ({ wpm, accuracy, wordsTyped, timeLeft, isActive }) => {
  return (
    <div className="stats-panel">
      <div className="stat-item">
        <div className="stat-icon">🧠</div>
        <div className="stat-content">
          <span className="stat-label">WPM</span>
          <span className="stat-value">{Math.round(wpm)}</span>
        </div>
      </div>
      
      <div className="stat-item">
        <div className="stat-icon">✅</div>
        <div className="stat-content">
          <span className="stat-label">Accuracy</span>
          <span className="stat-value">{Math.round(accuracy)}%</span>
        </div>
      </div>
      
      <div className="stat-item">
        <div className="stat-icon">📝</div>
        <div className="stat-content">
          <span className="stat-label">Words</span>
          <span className="stat-value">{wordsTyped}</span>
        </div>
      </div>
      
      <div className="stat-item timer-stat">
        <div className="stat-icon">⏱️</div>
        <div className="stat-content">
          <span className="stat-label">Time</span>
          <span className={`stat-value ${timeLeft <= 10 ? 'critical' : timeLeft <= 30 ? 'warning' : ''}`}>
            {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;