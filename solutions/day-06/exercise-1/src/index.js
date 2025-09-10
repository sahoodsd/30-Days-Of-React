import React from 'react';
import ReactDOM from 'react-dom/client';

// Prime check helper
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Grids component
const Grids = ({ row, column }) => {
  const total = row * column;
  const numbers = Array.from({ length: total }, (_, i) => i);

  return numbers.map((num) => {
    let className = num % 2 === 0 ? 'even' : 'odd';
    if (isPrime(num)) className = 'prime';

    return (
      <div key={num} className={`number-box ${className}`}>
        {num}
      </div>
    );
  });
};

const App = () => {
  return (
    <div>
      <h1>30 Days Of React</h1>
      <h2>Number Generator</h2>
      <div className="number-grid">
        <Grids row={8} column={4} />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
