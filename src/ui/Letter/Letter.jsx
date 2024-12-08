 
import React from 'react';
import  './Letter.module.scss'

const Letter = ({ letter }) => {
  return (
    <div>
      <div className='letter'>{letter}</div>
    </div>
  );
};

export default Letter;
