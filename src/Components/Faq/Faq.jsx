import './Faq.css'
import Tittle from '../Tittle/Tittle'
import { useRef } from 'react';
import { useState } from 'react';
import { useSoftRevealEffect, useAnimationEffect } from '../../assets/Animation/Animations';
import { useNavigate } from 'react-router-dom';

function Faq() {

    const box = "FAQs"; 
    const tittle = "We’ve Got the Answers You’re Looking For";
    const desc = "Quick answers to your marketing questions.";

    const faqData = [
      {
        id: 0,
        question: "How does a feature work?",
        answer: "We promote your content on a targeted Instagram page from our network. People who resonate with your brand will naturally follow and engage - often leading to real sales."
      },
      {
        id: 1,
        question: "What is a Feature and what does it include?",
        answer: "A Feature is a paid promotion that includes both a feed post and a story on the selected Instagram page, showcasing your brand to a highly relevant audience."
      },
      {
        id: 2,
        question: "When will my post go live?",
        answer: " Most posts go live within 24–48 hours after payment, unless a different time is scheduled by mutual agreement."
      },
      {
        id: 3,
        question: "Do I need to provide the content, or can you create it?",
        answer: "You’re welcome to send your own content, or we can select visuals and captions directly from your Instagram profile that best match the page's aesthetic."
      },
      {
        id: 4,
        question: "How will the posts be spaced out over time?",
        answer: "We typically post one post per day over 3 or 7 consecutive days, depending on the package. However, we can adjust the schedule to match your preferences."
      }
    ];

  const [openQuestions, setOpenQuestions] = useState([]);
  const navigate = useNavigate();

  const toggleQuestion = (id) => {
    setOpenQuestions((prev) =>
      prev.includes(id)
        ? prev.filter((q) => q !== id) 
        : [...prev, id]                
    );
  };

  const ref1 = useRef(); useAnimationEffect(ref1);
  const ref2 = useRef(); useSoftRevealEffect(ref2);

  return (
    <>
        <div className='faq-container'>
            <div className='faq-frame'>
                <Tittle box={box} tittle={tittle} desc={desc}/>
                <div className='faq-content'>
                    <div className='faq-questions' ref={ref1}>
                      {faqData.map((item, index) => (
                          <div className='faq-question1' onClick={() => toggleQuestion(item.id)} key={item.id}>
                              <div className='faq-question1-tittle'>{item.question}</div>
                              {openQuestions.includes(item.id) && (
                                  <div className='faq-question1-answer fade-in'>{item.answer}</div>
                              )}
                          </div>
                      ))}
                    </div>
                    <div className='faq-getintouch' ref={ref2}>
                        <h5>Let Us do the Work so <br/>you can Scale Faster</h5>
                        <h6>Get in Touch Today and Start Growing.</h6>
                        <button onClick={() => navigate('/start-now')}>Start now<i className="fa-solid fa-arrow-up-right-from-square"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Faq