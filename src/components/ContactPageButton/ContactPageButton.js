import React from 'react';
import './_contactPageButton.scss';

const ContactButton = (props) => {
    return(
        <button onClick={props.clicked} className={props.style} type="button">{props.children}</button>
    );
}

export default ContactButton;