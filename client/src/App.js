import React from 'react';
import Layout from './Containers/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

const App = (props) => (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
);

export default App;
