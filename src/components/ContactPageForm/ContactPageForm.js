import React, {Component} from 'react';
import { createBrowserHistory } from 'history';
import axios from '../../axios-messages';
import Input from '../ContactPageInput/ContactPageInput';
import Feedback from '../ContactPageFeedback/ContactPageFeedback';
import Button from '../ContactPageButton/ContactPageButton';
import './_contactPageForm.scss';

class ContactForm extends Component {
    constructor(props){
        super(props);
        this.feedback = null;
    }
    state = {
        contactForm: {
            name: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Enter your name."
                },
                value: "",
                label: "Name :",
                valid: false
            },
            email: {
                elementType: "input",
                elementConfig: {
                    type: "email",
                    placeholder: "Enter your email."
                },
                value: "",
                label: "Email :",
                valid: false
            },
            message: {
                elementType: "textarea",
                elementConfig: {
                    placeholder: "Write your message here and I will hit you back."
                },
                value: "",
                label: "Message :",
                valid: false
            }
        },
        showFeedback: false
    }

    inputChangedHandler = (event, inputID) => {
        //Handling input changes and update values
        this.setState(state => {
            const updatedForm = {
                ...state.contactForm
            };
            const updatedElement = {
                ...updatedForm[inputID]
            };
            updatedElement.value = event.target.value;
            updatedForm[inputID] = updatedElement;
            return {
                contactForm: updatedForm
            };
        });
    }

    formValidation = () =>{
        const emailPattern = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
        let submittedForm = {
            ...this.state.contactForm
        };
        let nameInput = submittedForm.name;
        let emailInput = submittedForm.email;
        let messageInput = submittedForm.message;

        //Set default states for validation if user wants to send message again 
        nameInput.valid = false;
        messageInput.valid = false;
        emailInput.valid = false;
        
        //Name must be more than 3 characters
        if(nameInput.value.trim().length > 2){
            nameInput.valid = true;
        }
        //Message must be more than 10 characters
        if(messageInput.value.trim().length > 10){
            messageInput.valid = true;
        }
        //Email or phone must match the regular expressions
        if(emailPattern.test(emailInput.value)){
            emailInput.valid = true;
        }
        //Refresh the form after submission
        if(nameInput.valid && emailInput.valid && messageInput.valid){
            const message = {
                name: this.state.contactForm.name.value,
                email: this.state.contactForm.email.value,
                text: this.state.contactForm.message.value
            }
            axios.post('/messages.json', message)
                .then(response => console.log(response))
                .catch(error => console.log(error));
            
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
        }
        this.setState({contactForm: submittedForm, showFeedback: true});
        this.feedback = (
            <Feedback isNameValid={this.state.contactForm.name.valid}
                        isEmailValid = {this.state.contactForm.email.valid}
                        isMessageValid = {this.state.contactForm.message.valid} />
        );   
    }

    cancelHandler = () => {
        let history = createBrowserHistory();
        history.goBack();
    }

    render(){
        let formElementsArray = [];
        for(let key in this.state.contactForm){
            formElementsArray.push({
                id: key,
                config: this.state.contactForm[key]
            })
        }

        let form = (
            <form>
                {formElementsArray.map(formElement => (
                    <Input 
                        key = {formElement.id}
                        elementType = {formElement.config.elementType}
                        elementConfig = {formElement.config.elementConfig}
                        value = {formElement.config.value}
                        label = {formElement.config.label}
                        changed = {(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
            </form>
        );

        return(
            <div className="contact-form">
                <h1>Contact</h1>
                <p>If you wish to contact me, make sure to write your message in the provided text area and 
                    fill out name and email field for making it possible to hit back. Thank you!</p>
                {this.feedback}
                {form}
                <div>
                    <Button clicked={this.cancelHandler} style="cancel">Cancel</Button>
                    <Button clicked={this.formValidation} style="submit">Submit</Button>                    
                </div>
            </div>
        );
    }
}

export default ContactForm;