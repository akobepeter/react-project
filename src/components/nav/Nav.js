import {React,useState} from 'react';
import './nav.css';
import {FaHome} from 'react-icons/fa';
import {BiUser} from 'react-icons/bi';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine,RiMessage2Line} from 'react-icons/ri';



const Nav = () => {
  const [activeNav,setActiveNav] = useState('#');

  return (
   <nav>
     <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#' ? 'active' : ''}>
       <FaHome/>
     </a>
     <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
       <BiUser/>
     </a>
     <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
       <BiBook/>
     </a>
     <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>
       <RiServiceLine/>
     </a>
     <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
       <RiMessage2Line/>
     </a>
   </nav>
  )
}

export default Nav
