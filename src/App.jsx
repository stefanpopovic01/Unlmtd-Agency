import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Header from './Components/Header/Header'
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import ScrollToTop from './ScrollToTop/ScrollToTop.jsx';
import { ScrollProvider } from './Context/ScrollContext.jsx'
import Blog from './Components/Blog/Blog.jsx';
import BlogPost from './Components/Blog/BlogPost/BlogPost.jsx';
import GetInTouch from './Components/GetInTouch/GetInTouch.jsx';
import { SelectedPlanProvider } from './Context/SelectedPlanContext.jsx';

function App() {

  return (
    <>
    <SelectedPlanProvider>
    <ScrollProvider>

      <div className='app-containter'>

        <Router>
          <ScrollToTop/>
          <Header/>
          <Routes>
            
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/start-now" element={<GetInTouch/>} />

          </Routes>
          <Footer/>

        </Router>

      </div>
    
    </ScrollProvider>
    </SelectedPlanProvider>

    </>
  )
}

export default App
