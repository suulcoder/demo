import { forwardRef, type ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-cta text-white hover:bg-cta-hover focus-visible:ring-cta/40',
  secondary:
    'border border-border bg-transparent text-zinc-100 hover:border-accent/40 hover:bg-surface-muted/50',
  ghost: 'text-muted hover:bg-surface-muted/60 hover:text-zinc-100',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', className = '', children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={`inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-50 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
})
