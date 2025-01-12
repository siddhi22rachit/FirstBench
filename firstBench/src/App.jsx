import React from 'react';
import DashboardInterface from './components/DashboardInterface';
import Navbar from './components/navbar';


const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
    <Navbar/>
    <main className="max-w-full px-8 py-6 ">
      <DashboardInterface />
    </main>
  </div>
  );
};

export default App;
