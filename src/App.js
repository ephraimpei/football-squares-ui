import React from 'react';
import './App.css';

const createColumn = (name, idx) => (
  <div key={`${name}_${idx}`} className="col name">
    { name }
  </div>
);

const createRow = (row, idx) => (
  <div key={`Row_${idx}`} className="row name">
    { row.map(createColumn) }
  </div>
);

const numbers = [0,1,2,3,4,5,6,7,8,9];

const insertNumbers = (data) => {
  const dataCopy = data.slice();
  const numbersCopy = numbers.slice();

  numbersCopy.forEach((number, idx) => dataCopy[idx].unshift(number));
  numbersCopy.unshift('');
  dataCopy.unshift(numbersCopy);

  return dataCopy;
};

const App = ({ data }) => {
  return (
    <main className="container">
      {insertNumbers(data).map(createRow)}
    </main>
  );
};

export default App;
