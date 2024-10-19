import React from "react";
import './work.css';
import picture1 from '../../assets/p1.png.jpg';
import picture6 from '../../assets/p6.png.jpg';
import picture7 from '../../assets/new1.png';
import picture8 from '../../assets/new2.png';
import picture9 from '../../assets/new3.png';
import picture10 from '../../assets/piture10.png';



const Works = () => {
    return(
        <section id='work'>
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="workDesc">I take pride in paying attention to the smallest details & making sure that my work is pixel perfect.</span>
            <span className="workDesc">I am excited to bring my skills & experience to help businesses achieve their goals & create a strong online presence.</span>
            
            <div className="worksImgs">
                <img src={picture1} alt="" className="worksImg"/>
                <img src={picture7} alt="" className="worksImg"/>
                <img src={picture6} alt="" className="worksImg"/>
                <img src={picture8} alt="" className="worksImg"/>
                <img src={picture9} alt="" className="worksImg"/>
                <img src={picture10} alt="" className="worksImg"/>
            </div>    
        </section>         

            
    );
}

export default Works;
 