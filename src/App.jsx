import React, { useState, useEffect } from 'react';
import { DashboardLayout } from './layouts/DashboardLayout';
import { EngineStatusGrid } from './components/ui/EngineStatusGrid';
import { DropZoneInput } from './components/ui/DropZoneInput';
import { PipelineSettings } from './components/ui/PipelineSettings';
import { MetricsSidebar } from './components/ui/MetricsSidebar';
import { TranscriptPanel } from './components/ui/TranscriptPanel';
import { VaultLedger } from './components/ui/VaultLedger';
import { LivePipelineStatus } from './components/ui/LivePipelineStatus';

export function App() {
  const [activeTab, setActiveTab] = useState('gateway');
  const [isProcessing, setIsProcessing] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(''), 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const executePipeline = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setActiveTab('insights');
    }, 1500);
  };

  return (
    <DashboardLayout activeTab={activeTab} onTabChange={setActiveTab}>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-surface border border-outline-variant text-on-surface px-5 py-3.5 rounded-xl shadow-lg flex items-center gap-3 animate-pulse">
          <div className="w-8 h-8 bg-surface-container-high rounded-lg flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
          </div>
          <span className="font-label-md text-label-md">{toastMessage}</span>
          <button onClick={() => setToastMessage('')} className="p-1 text-secondary hover:text-on-surface rounded-lg hover:bg-surface-container-low transition-colors ml-2">
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>
      )}

      {/* ══════════════════════════════════════════════ */}
      {/* ══  SCREEN 1: Gateway & Configuration  ══════ */}
      {/* ══════════════════════════════════════════════ */}
      {activeTab === 'gateway' && (
        <>
          <section className="mb-12">
            <h1 className="font-display-lg text-display-lg text-on-background mb-4 text-center md:text-left">
              VoxLingua: Multilingual Voice Translator
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl text-center md:text-left">
              Bridging regional language gaps instantly across Tamil, Telugu, and English. High-fidelity translation for enterprise, logistics, and medical environments.
            </p>
          </section>

          <EngineStatusGrid />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <div className="lg:col-span-8 flex flex-col gap-gutter">
              <DropZoneInput />
            </div>
            <div className="lg:col-span-4">
              <PipelineSettings />
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center">
            <button
              onClick={executePipeline}
              disabled={isProcessing}
              className="bg-primary text-on-primary font-headline-md text-headline-md px-12 py-5 rounded-full flex items-center gap-4 hover:bg-primary-container active:scale-95 transition-all shadow-lg hover:shadow-primary/20 disabled:opacity-50"
            >
              {isProcessing ? (
                <span className="material-symbols-outlined animate-spin">refresh</span>
              ) : (
                <span className="material-symbols-outlined text-[24px]">play_circle</span>
              )}
              Execute Voice Translation Pipeline
            </button>
            <p className="mt-4 font-body-sm text-body-sm text-secondary">
              Estimated processing time: <span className="font-bold text-on-surface">~1.2x media duration</span>
            </p>
          </div>
        </>
      )}

      {/* ══════════════════════════════════════════════ */}
      {/* ══  SCREEN 2: Live Insights  ════════════════ */}
      {/* ══════════════════════════════════════════════ */}
      {activeTab === 'insights' && (
        <>
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface">Live Pipeline Status</h1>
              <p className="font-body-md text-on-surface-variant">Real-time inference tracking and linguistic decomposition.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 bg-tertiary-container text-on-tertiary px-3 py-1.5 rounded-full font-label-sm text-label-sm">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                LIVE STREAMING
              </span>
              <span className="text-on-surface-variant font-label-sm text-label-sm">Uptime: 02:14:55</span>
            </div>
          </header>

          <LivePipelineStatus />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <div className="lg:col-span-4">
              <MetricsSidebar detectedLang="Tamil" confidence="98.4%" hasCodeSwitch={true} />
            </div>

            <section className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm flex flex-col min-h-[600px]">
              <TranscriptPanel />

              {/* Actions Footer */}
              <div className="p-4 bg-surface-container border-t border-outline-variant flex justify-between items-center mt-auto">
                <div className="flex gap-2">
                  <button onClick={() => setToastMessage("Session saved!")} className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-primary-container transition-all shadow-md">
                    <span className="material-symbols-outlined text-[18px]">save</span>
                    Save Session
                  </button>
                  <button onClick={() => setActiveTab('vault')} className="flex items-center gap-2 border border-outline text-on-surface-variant px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-surface-variant transition-all">
                    <span className="material-symbols-outlined text-[18px]">history</span>
                    Review History
                  </button>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                    <span className="font-label-sm text-label-sm">Audio Sync: 12ms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-error"></span>
                    <span className="font-label-sm text-label-sm">Latency: 84ms</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      )}

      {/* ══════════════════════════════════════════════ */}
      {/* ══  SCREEN 3: Analytics Vault  ══════════════ */}
      {/* ══════════════════════════════════════════════ */}
      {activeTab === 'vault' && (
        <VaultLedger />
      )}

    </DashboardLayout>
  );
}
