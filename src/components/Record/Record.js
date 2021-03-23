import React from 'react';
import './_record.scss';

const Record = (props) => {
    return(
        <div className="record">
            <a href={props.link} target="blank"><h3>{props.title}</h3></a>
            <span>{props.date}</span>
            {props.children}
        </div>
    );
}

export default Record;