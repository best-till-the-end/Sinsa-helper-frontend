import React from 'react';
import './App.css';
import RootRoute from './routes';

const App = () => {
  const test = process.env.REACT_APP_HOST;
  console.log(test);
  return <RootRoute />;
};

export default App;
