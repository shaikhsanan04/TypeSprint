import React from 'react';

const TypingInput = ({ 
  value, 
  onChange, 
  onKeyDown, 
  disabled, 
  placeholder 
}) => {
  return (
    <div className="typing-input-container">
      <textarea
        className="typing-input"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        disabled={disabled}
        placeholder={placeholder}
        onPaste={(e) => e.preventDefault()}
        onCopy={(e) => e.preventDefault()}
        onCut={(e) => e.preventDefault()}
        autoFocus
        spellCheck={false}
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
      />
    </div>
  );
};

export default TypingInput;