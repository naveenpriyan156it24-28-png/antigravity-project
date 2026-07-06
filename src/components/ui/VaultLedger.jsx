import React from 'react';

export function VaultLedger() {
  const sessions = [
    {
      uuid: '#VX-8821',
      file: 'clinic_patient.wav',
      type: 'audio_file',
      lang: 'Tamil',
      conf: '0.99',
      mode: 'Formal',
      duration: '14.2s',
      status: 'SUCCESS',
      statusClass: 'bg-tertiary-container text-on-tertiary-container',
      dotClass: 'bg-on-tertiary-container'
    },
    {
      uuid: '#VX-9104',
      file: 'market_chat.mp3',
      type: 'music_note',
      lang: 'Telugu',
      conf: '0.92',
      mode: 'Informal',
      duration: '32.5s',
      status: 'SUCCESS',
      statusClass: 'bg-tertiary-container text-on-tertiary-container',
      dotClass: 'bg-on-tertiary-container'
    },
    {
      uuid: '#VX-0027',
      file: 'broken_audio.wav',
      type: 'error',
      typeClass: 'text-error',
      lang: 'Unknown',
      conf: '0.12',
      mode: 'Formal',
      duration: '2.1s',
      status: 'FAILED',
      statusClass: 'bg-error-container text-on-error-container',
      dotClass: 'bg-on-error-container'
    }
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface">Saved Interaction Log Ledger</h1>
          <p className="font-body-md text-on-surface-variant">Historical database of processed voice translation packets and analytical metadata.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="material-symbols-outlined text-outline absolute left-3 top-1/2 -translate-y-1/2">search</span>
            <input className="pl-10 pr-4 py-2 border border-outline rounded-lg bg-surface focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm w-[260px]" placeholder="Search by UUID or filename..." type="text"/>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container border border-outline rounded-lg text-sm font-label-md text-on-surface hover:bg-surface-variant transition-colors">
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
            Filters
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg text-sm font-label-md hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Export
          </button>
        </div>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-outline-variant bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant uppercase">
                <th className="p-4 pl-6">UUID</th>
                <th className="p-4">SOURCE FILE</th>
                <th className="p-4">LANG (CONF)</th>
                <th className="p-4">MODE</th>
                <th className="p-4">DURATION</th>
                <th className="p-4">STATUS</th>
                <th className="p-4 pr-6 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="bg-surface-container-lowest divide-y divide-outline-variant">
              {sessions.map((session, i) => (
                <tr key={i} className="hover:bg-surface-container-low transition-colors group">
                  <td className="p-4 pl-6 font-body-sm text-body-sm text-secondary">{session.uuid}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className={`material-symbols-outlined text-[18px] ${session.typeClass || 'text-primary'}`}>{session.type}</span>
                      <span className="font-label-md text-label-md text-on-surface">{session.file}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface">{session.lang}</span>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${session.conf >= 0.9 ? 'bg-tertiary' : 'bg-error'}`}></span>
                        <span className={`text-[10px] font-bold ${session.conf >= 0.9 ? 'text-tertiary' : 'text-error'}`}>
                          {session.conf} Confidence
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="bg-secondary-container text-on-secondary-container px-2.5 py-1 rounded-md font-label-sm text-[11px]">
                      {session.mode}
                    </span>
                  </td>
                  <td className="p-4 font-body-sm text-body-sm text-on-surface-variant">{session.duration}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full flex items-center gap-1.5 w-fit ${session.statusClass}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${session.dotClass}`}></span>
                      <span className="text-[10px] font-bold tracking-wider">{session.status}</span>
                    </span>
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <button className="font-label-md text-label-md text-primary hover:text-primary-container">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-outline-variant bg-surface-container-lowest flex items-center justify-between">
          <span className="font-body-sm text-body-sm text-secondary">Showing 1 to 3 of 152 entries</span>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center border border-outline rounded-lg bg-surface text-secondary hover:bg-surface-container-low">
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center border border-outline rounded-lg bg-surface text-secondary hover:bg-surface-container-low">
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Analytics Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="bg-primary-fixed border border-primary-fixed-dim rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <span className="font-label-sm text-label-sm text-on-primary-fixed-variant uppercase tracking-wider">Translation Accuracy</span>
            <span className="material-symbols-outlined text-primary">bar_chart</span>
          </div>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="font-display-lg text-[32px] font-bold text-on-primary-fixed">94.2%</span>
            <span className="font-label-sm text-label-sm text-tertiary">+2.1% ↑</span>
          </div>
          <div className="w-full h-1.5 bg-primary-fixed-dim rounded-full overflow-hidden">
            <div className="h-full bg-primary" style={{ width: '94.2%' }}></div>
          </div>
        </div>

        <div className="bg-primary-fixed border border-primary-fixed-dim rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <span className="font-label-sm text-label-sm text-on-primary-fixed-variant uppercase tracking-wider">Total Throughput</span>
            <span className="material-symbols-outlined text-primary">timer</span>
          </div>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="font-display-lg text-[32px] font-bold text-on-primary-fixed">1,482</span>
            <span className="font-label-sm text-label-sm text-on-primary-fixed-variant">hrs logged</span>
          </div>
          <div className="flex items-end gap-1 h-6">
            <div className="w-full bg-primary-fixed-dim h-[30%]"></div>
            <div className="w-full bg-primary-fixed-dim h-[50%]"></div>
            <div className="w-full bg-primary-fixed-dim h-[25%]"></div>
            <div className="w-full bg-primary opacity-80 h-[80%]"></div>
            <div className="w-full bg-primary h-[60%]"></div>
          </div>
        </div>

        <div className="bg-primary-fixed border border-primary-fixed-dim rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <span className="font-label-sm text-label-sm text-on-primary-fixed-variant uppercase tracking-wider">Active Dialects</span>
            <span className="material-symbols-outlined text-primary">public</span>
          </div>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="font-display-lg text-[32px] font-bold text-on-primary-fixed">38</span>
            <span className="font-label-sm text-label-sm text-on-primary-fixed-variant">Languages</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-2.5 py-1 bg-surface-container-lowest border border-outline-variant rounded-full font-label-sm text-[10px] text-on-surface">Hindi</span>
            <span className="px-2.5 py-1 bg-surface-container-lowest border border-outline-variant rounded-full font-label-sm text-[10px] text-on-surface">Tamil</span>
            <span className="px-2.5 py-1 bg-surface-container-lowest border border-outline-variant rounded-full font-label-sm text-[10px] text-on-surface">Spanish</span>
            <span className="px-2.5 py-1 bg-surface-container-lowest border border-outline-variant rounded-full font-label-sm text-[10px] text-on-surface">+35 more</span>
          </div>
        </div>
      </div>
    </>
  );
}
