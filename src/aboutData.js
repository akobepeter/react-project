import {FaAward} from 'react-icons/fa';
import{FiUsers} from 'react-icons/fi';
import {VscFolderOpened} from 'react-icons/vsc';

export const aboutDataTitle = [
    {
        id:1,
        title:'Get To Know',
        subTitle:'About Me'
    }
];

export const aboutDataInfo = [
    {  id:1,
        icon:<FaAward/>,
        title:'Experience',
        progress: '2+ years Working'
    },
    {    id:2,
        icon:<FiUsers/>,
        title:'Clients',
        progress: '200+ Worldwide'   
    },
    {    id:3,
        icon:<VscFolderOpened/>,
        title:'Projects',
        progress:'80+ Completed Projects'
    }
];