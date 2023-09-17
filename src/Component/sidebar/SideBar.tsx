import React, { useEffect, useMemo, useState } from 'react';
import "./sidebars.css";
import Button from '../button';
import { MdHome } from "react-icons/md";
import { MdOutlineFeed } from "react-icons/md";
import { MdLibraryMusic } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import { BiTrendingUp } from "react-icons/bi";
import apiClient from '../../spotify';


const SideBar = () => {
  const [img,setImage] = useState('https://seeklogo.com/images/N/naruto-logo-DA919F8469-seeklogo.com.png')

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

      // "me" => api path to get the current user Profile
    // Refer : https://developer.spotify.com/documentation/web-api/reference/get-current-users-profile;
  useEffect(() =>{
    apiClient.get("me").then((res) =>{
      res.data?.images.length && setImage(res.data?.images[0].url);
   console.log(res);
    })
  },[]);

  return (
    <div className='sidebar-container'>
        <img 
        src={img}
        alt="" 
        className='sidebar-logo'>
        </img>
        <div>
          {sidebarButton.map(button => { return <Button 
          key={button.to}
          title={button.title} 
          to={button.to} 
          icon={button.icon}></Button>})}
        
        </div>
        <div></div>
    </div>
    
  )
}

export default SideBar