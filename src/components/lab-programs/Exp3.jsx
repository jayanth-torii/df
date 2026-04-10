import React, { useState } from 'react';

const Exp3 = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = () => setCount(prev => prev + step);
  const decrement = () => setCount(prev => Math.max(0, prev - step));
  const reset = () => setCount(0);

  return (
    <div>
      <h2>Experiment 3: Counter Application</h2>

      <p>
        State management with useState — increment, decrement, reset with custom step
      </p>

      <div>
        <h1>Counter: {count}</h1>
      </div>

      <div>
        <label>Step:</label>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value) || 1)}
          min={1}
        />
      </div>

      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>

      <h3>Minimum value should be 0</h3>
    </div>
  );
};

export default Exp3;