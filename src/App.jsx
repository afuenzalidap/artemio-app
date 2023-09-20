import { useReducer, useEffect } from 'react';
import { AppRouter } from './routes/AppRouter';
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

function App() {

  const [ user, dispatch ] = useReducer(authReducer, {}, init);

    useEffect(() => {
        localStorage.setItem( 'user', JSON.stringify(user) );
    }, [user])

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}

export default App
