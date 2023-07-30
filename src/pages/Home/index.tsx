import { Hero } from '../../components/Hero'
import { Companies } from '../../components/Companies'
import { Features } from '../../components/Features'
import { Plus } from '../../components/Plus'
import { Services } from '../../components/Services'
import { Pricing } from '../../components/Pricing'
import { Faq } from '../../components/Faq'
import { Cta } from '../../components/Cta'

export function Home() {
  return (
    <div>
      <Hero />
      <Companies />
      <Plus />
      <Features />
      <Services />
      <Pricing />
      <Faq />
      <Cta />
    </div>
  )
}
