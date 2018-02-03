import React, { Component } from 'react';
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

const API_URL = 'https://generate-boxes.herokuapp.com/api';

class App extends Component {
  state = { data: [] };

  componentWillMount() {
    this.regenerateSquares();
  }

  regenerateSquares = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;

    return (
      <main>
        <section className="container">
          {
            data.length > 0 &&
            insertNumbers(data).map(createRow)
          }
          <div className="wrapper">
            <button className="regenerate" onClick={this.regenerateSquares}>Regenerate</button>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
