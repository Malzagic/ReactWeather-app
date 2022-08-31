import React from 'react';
import { WiThermometerExterior } from 'react-icons/wi';

function TempMax({tempMax}) {
  return (
    <div className='col-sm-6 col-md-4 col-lg-2 mt-0 mt-md-2 mt-lg-5 px-0 px-md-1 px-lg-2'>
      <div className="card">
        <div className="container text-center">
          <h4 className="card-title mt-2">Temp max</h4>
          <div className="card-body p-0 d-flex align-items-center justify-content-center">
            <div className="card-text fs-1 fw-bold">
              {tempMax}
              <WiThermometerExterior className='w-25 h-25'/> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TempMax
