import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data);
  return <main>
    <section className='container'>
      <h3>Questions and Answers about login</h3>
      <div>
        {questions.map((question) => <SingleQuestion question={question} key={question.id}/>)}
      </div>
    </section>
  </main>
}

export default App;
