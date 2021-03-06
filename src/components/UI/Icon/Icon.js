import React from 'react';
import "./_icon.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = (props) => {
    return (
        <a className="socialMedia-links" href={props.link} target="_blank">
            <i className={props.style}><FontAwesomeIcon icon={props.icon} /></i>
        </a>        
    );
}

export default Icon;