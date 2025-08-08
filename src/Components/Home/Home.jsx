import './Home.css'
import Landing from '../Landing/Landing'
import Services from '../Services/Services'
import Feature from '../AboutFeature/AboutFeature'
import Pricing from '../Pricing/Pricing'
import Testimonials from '../Testimonials/Testimonials'
import Faq from '../Faq/Faq'

function Home() {

  return (
    <>
      <div className='home-containter'>

        <div>
          <Landing/>
        </div>

        <div>
          <Services />
        </div>

        <div>
            <Feature/>
        </div>

        <div>
          <Pricing/>
        </div>

        <div>
          <Testimonials/>
        </div>
        
        <div>
          <Faq/>          
        </div>
        
      </div>
    </>
  )
}

export default Home