import React from 'react';

export function TranscriptPanel() {
  return (
    <>
      <div className="grid grid-cols-2 border-b border-outline-variant">
        <div className="p-4 border-r border-outline-variant bg-surface-container-low font-label-md text-label-md flex justify-between items-center">
          <span>Source (Tamil)</span>
          <span className="material-symbols-outlined text-secondary text-[20px]">mic</span>
        </div>
        <div className="p-4 bg-surface-container-high text-on-primary-container font-label-md text-label-md flex justify-between items-center">
          <span>Target (English)</span>
          <span className="material-symbols-outlined text-primary text-[20px]">volume_up</span>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto p-6 space-y-8">
        {/* Segment 1 */}
        <div className="grid grid-cols-2 gap-8 items-start relative">
          <div className="space-y-2">
            <p className="font-body-lg text-body-lg text-on-surface">வணக்கம், நீங்கள் இன்று எப்படி இருக்கிறீர்கள்?</p>
            <span className="text-[10px] text-outline font-label-sm">[02:14:10]</span>
          </div>
          <div className="space-y-2 bg-primary-fixed p-4 rounded-lg relative">
            <div className="absolute left-0 top-4 -ml-2 w-4 h-4 bg-primary-fixed transform rotate-45"></div>
            <p className="font-body-lg text-body-lg text-on-primary-fixed">Hello, how are you doing today?</p>
            <div className="flex gap-2">
              <span className="text-[10px] text-on-primary-fixed-variant font-label-sm">Inference: 45ms</span>
              <span className="text-[10px] text-on-primary-fixed-variant font-label-sm">Confidence: 99.8%</span>
            </div>
          </div>
        </div>

        {/* Segment 2 */}
        <div className="grid grid-cols-2 gap-8 items-start relative opacity-90">
          <div className="space-y-2">
            <p className="font-body-lg text-body-lg text-on-surface">
              நான் மருந்துகளை எடுத்துக்கொண்டேன், ஆனால் தலைவலி இன்னும் குறையவில்லை. <span className="bg-error-container text-on-error-container px-1">Check progress?</span>
            </p>
            <span className="text-[10px] text-outline font-label-sm">[02:14:22]</span>
          </div>
          <div className="space-y-2 bg-primary-fixed p-4 rounded-lg relative">
            <div className="absolute left-0 top-4 -ml-2 w-4 h-4 bg-primary-fixed transform rotate-45"></div>
            <p className="font-body-lg text-body-lg text-on-primary-fixed">I took the medication, but the headache hasn't subsided yet. Check progress?</p>
            <div className="flex gap-2">
              <span className="text-[10px] text-on-primary-fixed-variant font-label-sm">Inference: 62ms</span>
              <span className="text-[10px] text-on-primary-fixed-variant font-label-sm">Confidence: 94.2%</span>
            </div>
          </div>
        </div>

        {/* Active Processing Segment */}
        <div className="grid grid-cols-2 gap-8 items-start relative">
          <div className="space-y-2">
            <p className="font-body-lg text-body-lg text-on-surface flex items-center gap-2">
              <span>இப்போது நான் என்ன செய்ய வேண்டும் என்று...</span>
              <span className="flex gap-1">
                <span className="w-1 h-1 bg-primary rounded-full animate-bounce"></span>
                <span className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                <span className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
              </span>
            </p>
          </div>
          <div className="space-y-2 border-2 border-dashed border-primary-container p-4 rounded-lg relative bg-surface-container">
            <p className="font-body-lg text-body-lg text-secondary italic">Synthesizing: "What should I do now..."</p>
            <div className="w-full h-1 bg-outline-variant rounded-full overflow-hidden">
              <div className="h-full bg-primary animate-[flow_2s_linear_infinite]" style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
