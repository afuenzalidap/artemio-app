import React from 'react';
import { TitleGrid } from '../components/TitleGrid';

export const UsuariosPage = () => {
  return (
    <>
      <TitleGrid Father='Mantenedores' Child='Usuarios' />
      <div className="card w-100 position-relative overflow-hidden">
        <div className="px-4 py-3 border-bottom">
          <h5 className="card-title fw-semibold mb-0 lh-sm">Usuarios</h5>
        </div>

        <div className="card-body p-4">
          <div className="table-responsive rounded-2 mb-4">
          <table className="table border text-nowrap customize-table mb-0 align-middle">
            <thead className="text-dark fs-4">
              <tr>
                <th><h6 className="fs-4 fw-semibold mb-0">Usuario</h6></th>
                <th><h6 className="fs-4 fw-semibold mb-0">Email</h6></th>
                <th><h6 className="fs-4 fw-semibold mb-0">Tipo</h6></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><p className="mb-0 fw-normal">1</p></td>
                <td><p className="mb-0 fw-normal">Usuario1</p></td>
                <td><p className="mb-0 fw-normal">Tipo1</p></td>
                <td>
                  <div className="dropdown dropstart">
                    <a href="#" className="text-muted" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="ti ti-dots-vertical fs-6"></i>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li>
                        <a className="dropdown-item d-flex align-items-center gap-3" href="#"><i className="fs-4 ti ti-edit"></i>Editar</a>
                      </li>
                      <li>
                        <a className="dropdown-item d-flex align-items-center gap-3" href="#"><i className="fs-4 ti ti-trash"></i>Eliminar</a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td><p className="mb-0 fw-normal">2</p></td>
                <td><p className="mb-0 fw-normal">Usuario2</p></td>
                <td><p className="mb-0 fw-normal">Tipo1</p></td>
                <td>
                  <div className="dropdown dropstart">
                    <a href="#" className="text-muted" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="ti ti-dots-vertical fs-6"></i>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li>
                        <a className="dropdown-item d-flex align-items-center gap-3" href="#"><i className="fs-4 ti ti-edit"></i>Edit</a>
                      </li>
                      <li>
                        <a className="dropdown-item d-flex align-items-center gap-3" href="#"><i className="fs-4 ti ti-trash"></i>Delete</a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
              <tr>
                <td><p className="mb-0 fw-normal">3</p></td>
                <td><p className="mb-0 fw-normal">Usuario3</p></td>
                <td><p className="mb-0 fw-normal">Tipo1</p></td>
                <td>
                  <div className="dropdown dropstart">
                    <a href="#" className="text-muted" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="ti ti-dots-vertical fs-6"></i>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li>
                        <a className="dropdown-item d-flex align-items-center gap-3" href="#"><i className="fs-4 ti ti-edit"></i>Edit</a>
                      </li>
                      <li>
                        <a className="dropdown-item d-flex align-items-center gap-3" href="#"><i className="fs-4 ti ti-trash"></i>Delete</a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </>
  )
}
