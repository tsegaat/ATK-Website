import React from 'react';


const Form = () => {
    const nameRef = React.createRef();
    const emailRef = React.createRef();
    const subjectRef = React.createRef();
    const commentRef = React.createRef();

    return(
            <form action="/email" target="_blank" method="POST">
                <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name" ref={nameRef}/>
                <input className="w3-input w3-section w3-border" type="text" placeholder="Email" required name="Email" ref={emailRef}/>
                <input className="w3-input w3-section w3-border" type="text" placeholder="Subject" required name="Subject" ref={subjectRef}/>
                <input className="w3-input w3-section w3-border" type="text" placeholder="Comment" required name="Comment" ref={commentRef}/>
                <button className="w3-button w3-black w3-section" type="submit">
                    <i className="fa fa-paper-plane"></i> SEND MESSAGE
                </button>
            </form>
    )
}

export default Form;