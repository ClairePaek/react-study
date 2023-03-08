import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';

export default function AppCounter() {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="container">
      <div className="banner">
        Total Count: {count} {count > 10 ? '🔥' : '❄️'}
      </div>
      <div className="counters">
        <Counter totalCount={count} onClick={onClick} />
        <Counter totalCount={count} onClick={onClick} />
      </div>
    </div>
  );
}
