import React, {useState, useRef} from 'react';

// Icon Import 
 import {HomeIcon, FolderIcon, PlaneIcon, EmailIcon} from './Icons';



// External imports
import Fade from 'react-reveal';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
import {Link} from 'react-router-dom';
import { Checkbox } from 'semantic-ui-react'


const NavBarComp = (props) => {
  const {toggled, setToggled} = props;

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
    const onCloseMobileMenu = () => {
      setToggled(false);
    }
    return (
    <ProSidebar className="sidebar" collapsed={!toggled && visible}  toggled={toggled} width={200} breakPoint="xs" onToggle={onCloseMobileMenu}>
      <SidebarHeader>
        <img src="https://res.cloudinary.com/dyew1z2ms/image/upload/c_scale,w_82/v1606430221/Portfolio/logo-site_fvm91j.png" 
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
            <Link to="/" onClick={onCloseMobileMenu} />
          </MenuItem>

          <MenuItem icon={<FolderIcon />} >
            Portfolio
            <Link to="/portfolio" onClick={onCloseMobileMenu} />
          </MenuItem>


          <MenuItem icon={<PlaneIcon />}>
            Aviation
            <Link to="/aviation-time" onClick={onCloseMobileMenu} />
          </MenuItem>

        
          <MenuItem icon={<EmailIcon />}>
            Contact Us
            <Link to="/contact" onClick={onCloseMobileMenu}/>
          </MenuItem>

          
        </Menu>
      </SidebarContent>

    </ProSidebar>
      
    )
}
export default NavBarComp;