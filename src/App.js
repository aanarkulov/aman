import React from 'react';
import './App.css';


const getDividers = (n) => {
  const arr = [];
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr;
};


function App() {
  const [number, setNumber] = React.useState('');
  const [result, setResult] = React.useState(null);

  const getResult = (n) => {
    const dividersN = getDividers(n)
    const nod = [];
    for (let i = 1; i < n; i += 1) {
      const nodInner = getDividers(i).filter((item) => dividersN.includes(item));
      if (nodInner.length === 1) {
        nod.push(i);
      }
    }
    setResult(nod.join(' '));
  };

  const onChange = ({ target: { value }}) => {
    if (value) {
      setNumber(Math.abs(value))
    } else {
      setNumber(value);
    }
  };

  return (
    <div className="App">
      <p>Введите натуральное число N</p>
      <input type="number" placeholder="N" onChange={onChange} value={number} />
      <button onClick={() => getResult(number)}>Получить все натуральные числа меньше N и взаимно простые с ним</button>
      {result && <span>{result}</span>}
    </div>
  );
}

export default App;
