import './Form.css'
import { useState } from 'react';

import { motion } from 'framer-motion';

function Form() {
    
const box = "Who We Are"; 
const tittle = "Who We Are";
const desc = "At Unlmtd, we're a tight-knit team that believes great things happen when the right people see your work. We help creators and brands stand out by combining thoughtful strategy with creativity and purpose.";

const [submitted, setSubmitted] = useState(false);

const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch('https://formspree.io/f/xjkopzay', {
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

  return (

    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="who-we-are">

        <div className='form-containter'>
            <div className='form-frame'>  
                <div className='form-content'>
                    <div className='form-rect1'>
                        <div className='rect1-child1'>
                            <div className='rect1-tittle'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                    <g>
                                    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
                                    </g>
                                </svg>
                                <p>E-mail</p>
                            </div>
                            <div className='rect1-desc'>Info@unlmtd-agency.net</div>
                        </div>
                        <div className='rect1-child2'>
                            <div className='rect1-tittle'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                                    <g>
                                    <path d="M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z"></path>
                                    </g>
                                </svg>
                            <p>Phone</p>
                            </div>
                            <div className='rect1-desc'>Temporarily unavailable</div>
                        </div>
                    </div>
                    <div className='form-rect2'>
                        <form className='contact-form' onSubmit={handleSubmit}>
                        {submitted && <p className="success-message-contact">Request received. We'll contact you shortly.</p>}
                            <div className='form-group1'>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" name="name" required placeholder='Sarah'/>
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" name="surname" required placeholder='Smith'/>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" required placeholder='Sarah@mail.com' autoComplete="email"/>
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="tel" name="phone" placeholder='+1 (123) 456-7890 ' inputMode="tel"/>
                                </div>
                            </div>

                            <div className='form-group2'>
                                <div className="form-group form-group2-div">
                                    <label>Message</label>
                                    <textarea rows="4" name="message" placeholder="Hi, I am Sarah, I need help with ..." required className='form-textarea' maxLength="1000"></textarea>
                                </div>
                                <div className='form-button'><button type="submit">Submit Form</button></div>
                            </div>
                        </form>
                    </div>
                </div>           
            </div>
        </div>
        
    </motion.div>
  )
}

export default Form