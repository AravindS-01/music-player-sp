import React, { useEffect, useState } from 'react'
import { setClientToken } from '../../spotify';
import Login from '../login';
import SideBar from '../sidebar/SideBar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    const [token,setToken] = useState("");

    useEffect(() => {
      const token = window.localStorage.getItem("token");
      const hash = window.location.hash;
      window.location.hash=""; 
      if(!token && hash){
        const _token = hash.split("&")[0].split("=")[1];
        window.localStorage.setItem("token",_token);
        setToken(_token);
        setClientToken(_token);
        console.log("_token",_token)
      }
      else {
        setToken(token!);
        setClientToken(token!);
        console.log("token",token)
      }
    }, [])
    
  
    return ( !token ? <Login/>  :
       <div className="App">
      <SideBar/> 
     
      <div className='main-container'>
         <Outlet/>
      </div>
    </div>
      
    );
}

export default Home;
