import React, { Component } from "react";
 
import {FormControl, InputGroup, Button}from 'react-bootstrap';

 

const Notifyme = ()=>{
    return(
   <div className="notify">
      <InputGroup className="mb-3">
            <FormControl
            type="Email"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
             <Button variant="outline-secondary">Button</Button>
  </InputGroup>
   </div>
    );
}

export default Notifyme

 