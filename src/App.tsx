import { FeatureCard } from './components/FeatureCard'
import { features } from './data/features'
import './App.css'

function App() {
  return (
    <main>
      <h1 className="visually-hidden">Four card feature section</h1>

      <section className="features" aria-labelledby="features-title">
        <header className="features__header">
          <h2 className="features__title" id="features-title">
            <span className="features__title-light">Reliable, efficient delivery</span>
            <span className="features__title-bold">Powered by Technology</span>
          </h2>
          <p className="features__intro">
            Our Artificial Intelligence powered tools use millions of project data points to ensure
            that your project is successful
          </p>
        </header>

        <ul className="features__list">
          {features.map(({ id, ...feature }) => (
            <FeatureCard key={id} {...feature} className={`features__item--${id}`} />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
