import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';


export const Layout = () => {
  return (
    <div
      style={{
        maxWidth: 1280,
        height: '100hv',
        margin: '0 auto',
        padding: '10px',
        backgroundColor: '#d5ebd2',
        minHeight: 'calc(100vh - 40px)',
      }}
    >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
