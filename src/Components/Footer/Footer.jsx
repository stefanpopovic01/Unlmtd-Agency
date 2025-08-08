import './Footer.css'
import logo from '../../assets/logo1.png';
import { Link } from 'react-router-dom';

import { useScroll } from '../../Context/ScrollContext';

function Footer() {

const { scrollTo, servicesRef, pricingRef, testimonialsRef, aboutFeatureRef } = useScroll();

  return (
    <>
        <div className='footer-containter'>
            <div className='footer-frame'>
                <div className='footer-content1'>
                    <div className='footer-half1'>
                        <div className='half1-frame'>
                        <div className='footer-logo'><Link to="/"><img src={logo}/><h6>UNLMTD AGENCY</h6></Link></div>
                        <p>Unlmtd Agency – Amplify Your Brand, <br/>Dominate Instagram, and Turn Reach into Revenue.</p>
                        </div>

                    </div>
                    <div className='footer-half2'>
                        <div className='footer-half2-child'>
                            <p>Links</p>
                            <ul>
                            <li onClick={() => scrollTo(servicesRef)}>Services</li>
                            <li onClick={() => scrollTo(aboutFeatureRef)}>About feature</li>
                            <li onClick={() => scrollTo(pricingRef)}>Pricing</li>
                            <li onClick={() => scrollTo(testimonialsRef)}>Testimonials</li>
                            </ul>
                        </div>
                        <div className='footer-half2-child'>
                            <p>Pages</p>
                            <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className='footer-half2-child'>
                            <p>Socials</p>
                            <ul>
                            <li><a href="https://www.instagram.com/fashioncollageofficial?igsh=OWltdHo5a2pjMzZz" target="_blank">Fashion Collage</a></li>
                            <li><a href="https://www.instagram.com/theartverseofficial?igsh=MWZyZ2NqdW1yaHprbA==" target="_blank">The Art Verse</a></li>
                            <li><a href="https://www.instagram.com/theessentialbeautyofficial?igsh=N3Bwc3lvcncyN3g1" target="_blank">Essential Beauty</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='footer-content2'><p>© 2025 Unlmtd Agency. All rights reserved.</p></div>
            </div>
        </div>
    </>
  );
}

export default Footer;

