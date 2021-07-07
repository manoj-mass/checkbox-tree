import 'react-toastify/dist/ReactToastify.css';
import './app.scss';

import React, { useEffect } from 'react';
import { Card } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

import { CheckboxTreeComponent } from 'app/root/checkboxtree';

// export interface IAppProps {}

export const App = props => {
  useEffect(() => {}, []);

  const paddingTop = '60px';
  return (
    <div className="app-container" style={{ paddingTop }}>
      <ToastContainer position={toast.POSITION.TOP_LEFT} className="toastify-container" toastClassName="toastify-toast" />
      <div className="container-fluid view-container" id="app-view-container">
        <Card className="jh-card">
          <>
            <CheckboxTreeComponent />
          </>
        </Card>
      </div>
    </div>
  );
};

export default App;
