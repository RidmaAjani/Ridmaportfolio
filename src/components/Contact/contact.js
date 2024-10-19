import React,{useRef} from "react";
import './contact.css';
import emailjs from '@emailjs/browser';


const Contact=() => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_bcwyt8q', 'template_1f7mzdi', form.current, {
            publicKey: 'PRrGIgGDqh5ZU5ZBYSGdY',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
 
    
      
    
    return (
        <section id="contactPage">
            <div id="about">
                <h1 className="contactPageTitle">About Me<center/></h1>
                <p className="aboutDesc">
                  I am a web developer undergraduate at the Sri Lanka Institute of Advanced Technological Education (SLIATE). My technical expertise spans across languages such as C#,Java,HTML,CSS,PHP & JavaScript, with experience in popular frameworks like React & Node.js.I have developed  web applications, focusing on creating efficient,scalable & user-friendly solutions. With a strong foundation in database management, particularly SQL, I thrive on solving real-world problems through innovative technology. I am passionate about collaborating in fast-paced team environments, learning from peers & contributing to cutting-edge projects.My goal is to continuously improve my skills while working on meaningful projects that impact users positively. 
                </p>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name="from_name"/>
                    <input type= "email" className="email" placeholder='Your Email' name="from_email"/>
                    
                    <textarea name= "msg" className="msg" placeholder='Your Message'></textarea> 
                    <button type='submit' value='Send' className="submitBtn">submit</button>
                </form>   
            </div>
        </section>
    );  
            
}               
             
    


export default Contact;