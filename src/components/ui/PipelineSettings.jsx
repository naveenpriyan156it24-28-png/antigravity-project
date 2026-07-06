import React from 'react';

export function PipelineSettings() {
  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 h-full">
      <div className="flex items-center gap-3 mb-8">
        <span className="material-symbols-outlined text-primary">tune</span>
        <h2 className="font-headline-md text-headline-md">Pipeline Settings</h2>
      </div>

      <div className="mb-10">
        <label className="block font-label-md text-label-md text-on-surface-variant mb-3">Target Language</label>
        <div className="relative">
          <select className="w-full appearance-none bg-surface border border-outline rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all font-body-md text-body-md">
            <option value="english">English (US/UK)</option>
            <option value="tamil">Tamil (Thamizh)</option>
            <option value="telugu">Telugu (Telugu)</option>
            <option value="hindi">Hindi (Manak Hindi)</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <span className="material-symbols-outlined text-secondary">expand_more</span>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <label className="block font-label-md text-label-md text-on-surface-variant mb-4">Voice Tone & Style</label>
        <div className="grid grid-cols-2 gap-4">
          <label className="cursor-pointer">
            <input defaultChecked className="peer hidden" name="tone" type="radio" value="formal"/>
            <div className="p-4 rounded-lg border border-outline peer-checked:border-primary peer-checked:bg-primary-fixed text-center transition-all">
              <span className="material-symbols-outlined block mb-1">school</span>
              <span className="font-label-md text-label-md block">Formal</span>
            </div>
          </label>
          <label className="cursor-pointer">
            <input className="peer hidden" name="tone" type="radio" value="informal"/>
            <div className="p-4 rounded-lg border border-outline peer-checked:border-primary peer-checked:bg-primary-fixed text-center transition-all">
              <span className="material-symbols-outlined block mb-1">chat</span>
              <span className="font-label-md text-label-md block">Informal</span>
            </div>
          </label>
        </div>
      </div>

      <div className="mb-8 p-4 bg-surface-container-low rounded-lg border border-outline-variant">
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-sm text-secondary">info</span>
          <span className="font-label-sm text-label-sm text-secondary uppercase">Processing Note</span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Formal tone uses standard dictionary phonemes. Informal uses regional colloquialisms and emotional inflection.
        </p>
      </div>

      <div className="mt-auto">
        <img 
          className="w-full h-32 object-cover rounded-lg opacity-80" 
          alt="Voice AI"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDM2Fyz3h1fvAeQjUFFdnjOcQ6FMeZ1Xn3orUpGPatcJmsB2RKwwehdqFGVMcvWPqr9VojEwQInNyLAVUh8I2x_3ZWULs6PNqdEz4PBhNJyoT9AJ5f58aXB3gZcCe1Ij3ILl19X9F8s6WhB3XV-9sM5BkwfRXjHmNwQxmxDcpc7iUteduAlN7Qz_d3XjzmzGHFfnIDPxwxsO_yKkt_VNDiALL0vdAWXmzxs19wi8E3ZpZA2KuraJgVQt3-y8C7luRsXFEBxblJyMo"
        />
      </div>
    </div>
  );
}
