import React, { useState, useEffect, useCallback } from 'react';
import { getRandomParagraph } from './data/paragraphs';
import TypingPrompt from './components/TypingPrompt.jsx';
import TypingInput from './components/TypingInput.jsx';
import StatsPanel from './components/StatsPanel.jsx';
import ResultSummary from './components/ResultSummary.jsx';
import SocialLinks from './components/SocialLinks.jsx';
import DarkModeToggle from './components/DarkModeToggle.jsx';
import './App.css';

const TIMER_DURATION = 60; // seconds

function App() {
  const [currentParagraph, setCurrentParagraph] = useState('');
  const [userInput, setUserInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  const [isActive, setIsActive] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  // Apply dark mode class to body
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : '';
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Initialize with a random paragraph
  useEffect(() => {
    setCurrentParagraph(getRandomParagraph());
  }, []);

  // Timer logic
  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      setShowResults(true);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  // Calculate statistics
  const calculateStats = useCallback(() => {
    if (!hasStarted || userInput.length === 0) {
      return {
        wpm: 0,
        accuracy: 100,
        wordsTyped: 0,
        correctChars: 0,
        totalChars: userInput.length,
        mistakes: 0
      };
    }

    const correctChars = userInput.split('').reduce((acc, char, index) => {
      return char === currentParagraph[index] ? acc + 1 : acc;
    }, 0);

    const totalChars = userInput.length;
    const accuracy = totalChars > 0 ? (correctChars / totalChars) * 100 : 100;
    
    const elapsedTime = (TIMER_DURATION - timeLeft) / 60; // in minutes
    const wordsTyped = Math.floor(userInput.length / 5); // Standard: 5 chars = 1 word
    const wpm = elapsedTime > 0 ? (correctChars / 5) / elapsedTime : 0;
    
    const mistakes = totalChars - correctChars;

    return {
      wpm,
      accuracy,
      wordsTyped,
      correctChars,
      totalChars,
      mistakes
    };
  }, [userInput, currentParagraph, timeLeft, hasStarted]);

  const stats = calculateStats();

  const calculateFinalStats = () => {
    const correctChars = userInput.split('').reduce((acc, char, index) => {
      return char === currentParagraph[index] ? acc + 1 : acc;
    }, 0);

    const totalChars = userInput.length;
    const accuracy = totalChars > 0 ? (correctChars / totalChars) * 100 : 100;
    
    const elapsedTime = TIMER_DURATION / 60; // Full duration
    const wpm = (correctChars / 5) / elapsedTime;
    
    const words = userInput.trim().split(/\s+/).filter(word => word.length > 0);
    const correctWords = words.reduce((acc, word, index) => {
      const paragraphWords = currentParagraph.trim().split(/\s+/);
      return word === paragraphWords[index] ? acc + 1 : acc;
    }, 0);
    
    const mistakes = totalChars - correctChars;

    return {
      wpm,
      accuracy,
      correctWords,
      totalWords: words.length,
      mistakes
    };
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    
    // Prevent typing beyond the paragraph length
    if (value.length > currentParagraph.length) {
      return;
    }

    setUserInput(value);

    // Start timer on first character
    if (!hasStarted && value.length === 1) {
      setHasStarted(true);
      setIsActive(true);
      setStartTime(Date.now());
    }

    // Check if paragraph is completed
    if (value === currentParagraph) {
      setIsActive(false);
      setShowResults(true);
    }
  };

  const handleKeyDown = (e) => {
    // Prevent certain keys when timer is up
    if (timeLeft === 0 && e.key !== 'Tab') {
      e.preventDefault();
    }
  };

  const handleRestart = () => {
    setCurrentParagraph(getRandomParagraph());
    setUserInput('');
    setTimeLeft(TIMER_DURATION);
    setIsActive(false);
    setHasStarted(false);
    setShowResults(false);
    setStartTime(null);
  };

  const getCurrentIndex = () => {
    return userInput.length;
  };

  return (
    <div className="app">
      <header className="app-header">
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <h1 className="app-title">
          <span className="title-icon">⚡</span>
          TypeSprint
        </h1>
        <p className="app-subtitle">The Ultimate Typing Speed Challenge</p>
      </header>

      <main className="app-main">
        <TypingPrompt 
          text={currentParagraph}
          userInput={userInput}
          currentIndex={getCurrentIndex()}
        />

        <TypingInput
          value={userInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          disabled={timeLeft === 0 || showResults}
          placeholder={hasStarted ? "" : "Start typing to begin the challenge..."}
        />

        <StatsPanel
          wpm={stats.wpm}
          accuracy={stats.accuracy}
          wordsTyped={stats.wordsTyped}
          timeLeft={timeLeft}
          isActive={isActive}
        />

        <div className="restart-section">
          <button 
            className="restart-button-main" 
            onClick={handleRestart}
            disabled={!hasStarted && timeLeft === TIMER_DURATION}
          >
            🔁 Restart Challenge
          </button>
        </div>
      </main>

      {showResults && (
        <ResultSummary
          {...calculateFinalStats()}
          onRestart={handleRestart}
        />
      )}
      
      <SocialLinks />
    </div>
  );
}

export default App;