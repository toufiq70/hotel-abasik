import React, { useState } from 'react';

function TimeCalculator() {
  const [time, setTime] = useState('0:00');
  const [input, setInput] = useState('');

  const handleNumberClick = (num) => {
    if (input === '' && num === '0') {
      return;
    }

    setInput(input + num);
  }

  const handleBackspaceClick = () => {
    setInput(input.slice(0, -1));
  }

  const handleClearClick = () => {
    setInput('');
    setTime('0:00');
  }

  const handleColonClick = () => {
    if (input.includes(':')) {
      return;
    }

    setInput(input + ':');
  }

  const handleCalculateClick = () => {
    const timeArray = time.split(':');
    let hours = parseInt(timeArray[0]);
    let minutes = parseInt(timeArray[1]);

    const inputArray = input.split(':');
    let inputHours = parseInt(inputArray[0]) || 0;
    let inputMinutes = parseInt(inputArray[1]) || 0;

    minutes += inputMinutes;
    hours += inputHours + Math.floor(minutes / 60);
    minutes %= 60;

    setTime(`${hours}:${minutes.toString().padStart(2, '0')}`);
    setInput('');
  }

  return (
    <div className="time-calculator">
      <h1>Time Calculator</h1>
      <div className="display">{time}</div>
      <div className="input">{input}</div>
      <div className="buttons">
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={handleColonClick}>:</button>
        <button onClick={handleBackspaceClick}>C</button>
        <button onClick={handleClearClick}>AC</button>
        <button onClick={handleCalculateClick}>=</button>
      </div>
    </div>
  );
}

export default TimeCalculator;
