import React from 'react';
import './navbar.css';
import logo from '../../assets/logo2.png';
import contactImg from '../../assets/contact4.png';
import {Link} from 'react-scroll';
import menu from'../../assets/menu1.png';
import { useState } from 'react';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo' />
            <div className="desktopMenu">
                <Link activeClass= 'active' to= 'intro' spy= {true} smooth= {true} offset= {-100} duration= {500} className= "desktopMenuListItem">Intro</Link>
                <Link activeClass= 'active' to= 'skills' spy= {true} smooth= {true} offset= {-50} duration= {500}className="desktopMenuListItem">Skills</Link>
                <Link activeClass= 'active' to= 'work' spy= {true} smooth= {true} offset= {-50} duration= {500}className="desktopMenuListItem">works</Link>
                <Link activeClass= 'active' to= 'contact' spy= {true} smooth= {true} offset= {-50} duration= {500}className="desktopMenuListItem">Contact </Link>
            </div>        
                
            
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('Contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt="Contact" className="desktopMenuImg" />Contact Me</button>
            
                 <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass= 'active' to= 'intro' spy= {true} smooth= {true} offset= {-100} duration= {500} className= "ListItem"onClick={()=>setShowMenu(!showMenu)}>Intro</Link>
                <Link activeClass= 'active' to= 'skills' spy= {true} smooth= {true} offset= {-50} duration= {500}className="ListItem"onClick={()=>setShowMenu(!showMenu)}>Skills</Link>
                <Link activeClass= 'active' to= 'work' spy= {true} smooth= {true} offset= {-50} duration= {500}className="ListItem"onClick={()=>setShowMenu(!showMenu)}>works</Link>
                <Link activeClass= 'active' to= 'contact' spy= {true} smooth= {true} offset= {-50} duration= {500}className="ListItem"onClick={()=>setShowMenu(!showMenu)}>Contact </Link>
                
            </div>        
        </nav>
    )
}

export default Navbar;