import { createContext, useRef, useContext } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const servicesRef = useRef();
  const pricingRef = useRef();
  const testimonialsRef = useRef();
  const aboutFeatureRef = useRef();
  const landingToServiceRef = useRef();

  const scrollTo = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ScrollContext.Provider value={{
      servicesRef,
      pricingRef,
      testimonialsRef,
      aboutFeatureRef,
      landingToServiceRef,
      scrollTo
    }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
