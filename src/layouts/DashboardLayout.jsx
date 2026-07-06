import React from 'react';

export function DashboardLayout({ children, activeTab, onTabChange }) {
  return (
    <>
      <header className="bg-surface border-b border-outline-variant sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-16">
          <div className="flex items-center gap-2 md:gap-8">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>translate</span>
              <span className="font-headline-md text-headline-md font-bold text-primary">VoxLingua</span>
            </div>
            <nav className="hidden md:flex gap-6 items-center">
              <button 
                onClick={() => onTabChange('gateway')}
                className={`font-label-md text-label-md ${activeTab === 'gateway' ? 'text-primary border-b-2 border-primary pb-1' : 'text-secondary hover:text-primary-container transition-colors'}`}
              >
                Gateway
              </button>
              <button 
                onClick={() => onTabChange('insights')}
                className={`font-label-md text-label-md ${activeTab === 'insights' ? 'text-primary border-b-2 border-primary pb-1' : 'text-secondary hover:text-primary-container transition-colors'}`}
              >
                Live Insights
              </button>
              <button 
                onClick={() => onTabChange('vault')}
                className={`font-label-md text-label-md ${activeTab === 'vault' ? 'text-primary border-b-2 border-primary pb-1' : 'text-secondary hover:text-primary-container transition-colors'}`}
              >
                Analytics Vault
              </button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant">settings</span>
            </button>
            <button className="p-2 rounded-full hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant">account_circle</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content varies per tab, so we just render children here, but wrap in main if they don't have it. Actually the user HTML has <main> inside the page, let's wrap children in main here */}
      <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12 space-y-gutter">
        {children}
      </main>

      <footer className="bg-surface-container-low border-t border-outline-variant mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center w-full py-6 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <span className="font-label-md text-label-md font-bold text-on-surface">VoxLingua AI</span>
            <span className="font-label-sm text-label-sm text-on-secondary-fixed-variant">© 2024 VoxLingua AI. All rights reserved.</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a className="font-label-sm text-label-sm text-on-secondary-fixed-variant hover:underline decoration-primary transition-opacity" href="#">Documentation</a>
            <a className="font-label-sm text-label-sm text-on-secondary-fixed-variant hover:underline decoration-primary transition-opacity" href="#">System Status</a>
            <a className="font-label-sm text-label-sm text-on-secondary-fixed-variant hover:underline decoration-primary transition-opacity" href="#">Security</a>
            <a className="font-label-sm text-label-sm text-on-secondary-fixed-variant hover:underline decoration-primary transition-opacity" href="#">Support</a>
          </div>
        </div>
      </footer>
    </>
  );
}
