import React from 'react';
import spinner from '../assets/spinner.gif'

function Spinner() {
  return (
    <div className='container'>
      <figure>
        <img src={spinner} alt="loading..." />
      </figure>
    </div>
  )
}

export default Spinner
