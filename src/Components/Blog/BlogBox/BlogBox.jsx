import './BlogBox.css'
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAnimationEffect } from '../../../assets/Animation/Animations';
import { blogPosts } from '../../../Blogs/BlogData';

function BlogBox() {
    
const box = "Who We Are"; 
const tittle = "Who We Are";
const desc = "At Unlmtd, we're a tight-knit team that believes great things happen when the right people see your work. We help creators and brands stand out by combining thoughtful strategy with creativity and purpose.";

const ref = useRef(); useAnimationEffect(ref);
const navigate = useNavigate();

  return (

    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="who-we-are">
        <div className='blogBox-containter'>
            <div className='blogBox-frame'>
                <div className='blogBox-content' ref={ref}>
                    {blogPosts.map((x, index) => (
                        <div className='blogBox-content-child' key={x.slug}onClick={() => navigate(`/blog/${x.slug}`)}>
                            <div className='bb-image'><img src={x.img}/></div>
                            <div className='bb-box'>{x.type}</div>
                            <div className='bb-desc'><p>{x.title}</p></div>
                        </div>
                    ))}
                </div>           
            </div>
        </div>
    </motion.div>
  )
}

export default BlogBox