import './Values.css'
import Tittle from '../../Tittle/Tittle';
import { useSoftRevealEffect } from '../../../assets/Animation/Animations';
import { useRef } from 'react';

function Values() {
    
const box = "Our Values"; 
const tittle = "The Values Behind Us";
const desc = "Everything we do is grounded in our values — transparency, consistency, and a genuine drive to help creators grow and connect with the right audience in meaningful ways.";

const ref1 = useRef(); useSoftRevealEffect(ref1, {delay: 0.2});
const ref2 = useRef(); useSoftRevealEffect(ref2, {delay: 0.3});
const ref3 = useRef(); useSoftRevealEffect(ref3, {delay: 0.4});
const ref4 = useRef(); useSoftRevealEffect(ref4, {delay: 0.5});

  return (
    <>
        <div className='values-containter'>
            <div className='values-frame'>
                <Tittle box={box} tittle={tittle} desc={desc}/>    
                <div className='values-content'>
                   <div className='values-content-box' ref={ref1}>
                        <div className='box-tittle'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                <g>
                                <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-32.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"></path>
                                </g>
                            </svg>
                            <p>Driving Innovation Forward</p>
                        </div>
                        <div className='boxs-desc'>We constantly explore new ideas and tools to keep our campaigns fresh, relevant, and always in step with the latest trends.</div>
                   </div>
                   <div className='values-content-box' ref={ref2}>
                        <div className='box-tittle'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                <g>
                                <path d="M254.3,107.91,228.78,56.85a16,16,0,0,0-21.47-7.15L182.44,62.13,130.05,48.27a8.14,8.14,0,0,0-4.1,0L73.56,62.13,48.69,49.7a16,16,0,0,0-21.47,7.15L1.7,107.9a16,16,0,0,0,7.15,21.47l27,13.51,55.49,39.63a8.06,8.06,0,0,0,2.71,1.25l64,16a8,8,0,0,0,7.6-2.1l40-40,15.08-15.08,26.42-13.21a16,16,0,0,0,7.15-21.46Zm-54.89,33.37L165,113.72a8,8,0,0,0-10.68.61C136.51,132.27,116.66,130,104,122L147.24,80h31.81l27.21,54.41Zm-41.87,41.86L99.42,168.61l-49.2-35.14,28-56L128,64.28l9.8,2.59-45,43.68-.08.09a16,16,0,0,0,2.72,24.81c20.56,13.13,45.37,11,64.91-5L188,152.66Zm-25.72,34.8a8,8,0,0,1-7.75,6.06,8.13,8.13,0,0,1-1.95-.24L80.41,213.33a7.89,7.89,0,0,1-2.71-1.25L51.35,193.26a8,8,0,0,1,9.3-13l25.11,17.94L126,208.24A8,8,0,0,1,131.82,217.94Z"></path>
                                </g>
                            </svg>
                            <p>Committed to Integrity & Trust</p>
                        </div>
                        <div className='boxs-desc'>Trust and transparency are at the core of everything we do for our clients, from how we communicate to how we deliver results.</div>
                   </div>
                   <div className='values-content-box' ref={ref3}>
                        <div className='box-tittle'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                <g>
                                <path d="M101.85,191.14C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Zm122-144a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.4,27.07h0L88,108.7A8,8,0,0,1,76.67,97.39l26.56-26.57A4,4,0,0,0,100.41,64H74.35A15.9,15.9,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A16,16,0,0,0,192,181.65V155.59a4,4,0,0,0-6.83-2.82l-26.57,26.56a8,8,0,0,1-11.71-.42,8.2,8.2,0,0,1,.6-11.1l49.27-49.27h0C223.45,91.86,224.6,59.71,223.85,47.12Z"></path>
                                </g>
                            </svg>
                            <p>Empowering Creators Growth</p>
                        </div>
                        <div className='boxs-desc'>We help brands grow by creating targeted exposure that drives engagement, long-term visibility, and meaningful audience connections.</div>
                   </div>
                   <div className='values-content-box' ref={ref4}>
                        <div className='box-tittle'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                <g>
                                <path d="M164.47,195.63a8,8,0,0,1-6.7,12.37H10.23a8,8,0,0,1-6.7-12.37,95.83,95.83,0,0,1,47.22-37.71,60,60,0,1,1,66.5,0A95.83,95.83,0,0,1,164.47,195.63Zm87.91-.15a95.87,95.87,0,0,0-47.13-37.56A60,60,0,0,0,144.7,54.59a4,4,0,0,0-1.33,6A75.83,75.83,0,0,1,147,150.53a4,4,0,0,0,1.07,5.53,112.32,112.32,0,0,1,29.85,30.83,23.92,23.92,0,0,1,3.65,16.47,4,4,0,0,0,3.95,4.64h60.3a8,8,0,0,0,7.73-5.93A8.22,8.22,0,0,0,252.38,195.48Z"></path>
                                </g>
                            </svg>
                            <p>Putting Customers First</p>
                        </div>
                        <div className='boxs-desc'>We prioritize our clients in everything we do — listening, adapting, and delivering campaigns that reflect their unique goals and vision.</div>
                   </div>
                </div>           
            </div>
        </div>
    </>
  )
}

export default Values