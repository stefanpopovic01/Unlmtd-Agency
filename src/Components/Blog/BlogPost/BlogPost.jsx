import './BlogPost.css'
import { useParams } from 'react-router-dom'
import { blogPosts } from '../../../Blogs/BlogData';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAnimationEffect } from '../../../assets/Animation/Animations';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
const markdownFiles = import.meta.glob('../../../Blogs/*.md');

function BlogPost() {
    
    const ref = useRef(); useAnimationEffect(ref);
const { slug } = useParams();

const post = blogPosts.find((p) => p.slug === slug);



  const [content, setContent] = useState('');

  useEffect(() => {
    const path = `../../../Blogs/${slug}.md`;
    const importer = markdownFiles[path];

    if (!importer) {
      setContent('# 404\nPost not found.');
      return;
    }

    importer().then((mod) => {
      fetch(mod.default)
        .then((res) => res.text())
        .then((text) => setContent(text));
    });
  }, [slug]);


  return (

        <div className='blogPost-containter'>
            <div className='blogPost-frame' ref={ref}>
                <div className='blogPost-content'>
        <div className='blog-back'><Link to="/blog"><i class="fa-solid fa-arrow-left"></i>Go back</Link></div>
      <ReactMarkdown>{content}</ReactMarkdown>
                </div>           
            </div>
        </div>
  )
}

export default BlogPost