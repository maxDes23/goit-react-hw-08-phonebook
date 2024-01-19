import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from 'hooks';

export const RestrictedRoute = ({ element: Element, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Route element={isLoggedIn ? <Navigate to={redirectTo} /> : <Element />} />
  );
};
