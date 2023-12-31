import {
    BrowserRouter,
    Routes,
    Route,
  } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { LoginPage } from '../pages/LoginPage';
import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {


    return (
        <BrowserRouter>
            <Routes>
                
                <Route path="/login" element={ 
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                 } />
                
                <Route path="/*" element={
                    <PrivateRoute>
                        <DashboardRoutes />
                    </PrivateRoute>
                } />

            </Routes>
        </BrowserRouter>
    )
}
