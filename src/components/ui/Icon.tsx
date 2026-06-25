import { useId } from 'react'
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

/** Illustrated tooth — crown wide + 2 separate roots */
function ToothIllustration({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* Crown — wide dome, clearly a tooth top */}
      <path
        d="M5 14C5 9 9.5 5 16 5C22.5 5 27 9 27 14C27 18 25 20.5 23 20.5H9C7 20.5 5 18 5 14Z"
        fill="#BAE6FD"
        stroke="#0EA5E9"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Horizontal groove — marks the cusps */}
      <path
        d="M10 14H22"
        stroke="#7DD3FC"
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />
      {/* Left root — tapers down-left */}
      <path
        d="M9 20.5L8 29C7.8 30.3 10 30.7 10.5 29.2L13 22H9Z"
        fill="#BAE6FD"
        stroke="#0EA5E9"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Right root — tapers down-right */}
      <path
        d="M23 20.5L24 29C24.2 30.3 22 30.7 21.5 29.2L19 22H23Z"
        fill="#BAE6FD"
        stroke="#0EA5E9"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Gap fill (neck between roots) */}
      <rect x="13" y="20.5" width="6" height="2" fill="#BAE6FD" />
      {/* Shine */}
      <path
        d="M9 11C9.5 9 12 7.5 14.5 7.5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Illustrated utensils — fork (left) + knife (right) */
function UtensilsIllustration({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* ── FORK (left) ── */}
      {/* 3 tines */}
      <line x1="7"  y1="3" x2="7"  y2="12" stroke="#F59E0B" strokeWidth="2"   strokeLinecap="round" />
      <line x1="11" y1="3" x2="11" y2="12" stroke="#F59E0B" strokeWidth="2"   strokeLinecap="round" />
      <line x1="15" y1="3" x2="15" y2="12" stroke="#F59E0B" strokeWidth="2"   strokeLinecap="round" />
      {/* Base curve connecting tines to handle */}
      <path
        d="M7 12C7 14.5 9 15.5 11 15.5C13 15.5 15 14.5 15 12"
        fill="none"
        stroke="#F59E0B"
        strokeWidth="1.6"
      />
      {/* Handle */}
      <line x1="11" y1="15.5" x2="11" y2="29" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />

      {/* ── KNIFE (right) ── */}
      {/* Blade — wider right edge curving from tip to shoulder */}
      <path
        d="M21 3C21 3 26 7 26 15C26 17.5 24 19 21 19"
        fill="#FEF3C7"
        stroke="#F59E0B"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Spine / back of blade + handle */}
      <line x1="21" y1="3" x2="21" y2="29" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
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
        <UtensilsIllustration className={icon} />
      )}
    </span>
  )
}

// ─── General icons ─────────────────────────────────────────────────────────────

/** Voize app mark — purple squircle + gold waveform bars */
export function WaveformIcon({ className = 'h-5 w-5' }: { className?: string }) {
  const gradientId = `voize-gold-${useId().replace(/:/g, '')}`

  const canvas = 32
  const barWidth = 3
  const barGap = 1.5
  const heights = [8, 12, 16, 12, 8]
  const groupWidth = heights.length * barWidth + (heights.length - 1) * barGap
  const startX = (canvas - groupWidth) / 2

  const bars = heights.map((h, i) => ({
    x: startX + i * (barWidth + barGap),
    y: (canvas - h) / 2,
    h,
  }))

  return (
    <svg
      className={`aspect-square shrink-0 ${className}`}
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="16" y1="8" x2="16" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="45%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#B45309" />
        </linearGradient>
      </defs>

      <rect width="32" height="32" rx="8" fill="#4f46e5" />

      <g opacity="0.35">
        {bars.map((bar, i) => (
          <rect
            key={`shadow-${i}`}
            x={bar.x + 0.35}
            y={bar.y + 0.35}
            width={barWidth}
            height={bar.h}
            rx={1.5}
            fill="#312e81"
          />
        ))}
      </g>

      {bars.map((bar, i) => (
        <rect
          key={i}
          x={bar.x}
          y={bar.y}
          width={barWidth}
          height={bar.h}
          rx={1.5}
          fill={`url(#${gradientId})`}
        />
      ))}
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
