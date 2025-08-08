import './GetInTouch.css'
import PageLanding from '../PageLanding/PageLanding';
import StartNowForm from './StartNowForm/StartNowForm';

function GetInTouch() {

  const boxWords = "Start Now"
  const titleWords = ["Let’s", "Get", "Started"];
  const subtitleWords = ["Fill", "in", "your", "details", "to", "book", "your", "feature", "and", "we’ll", "reach", "out", "for", "the", "final", "setup", "steps."];

           
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

