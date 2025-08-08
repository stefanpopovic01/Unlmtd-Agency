import './Testimonials.css'
import { useRef } from 'react';
import Tittle from '../Tittle/Tittle';
import { useSoftRevealEffect } from '../../assets/Animation/Animations';
import { useScroll } from '../../Context/ScrollContext';

function Testimonials() {

const box = "Testimonials"; 
const tittle = "Why Businesses Love Our Marketing Solutions";
const desc = "Real creators, real growth with our promotions.";

const ref1 = useRef(); useSoftRevealEffect(ref1, {delay: 0.3});
const ref2 = useRef(); useSoftRevealEffect(ref2, {delay: 0.4});
const ref3 = useRef(); useSoftRevealEffect(ref3, {delay: 0.5});
const ref4 = useRef(); useSoftRevealEffect(ref4, {delay: 0.6});

const {testimonialsRef} = useScroll();

const testimonialsData = [
  {
    description: "Thanks to their Instagram features, we went from 1K to 15K followers in under two weeks. The engagement boost was real, and it translated directly to sales.",
    user: "Olivia Mason",
    position: "Founder of Lumière Jewelry",
    ref: ref1
  },
  {
    description: "We've tried influencer marketing before, but nothing came close to the precision and ROI of these curated shoutouts. Authentic reach and real results.",
    user: "Marcus Dean",
    position: "Marketing Lead at UrbanFit Apparel",
    ref: ref2
  },
  {
    description: "I was skeptical at first, but the campaign they ran brought over 3,000 new followers to our page. More importantly, people actually interacted with our posts.",
    user: "Selena Torres",
    position: "Creative Director at Bloom & Root Skincare",
    ref: ref3
  },
  {
    description: "This is the first time I’ve seen consistent follower growth that didn’t drop off after a week. Highly recommend for any artist trying to get seen.",
    user: "Julian Rivers",
    position: "Visual Artist & Owner of Art Sun Studio",
    ref: ref4
  }
];


  return (
    <>
        <div className='testimonials-containter scroll-margin' ref={testimonialsRef}>
            <div className='testimonials-frame'>
        <Tittle box={box} tittle={tittle} desc={desc}/>
                <div className='testimonials-content'>
                    {testimonialsData.map((x, index) => (
                    <div className='testimonial1' ref={x.ref} key={index}>
                        <div>
                            {[...Array(5)].map((_, starIndex) => (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="white" key={starIndex}>
                                    <g>
                                        <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"/>
                                    </g>
                                </svg>
                            ))}
                        </div>
                        <p className='testimonial1-desc'>{x.description}</p>
                        <div className='testimonial1-user'>
                            <p>{x.user}</p>
                            <p>{x.position}</p>
                        </div>
                    </div>

                    ))}
                </div>
            </div>
        </div>
    </>
  );
}

export default Testimonials;

