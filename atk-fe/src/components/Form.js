import React from 'react';


const Form = () => {
    const nameRef = React.createRef();
    const emailRef = React.createRef();
    const subjectRef = React.createRef();
    const commentRef = React.createRef();

    // const sendMessageHandler = (e) => {
    //     // e.preventDefault();
    //     const name = nameRef.current.value
    //     const email = emailRef.current.value
    //     const subject = subjectRef.current.value
    //     const comment = commentRef.current.value

    //     const data = {
    //         name: name,
    //         email: email,
    //         subject: subject,
    //         comment: comment
    //     }

    //     // $('form').on('submit', (e) => {
    //     //     $.post('/email', data, function() {
    //     //         console.log('Server recieved our data');
    //     //     });
    //     // });

    //     // Do some stuff and let the user send you an email
    //     console.log(nameRef.current.value)
    // }

    return(
            <form action="http://localhost:8000/email" target="_blank" method="POST">
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