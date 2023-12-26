import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import Canvas from './components/Canvas/Canvas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <Canvas img={require('./ella.JPG')} height={350} width={500} />
      </header>
    </div>
  );
}

export default App;
