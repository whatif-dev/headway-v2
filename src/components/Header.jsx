import React from 'react';

function Header({ toggleSidebar }) {
  return (
    <header className="bg-background border-b border-border">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <button onClick={toggleSidebar} className="text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mr-4">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <img src="/headway-logo.svg" alt="Headway" className="h-8 w-auto" />
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-foreground hover:text-foreground/80">Get Care</a></li>
            <li><a href="#" className="text-foreground hover:text-foreground/80">For Providers</a></li>
            <li><a href="#" className="text-foreground hover:text-foreground/80">For Health Plans</a></li>
            <li><a href="#" className="text-foreground hover:text-foreground/80">Company</a></li>
            <li><a href="#" className="text-foreground hover:text-foreground/80">EN</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;