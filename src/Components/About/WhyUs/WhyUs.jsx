import './WhyUs.css'
import Tittle from '../../Tittle/Tittle';
import { useSoftRevealEffect } from '../../../assets/Animation/Animations';
import { useRef } from 'react';

function WhyUs() {
    
const box = "Why Us"; 
const tittle = "What makes Us Stand out in the Industry";
const desc = "Discover how our innovative strategies, data-driven decisions, and focus on meaningful results make us stand out from typical shoutout services.";

const cons = ["No audience targeting", "Basic, repetitive promotions", "Accept any brand, no filter", "Little to no client input", "Low accountability"];
const pros = ["Niche-specific promotion", "Trend-aware, engaging campaigns", "We work only with brands we believe in", "Collaborative and client-first", "Transparent and growth-driven"];

const ref1 = useRef(); useSoftRevealEffect(ref1, {delay: 0.2});
const ref2 = useRef(); useSoftRevealEffect(ref2, {delay: 0.3});

  return (
    <>
        <div className='why-containter'>
            <div className='why-frame'>
                <Tittle box={box} tittle={tittle} desc={desc}/>    
                <div className='why-content'>
                    <div className='why-box why-box-one' ref={ref1}>
                        <div className='why-box-tittle'>The Usual Approach</div>
                        <div className='why-box-desc'>
                            {cons.map((feat, i) => (
                                <div className='why-details' key={i}>
                                    <svg viewBox="0 0 256 256" fill="white">
                                        <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path>
                                    </svg>
                                    <p>{feat}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='why-box why-box-two' ref={ref2}>
                        <div className='why-box-tittle'>Our Approach</div>
                        <div className='why-box-desc'>
                            {pros.map((feat, i) => (
                                <div className='why-details' key={i}>
                                    <svg viewBox="0 0 256 256" fill="white">
                                        <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                                    </svg>
                                    <p>{feat}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>           
            </div>
        </div>
    </>
  )
}

export default WhyUs