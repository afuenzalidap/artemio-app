import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { menuList } from '../localdb/menu'

export const MenuItem = () => {


    let element = menuList.map(({data, submenu}, index) => {
        return submenu.map(({item, link, icon}, subIndex) => {
            if(subIndex == 0){
                return <>
                    <li key={`${data}_${index}`} className="nav-small-cap">
                        <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                        <span className="hide-menu">{data}</span>
                    </li>
                    <li key={`${item}_${subIndex}`} className="sidebar-item">
                        <NavLink 
                            className='sidebar-link sidebartoggler'
                            to={link}>
                            <span>
                                <i className={icon}></i>
                            </span>
                            <span className="hide-menu">{item}</span>
                        </NavLink>
                    </li>
                </>
            }else{
                return <li key={`${item}_${subIndex}`} className="sidebar-item">
                        <NavLink 
                            className='sidebar-link sidebartoggler'
                            to={link}>
                            <span>
                                <i className={icon}></i>
                            </span>
                            <span className="hide-menu">{item}</span>
                        </NavLink>
                    </li>
            }
        })
    });

    return (
        <>
            {element}
        </>
    )
}
