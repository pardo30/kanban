import React from 'react';
import './App.css';
import KanbanCard from './components/KanbanCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <KanbanCard title='Prueba de tarjeta'/>
      </header>
    </div>
  );
}

export default App;
