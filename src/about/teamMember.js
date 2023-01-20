import * as React from 'react';
import { Dialog, IconButton } from "@material-ui/core";
import close from "./img/close.png";

export default function TeamMember(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="team-grid-item">
            <div className="team-grid-img-wrap" onClick={handleClickOpen}>
                <img src={props.img} alt="Team Member" />
                {/* Overlay */}
                <div className="team-grid-item-overlay">
                <span>BIO</span>
            </div>
            </div>
            <h4 className="team-grid-name">{props.name}</h4>
            <p>{props.title}</p>
            <Dialog 
                open={open}
                onClose={handleClose}
                >
                    <img src={close} alt="Close" className="bio-dialog-close" onClick={handleClose} />
                    <div className="bio-dialog">
                        <h3>{props.name}</h3>
                        <p>{props.title}</p>
                        <hr />
                        <p className="new-line-fix">{props.bio}</p>
                    </div>
            </Dialog>
        </div>
    );
  }