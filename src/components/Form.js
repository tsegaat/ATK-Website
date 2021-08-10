import React from 'react';

const Form = () => {
    return(
            <form action="/action_page.php" target="_blank">
                <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name"/>
                <input className="w3-input w3-section w3-border" type="text" placeholder="Email" required name="Email"/>
                <input className="w3-input w3-section w3-border" type="text" placeholder="Subject" required name="Subject"/>
                <input className="w3-input w3-section w3-border" type="text" placeholder="Comment" required name="Comment"/>
                <button className="w3-button w3-black w3-section" type="submit">
                    <i className="fa fa-paper-plane"></i> SEND MESSAGE
                </button>
            </form>
    )
}

export default Form;