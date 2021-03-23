import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './_interest.scss';

const Interest = (props) => {
    return(
        <tr>
            <td><FontAwesomeIcon icon={props.icon} /></td>
            <td>{props.children}</td>
        </tr>
    );
}

export default Interest;