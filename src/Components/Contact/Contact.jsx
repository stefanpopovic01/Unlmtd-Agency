import './Contact.css'
import PageLanding from '../PageLanding/PageLanding';
import Form from './Form/Form';

function Contact() {

  const boxWords = "Contact"
  const titleWords = ["Connect", "With", "Our", "Team"];
  const subtitleWords = ["Have", "questions", "or", "need", "our", "solutions?", "Let", "us", "know", "by", "filling", "out", "the", "form,", "and", "we’ll", "be", "in", "touch!"];
           
  return (
    <>
        <div className='contact-containter'>

          <PageLanding titleWords={titleWords} subtitleWords={subtitleWords} boxWords={boxWords}/>
          <Form/>


        </div>
    </>
  )
}

export default Contact