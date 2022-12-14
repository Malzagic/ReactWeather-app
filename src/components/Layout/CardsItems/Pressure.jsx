import React from 'react';
import { WiBarometer } from 'react-icons/wi'

function Pressure({pressure}) {
  return (
    <div className='col-sm-6 col-md-4 col-lg-2 mt-0 mt-md-2 mt-lg-5 px-0 px-md-1 px-lg-2'>
      <div className="card">
        <div className="container text-center">
          <h4 className="card-title mt-2">Pressure</h4>
          <div className="card-body p-0 d-flex align-items-center justify-content-center">
            <div className="card-text fs-1 fw-bold">
              <div>
                <WiBarometer className='w-50 h-50'/> 
              </div>
              {pressure}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pressure
