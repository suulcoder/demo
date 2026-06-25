import { forwardRef, type ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'demo'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-cta text-white hover:bg-cta-hover shadow-sm focus-visible:ring-slate-900/30',
  secondary:
    'border border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50 shadow-sm focus-visible:ring-slate-400/30',
  ghost:
    'text-slate-500 hover:bg-slate-100 hover:text-slate-800 focus-visible:ring-slate-400/30',
  demo:
    'bg-accent text-white hover:bg-accent-hover shadow-md shadow-accent/25 focus-visible:ring-accent/40',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', className = '', children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={`inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
})
