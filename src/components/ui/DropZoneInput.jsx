import React from 'react';

export function DropZoneInput() {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 transition-all hover:shadow-lg h-full">
      <div className="flex items-center gap-3 mb-6">
        <span className="material-symbols-outlined text-primary">upload_file</span>
        <h2 className="font-headline-md text-headline-md">Audio Source</h2>
      </div>
      
      <div className="drag-dash-border p-12 flex flex-col items-center justify-center cursor-pointer group transition-colors hover:bg-surface-container">
        <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-primary text-3xl">cloud_upload</span>
        </div>
        <p className="font-label-md text-label-md text-on-surface mb-1">Drag and drop audio files</p>
        <p className="font-body-sm text-body-sm text-secondary">Support for MP3, WAV, FLAC (Max 50MB)</p>
        <input className="hidden" id="audio-upload" type="file"/>
      </div>
      
      <div className="relative my-8">
        <div aria-hidden="true" className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-outline-variant"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-surface-container-lowest px-4 text-on-surface-variant font-label-sm">OR USE URL</span>
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <span className="material-symbols-outlined text-secondary">link</span>
        </div>
        <input 
          className="w-full pl-12 pr-4 py-4 rounded-lg border border-outline focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-body-md text-body-md" 
          placeholder="Paste YouTube, Vimeo or Web URL for processing..." 
          type="text"
        />
      </div>
    </div>
  );
}
