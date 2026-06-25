import { ContactSection } from '../ContactSection'

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-surface">
      <ContactSection />
      <p className="border-t border-border/80 py-8 text-center text-sm text-muted">
        Habla con el agente como lo haría un cliente real.
      </p>
    </footer>
  )
}
