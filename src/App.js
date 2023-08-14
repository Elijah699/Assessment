import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { Routes } from './config/routes';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
