import './Tittle.css'
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useAnimationEffect} from '../../assets/Animation/Animations';

gsap.registerPlugin(ScrollTrigger);

function Tittle({box, tittle, desc}) {

  const tittleRef = useRef(); useAnimationEffect(tittleRef);
 
  return (
    <>
      <div className='tittle-containter' ref={tittleRef}>
            <div className='tittle-box'>{box}</div>
            <h2>{tittle}</h2>
            <p>{desc}</p>
      </div>
    </>
  );
}

export default Tittle;

