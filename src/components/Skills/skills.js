import React from 'react';
import './skills.css';
import HTML from '../../assets/html1.png';
import CSS from '../../assets/css.png';
import JavaScript from'../../assets/js.png';
import PHP from '../../assets/php.png';
import Photoshop from '../../assets/pho.png';
import Java from '../../assets/java.png';





const Skills = () => {
    return (
        <section id='skills'>
           <span className="skillTitle">My Skills</span>
           <div className="skillBars">
            <div className="skillBar">
                <img src={HTML} alt="HTML" className="skillBarImg"/>
                <div className="skillBarText">
                   <h2>HTML</h2>
                   <h2>80%</h2> 
                </div>
                 
            </div>
            <div className="skillBar">
                <img src={CSS} alt="CSS" className="skillBarImg"/>
                <div className="skillBarText">
                   <h2>CSS</h2> 
                   <h2>85%</h2>
                </div>
                 
            </div>
            <div className="skillBar">
                <img src={JavaScript} alt="JavaScript" className="skillBarImg"/>
                <div className="skillBarText">
                   <h2>JavaScript</h2>
                   <h2>60%</h2> 
                </div>
                 
            </div>
            <div className="skillBar">
                <img src={PHP} alt="PHP" className="skillBarImg"/>
                <div className="skillBarText">
                   <h2>PHP</h2>
                   <h2>70%</h2> 
                </div>
                 
            </div>
            
            <div className="skillBar">
                <img src={Java} alt="Java" className="skillBarImg"/>
                <div className="skillBarText">
                   <h2>Java</h2> 
                   <h2>80%</h2>
                </div>
                 
            </div>
            <div className="skillBar">
                <img src={Photoshop} alt="Photoshop" className="skillBarImg"/>
                <div className="skillBarText">
                   <h2>Photoshop</h2>
                   <h2>60%</h2> 
                </div>
             </div>    
            </div>
           
        </section>
    );
}

export default Skills;