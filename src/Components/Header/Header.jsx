import './Header.css'
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { animateHeaderElements } from '../../assets/Animation/Animations';
import logo from '../../assets/logo1.png';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Header({ scrollToLanding }) {

  const xRef = useRef();
  const menuRef = useRef();

  const navigate = useNavigate();
  
  const [icon, setIcon] = useState(true);

function setX() {

  if (!icon) {
    gsap.to(menuRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        gsap.to(xRef.current, {
          opacity: 0,
          scale: 0.8,
          rotate: -90,
          duration: 0.3,
          onComplete: () => {
            setIcon(true);
            gsap.fromTo(
              xRef.current,
              { opacity: 0, scale: 0.8, rotate: 90 },
              { opacity: 1, scale: 1, rotate: 0, duration: 0.3, ease: 'power2.out' }
            );
          }
        });
      }
    });
  } else {
    gsap.to(xRef.current, {
      opacity: 0,
      scale: 0.8,
      rotate: -90,
      duration: 0.3,
      onComplete: () => {
        setIcon(false);
        gsap.fromTo(
          xRef.current,
          { opacity: 0, scale: 0.8, rotate: 90 },
          { opacity: 1, scale: 1, rotate: 0, duration: 0.3, ease: 'power2.out' }
        );

        gsap.fromTo(
          menuRef.current,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
        );
      }
    });
  }
}

  const textRef = useRef();
  const subtitleRef = useRef();
  const iconRef = useRef();

  useEffect(() => {
    animateHeaderElements(textRef, subtitleRef, iconRef);
  }, []);


  // Ensures the mobile menu closes when navigating to a new page

  const location = useLocation();

  useEffect(() => {
    setIcon(true);
  }, [location.pathname]);


  return (
    <>
        <div className='header-containter'>
            {!icon && (
                <div className='phone-menu' ref={menuRef}>
                  <div className='phone-menu-frame'>
                      <div className='pm-button1'><Link to="/">Home</Link></div>
                      <div className='pm-button1'><Link to="/about">About</Link></div>
                      <div className='pm-button1'><Link to="/blog">Blog</Link></div>
                      <div className='pm-button1'><Link to="/contact">Contact</Link></div>
                      <div className='pm-button2'><button onClick={() => navigate('/start-now')}>Start now <i className="fa-solid fa-arrow-up-right-from-square"></i> </button></div>
                  </div>
                </div> 
            )}  
            <div className='header-frame'>
                    <div className='header1' ref={textRef} onClick={() => navigate('/')}><img src={logo}/><h1>UNLMTD AGENCY</h1></div>
                    <div className='header2' ref={iconRef}><i ref={xRef} onClick={setX} className={icon ? 'fa-solid fa-bars' : 'fa-solid fa-x'}></i></div>
                    <div className='header3' ref={subtitleRef} >
                        <div className='header-button1'><Link to="/">Home</Link></div>
                        <div className='header-button1'><Link to="/about">About</Link></div>
                        <div className='header-button1'><Link to="/blog">Blog</Link></div>
                        <div className='header-button1'><Link to="/contact">Contact</Link></div>
                        <div className='header-button2' onClick={() => navigate('/start-now')}>Start now</div>
                    </div>
            </div>
        </div>
    </>
  )
}

export default Header