import './GetInTouch.css'
import PageLanding from '../PageLanding/PageLanding';
import StartNowForm from './StartNowForm/StartNowForm';

function GetInTouch() {

  const boxWords = "Start Now"
  const titleWords = ["Let’s", "Get", "Started", "Today"];
  const subtitleWords = ["Fill", "in", "your", "details", "to", "book", "your", "feature", "and", "we’ll", "reach", "out", "to", "guide", "you", "through", "the", "final", "easy", "setup", "steps."];

           
  return (
    <>
        <div className='getintouch-containter'>
            <PageLanding titleWords={titleWords} subtitleWords={subtitleWords} boxWords={boxWords}/>
            <StartNowForm/>

        </div>
    </>
  )
}

export default GetInTouch

