import './WhoWeAre.css'
import Tittle from '../../Tittle/Tittle';

import { useSoftRevealEffect } from '../../../assets/Animation/Animations';
import { useRef } from 'react';

import { motion } from 'framer-motion';

function WhoWeAre() {
    
const box = "Who We Are"; 
const tittle = "Who We Are";
const desc = "At Unlmtd, we're a tight-knit team that believes great things happen when the right people see your work. We help creators and brands stand out by combining thoughtful strategy with creativity and purpose.";

const ref1 = useRef(); useSoftRevealEffect(ref1, {delay: 0.3});
const ref2 = useRef(); useSoftRevealEffect(ref2, {delay: 0.4});
const ref3 = useRef(); useSoftRevealEffect(ref3, {delay: 0.5});
  return (

    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="who-we-are">

        <div className='wwa-containter'>
            <div className='wwa-frame'>
                <Tittle box={box} tittle={tittle} desc={desc}/>    
                <div className='wwa-content'>
                    <div className='wwa-box' ref={ref1}>
                        <div className='wwa-tittle'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                <g>
                                <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16h8V136a8,8,0,0,1,8-8H72a8,8,0,0,1,8,8v64H96V88a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V200h16V40a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8V200h8A8,8,0,0,1,232,208Z" />
                                </g>
                            </svg>
                            <p>150+ Creators</p>
                        </div>
                        <div className='wwa-desc'>Creators have increased their follower growth and reach using<br/> our services.</div>
                    </div>
                    <div className='wwa-box' ref={ref2}>
                        <div className='wwa-tittle'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                <g>
                                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z" />
                                </g>
                            </svg>
                            <p>Swift & Steady</p>
                        </div>
                        <div className='wwa-desc'>From initial contact to going live, we move quickly and communicate clearly — always on time.</div>
                    </div>
                    <div className='wwa-box' ref={ref3}>
                        <div className='wwa-tittle'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                <g>
                                <path d="M213.85,125.46l-112,120a8,8,0,0,1-13.69-7l14.66-73.33L45.19,143.49a8,8,0,0,1-3-13l112-120a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95Z"></path>
                                </g>
                            </svg>
                            <p>Fast Niche Focus</p>
                        </div>
                        <div className='wwa-desc'>From bold fashion brands to emerging artists, we help creators get seen in the right spaces.</div>
                    </div>
                    
                </div>           

            </div>
        </div>
        
    </motion.div>
  )
}

export default WhoWeAre