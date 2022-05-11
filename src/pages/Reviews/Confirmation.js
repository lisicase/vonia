// React
import React from 'react';
// Components
import { RedirectButton, Logo } from "../../StyleElements";
// Icons
import { AiOutlineClose } from 'react-icons/ai';

export default function ReviewConfirmation() {
    const url = window.location.href;
    const brId = url.substring(url.length - 2, url.length);

    return (
        <div>
            <div style={{ textAlign: "right" }}>
                <RedirectButton redirectTo={"/bathroom/" + brId} button={<AiOutlineClose size={30} />} />
            </div>
            <div style={{textAlign:'center', paddingTop:'2rem'}}>
                <h1>Thank you for submitting a review!</h1>
                <h2>Your review will be added shortly.</h2>
            </div>
            <Logo />
        </div>
    );
}