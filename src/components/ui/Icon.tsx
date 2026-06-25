import type { AgentConfig } from '../../types/agent'

interface SectorIconProps {
  name: AgentConfig['icon']
  size?: 'sm' | 'md'
  className?: string
}

const badgeStyles: Record<AgentConfig['icon'], string> = {
  tooth: 'bg-sky-500/10 text-sky-400 ring-sky-500/30',
  utensils: 'bg-amber-500/10 text-amber-400 ring-amber-500/30',
}

const sizeStyles = {
  sm: { wrap: 'h-11 w-11', icon: 'h-5 w-5' },
  md: { wrap: 'h-14 w-14', icon: 'h-7 w-7' },
}

function DentalIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2a5 5 0 0 0-5 5c0 1.5.5 2.9 1.3 4-.8 1.2-1.3 2.6-1.3 4.1a4.9 4.9 0 0 0 4.9 4.9c.8 0 1.5-.2 2.1-.5.6.3 1.3.5 2.1.5a4.9 4.9 0 0 0 4.9-4.9c0-1.5-.5-2.9-1.3-4.1.8-1.1 1.3-2.5 1.3-4a5 5 0 0 0-5-5Z" />
    </svg>
  )
}

function RestaurantIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  )
}

export function SectorIcon({ name, size = 'md', className = '' }: SectorIconProps) {
  const { wrap, icon } = sizeStyles[size]

  return (
    <span
      className={`inline-flex items-center justify-center rounded-xl ring-1 ${wrap} ${badgeStyles[name]} ${className}`}
    >
      {name === 'tooth' ? <DentalIcon className={icon} /> : <RestaurantIcon className={icon} />}
    </span>
  )
}

export function WaveformIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
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
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 19v3" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <rect x="9" y="2" width="6" height="12" rx="3" />
    </svg>
  )
}

export function CloseIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

export function PlayIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}
