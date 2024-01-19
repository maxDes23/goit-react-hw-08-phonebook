import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from 'hooks';

export const PrivateRoute = ({ element: Element, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return (
    <Route
      element={shouldRedirect ? <Navigate to={redirectTo} /> : <Element />}
    />
  );
};
