import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="app-container animate-fade-in">
      <header className="header">
        <h1>FocusFlow</h1>
        <p>Master your tasks. Conquer your studies.</p>
      </header>
      
      <main className="main-content">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
