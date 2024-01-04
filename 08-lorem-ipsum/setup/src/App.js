import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount < 0) {
      amount = 0;
    }
    if (amount > 10) {
      amount = 10;
    }
    setText(data.slice(0, amount));
  }

  return <main>
    <div className='section-center'>
      <h3>Tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs</label>
        <input type='number' name='amount' id='amount' value={count} onChange={(e) => setCount(e.target.value)}></input>
        <button className='btn'>Generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => <p key={index}>{item}</p>)}
      </article>
    </div>
  </main>
}

export default App;
