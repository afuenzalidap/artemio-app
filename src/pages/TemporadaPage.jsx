import React from 'react'
import { useForm } from '../hooks/useForm'
import { useParams } from 'react-router-dom';
import { TitleGrid } from '../components/TitleGrid';

export const TemporadaPage = () => {

    const { id } = useParams();

    const [ formValues, handleInputChange ] = useForm({
        temporadaId: id,
        temporada: ''
    });

    const { temporadaId, temporada } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({temporadaId, temporada});
        //navigate(`?q=${ searchText }`);
    }

    
    return (
        <>
            <TitleGrid Father='Mantenedores' Child='Temporadas' />

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-12 col-lg-12">
                        <div className="form-group mb-3 row">
                            <label htmlFor="temporada" className="form-label fw-semibold col-sm-3 col-form-label">Temporada</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <input 
                                        id="temporada" 
                                        className="form-control" 
                                        type="text"
                                        value={temporada}
                                        onChange={handleInputChange}  />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="d-sm-flex align-items-center justify-content-end gap-3 pt-8 mb-7">
                        <button className="btn d-block btn-primary px-5 py-8 mb-2 mb-sm-0">Save</button>
                        <button  className="btn d-block btn-danger px-7 py-8">Cancel</button>
                    </div>
                </div>
            </form>
        </>
    );
}
