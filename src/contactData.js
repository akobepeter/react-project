
import {MdOutlineMail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';

export const contactData = [
 {
     icon: <MdOutlineMail/>,
     text:'Email',
     subtext:'mrpeterakobe@gmail.com',
     link:"mailto:mrpeterakobe@gmail.com",
     linkText: 'Send a message',
    target:'_blank'   
 },
 {
    icon: <RiMessengerLine/>,
    text:'Messenger',
    subtext:'akobepeter',
    link:"#",
    linkText: 'Send a message'
 },
 {
    icon: <BsWhatsapp/>,
    text:'Whatsapp',
    subtext:'+123-5678-490',
    link:"https://api.whatsapp.com/send?phone=+23409121365966",
    linkText: 'Send a message',
    target:'_blank'
},

];