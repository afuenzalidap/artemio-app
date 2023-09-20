import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import {types} from '../types/types';
import artemioApi from '../api/artemioApi';

export const LoginPage = () => {
  const { dispatch } = useContext( AuthContext );
  const navigate = useNavigate();


  const handleLogin = async () => {

    /*
    const p = await artemioApi.post("/login",{
      Usuario: 'afuenzalida',
      Contrasena: '123456'
    });
    
    console.log(p);
    */

    const lastPath = localStorage.getItem('lastPath') || '/';
    
    dispatch({
      type: types.login,
      payload: {
          name: 'Alexis'
      }
    });

    navigate( lastPath );
      
  }
  
  return (
    <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
      <div className="d-flex align-items-center justify-content-center w-100">
        <div className="row justify-content-center w-100">
          <div className="col-md-8 col-lg-6 col-xxl-3">
            <div className="card mb-0">
              <div className="card-body">
                <a href="./index.html" className="text-nowrap logo-img text-center d-block py-3 w-100">
                  {/* <img src="../src/assets/images/logos/dark-logo.svg" width="180" alt="" /> */}
                  <img src="../src/assets/images/logos/artemio.png" width="180" alt="" />
                </a>
                {/* <p className="text-center">Artemio Servicios SPA</p> */}
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Usuario</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="form-check">
                      <input className="form-check-input primary" type="checkbox" value="" id="flexCheckChecked" />
                      <label className="form-check-label text-dark" htmlFor="flexCheckChecked">
                        Recordarme
                      </label>
                    </div>
                  </div>
                  <button onClick={handleLogin} href="./index.html" className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">Iniciar Sesión</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
