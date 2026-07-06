import React from 'react';

export function LivePipelineStatus() {
  return (
    <section className="bg-surface-container-low rounded-xl p-6 border border-outline-variant shadow-sm overflow-hidden relative">
      <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8">
        
        {/* Node 1: Blaze */}
        <div className="flex flex-col items-center gap-2 group cursor-pointer">
          <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shadow-md transition-transform group-hover:scale-105">
            <span className="material-symbols-outlined text-[32px]">bolt</span>
          </div>
          <span className="font-label-md text-label-md font-bold">Blaze</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">STT Engine</span>
        </div>

        {/* Connector */}
        <div className="flex-grow hidden md:block h-1 bg-outline-variant rounded-full overflow-hidden relative">
          <div className="absolute inset-0 node-flow-gradient"></div>
        </div>

        {/* Node 2: Qwen2 */}
        <div className="flex flex-col items-center gap-2 group cursor-pointer">
          <div className="w-16 h-16 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary shadow-md transition-transform group-hover:scale-105 border-4 border-tertiary-fixed-dim">
            <span className="material-symbols-outlined text-[32px]">psychology</span>
          </div>
          <span className="font-label-md text-label-md font-bold">Qwen2</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">Inference LLM</span>
        </div>

        {/* Connector */}
        <div className="flex-grow hidden md:block h-1 bg-outline-variant rounded-full overflow-hidden relative">
          <div className="absolute inset-0 node-flow-gradient" style={{ animationDelay: '1.5s' }}></div>
        </div>

        {/* Node 3: Spark */}
        <div className="flex flex-col items-center gap-2 group cursor-pointer">
          <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shadow-md transition-transform group-hover:scale-105">
            <span className="material-symbols-outlined text-[32px]">record_voice_over</span>
          </div>
          <span className="font-label-md text-label-md font-bold">Spark</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">TTS Generator</span>
        </div>

      </div>
    </section>
  );
}
