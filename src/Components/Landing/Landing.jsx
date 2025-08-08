import './Landing.css'
import { useEffect, useRef } from 'react';
import { animateLanding } from '../../assets/Animation/Animations';
import { useNavigate } from 'react-router-dom';
import { useScroll } from '../../Context/ScrollContext';

function Landing() {

  const textRef = useRef();
  const subRef = useRef();
  const textRef1 = useRef();
  const textRef2 = useRef();

  useEffect(() => {
    animateLanding(textRef, subRef, textRef1, textRef2);
  }, []);

  const titleWords = ["Your", "Brand", "<brMedia>", "was", "Simply", "<br>", "Made", "<brMedia>", "to", "Be", "Seen."];
  const subtitleWords = ["Bringing", "your", "story", "to", "the", "people", "<brMedia>", "who", "matter"];

  const { scrollTo, landingToServiceRef } = useScroll();
  const navigate = useNavigate();

  return (
    <>
      <div className='landing-containter'>

          <video autoPlay loop muted playsInline preload="auto" className='background-video'>
              <source src="background.mp4" type="video/mp4" /> Your browser does not support the video tag.
          </video>
          
        <div className='landing-frame'>
            <div className='landing-content'>
              {/* <img className='infinity-img' src={infinity}/> */}
              <div className="circle-wrapper">
                  <div className="big-circle"></div>
                  <div className="small-circle"></div>
              </div>

              <div className='l-c2'>

                <div className='landing-div'>
                  <div className='ld1' ref={textRef2}>
                      <div className='ld2'>New</div>
                      <div className='ld3'>Instagram marketing era.</div>
                  </div>
                </div>

                <h1 ref={textRef} className="landing-title">
                  {titleWords.map((word, i) => {
                    if (word === "<br>") return <br key={i} className="break" />;
                    if (word === "<brMedia>") return <br key={i} className="breakMedia" />;
                    return (
                      <span key={i} className="word-span">
                        {word}
                      </span>
                    );
                  })}
                </h1>

                <p ref={subRef}>
                  {subtitleWords.map((word, index) =>
                    word === "<brMedia>" ? (
                      <br key={index} className="breakMedia" />
                    ) : (
                      <span key={index} className="inline-span">{word}</span>
                    )
                  )}
                </p>

                <div className='landing-buttons' ref={textRef1}>
                    <button onClick={() => navigate('/start-now')}>Start now</button>
                    <button onClick={() => scrollTo(landingToServiceRef)}>View services</button>
                </div>
                
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Landing