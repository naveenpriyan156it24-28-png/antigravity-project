import React from 'react';

export function MetricsSidebar({ detectedLang, confidence, hasCodeSwitch }) {
  return (
    <aside className="space-y-gutter">
      
      {/* Detected Language */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Detected Language</span>
          <span className="material-symbols-outlined text-primary">translate</span>
        </div>
        <div className="flex items-end gap-2">
          <span className="font-headline-md text-headline-md font-bold">Tamil</span>
          <span className="font-headline-md text-headline-md text-primary">98.4%</span>
        </div>
        <div className="mt-4 h-2 w-full bg-surface-container rounded-full overflow-hidden">
          <div className="h-full bg-primary" style={{ width: '98.4%' }}></div>
        </div>
      </div>

      {/* Code-Switch Flag */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Code-Switch Flag</span>
          <span className="material-symbols-outlined text-error">warning</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="code-switch-flash px-3 py-1 rounded-full font-label-md text-label-md font-bold flex items-center gap-2">
            TRUE
          </span>
          <p className="text-body-sm font-body-sm text-on-surface-variant">Switching to English detected at 02:14:12</p>
        </div>
      </div>

      {/* VRAM Footprint */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-5 shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">VRAM Footprint</span>
          <span className="material-symbols-outlined text-tertiary">memory</span>
        </div>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between font-label-sm text-label-sm mb-1">
              <span>Blaze Engine</span>
              <span className="font-bold">2.1GB / 4.0GB</span>
            </div>
            <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
              <div className="h-full bg-tertiary" style={{ width: '52.5%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between font-label-sm text-label-sm mb-1">
              <span>Inference Node</span>
              <span className="font-bold">12.4GB / 16GB</span>
            </div>
            <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
              <div className="h-full bg-primary" style={{ width: '77.5%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Audio Output Player */}
      <div className="bg-inverse-surface text-inverse-on-surface rounded-xl p-5 shadow-lg border border-outline">
        <span className="font-label-sm text-label-sm text-outline-variant uppercase tracking-wider mb-4 block">Voice Synthesis Output</span>
        <div className="flex items-center gap-4">
          <button className="w-12 h-12 flex-shrink-0 bg-primary rounded-full flex items-center justify-center hover:bg-primary-container transition-all active:scale-95 shadow-lg">
            <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
          </button>
          <div className="flex-grow flex items-end gap-[2px] h-10 px-2 overflow-hidden">
            <div className="waveform-bar w-1 bg-primary-fixed-dim rounded-full" style={{ height: '40%', animationDelay: '0.1s' }}></div>
            <div className="waveform-bar w-1 bg-primary-fixed-dim rounded-full" style={{ height: '70%', animationDelay: '0.2s' }}></div>
            <div className="waveform-bar w-1 bg-primary-fixed-dim rounded-full" style={{ height: '50%', animationDelay: '0.3s' }}></div>
            <div className="waveform-bar w-1 bg-primary-fixed-dim rounded-full" style={{ height: '90%', animationDelay: '0.4s' }}></div>
            <div className="waveform-bar w-1 bg-primary-fixed-dim rounded-full" style={{ height: '30%', animationDelay: '0.5s' }}></div>
            <div className="waveform-bar w-1 bg-primary-fixed-dim rounded-full" style={{ height: '60%', animationDelay: '0.6s' }}></div>
            <div className="waveform-bar w-1 bg-primary-fixed-dim rounded-full" style={{ height: '80%', animationDelay: '0.7s' }}></div>
            <div className="waveform-bar w-1 bg-primary-fixed-dim rounded-full" style={{ height: '40%', animationDelay: '0.8s' }}></div>
            <div className="waveform-bar w-1 bg-primary-fixed-dim rounded-full" style={{ height: '70%', animationDelay: '0.9s' }}></div>
            <div className="waveform-bar w-1 bg-primary-fixed-dim rounded-full" style={{ height: '50%', animationDelay: '1.0s' }}></div>
            <div className="waveform-bar w-1 bg-primary-fixed-dim rounded-full" style={{ height: '90%', animationDelay: '1.1s' }}></div>
          </div>
        </div>
      </div>
      
    </aside>
  );
}
