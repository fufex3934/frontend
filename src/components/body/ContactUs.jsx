import React,{useEffect, useState} from 'react'
import Navs from '../navbars/navs'
import Footer from './Footer'
import './css/ContactUs.css'
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai'
import axios from 'axios'
const ContactUs = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [comment,setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/feedback', {
        name,
        email,
        comment,
      });
      setName('');
      setEmail('');
      setComment('');

      console.log(response.data.message); // Log the response message
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);
  

  return (
    <>
        <Navs/>
        <div className='contact-us'>
          <div className="contact-us-info">
            <div>
              <h1 className='text-2xl font-bold text-[#3bb]'>GET IN TOUCH</h1>
            </div>
            <div>
              <a href='tel:+251-25-666-00-00'><span className='relative left-1'>Phone: +251-25-666-00-00</span></a>
            </div>
            <div>
            <a href="mailto:example@example.com"><span>Email: Hararicommunication@gmail.com</span></a>
            </div>
            <div>
            <a href="tel:0254660268"><span>Fax Number: 0254660268</span></a>
            </div>
          </div>
          <div className="contact-us-form-map">
            <div className='contact-us-form'>
              <form onSubmit={handleSubmit}>
                <h1 className='text-center mb-10 text-[#3bb] text-2xl font-serif'>Your Comment</h1>
                <div className='my-form'>
                  <input 
                  type="text" 
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  placeholder='Your Name'
                   className='my-input' 
                   required
                   />
                </div>
                <div className='my-form'>
                  <input
                   type="email"
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
                    placeholder='Your Email' 
                    className='my-input' 
                    required
                    />
                </div>
                <div className='my-form'>
                <textarea
                 rows="2" 
                 type="text" 
                 value={comment}
                 onChange={(e)=>setComment(e.target.value)}
                 placeholder='Your Comment' 
                 className='my-input'
                 required
                 />
                </div>
                <div className='my-form'>
                  <button type='submit' className='bg-transparent hover:bg-[#3bb5b5] text-[#329898] font-semibold hover:text-white py-2 px-4 border border-[#3bb5b5] hover:border-transparent rounded'>Submit</button>
                </div>
              </form>
            </div>
            <div className='location-map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7874.5420027639975!2d42.11993219085563!3d9.30923851305471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bd9e4de55b21%3A0x356aa2e25fa05727!2z4Yuo4YiQ4Yio4YiqIOGKreGIjeGIjSDhiJjhipXhjI3hiKXhibUg4Yqu4YiZ4YqS4Yqs4Yi94YqVIOGMvS_hiaThibUgSGFyYXJpIFJlZ2lvbmFsIFN0YXRlIENvbW11bmljYXRpb24gQWZmYWlycw!5e0!3m2!1snl!2snl!4v1685453121730!5m2!1snl!2snl" width="600" height="600" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default ContactUs