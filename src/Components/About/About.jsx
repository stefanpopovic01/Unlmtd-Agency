import './About.css'
import Faq from '../Faq/Faq'
import PageLanding from '../PageLanding/PageLanding'
import WhoWeAre from './WhoWeAre/WhoWeAre'
import Values from './Values/Values'
import WhyUs from './WhyUs/WhyUs'

function About() {

  const boxWords = "About Us"
  const titleWords = ["Helping", "Businesses", "Grow"];
  const subtitleWords = ["Unlmtd", "Agency", "helps", "creators", "and", "brands", "grow", "their", "presence", "and", "reach", "new", "audiences", "through", "sponsored", "posts."];

           
  return (
    <>
        <div className='about-containter'>

          <PageLanding titleWords={titleWords} subtitleWords={subtitleWords} boxWords={boxWords}/>
          <WhoWeAre/>
          <Values/>
          <WhyUs/>
          <Faq/>

        </div>
    </>
  )
}

export default About