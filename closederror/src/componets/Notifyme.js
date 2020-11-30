import React, { Component } from "react";
const Notifyme = () => {
    return (
        <div className="notify">
            <input type='Email' class='mail' placeholder='Enter email to get notified..' />
            <input type='button' class='btn' value='Notify Me!' name='Notify' />

        </div>
    );
}

export default Notifyme

