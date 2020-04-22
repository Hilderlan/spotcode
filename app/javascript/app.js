import React, { Fragment } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom'
 
 
const App = () => {
  return(
    <Fragment>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </Fragment>
  );
}
export default App;
