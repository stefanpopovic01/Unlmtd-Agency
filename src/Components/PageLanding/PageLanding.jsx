import './PageLanding.css'
import { useRef, useEffect } from 'react';
import { animateLanding } from '../../assets/Animation/Animations';


function PageLanding({titleWords, subtitleWords, boxWords}) {

  const textRef = useRef();
  const subRef = useRef();
  const boxRef = useRef();

  useEffect(() => {
    animateLanding(textRef, subRef, boxRef);
  }, []);

  return (
    <>
        <div className='page-containter'>
            <div className='page-frame'>

              <div className='pageTittle-containter'>
                    <div className='pageTittle-box' ref={boxRef}>{boxWords}</div>
                    <h2 ref={textRef}>
                      {titleWords.map((word, i) => {
                        return (
                          <span key={i} className="pl-span">
                            {word}
                          </span>
                        );
                      })}
                    </h2>
                    <p ref={subRef}>
                      {subtitleWords.map((word, index) => (
                        <span key={index} className="plp-span">{word}</span>
                      ))}
                    </p>
              </div>
            </div>
        </div>
    </>
  )
}

export default PageLanding