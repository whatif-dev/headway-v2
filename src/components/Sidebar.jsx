import React from 'react';

const modules = ['Account', 'Appointments', 'Billing', 'Messages', 'FAQ'];

function Sidebar({ isOpen, setActiveModule, activeModule }) {
  return (
    <div className={`bg-background border-r border-border text-foreground w-64 space-y-2 py-7 px-2 absolute inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition duration-200 ease-in-out md:relative md:translate-x-0`}>
      <nav>
        {modules.map((module) => (
          <a
            key={module}
            href="#"
            className={`block py-2 px-4 rounded-md transition duration-200 ${
              activeModule === module ? 'bg-secondary text-secondary-foreground' : 'hover:bg-muted'
            }`}
            onClick={() => setActiveModule(module)}
          >
            {module}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;