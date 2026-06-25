import { ContactSection } from '../ContactSection'

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <p className="py-8 text-center text-sm text-muted">
        Habla con el agente como lo haría un cliente real.
      </p>
      <ContactSection />
    </footer>
  )
}
