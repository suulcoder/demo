import { useState } from 'react'
import { AgentDemoPanel } from './components/AgentDemoPanel'
import { AgentGrid } from './components/AgentGrid'
import { Hero } from './components/Hero'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import type { AgentConfig } from './types/agent'

function App() {
  const [selectedAgent, setSelectedAgent] = useState<AgentConfig | null>(null)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <AgentGrid onSelectAgent={setSelectedAgent} />
      </main>
      <Footer />

      {selectedAgent && (
        <AgentDemoPanel agent={selectedAgent} onClose={() => setSelectedAgent(null)} />
      )}
    </>
  )
}

export default App
