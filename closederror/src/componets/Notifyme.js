import React, { Component } from "react";
const Notifyme = () => {
    return (
        <div className="notify">
            <input type='email' class='mail' placeholder='Enter email to be notified..' value='email' />
            <input type='button' class='btn' value='Notify Me!' name='Notify' />

        </div>
    );
}

export default Notifyme

