import React from 'react';
import spinner from '../../assets/spinner.gif';

function Spinner() {
  return (
    <div className='container'>
      <div className="row w-50 mx-auto">
        <figure>
          <img className="img-fluid" src={spinner} alt="loading..." />
        </figure>
      </div>
    </div>
  )
}

export default Spinner;
