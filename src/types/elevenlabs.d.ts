import type { DetailedHTMLProps, HTMLAttributes } from 'react'

type ElevenLabsConvaiProps = HTMLAttributes<HTMLElement> & {
  'agent-id'?: string
  variant?: 'compact' | 'expanded'
  'start-call-text'?: string
  'end-call-text'?: string
  'action-text'?: string
  'avatar-orb-color-1'?: string
  'avatar-orb-color-2'?: string
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': DetailedHTMLProps<ElevenLabsConvaiProps, HTMLElement>
    }
  }
}
