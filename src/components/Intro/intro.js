import React from 'react';
import './intro.css';
import bg from '../../assets/image5.png.jpg';
import btnImg from '../../assets/hire.png';
import {Link} from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Ridma Ajani</span><br/>Website Designer</span>
                <Link><button className='btn'><img src={btnImg} alt='hire me' className='btnImg'/>Hire Me</button></Link>
            </div>
            <img src={bg} alt="profile" className="bg"/>
        </section>
    );
}

export default Intro;