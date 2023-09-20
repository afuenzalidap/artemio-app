import React from 'react'

export const TitleGrid = ({Father, Child}) => {
  return (
    <div className="card bg-light-info shadow-none position-relative overflow-hidden">
        <div className='widget-content searchable-container list'>
            <div className="card-body px-4 py-3">
            <div className="row align-items-center">
                <div className="col-9">
                <h4 className="fw-semibold mb-8">{Child}</h4>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item">{Father}</li>
                    <li className="breadcrumb-item" aria-current="page">{Child}</li>
                    </ol>
                </nav>
                </div>
                <div className="col-3">
                <div className="text-center mb-n1">  
                    {/* <img src="../src/assets/images/logos/a2.png" width="100" alt="" className="img-fluid mb-n4" /> */}
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
