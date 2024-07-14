import React from 'react';
import './App.css';
import { ProductManager } from './components/ProductManager';

const App: React.FC = () => {
  return (
    <div className="NexupFrontendChallenge">
      <h1>Nexup Frontend Challenge</h1>
      <ProductManager />
    </div>
  );
};

export default App;
