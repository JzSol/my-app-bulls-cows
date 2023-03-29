import '../styles.css';
import { useState } from 'react';
import { WonGame } from './WonGame';

export const Main = () => {
  const [input, setInput] = useState<string>('');
  const [error, setError] = useState(false);
  const [bulls, setBulls] = useState(0);
  const [cows, setCows] = useState(0);
  const [randomDigits, setRandomDigits] = useState<string>('6420');

  const uniqueNumbers = new Set(input);

  const inputCheck =
    input.length === 4 && typeof input === 'string' && uniqueNumbers.size === 4;

  function generateRandomDigits() {
    const digits = new Set();
    while (digits.size < 4) {
      digits.add(Math.floor(Math.random() * 10));
    }
    return Array.from(digits).join('');
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBulls(0);
    setCows(0);

    input
      // const { bulls, cows } = input
      .split('')
      .reduce<{ bulls: number; cows: number }>(
        (count, digit, index) => {
          if (digit === randomDigits[index]) {
            setBulls((prevBulls) => prevBulls + 1);
          } else if (randomDigits.includes(digit)) {
            setCows((prevCows) => prevCows + 1);
          }
          return count;
        },
        { bulls: 0, cows: 0 }
      );

    if (inputCheck) {
      console.log(input, randomDigits);
      setError(false);
    } else {
      setError(true);
    }
    setInput('');
  };

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    setBulls(0);
    setCows(0);
    setInput('');
    setRandomDigits(generateRandomDigits());
    setError(false);
  };

  return (
    <div>
      <div className="container">
        <input
          className="input is-primary is-medium ml-3 input-container"
          type="text"
          placeholder="Write 4 numbers"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="container">
        <button
          className="button is-dark m-4 is-rounded "
          onClick={handleSubmit}
        >
          Click me
        </button>

        <button
          className="button is-light m-4 is-rounded"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      {error && (
        <p className="has-text-danger title is-3 container textWarning">
          Please enter correct numbers ( each number must be unique )
        </p>
      )}
      <div className="container">
        <div className="title 3 result">bulls: {bulls}</div>

        <div className="title 3 result">cows: {cows}</div>
      </div>

      {bulls === 4 && <WonGame />}
    </div>
  );
};
