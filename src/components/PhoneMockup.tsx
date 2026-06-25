export function PhoneMockup() {
  const bars = [3, 7, 11, 16, 12, 8, 14, 19, 11, 7, 13, 9, 5, 3]

  return (
    <div className="relative mx-auto w-56 select-none sm:w-64 lg:w-72">
      {/* Glow behind phone */}
      <div
        className="absolute inset-x-8 inset-y-12 rounded-full bg-indigo-400/20 blur-3xl"
        aria-hidden="true"
      />

      {/* Outer frame */}
      <div className="relative rounded-[42px] bg-zinc-900 p-[10px] shadow-2xl shadow-zinc-900/60 ring-1 ring-white/10">
        {/* Side buttons */}
        <div className="absolute -left-[3px] top-24 h-7 w-[3px] rounded-l-full bg-zinc-700" aria-hidden="true" />
        <div className="absolute -left-[3px] top-36 h-10 w-[3px] rounded-l-full bg-zinc-700" aria-hidden="true" />
        <div className="absolute -left-[3px] top-48 h-10 w-[3px] rounded-l-full bg-zinc-700" aria-hidden="true" />
        <div className="absolute -right-[3px] top-36 h-14 w-[3px] rounded-r-full bg-zinc-700" aria-hidden="true" />

        {/* Screen */}
        <div className="overflow-hidden rounded-[34px] bg-zinc-950">
          {/* Dynamic Island */}
          <div className="flex justify-center pb-1 pt-3">
            <div className="h-6 w-24 rounded-full bg-zinc-900" />
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pb-3 pt-1">
            <span className="text-[10px] font-semibold text-zinc-300">9:41</span>
            <div className="flex items-center gap-1">
              {[3, 2, 1].map((i) => (
                <div
                  key={i}
                  className="w-0.5 rounded-full bg-zinc-300"
                  style={{ height: `${(4 - i) * 3}px` }}
                />
              ))}
              <svg className="ml-1 h-2.5 w-4 text-zinc-300" viewBox="0 0 16 10" fill="none" aria-hidden="true">
                <rect x="0.5" y="0.5" width="13" height="9" rx="2" stroke="currentColor" strokeOpacity="0.35"/>
                <rect x="1" y="1" width="10" height="8" rx="1.5" fill="currentColor"/>
                <path d="M14.5 3.5v3a1.5 1.5 0 0 0 0-3z" fill="currentColor" fillOpacity="0.4"/>
              </svg>
            </div>
          </div>

          {/* Call interface */}
          <div className="px-5 pb-6 pt-2">
            {/* App label */}
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-semibold text-zinc-200">Agente de Voz</span>
              <span className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                En llamada
              </span>
            </div>

            {/* Avatar */}
            <div className="flex flex-col items-center py-3">
              <div className="relative mb-3 h-16 w-16">
                <div className="absolute inset-0 rounded-full bg-indigo-500/15 ring-4 ring-indigo-500/10" />
                <div className="absolute inset-3 flex items-center justify-center rounded-full bg-indigo-500/25 ring-1 ring-indigo-400/30">
                  <svg className="h-5 w-5 text-indigo-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 19v3M19 10v2a7 7 0 0 1-14 0v-2"/>
                    <rect x="9" y="2" width="6" height="12" rx="3"/>
                  </svg>
                </div>
              </div>
              <p className="text-xs font-semibold text-zinc-200">Clínica Dental Plus</p>
              <p className="mt-0.5 text-[10px] text-zinc-500">1:24</p>
            </div>

            {/* Waveform */}
            <div className="flex items-center justify-center gap-[3px] py-3">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="w-1 origin-bottom rounded-full bg-indigo-400/70"
                  style={{
                    height: `${h * 2}px`,
                    animationName: 'waveform',
                    animationDuration: `${0.6 + (i % 4) * 0.15}s`,
                    animationTimingFunction: 'ease-in-out',
                    animationIterationCount: 'infinite',
                    animationDelay: `${i * 0.07}s`,
                  }}
                />
              ))}
            </div>

            {/* Chat bubbles */}
            <div className="mt-3 space-y-2">
              <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-indigo-600 px-3 py-2">
                <p className="text-[10px] leading-relaxed text-white">
                  ¿Tienen cita mañana a las 10am?
                </p>
              </div>
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-zinc-800 px-3 py-2">
                <p className="text-[10px] leading-relaxed text-zinc-200">
                  ¡Claro! Tenemos disponibilidad a las 10am. ¿Lo confirmo?
                </p>
              </div>
            </div>

            {/* End call button */}
            <div className="mt-5 flex justify-center">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full bg-red-500 shadow-lg shadow-red-500/30"
                aria-hidden="true"
              >
                <svg className="h-5 w-5 rotate-[135deg] text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.01L6.6 10.8z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Home indicator */}
        <div className="flex justify-center py-2">
          <div className="h-1 w-16 rounded-full bg-zinc-700" />
        </div>
      </div>
    </div>
  )
}
