import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from './navigation/RouterConfig';
import './App.css';

function App() {
  return (
    <Container className="page-container">
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </Container>
  );
}

export default App;
