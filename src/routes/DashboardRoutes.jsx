import { Routes, Route } from 'react-router-dom';

import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { CiudadesPage } from '../pages/CiudadesPage';
import { ClientesPage } from '../pages/ClientesPage';
import { DepositosPage } from '../pages/DepositosPage';
import { EspeciesPage } from '../pages/EspeciesPage';
import { NavesPage } from '../pages/NavesPage';
import { NavierasPage } from '../pages/NavierasPage';
import { PaisesPage } from '../pages/PaisesPage';
import { ReservasPage } from '../pages/ReservasPage';
import { TemporadasPage } from '../pages/TemporadasPage';
import { UsuariosPage } from '../pages/UsuariosPage';
import { TemporadaPage } from '../pages/TemporadaPage';
import { ReservaPage } from '../pages/ReservaPage';
import { IncotermsPage } from '../pages/IncotermsPage';

export const DashboardRoutes = () => {
    return (
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
            <Sidebar />
            <div className="body-wrapper">
                <Header />

                <div className="container-fluid">
                    <Routes>
                        <Route path='/' element={ <ReservasPage /> } />
                        <Route path='/ciudades' element={ <CiudadesPage /> } />
                        <Route path='/clientes' element={ <ClientesPage /> } />
                        <Route path='/depositos' element={ <DepositosPage /> } />
                        <Route path='/especies' element={ <EspeciesPage /> } />
                        <Route path='/naves' element={ <NavesPage /> } />
                        <Route path='/navieras' element={ <NavierasPage /> } />
                        <Route path='/paises' element={ <PaisesPage /> } />
                        <Route path='/reservas' element={ <ReservasPage /> } />
                        <Route path='/reserva/:id' element={ <ReservaPage /> } />
                        <Route path='/temporadas' element={ <TemporadasPage /> } />
                        <Route path='/temporada/:id' element={ <TemporadaPage /> } />
                        <Route path='/usuarios' element={ <UsuariosPage /> } />
                        <Route path='/incoterms' element={ <IncotermsPage /> } />
                    </Routes>
                </div>
            </div>
        </div>
    )
}
