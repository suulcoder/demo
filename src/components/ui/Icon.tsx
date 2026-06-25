import type { AgentConfig } from '../../types/agent'

// ─── Sector icons (illustrated, own colors) ───────────────────────────────────

interface SectorIconProps {
  name: AgentConfig['icon']
  size?: 'sm' | 'md'
  className?: string
}

const containerStyles: Record<AgentConfig['icon'], string> = {
  tooth: 'bg-sky-50 ring-sky-200',
  utensils: 'bg-amber-50 ring-amber-200',
}

const sizeStyles = {
  sm: { wrap: 'h-11 w-11', icon: 'h-6 w-6' },
  md: { wrap: 'h-14 w-14', icon: 'h-8 w-8' },
}

/** Illustrated tooth — multi-color filled SVG */
function ToothIllustration({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* Crown fill */}
      <path
        d="M16 4C12.1 4 9 7 9 10.5c0 2 .8 3.8 2.1 5.1C9.9 17.3 9 19.5 9 21.5c0 3.5 2.5 6.3 5 6.8.7.1 1.2-.2 2-.5.8.3 1.3.6 2 .5 2.5-.5 5-3.3 5-6.8 0-2-.9-4.2-2.1-5.9C22.2 14.3 23 12.5 23 10.5 23 7 19.9 4 16 4z"
        fill="#BAE6FD"
        stroke="#0EA5E9"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Inner midline detail */}
      <path
        d="M16 15v7"
        stroke="#7DD3FC"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="2 2"
      />
      {/* Crown top highlight */}
      <path
        d="M11.5 9.5C12.2 8 14 7 15.5 7"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Sparkle top-right */}
      <path d="M21 5.5v2M20 6.5h2" stroke="#38BDF8" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

/** Illustrated chef hat — multi-color filled SVG */
function ChefHatIllustration({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* Hat dome */}
      <path
        d="M9 22C9 19.5 7 17.5 7 14.5a9 9 0 0 1 18 0c0 3-2 5-2 7.5H9z"
        fill="#FEF3C7"
        stroke="#F59E0B"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Brim band */}
      <rect x="8" y="22" width="16" height="3.5" rx="1.5" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1.4" />
      {/* Bottom trim */}
      <rect x="10" y="25.5" width="12" height="2.5" rx="1" fill="#FCD34D" stroke="#F59E0B" strokeWidth="1" />
      {/* Band seam */}
      <path d="M9 24h14" stroke="#F59E0B" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.5" />
      {/* Dome highlight */}
      <path d="M10.5 13.5C11.5 11 13.5 9.5 16 9.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function SectorIcon({ name, size = 'md', className = '' }: SectorIconProps) {
  const { wrap, icon } = sizeStyles[size]

  return (
    <span
      className={`inline-flex items-center justify-center rounded-xl ring-1 ${wrap} ${containerStyles[name]} ${className}`}
    >
      {name === 'tooth' ? (
        <ToothIllustration className={icon} />
      ) : (
        <ChefHatIllustration className={icon} />
      )}
    </span>
  )
}

// ─── General icons ─────────────────────────────────────────────────────────────

export function WaveformIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 12h2" />
      <path d="M6 8v8" />
      <path d="M10 5v14" />
      <path d="M14 8v8" />
      <path d="M18 11v2" />
      <path d="M22 12h-2" />
    </svg>
  )
}

export function MicIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 19v3" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <rect x="9" y="2" width="6" height="12" rx="3" />
    </svg>
  )
}

export function CloseIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

export function PlayIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}

export function CalendarIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}

export function ArrowRightIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

export function CheckIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function MailIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

// ─── Metric icons ─────────────────────────────────────────────────────────────

export function ClockIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}

export function BarChartIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  )
}

export function TrendUpIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m22 7-8.5 8.5-5-5L2 17" />
      <path d="M16 7h6v6" />
    </svg>
  )
}

export function ShieldCheckIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
