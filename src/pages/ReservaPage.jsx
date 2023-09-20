import React, { useState, useEffect} from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';

import { TitleGrid } from '../components/TitleGrid';
import { ReservaDtlList } from '../localdb/data';

export const ReservaPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [reservaDtl, setReservaDtl] = useState([]);

    /*
    useEffect(() => {
      setReservaDtl(ReservaDtlList);
    }, [reservaDtl]);
    */

    const AddRow = (e) => {
        e.preventDefault();

        const rowsInput={
            Container:'',
            Bl:''
        } 

        setReservaDtl([...reservaDtl, rowsInput])
    }
    
    const DeleteRow = (index) => {

        console.log(index);

        const rows = [...reservaDtl];
        rows.splice(index, 1);

        setReservaDtl(rows);
    }
    /* const [ formValues, handleInputChange ] = useForm({
        temporadaId: id,
        temporada: ''
    });

    const { temporadaId, temporada } = formValues; */

    const handleSubmit = (e) => {
        e.preventDefault();

        //console.log({temporadaId, temporada});
        //navigate(`?q=${ searchText }`);
    }

    const handleClose = (e) => {
        e.preventDefault();

        navigate(-1);
    }

    
    return (
        <>
            <TitleGrid Father='Home' Child='Reservas' />

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="cmbStatusBl" className="form-label fw-semibold col-sm-3 col-form-label">Status BL</label>
                            <div className="col-sm-9">
                                <select id="cmbStatusBl" className="form-select" aria-label="Default select example">
                                    <option value="1">Solicitado</option>
                                    <option value="2">Recepcionado</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtFechaSolicitudBooking" className="form-label fw-semibold col-sm-3 col-form-label">Solicitud Booking</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <input id="txtFechaSolicitudBooking" className="form-control" type="date" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtFechaEnvioBooking" className="form-label fw-semibold col-sm-3 col-form-label">Envio Booking</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <input id="txtFechaEnvioBooking" className="form-control" type="date" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtFechaSubidaBooking" className="form-label fw-semibold col-sm-3 col-form-label">Subir Sit Bulbos</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <input id="txtFechaSubidaBooking" className="form-control" type="date" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="cmbEstadoBooking" className="form-label fw-semibold col-sm-3 col-form-label">Estado Booking</label>
                            <div className="col-sm-9">
                                <select id="cmbEstadoBooking" className="form-select" aria-label="Default select example">
                                    <option value="1">Cancelado</option>
                                    <option value="2">Activo</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="cmbContractCo" className="form-label fw-semibold col-sm-3 col-form-label">Contract Co</label>
                            <div className="col-sm-9">
                                <select id="cmbContractCo" className="form-select" aria-label="Default select example">
                                    <option value="1">Publica</option>
                                    <option value="2">Neta</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="cmbNaviera" className="form-label fw-semibold col-sm-3 col-form-label">Naviera</label>
                            <div className="col-sm-9">
                                <select id="cmbNaviera" className="form-select" aria-label="Default select example">
                                    <option value="1">Naviera1</option>
                                    <option value="2">Naviera2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="cmbTruckArtemio" className="form-label fw-semibold col-sm-3 col-form-label">Truck Artemio</label>
                            <div className="col-sm-9">
                                <select id="cmbTruckArtemio" className="form-select" aria-label="Default select example">
                                    <option value="1">Si</option>
                                    <option value="2">No</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="cmbIntermediario" className="form-label fw-semibold col-sm-3 col-form-label">Intermediario</label>
                            <div className="col-sm-9">
                                <select id="cmbIntermedario" className="form-select" aria-label="Default select example">
                                    <option value="1">Chilfresh</option>
                                    <option value="2">Luis Añasco</option>
                                    <option value="3">Nobel</option>
                                    <option value="4">AndesBhumi</option>
                                    <option value="5">IP</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtPoRef" className="form-label fw-semibold col-sm-3 col-form-label">Po / Ref</label>
                            <div className="col-sm-9">
                                <input id="txtPoRef" type="text" className="form-control" placeholder="Po / Ref" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="cmbShipper" className="form-label fw-semibold col-sm-3 col-form-label">Shipper</label>
                            <div className="col-sm-9">
                                <select id="cmbShipper" className="form-select" aria-label="Default select example">
                                    <option value="1">CODE1-Cliente 1</option>
                                    <option value="2">CODE2-Cliente 2</option>
                                    <option value="3">CODE3-Cliente 3</option>
                                    <option value="4">CODE4-Cliente 4</option>
                                    <option value="5">CODE5-Cliente 5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="cmbServicio" className="form-label fw-semibold col-sm-3 col-form-label">Servicio</label>
                            <div className="col-sm-9">
                                <select id="cmbServicio" className="form-select" aria-label="Default select example">
                                    <option value="1">EWX</option>
                                    <option value="2">WSA</option>
                                    <option value="3">WSA3</option>
                                    <option value="4">AS2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="cmbNave" className="form-label fw-semibold col-sm-3 col-form-label">Nave</label>
                            <div className="col-sm-9">
                                <select id="cmbNave" className="form-select" aria-label="Default select example">
                                    <option value="1">Nave 1</option>
                                    <option value="2">Nave 2</option>
                                    <option value="3">Nave 3</option>
                                    <option value="4">Nave 4</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtNroSolicitudBK" className="form-label fw-semibold col-sm-3 col-form-label">Nro Solicitud BK</label>
                            <div className="col-sm-9">
                                <input id="txtNroSolicitudBK" type="text" className="form-control" placeholder="Nro Solicitud BK" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtNroBK" className="form-label fw-semibold col-sm-3 col-form-label">Nro BK</label>
                            <div className="col-sm-9">
                                <input id="txtNroBK" type="text" className="form-control" placeholder="Solicitud BK" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtAdelantoFolio" className="form-label fw-semibold col-sm-3 col-form-label">Adelanto Folio</label>
                            <div className="col-sm-9">
                                <input id="txtAdelantoFolio" type="text" className="form-control" placeholder="Adelanto Folio" />
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="cmbDeposito" className="form-label fw-semibold col-sm-3 col-form-label">Deposito</label>
                            <div className="col-sm-9">
                                <select id="cmbDeposito" className="form-select" aria-label="Default select example">
                                    <option value="1">Sitrans Curauma</option>
                                    <option value="2">Cpntopsa</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtFechaStacking" className="form-label fw-semibold col-sm-3 col-form-label">Stacking</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <input id="txtFechaStacking" className="form-control" type="datetime-local" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtLarFisico" className="form-label fw-semibold col-sm-3 col-form-label">Lar Fisico</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <input id="txtLarFisico" className="form-control" type="datetime-local" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtLarDocumental" className="form-label fw-semibold col-sm-3 col-form-label">Lar Documental</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <input id="txtLarDocumental" className="form-control" type="datetime-local" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtETD" className="form-label fw-semibold col-sm-3 col-form-label">ETD</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <input id="txtETD" className="form-control" type="date" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtETA" className="form-label fw-semibold col-sm-3 col-form-label">ETA</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <input id="txtETA" className="form-control" type="date" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtETAReal" className="form-label fw-semibold col-sm-3 col-form-label">ETA Real</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <input id="txtETAReal" className="form-control" type="date" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="cmbPOL" className="form-label fw-semibold col-sm-3 col-form-label">POL</label>
                            <div className="col-sm-9">
                                <select id="cmbPOL" className="form-select" aria-label="Default select example">
                                    <option value="1">POL1</option>
                                    <option value="2">POL2</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="cmbVia" className="form-label fw-semibold col-sm-3 col-form-label">Via</label>
                            <div className="col-sm-9">
                                <select id="cmbVia" className="form-select" aria-label="Default select example">
                                    <option value="1">Via1</option>
                                    <option value="2">Via2</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtPlaceDelivery" className="form-label fw-semibold col-sm-3 col-form-label">Place Of Delivery</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <input id="txtPlaceDelivery" className="form-control" type="text" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtQtyContainer" className="form-label fw-semibold col-sm-3 col-form-label">Qty Container</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <input id="txtQtyContainer" className="form-control" type="number" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="cmbContainerType" className="form-label fw-semibold col-sm-3 col-form-label">Container Type</label>
                            <div className="col-sm-9">
                                <select id="cmbContainerType" className="form-select" aria-label="Default select example">
                                    <option value="1">CT1</option>
                                    <option value="2">CT2</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="cmbCod" className="form-label fw-semibold col-sm-3 col-form-label">Cod</label>
                            <div className="col-sm-9">
                                <select id="cmbCod" className="form-select" aria-label="Default select example">
                                    <option value="1">Si</option>
                                    <option value="2">No</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtDus" className="form-label fw-semibold col-sm-3 col-form-label">DUS</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <input id="txtDus" className="form-control" type="text" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtColdTreatment" className="form-label fw-semibold col-sm-3 col-form-label">Cold Treatment</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <input id="txtColdTreatment" className="form-control" type="text" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="cmbCommodity" className="form-label fw-semibold col-sm-3 col-form-label">Commodity</label>
                            <div className="col-sm-9">
                                <select id="cmbCommodity" className="form-select" aria-label="Default select example">
                                    <option value="1">Comm1</option>
                                    <option value="2">Comm2</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtWeight" className="form-label fw-semibold col-sm-3 col-form-label">Weight</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <input id="txtWeight" className="form-control" type="number" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtTemp" className="form-label fw-semibold col-sm-3 col-form-label">T°</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <input id="txtTemp" className="form-control" type="number" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtCBM" className="form-label fw-semibold col-sm-3 col-form-label">CBM</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <input id="txtCBM" className="form-control" type="number" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="cmbBlIssued" className="form-label fw-semibold col-sm-3 col-form-label">Bl Issued</label>
                            <div className="col-sm-9">
                                <select id="cmbBlIssued" className="form-select" aria-label="Default select example">
                                    <option value="1">SWB</option>
                                    <option value="2">Express Release</option>
                                    <option value="3">Telex Release</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="cmbIncoterm" className="form-label fw-semibold col-sm-3 col-form-label">Incoterm</label>
                            <div className="col-sm-9">
                                <select id="cmbIncoterm" className="form-select" aria-label="Default select example">
                                    <option value="1">EXW</option>
                                    <option value="2">FOB</option>
                                    <option value="3">CRF</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="cmbPaymentCondition" className="form-label fw-semibold col-sm-3 col-form-label">Payment Condition</label>
                            <div className="col-sm-9">
                                <select id="cmbPaymentCondition" className="form-select" aria-label="Default select example">
                                    <option value="1">Collect</option>
                                    <option value="2">Prepaid</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtUSDPrepaid" className="form-label fw-semibold col-sm-3 col-form-label">USD Prepaid</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <input id="txtUSDPrepaid" className="form-control" type="number" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtUSDCollect" className="form-label fw-semibold col-sm-3 col-form-label">USD Collect</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <input id="txtUSDCollect" className="form-control" type="number" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtFDP" className="form-label fw-semibold col-sm-3 col-form-label">Free Days POD</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <input id="txtFDP" className="form-control" type="number" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtInvoiceLarFisico" className="form-label fw-semibold col-sm-3 col-form-label">Inv Lar Fisico</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <input id="txtInvoiceLarFisico" className="form-control" type="number" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtRebate" className="form-label fw-semibold col-sm-3 col-form-label">Rebate</label>
                            <div className="col-sm-9">
                                <div className="input-group">
                                    <input id="txtRebate" className="form-control" type="number" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="cmbPaymentFreightPrepaid" className="form-label fw-semibold col-sm-3 col-form-label">Pay Freight PP</label>
                            <div className="col-sm-9">
                                <select id="cmbPaymentFreightPrepaid" className="form-select" aria-label="Default select example">
                                    <option value="1">Si</option>
                                    <option value="2">No</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="cmbPaymentGastosLocales" className="form-label fw-semibold col-sm-3 col-form-label">Pay Gastos Locales</label>
                            <div className="col-sm-9">
                                <select id="cmbPaymentGastosLocales" className="form-select" aria-label="Default select example">
                                    <option value="1">Si</option>
                                    <option value="2">No</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="cmbReleaseBl" className="form-label fw-semibold col-sm-3 col-form-label">Release Bl</label>
                            <div className="col-sm-9">
                                <select id="cmbReleaseBl" className="form-select" aria-label="Default select example">
                                    <option value="1">Liberado</option>
                                    <option value="2">Pendiente</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtStatus" className="form-label fw-semibold col-sm-3 col-form-label">Status</label>
                            <div className="col-sm-9">
                                <select id="txtStatus" className="form-select" aria-label="Default select example">
                                    <option value="1">Liberado</option>
                                    <option value="2">Pendiente</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-lg-6">
                        <div className="form-group mb-3 row">
                            <label htmlFor="txtComments" className="form-label fw-semibold col-sm-3 col-form-label">Comments</label>
                            <div className="col-sm-9">
                                <textarea id="txtComments" className='form-control'></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="table-responsive rounded-2 mb-4">
                        <table className="table border text-nowrap customize-table mb-0 align-middle">
                        <thead className="text-dark fs-4">
                            <tr>
                                <th><h6 className="fs-4 fw-semibold mb-0">Container</h6></th>
                                <th><h6 className="fs-4 fw-semibold mb-0">Bl</h6></th>
                                <th>
                                    <div className="col-md-8 col-xl-9 text-end d-flex justify-content-md-end justify-content-center mt-3 mt-md-0">
                                        <button onClick={AddRow} className="btn btn-info d-flex align-items-center">
                                            <i className="ti ti-circle-plus text-white me-1 fs-5"></i> Agregar
                                        </button>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                            reservaDtl.map(({Container, Bl}, index) => {

                                return (<tr key={index}>
                                <td>
                                    <div className="col-sm-12 col-lg-12">
                                        <div className="form-group mb-3 row">
                                            <div className="col-sm-9">
                                                <div className="input-group">
                                                    <input id="txtContainer" className="form-control" type="text" placeholder='Container' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>    
                                </td>
                                <td>
                                    <div className="col-sm-12 col-lg-12">
                                        <div className="form-group mb-3 row">
                                            <div className="col-sm-9">
                                                <div className="input-group">
                                                    <input id="txtBl" className="form-control" type="text" placeholder='Bl' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>        
                                </td>
                                <td>
                                    <div className="dropdown dropstart">
                                    <a href="#" className="text-muted" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ti ti-dots-vertical fs-6"></i>
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <li>
                                            <button onClick={() => DeleteRow(index)} className="dropdown-item d-flex align-items-center gap-3"><i className="fs-4 ti ti-trash"></i>Delete</button>
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

                    <div className="d-sm-flex align-items-center justify-content-end gap-3 pt-8 mb-7">
                        <button onClick={handleClose} className="btn d-block btn-primary px-5 py-8 mb-2 mb-sm-0">Save</button>
                        <button onClick={handleClose} className="btn d-block btn-danger px-7 py-8">Cancel</button>
                    </div>
                </div>
            </form>
        </>
    );
}
