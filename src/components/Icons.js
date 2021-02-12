import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// Icon Import, just use icon name from website
import {faHome, faFolder, faPlane, faEnvelope} from '@fortawesome/free-solid-svg-icons';

export const HomeIcon = () => {
    return ( 
         <FontAwesomeIcon  size="2x" icon={faHome} />
    )
}

export const PlaneIcon = () => {
    return ( 
         <FontAwesomeIcon  size="2x" icon={faPlane} />
    )
}

export const FolderIcon = () => {
    return ( 
         <FontAwesomeIcon  size="2x" icon={faFolder} />
    )
}

export const EmailIcon = () => {
    return ( 
         <FontAwesomeIcon  size="2x" icon={faEnvelope} />
    )
}

export default HomeIcon;
