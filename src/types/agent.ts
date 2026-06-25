export type AgentSector = 'dental' | 'restaurant'

export interface AgentConfig {
  id: AgentSector
  agentId: string
  title: string
  description: string
  highlights: string[]
  icon: 'tooth' | 'utensils'
}
