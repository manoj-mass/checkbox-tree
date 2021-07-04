import 'react-toastify/dist/ReactToastify.css';
import './app.scss';
import 'app/config/dayjs.ts';

import React, { useEffect } from 'react';
import { Card } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

import ErrorBoundary from 'app/shared/error/error-boundary';
import { Home } from 'app/modules';

// export interface IAppProps {}

export const App = props => {
  useEffect(() => {}, []);

  const paddingTop = '60px';
  return (
    <div className="app-container" style={{ paddingTop }}>
      <ToastContainer position={toast.POSITION.TOP_LEFT} className="toastify-container" toastClassName="toastify-toast" />
      <div className="container-fluid view-container" id="app-view-container">
        <Card className="jh-card">
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
        </Card>
      </div>
    </div>
  );
};

export default App;
