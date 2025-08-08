import './AboutFeature.css'
import aest from '../../assets/aest.png';
import Tittle from '../Tittle/Tittle';
import { useRef } from 'react';
import {useAnimationEffect} from '../../assets/Animation/Animations';
import { useScroll } from '../../Context/ScrollContext';

function Feature() {

    const box = "About Feature"; 
    const tittle = "See What a Feature Includes, Step by Step";
    const desc = "Each feature is designed to boost your brand’s reach and visibility.";

    const contentRef = useRef(); useAnimationEffect(contentRef);
    const { aboutFeatureRef } = useScroll();

  return (
        <>
            <div className='feature-containter scroll-margin' ref={aboutFeatureRef}>
                <div className='feature-frame'>

                    <Tittle box={box} tittle={tittle} desc={desc}/>

                    <div className='feature-content' ref={contentRef}>
                        <div className='feature-image'><img src={aest} alt="Instagram feature example for brands"/></div>
                        <div className='feature-desc'>
                            <div className='f-desc-tittle'>Expand Audience</div>
                            <div className='fdp'>
                                <a href="#" target="_blank">Inside a Feature</a>
                                <p className='fdp-p'>A feature is a sponsored post shared on our Instagram page. It includes both a feed post and a story post, giving your content maximum reach.</p>
                                <p className='fdp-p'>The content is carefully selected together with you – from the visuals and message, to the call-to-action, hashtags, and keywords.</p>
                                <p className='fdp-p'>We craft every caption to speak to your target audience, and post at the time when they are most active.</p>
                            </div>
                            <div className='feature-impact'>
                                <p className='fip'>Impact: </p>
                                <ul>
                                    <li>Increased Followers</li>
                                    <li>Massive Reach</li>
                                    <li>More Sales & Leads</li>
                                    <li>Higher Engagement</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
  )
}

export default Feature