import React from 'react';

const TypingPrompt = ({ text, userInput, currentIndex }) => {
  return (
    <div className="typing-prompt">
      <h2>Type the text below:</h2>
      <div className="paragraph-display">
        {text.split('').map((char, index) => {
          let className = 'char';
          
          if (index < userInput.length) {
            if (userInput[index] === char) {
              className += ' correct';
            } else {
              className += ' incorrect';
            }
          } else if (index === currentIndex) {
            className += ' current';
          }
          
          return (
            <span key={index} className={className}>
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default TypingPrompt;