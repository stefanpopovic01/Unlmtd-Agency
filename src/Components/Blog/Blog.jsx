import './Blog.css'

import PageLanding from '../PageLanding/PageLanding';
import BlogBox from './BlogBox/BlogBox';

function Blog() {

  const boxWord = "Blog"
  const titleWords = ["Master", "Instagram", "Growth"];
  const subtitleWords = ["Stay", "informed", "with", "the", "latest", "trends,", "insights,", "and", "strategies", "to", "grow", "your", "Instagram", "the", "right", "way."];
           
  return (
    <>
        <div className='blog-containter'>

          <PageLanding titleWords={titleWords} subtitleWords={subtitleWords} boxWords={boxWord}/>
          <BlogBox/>

        </div>
    </>
  )
}

export default Blog