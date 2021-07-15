import React, {useState, useRef} from 'react';

// Icon Import 
 import {HomeIcon, FolderIcon, PlaneIcon, EmailIcon} from './Icons';



// External imports
import Fade from 'react-reveal';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import {Link} from 'react-router-dom';
import { Checkbox } from 'semantic-ui-react'




const NavBarComp = () => {
  const [visible, setIsVisible] = useState(true);
  const box = useRef(null);

    const collapseHandler = (e) => {
      
       e.preventDefault();
      if(visible) {
        setIsVisible(false);
        box.current.className = 'side-logo';
       
      } else {
        setIsVisible(true)
        box.current.className = null;
      }
    }
    return (
<header>        
      <ProSidebar className="sidebar" collapsed={visible}  toggled={true} breakPoint='sm'  width='200px'>
      <SidebarHeader>
        <img src="https://res.cloudinary.com/dyew1z2ms/image/upload/v1626275129/Portfolio/Logo-smaller_4_130x130_wy9iwn.jpg" 
        alt="logo"
         className=""
         ref={box}/>
      <Checkbox
        className="side-check"  
        toggle
        onChange={collapseHandler}/>
      </SidebarHeader>
      <SidebarContent className='side-content'>
        <Menu iconShape="square">
       
     <MenuItem icon={<HomeIcon />}>Home
     <Link to="/" />
     </MenuItem>

     <MenuItem icon={<FolderIcon />} >
       Portfolio
      <Link to="/portfolio" />
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