import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuItem } from './MenuItem';



export const Sidebar = () => {

  return (
    <aside className="left-sidebar">
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <Link 
                className="text-nowrap logo-img"
                to="/"
            >
                {/* <img src="../src/assets/images/logos/dark-logo.svg" width="180" alt="" /> */}
                <img src="../src/assets/images/logos/artemio.png" width="180" alt="" />
          </Link>
          <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
            <i className="ti ti-x fs-8"></i>
          </div>
        </div>
        <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
          <ul id="sidebarnav">
            <MenuItem />
          </ul>
        </nav>
      </div>
    </aside>
  );
}
