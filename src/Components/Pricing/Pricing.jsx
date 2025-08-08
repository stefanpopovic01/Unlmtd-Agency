import './Pricing.css'
import { useState } from 'react';
import Tittle from '../Tittle/Tittle';
import { useRef } from 'react';
import { useScroll } from '../../Context/ScrollContext';
import { useNavigate } from 'react-router-dom';
import { useSoftRevealEffect } from '../../assets/Animation/Animations';
import { useSelectedPlan } from '../../Context/SelectedPlanContext';

function Pricing() {

  const pricingRef1 = useRef(); useSoftRevealEffect(pricingRef1, {delay: 0.3});
  const pricingRef2 = useRef(); useSoftRevealEffect(pricingRef2, {delay: 0.4});
  const pricingRef3 = useRef(); useSoftRevealEffect(pricingRef3, {delay:0.5});

  const box = "Pricing"; 
  const tittle = "The Perfect Plan, at the Perfect Price Every Time";
  const desc = "Choose a plan that fits your business needs and start growing today.";

  const [active, setActive] = useState("Fashion");
  const [price, setPrice] = useState([49, 89, 179]);

  function handleCategoryChange(option) {
    setActive(option);

    const prices = {
      Art: [39, 79, 159],
      Beauty: [39, 79, 159],
      Fashion: [49, 89, 179],
    };

    setPrice(prices[option] || [49, 89, 179]);
  }

const pricingPlans = [
  {
    ref: pricingRef1,
    title: "Basic",
    price: price[0],
    description: "Perfect for brands and creators who want to test the waters.",
    features: [
      "1 Feed post on the selected page",
      "1 Story post (24-hour visibility)",
      "Carefully crafted content and tags",
      "Support for maximum campaign impact"
    ],
    icon: "M101.85,191.14C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Zm122-144a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.4,27.07h0L88,108.7A8,8,0,0,1,76.67,97.39l26.56-26.57A4,4,0,0,0,100.41,64H74.35A15.9,15.9,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A16,16,0,0,0,192,181.65V155.59a4,4,0,0,0-6.83-2.82l-26.57,26.56a8,8,0,0,1-11.71-.42,8.2,8.2,0,0,1,.6-11.1l49.27-49.27h0C223.45,91.86,224.6,59.71,223.85,47.12Z"
,
  },
  {
    ref: pricingRef2,
    title: "Standard",
    price: price[1],
    description: "Perfect for brands and creators ready to make a stronger impression.",
    features: [
      "3 Feed posts on the selected page",
      "3 Story posts (24-hour visibility)",
      "Carefully crafted content and tags",
      "Support for maximum campaign impact"
    ],
    icon: "M213.85,125.46l-112,120a8,8,0,0,1-13.69-7l14.66-73.33L45.19,143.49a8,8,0,0,1-3-13l112-120a8,8,0,0,1,13.69,7L153.18,90.9l57.63,21.61a8,8,0,0,1,3,12.95Z"
,
  },
  {
    ref: pricingRef3,
    title: "Premium",
    price: price[2],
    description: "Perfect for brands and creators aiming for maximum reach.",
    features: [
      "7 Feed posts on the selected page",
      "7 Story posts (24-hour visibility)",
      "Carefully crafted content and tags",
      "Support for maximum campaign impact"
    ],
    icon: "M239.75,90.81c0,.11,0,.21-.07.32L217,195a16,16,0,0,1-15.72,13H54.71A16,16,0,0,1,39,195L16.32,91.13c0-.11-.05-.21-.07-.32A16,16,0,0,1,44,77.39l33.67,36.29,35.8-80.29a1,1,0,0,0,0-.1,16,16,0,0,1,29.06,0,1,1,0,0,0,0,.1l35.8,80.29L212,77.39a16,16,0,0,1,27.71,13.42Z"
,
  },
];

  const { pricingRef } = useScroll();


  const { setSelectedPlan } = useSelectedPlan();
  const navigate = useNavigate();

  return (

    <div className="component-layout scroll-margin" ref={pricingRef}>
      <div className='component-frame'>  
        <Tittle box={box} tittle={tittle} desc={desc}/>
        <div className='component-content'> 
            <div className='pricing-options'>
              <div className="pricing-toggle">
                {['Fashion', 'Art', 'Beauty'].map(option => (
                  <button
                    key={option}
                    className={active === option ? 'active' : ''}
                    onClick={() => handleCategoryChange(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className='pricing-plans'>
                {pricingPlans.map((plan, index) => (
                  <div className={`pricing-plan${index + 1}`} ref={plan.ref} key={plan.title}>
                    <div className='plan-header'>
                      <div className='plan-header-tittle'>
                        <svg viewBox="0 0 256 256" fill="rgba(255, 255, 255, 0.75)">
                          <path d={plan.icon} />
                        </svg>
                        <h4>{plan.title}</h4>
                      </div>
                      <h4 className='pricing-h4'>
                        ${plan.price} <span className='pricing-span-month'></span>
                      </h4>
                      <p>{plan.description}</p>
                    </div>

                    <div className='plan-action'>
                      <button   onClick={() => {setSelectedPlan({ page: active, package: plan.title }); setTimeout(() => {navigate("/start-now");}, 100);}}>Choose this plan</button>
                    </div>

                    <div className='plan-details'>
                      <div className='plan-details-tittle'>What's included:</div>
                      <div className='plan-details-desc'>
                        {plan.features.map((feat, i) => (
                          <div className='plan-details-desc1' key={i}>
                            <svg viewBox="0 0 256 256" fill="white">
                              <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                            </svg>
                            <p>{feat}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
      </div>
    </div>
    </div>
  );
}

export default Pricing;
