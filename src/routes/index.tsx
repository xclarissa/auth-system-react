import { Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Profile from '../components/Profile';
import { PrivateRoute } from './PrivateRoute';

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
           <Profile />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
