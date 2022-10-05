import React from 'react'; 
import Login from '../components/Login';
import { IAuthProvider } from '../contexts/AuthProvider/types';
import { useAuth } from '../contexts/AuthProvider/useAuth';

export function PrivateRoute({children}: {children: JSX.Element}) {
  const {email} = useAuth()

  return  email ? children : <Login />
}