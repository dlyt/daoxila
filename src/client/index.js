import React from 'react';
import routes from './routes.jsx';
import { render } from 'react-dom';

const rootElement = document.getElementById('root');

render(
  routes,
  rootElement
)