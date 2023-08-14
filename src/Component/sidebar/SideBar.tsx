import React, { useMemo } from 'react';
import "./sidebars.css";
import Button from '../button';
import { MdHome } from "react-icons/md";
import { MdOutlineFeed } from "react-icons/md";
import { MdLibraryMusic } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import { BiTrendingUp } from "react-icons/bi";


const SideBar = () => {

  const sidebarButton = useMemo(() =>{return [
    {
       title:"Home",
       to:"/",
       icon: <MdHome/>,
    },
    {
      title:"Trending",
      to:"/trending",
      icon: <BiTrendingUp/>,
   },
   {
    title:"Feed",
    to:"/feed",
    icon:<MdOutlineFeed />,
 },
 {
  title:"Library",
  to:"/library",
  icon: <MdLibraryMusic />,
},
{
  title:"Favourite",
  to:"/favourite",
  icon:<MdOutlineFavorite/>,
},
  ]},[]); 

  return (
    <div className='sidebar-container'>
        <img 
        src={'https://seeklogo.com/images/N/naruto-logo-DA919F8469-seeklogo.com.png'}
        alt="" 
        className='sidebar-logo'>
        </img>
        <div>
          {sidebarButton.map(button => { return <Button 
          title={button.title} 
          to={button.to} 
          icon={button.icon}></Button>})}
        
        </div>
        <div></div>
    </div>
    
  )
}

export default SideBar