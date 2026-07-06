import React from 'react';
import { Play, Pause } from 'lucide-react';

export function SynthesisPlayer({ isPlaying, onTogglePlay, progress }) {
  const pct = Math.min(100, ((progress || 0) / 15) * 100);

  return (
    <div className="card p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-accent text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            graphic_eq
          </span>
          <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">Voice Synthesis Output</span>
        </div>
        {isPlaying && (
          <span className="badge-success flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-success live-ping" />
            PLAYING
          </span>
        )}
      </div>

      {/* Player row */}
      <div className="flex items-center gap-4">
        <button
          onClick={onTogglePlay}
          className="w-12 h-12 shrink-0 bg-accent hover:bg-accent-hover text-white rounded-full flex items-center justify-center transition-all active:scale-95 shadow-accent"
          aria-label={isPlaying ? 'Pause synthesized audio' : 'Play synthesized audio'}
        >
          {isPlaying
            ? <Pause className="w-5 h-5 fill-current" />
            : <Play className="w-5 h-5 fill-current ml-0.5" />
          }
        </button>

        {/* Waveform bars */}
        <div className="flex-grow flex items-end gap-[3px] h-10 px-1 overflow-hidden" id="waveform-visualizer">
          {[40,70,50,90,30,60,80,45,75,55,85,35,65,80,40,70,50,90].map((height, idx) => (
            <div
              key={idx}
              className={`w-1.5 rounded-full transition-all duration-300
                ${isPlaying ? 'waveform-bar bg-accent' : 'bg-accent/30'}`}
              style={{
                height: isPlaying ? undefined : `${height}%`,
                animationDelay: isPlaying ? `${0.1 * (idx % 10)}s` : undefined,
              }}
            />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div>
        <div className="h-1.5 w-full bg-bg-surface rounded-full overflow-hidden border border-outline">
          <div
            className="h-full bg-accent rounded-full transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-[10px] text-text-muted font-mono">
            {Math.floor(progress / 60).toString().padStart(2, '0')}:{Math.floor(progress % 60).toString().padStart(2, '0')}
          </span>
          <span className="text-[10px] text-text-muted font-mono">00:15</span>
        </div>
      </div>
    </div>
  );
}
