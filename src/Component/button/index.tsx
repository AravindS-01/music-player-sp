import React, { useMemo } from 'react'
import "./button.css";
import {IconContext} from "react-icons";
import { Link, useLocation } from 'react-router-dom';

const Button = (props: { title: string; to: string; icon: any }) => {
    const {title , to, icon} =props;
    const location = useLocation();
    const isActive = useMemo(() =>location.pathname === to,[location.pathname, to]);
    const btnCls = isActive ? 'btn-active' : 'button-container'; 
  return (
    <>
    <Link to={to}>
    <div className={btnCls}>
        <IconContext.Provider value ={{size:'24px' , className:'btn-icon'}}>
    {icon}
    <p className='button-title'>{title}</p>
    </IconContext.Provider>
    </div>
    </Link>

    </>
  )
}

export default Button;