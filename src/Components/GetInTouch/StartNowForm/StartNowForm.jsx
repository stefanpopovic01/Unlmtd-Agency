import './StartNowForm.css'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useSelectedPlan } from '../../../Context/SelectedPlanContext';
import { useEffect } from 'react';

function StartNowForm() {

  const [selectedPage, setSelectedPage] = useState('fashion');
  
  const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch('https://formspree.io/f/xvgqvkbg', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: data,
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert('Something went wrong. Please try again.');
    }
  };


  const pricingOptions = {
    fashion: [
      { name: 'Basic', price: '$49' },
      { name: 'Standard', price: '$89' },
      { name: 'Premium', price: '$179' },
    ],
    art: [
      { name: 'Basic', price: '$39' },
      { name: 'Standard', price: '$79' },
      { name: 'Premium', price: '$159' },
    ],
    beauty: [
      { name: 'Basic', price: '$39' },
      { name: 'Standard', price: '$79' },
      { name: 'Premium', price: '$159' },
    ],
  };                            

const { selectedPlan } = useSelectedPlan();
const [selectedPackage, setSelectedPackage] = useState('');

useEffect(() => {
  console.log('selectedPlan:', selectedPlan);
  if (selectedPlan) {
    setSelectedPage(selectedPlan.page.toLowerCase());
      setSelectedPackage(selectedPlan.package);
  }
}, [selectedPlan]);


    
  return (

    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="who-we-are">

        <div className='startNowForm-containter'>
            <div className='startNowForm-frame'>  
                <div className='startNowForm-content'>
                  <form className='startNowForm-form' onSubmit={handleSubmit}>
                    {submitted && <p className="success-message">Request received. We'll contact you shortly.</p>}
                      <div className='snf-inputWrapper'>
                          <div className="snf-group">
                                <label>Name</label>
                                <input type="text" name="name" required placeholder='Sarah'/>
                          </div>
                          <div className="snf-group">
                                <label>Instagram</label>
                                <input type="text" name="instagram" required placeholder='@fashioncollageofficial'/>
                          </div>
                          <div className="snf-group">
                                <label>Email</label>
                                <input type="email" name="email" required placeholder='Sarah@mail.com'/>
                          </div>
                      </div>
                      <div className='snf-buttonWrapper'>
                        <div className='snf-pageSelector'>
                            <div className='snf-page'>
                              <p className='snf-page-tittle'>Select page type</p>
                              <div className='snf-input'>
                                <label>
                                <input type="radio" name="page" value="fashion" onChange={(e) => setSelectedPage(e.target.value)} checked={selectedPage === 'fashion'}/>
                                <p>Fashion Collage</p>
                                </label>
                              </div>
                              <div className='snf-input'>
                                <label>
                                <input type="radio" name="page" value="art" onChange={(e) => setSelectedPage(e.target.value)} checked={selectedPage === 'art'}/>
                                <p>Art Verse</p>
                                </label>
                              </div>
                              <div className='snf-input'>
                                <label>
                                <input type="radio" name="page" value="beauty" onChange={(e) => setSelectedPage(e.target.value)} checked={selectedPage === 'beauty'}/>
                                <p>Essential Beauty</p>
                                </label>
                              </div>
                            </div>
                            <div className='snf-package'>
                              <p className='snf-page-tittle'>Select plan type</p>
                              {pricingOptions[selectedPage].map((plan, index) => (
                                <div className='snf-input' key={index}>
                                  <label>
                                    <input type="radio" name="price" value={plan.name} checked={selectedPackage === plan.name} onChange={(e) => setSelectedPackage(e.target.value)} />
                                    <p>{plan.name} / {plan.price}</p>
                                  </label>
                                </div>
                              ))}
                            </div>
                        </div>
                        <div className='snf-submitt'>
                            <div className='snf-group2'>
                                <div className="snf-group snf-group2-div">
                                    <label>Note</label>
                                    <textarea rows="4" name="message" placeholder="Hi, I am Sarah and I ..."  className='snf-textarea' maxLength="1000"></textarea>
                                </div>
                                <div className='snf-button'><button type="submit">Submit Form</button></div>
                            </div>                          
                        </div>
                      </div>
                  </form>

                </div>           
            </div>
        </div>
        
    </motion.div>
  )
}

export default StartNowForm