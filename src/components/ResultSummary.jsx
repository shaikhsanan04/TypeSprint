import React from 'react';

const ResultSummary = ({ 
  wpm, 
  accuracy, 
  correctWords, 
  totalWords, 
  mistakes, 
  onRestart 
}) => {
  const getPerformanceLevel = (wpm) => {
    if (wpm >= 70) return { emoji: '🥇', level: 'Expert', color: '#FFD700' };
    if (wpm >= 50) return { emoji: '🥈', level: 'Advanced', color: '#C0C0C0' };
    if (wpm >= 30) return { emoji: '🥉', level: 'Intermediate', color: '#CD7F32' };
    return { emoji: '📚', level: 'Beginner', color: '#4F46E5' };
  };

  const performance = getPerformanceLevel(wpm);

  return (
    <div className="result-overlay">
      <div className="result-summary">
        <div className="result-header">
          <div className="performance-badge" style={{ color: performance.color }}>
            <span className="performance-emoji">{performance.emoji}</span>
            <h2>Test Complete!</h2>
            <p className="performance-level">{performance.level} Level</p>
          </div>
        </div>
        
        <div className="result-stats">
          <div className="result-stat primary">
            <span className="result-label">Words Per Minute</span>
            <span className="result-value main">{Math.round(wpm)}</span>
          </div>
          
          <div className="result-grid">
            <div className="result-stat">
              <span className="result-label">Accuracy</span>
              <span className="result-value">{Math.round(accuracy)}%</span>
            </div>
            
            <div className="result-stat">
              <span className="result-label">Correct Words</span>
              <span className="result-value">{correctWords}</span>
            </div>
            
            <div className="result-stat">
              <span className="result-label">Total Words</span>
              <span className="result-value">{totalWords}</span>
            </div>
            
            <div className="result-stat">
              <span className="result-label">Mistakes</span>
              <span className="result-value error">{mistakes}</span>
            </div>
          </div>
        </div>
        
        <button className="restart-button" onClick={onRestart}>
          🔁 Try Again
        </button>
      </div>
    </div>
  );
};

export default ResultSummary;