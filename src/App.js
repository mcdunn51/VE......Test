import React from 'react';
import Header from './Components/Header';
import Router from './Router';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Navigation />
    </div>
  );
}

export default App;
