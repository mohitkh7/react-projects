import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({question}) => {
  const [hidden, setHidden] = useState(true);

  return <div className='question'>
    <header>
      <h4>{question.title}</h4>
      <button className='btn' onClick={() => setHidden(!hidden)}>
        {hidden ? <AiOutlinePlus /> : <AiOutlineMinus />}
      </button>
    </header>
    {hidden ? '' : <p>{question.info}</p>}
  </div>;
};

export default Question;
