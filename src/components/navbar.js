import React, {useState} from 'react';

// Icon Import 
 import {HomeIcon, FolderIcon, PlaneIcon, EmailIcon} from './Icons';



// External imports
import Fade from 'react-reveal';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import {Link} from 'react-router-dom';
import { Checkbox } from 'semantic-ui-react'


const NavBarComp = () => {
  const [visible, setIsVisible] = useState(true);
    const collapseHandler = (e) => {
       e.preventDefault();
      if(visible) {
        setIsVisible(false);
      } else {
        setIsVisible(true)
      }
    }
    return (
<header>
          <Fade top>
              <div className="row position-fixed company-col" id="test">
                <div className=" col-sm col-xs col-md col-lg col-xl ">
                    <h5 className="company-logo">August Shah</h5>
                    <h5 className="company-contact"> <a href="tel:443-681-9485">443-681-9485</a> || <a
                            href="mailto:augustshah@02pilot.com">augustshah@02pilot.com</a> </h5>
                </div>
            </div>
          </Fade>
          
      
      <ProSidebar className="sidebar" collapsed={visible}  toggled={true} breakPoint='sm'>
      <SidebarHeader>
        <h1>02DesignStudio</h1>
      <Checkbox  toggle onChange={collapseHandler}/>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
       
     <MenuItem icon={<HomeIcon />}>Home
     <Link to="/" />
     </MenuItem>

     <MenuItem icon={<FolderIcon />} >
       Portfolio
      <Link to="/portfolio" />
     </MenuItem>


     <MenuItem icon={<PlaneIcon />}>
       Aviation
      <Link to="/aviation-time" />
     </MenuItem>

  
     <MenuItem icon={<EmailIcon />}>
       Contact Us
      <Link to="/contact" />
     </MenuItem>

     
  </Menu>
      </SidebarContent>

</ProSidebar>
        
    
</header>

    )
}
export default NavBarComp;