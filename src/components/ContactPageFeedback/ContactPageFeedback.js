import React from 'react';
import './_contactPageFeedback.scss';

const Feedback = (props) => {
    let feedbackMessage = null;
    let feedbackClass = "hide";

    if(props.isNameValid && props.isEmailValid && props.isMessageValid) {
        feedbackMessage = "Your message has been sent successfully.";
        feedbackClass = "confirm";
    }
    else if(!props.isNameValid){
        feedbackMessage = "Please enter a valid name.";
        feedbackClass = "error";
    }
    else if(!props.isEmailValid){
        feedbackMessage = "Please enter a valid email.";
        feedbackClass = "error";
    }
    else if(!props.isMessageValid){
        feedbackMessage = "Your message should contain at least 20 characters.";
        feedbackClass = "error";
    }

    return(
        <div className={feedbackClass}>
            <p>{feedbackMessage}</p>
        </div>
    );
}

export default Feedback;