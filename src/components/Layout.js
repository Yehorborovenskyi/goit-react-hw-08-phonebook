import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Bars } from 'react-loading-icons';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense
        style={{ position: 'relative' }}
        fallback={
          <Bars
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            stroke="00695f"
            fill="#33ab9f"
          />
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};
