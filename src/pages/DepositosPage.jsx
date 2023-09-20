import React, { useState, useEffect } from 'react'
import { TitleGrid } from '../components/TitleGrid'
import { NavLink } from 'react-router-dom'
import { DepositosList } from '../localdb/data';

export const DepositosPage = () => {

  const [depositos, setDepositos] = useState([]);

  useEffect(() => {
    setDepositos(DepositosList);
  }, []);

  return (
    <>
      <TitleGrid Father='Mantenedores' Child='Depositos' />

      <div className="card card-body">
        <div className="row">
          <div className="col-md-4 col-xl-3">
            <form className="position-relative">
              <input type="text" className="form-control product-search ps-5" id="input-search" placeholder="Buscar" />
              <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3"></i>
            </form>
          </div>
          <div className="col-md-8 col-xl-9 text-end d-flex justify-content-md-end justify-content-center mt-3 mt-md-0">
            <NavLink id="btn-add-contact" 
                     className="btn btn-info d-flex align-items-center"
                     to="/temporada/0">
              <i className="ti ti-circle-plus text-white me-1 fs-5"></i> Agregar
            </NavLink>
          </div>
        </div>
      </div>

      <div className="card w-100 position-relative overflow-hidden">
        <div className="card-body p-4">
          <div className="table-responsive rounded-2 mb-4">
          <table className="table border text-nowrap customize-table mb-0 align-middle">
            <thead className="text-dark fs-4">
              <tr>
                <th>Id</th>
                <th>Deposito</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { 
                depositos.map(({DepositoId, Deposito}) => {
                  return (<tr key={DepositoId}>
                    <td><p className="mb-0 fw-normal">{DepositoId}</p></td>
                    <td><p className="mb-0 fw-normal">{Deposito}</p></td>
                    <td>
                      <div className="dropdown dropstart">
                        <a href="#" className="text-muted" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="ti ti-dots-vertical fs-6"></i>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <li>
                            <NavLink className="dropdown-item d-flex align-items-center gap-3" to={ `/temporada/${DepositoId}` }>
                              <i className="fs-4 ti ti-edit"></i>Editar
                            </NavLink>
                          </li>
                          <li>
                            <a className="dropdown-item d-flex align-items-center gap-3" href="#"><i className="fs-4 ti ti-trash"></i>Eliminar</a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>);
                }
              )}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </>
  )
}
