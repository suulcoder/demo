import type { AgentConfig } from '../../types/agent'

interface SectorIconProps {
  name: AgentConfig['icon']
  size?: 'sm' | 'md'
  className?: string
}

const badgeStyles: Record<AgentConfig['icon'], string> = {
  tooth: 'bg-sky-500/15 ring-sky-400/40',
  utensils: 'bg-orange-500/15 ring-orange-400/40',
}

const sizeStyles = {
  sm: { wrap: 'h-11 w-11', icon: 'h-5 w-5' },
  md: { wrap: 'h-14 w-14', icon: 'h-7 w-7' },
}

export function SectorIcon({ name, size = 'md', className = '' }: SectorIconProps) {
  const { wrap, icon } = sizeStyles[size]

  const graphic =
    name === 'tooth' ? (
      <svg className={icon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          fill="#38bdf8"
          d="M12 3c-2.8 0-5 2.2-5 5 0 1.3.4 2.5 1.1 3.4-.7 1.1-1.1 2.4-1.1 3.8 0 3.1 2.1 5.8 5 5.8.7 0 1.4-.1 2-.4.6.3 1.3.4 2 .4 2.9 0 5-2.7 5-5.8 0-1.4-.4-2.7-1.1-3.8.7-.9 1.1-2.1 1.1-3.4 0-2.8-2.2-5-5-5Z"
        />
      </svg>
    ) : (
      <svg className={icon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          fill="#fb923c"
          d="M6 2v8a2.5 2.5 0 0 0 5 0V2H6zm7 0v14h2V2h-2z"
        />
        <path fill="#f97316" d="M8 2h1v8a1.5 1.5 0 0 1-3 0V2h2z" />
        <path fill="#ea580c" d="M15 2l2.5 10H15V2z" />
      </svg>
    )

  return (
    <span
      className={`inline-flex items-center justify-center rounded-xl ring-1 ${wrap} ${badgeStyles[name]} ${className}`}
    >
      {graphic}
    </span>
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
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3zm0 0v3m-6-3a6 6 0 0 0 12 0"
      />
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
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}
