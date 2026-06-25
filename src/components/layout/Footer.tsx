import { ContactSection } from '../ContactSection'
import { ImpactSection } from '../ImpactSection'

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface-elevated/20">
      <ImpactSection />
      <ContactSection />
      <p className="border-t border-border/60 px-6 py-8 text-center text-sm text-muted">
        Habla con el agente como lo haría un cliente real.
      </p>
    </footer>
  )
}
