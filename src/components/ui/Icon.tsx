import type { AgentConfig } from '../../types/agent'

interface IconProps {
  name: AgentConfig['icon']
  className?: string
}

export function SectorIcon({ name, className = 'h-6 w-6' }: IconProps) {
  if (name === 'tooth') {
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
          d="M12 3c-2.5 0-4.5 2-4.5 4.5 0 1.2.4 2.3 1.1 3.2-.8 1.2-1.3 2.6-1.3 4.1 0 3.3 2.2 6.2 5.2 6.2.8 0 1.5-.2 2.2-.5.7.3 1.4.5 2.2.5 3 0 5.2-2.9 5.2-6.2 0-1.5-.5-2.9-1.3-4.1.7-.9 1.1-2 1.1-3.2C16.5 5 14.5 3 12 3z"
        />
      </svg>
    )
  }

  if (name === 'scissors') {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        aria-hidden="true"
      >
        <circle cx="6" cy="7" r="2.5" />
        <circle cx="6" cy="17" r="2.5" />
        <path strokeLinecap="round" d="M8.5 8.5L20 20M8.5 15.5L20 4" />
      </svg>
    )
  }

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
        d="M4 11h16M4 11c0-1.5 1.5-3 3.5-3S11 9.5 11 11M4 11v6c0 1.5 1.5 3 3.5 3S11 17.5 11 16v-5M20 11c0-1.5-1.5-3-3.5-3S13 9.5 13 11m7 0v6c0 1.5-1.5 3-3.5 3S13 17.5 13 16v-5M11 11V8"
      />
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
