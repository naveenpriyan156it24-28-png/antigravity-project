import React from 'react';

export function EngineStatusGrid() {
  const engines = [
    {
      id: 'stt',
      label: 'STT Engine',
      name: 'Blaze-Node',
      icon: 'mic'
    },
    {
      id: 'llm',
      label: 'LLM Core',
      name: 'Spark-1',
      icon: 'psychology'
    },
    {
      id: 'tts',
      label: 'TTS Engine',
      name: 'Spark-2',
      icon: 'volume_up'
    }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      {engines.map((engine) => (
        <div key={engine.id} className="bg-surface-container-low p-4 rounded-xl border border-outline-variant flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
              <span className="material-symbols-outlined">{engine.icon}</span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">{engine.label}</p>
              <p className="font-label-md text-label-md">{engine.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-tertiary status-pulse"></div>
            <span className="font-label-sm text-label-sm text-tertiary">Connected</span>
          </div>
        </div>
      ))}
    </section>
  );
}
