import type { Feature } from '../data/features'
import './FeatureCard.css'

type FeatureCardProps = Omit<Feature, 'id'> & {
  className?: string
}

export function FeatureCard({ title, description, icon, accent, className = '' }: FeatureCardProps) {
  return (
    <li className={`card card--${accent} ${className}`.trim()}>
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
      <img className="card__icon" src={icon} alt="" width={64} height={64} />
    </li>
  )
}
