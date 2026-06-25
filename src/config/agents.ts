import type { AgentConfig } from '../types/agent'

export const AGENTS: AgentConfig[] = [
  {
    id: 'dental',
    agentId: 'agent_1701kvxsr07yehw9vfvqa3mmda17',
    title: 'Clínicas dentales',
    description:
      'Agenda citas, responde preguntas frecuentes y da la bienvenida a pacientes las 24 horas.',
    highlights: ['Agendar y cancelar citas', 'Información de procedimientos', 'Recordatorios'],
    icon: 'tooth',
  },
  {
    id: 'restaurant',
    agentId: 'agent_9901kvz62gqrek09cghsvr7pm7pj',
    title: 'Restaurantes',
    description:
      'Toma reservas, explica el menú y atiende consultas de horarios sin saturar al personal.',
    highlights: ['Reservas', 'Menú del día', 'Horarios y ubicación'],
    icon: 'utensils',
  },
]

export function getAgentById(id: string): AgentConfig | undefined {
  return AGENTS.find((agent) => agent.id === id)
}
