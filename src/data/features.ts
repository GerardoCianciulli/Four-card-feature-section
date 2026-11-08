import supervisorIcon from '../../assets/images/icon-supervisor.svg'
import teamBuilderIcon from '../../assets/images/icon-team-builder.svg'
import karmaIcon from '../../assets/images/icon-karma.svg'
import calculatorIcon from '../../assets/images/icon-calculator.svg'

export type Accent = 'cyan' | 'red' | 'orange' | 'blue'

export type Feature = {
  id: 'supervisor' | 'team-builder' | 'karma' | 'calculator'
  title: string
  description: string
  icon: string
  accent: Accent
}

export const features: Feature[] = [
  {
    id: 'supervisor',
    title: 'Supervisor',
    description: 'Monitors activity to identify project roadblocks',
    icon: supervisorIcon,
    accent: 'cyan',
  },
  {
    id: 'team-builder',
    title: 'Team Builder',
    description: 'Scans our talent network to create the optimal team for your project',
    icon: teamBuilderIcon,
    accent: 'red',
  },
  {
    id: 'karma',
    title: 'Karma',
    description: 'Regularly evaluates our talent to ensure quality',
    icon: karmaIcon,
    accent: 'orange',
  },
  {
    id: 'calculator',
    title: 'Calculator',
    description: 'Uses data from past projects to provide better delivery estimates',
    icon: calculatorIcon,
    accent: 'blue',
  },
]
