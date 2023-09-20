import React, { useState, useEffect } from 'react'
import { ReservasList } from '../localdb/data';
import { NavLink } from 'react-router-dom';
import { TitleGrid } from '../components/TitleGrid';

export const ReservasPage = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    setReservas(ReservasList);
  }, []);

  return (
    <>
      <TitleGrid Father='Home' Child='Reservas' />

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
                     to="/reserva/0">
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
                  <th><h6 className="fs-4 fw-semibold mb-0">Booking</h6></th>
                  <th><h6 className="fs-4 fw-semibold mb-0">Request</h6></th>
                  <th><h6 className="fs-4 fw-semibold mb-0">Vessel</h6></th>
                  <th><h6 className="fs-4 fw-semibold mb-0">Voyage</h6></th>
                  <th><h6 className="fs-4 fw-semibold mb-0">Agent</h6></th>
                  <th><h6 className="fs-4 fw-semibold mb-0">TransportCo</h6></th>
                  <th><h6 className="fs-4 fw-semibold mb-0">Exporter</h6></th>
                  <th><h6 className="fs-4 fw-semibold mb-0">Commodity</h6></th>
                  <th><h6 className="fs-4 fw-semibold mb-0">Status</h6></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                { 
                  reservas.map(({ReservaId, Booking,Request,Vessel,Voyage,Agent,TransportCo,Exporter,Commodity, Status}, index) => {
                    const { Estado, Color} = Status;

                    return (<tr key={index}>
                      <td><p className="mb-0 fw-normal">{Booking}</p></td>
                      <td><p className="mb-0 fw-normal">{Request}</p></td>
                      <td><p className="mb-0 fw-normal">{Vessel}</p></td>
                      <td><p className="mb-0 fw-normal">{Voyage}</p></td>
                      <td><p className="mb-0 fw-normal">{Agent}</p></td>
                      <td><p className="mb-0 fw-normal">{TransportCo}</p></td>
                      <td><p className="mb-0 fw-normal">{Exporter}</p></td>
                      <td><p className="mb-0 fw-normal">{Commodity}</p></td>
                      <td><span className={`badge bg-light-${Color} rounded-3 py-8 text-${Color} fw-semibold fs-2`}>{Estado}</span></td>
                      <td>
                        <div className="dropdown dropstart">
                          <a href="#" className="text-muted" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="ti ti-dots-vertical fs-6"></i>
                          </a>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li>
                              <NavLink className="dropdown-item d-flex align-items-center gap-3" to={ `/reserva/${ReservaId}` }>
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
