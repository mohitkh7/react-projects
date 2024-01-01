import React from 'react';

const List = ({people}) => {
  return (
    <>
    {people.map((person) => {
      return (
        <article className='person' key={person.id}>
          <img className='img' src={person.image} alt={person.name}></img>
          <div>
            <h4>{person.name}</h4>
            <p>{person.age} years</p>
          </div>
        </article>
      );
    })}
    </>
  );
};

export default List;
