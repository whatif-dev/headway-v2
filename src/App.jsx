import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Account from './components/Account';
import Appointments from './components/Appointments';
import Billing from './components/Billing';
import Messages from './components/Messages';
import FAQ from './components/FAQ';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeModule, setActiveModule] = useState('Account');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderActiveModule = () => {
    switch (activeModule) {
      case 'Account':
        return <Account />;
      case 'Appointments':
        return <Appointments />;
      case 'Billing':
        return <Billing />;
      case 'Messages':
        return <Messages />;
      case 'FAQ':
        return <FAQ />;
      default:
        return <Account />;
    }
  };

  return (
    <div className="flex h-screen bg-white">
      <Sidebar isOpen={isSidebarOpen} setActiveModule={setActiveModule} activeModule={activeModule} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white p-6">
          {renderActiveModule()}
        </main>
      </div>
    </div>
  );
}

export default App;