import './Services.css'
import Tittle from '../Tittle/Tittle';
import { useRef } from 'react';
import { useAnimationEffect } from '../../assets/Animation/Animations';

import { useScroll } from '../../Context/ScrollContext';

function Services() {

    const contentRef = useRef(); useAnimationEffect(contentRef);

    const box = "Our Services"; 
    const tittle = "Instagram Growth to Take Your Brand to the Next Level.";
    const desc = "We help your brand grow with shoutouts across our top-performing Instagram pages.";

    const { servicesRef } = useScroll();

    const { landingToServiceRef } = useScroll();

   return (
    <>
        <div className='services-containter scroll-margin' ref={servicesRef}>
            <div className='services-frame scroll-margin' ref={landingToServiceRef}>

                <Tittle box={box} tittle={tittle} desc={desc}/>
                <div className='services-content' ref={contentRef}>

                    <div className='services-page1'>
                        <div className='sp-video'>
                            <video autoPlay muted loop playsInline className='services-fashion'>
                                <source src="fashion1.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className='sp-desc'>
                            <div className='sp-desc-tittle'>Grow Fast</div>
                            <a href="https://www.instagram.com/fashioncollageofficial?igsh=OWltdHo5a2pjMzZz" target="_blank">Feature on Fashion Collage</a>
                            <p>Perfect for fashion, beauty, jewelry, and lifestyle brands looking to grow their reach, build engagement, and connect with people who love style, self-care, and meaningful aesthetics.</p>
                            <div className='sp-desc-button'>
                                <div>Millions Reached</div>
                                <div>500+ features</div>
                            </div>
                        </div>
                    </div>

                    <div className='services-page1 artpage'>
                        <div className='sp-desc'>
                            <div className='sp-desc-tittle'>Grow Fast</div>
                            <a href="https://www.instagram.com/theartverseofficial?igsh=MWZyZ2NqdW1yaHprbA==" target="_blank">Feature on The Art Verse</a>
                            <p>Perfect for artists, photographers, and creatives looking to share their work with an audience that values art, photography, and interior design inspiration.</p>
                            <div className='sp-desc-button'>
                                <div>Millions Reached</div>
                                <div>200+ features</div>
                            </div>
                        </div>
                        <div className='sp-video'>
                            <video autoPlay muted loop playsInline className='services-fashion'>
                                <source src="art.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <div className='services-page1 beautypage'>
                        <div className='sp-video'>
                            <video autoPlay muted loop playsInline className='services-fashion'>
                                <source src="beauty.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>        
                        <div className='sp-desc'>
                            <div className='sp-desc-tittle'>Grow Fast</div>
                            <a href="https://www.instagram.com/theessentialbeautyofficial?igsh=N3Bwc3lvcncyN3g1" target="_blank">Feature on Essential Beauty</a>
                            <p>Perfect for beauty brands, makeup artists, wellness creators, and anyone sharing self-care, skincare, mindset, and lifestyle content designed to inspire confidence and well-being.</p>
                            <div className='sp-desc-button'>
                                <div>Millions Reached</div>
                                <div>50+ features</div>
                            </div>
                        </div>                                
                    </div>
            
                </div>

            </div>
        </div>
    </>
  )
}

export default Services