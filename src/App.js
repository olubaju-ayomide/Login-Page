
import React from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoutes';
 
function App() {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold'>
        Firebase Auth & Context
      </h1>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Account'element={<ProtectedRoute>
              <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}
 
export default App;