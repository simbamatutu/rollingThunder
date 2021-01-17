import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/icons/CheckBox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField';

function CheckBoxExample(){
  const [checked, setChecked]=React.useState(true)
  return(
  <div>  
  
    <Checkbox
      color='primary'
      
      checked={checked}
      onchange={(e)=> setChecked(e.target.checked)}
      inputProps={{
        'aria-label': 'secondary checkbox'
      }}
    />
  
      
   </div>
  )
}
 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField
        color='secondary'
        variant='filled'
        type="text" 
        label="enter"/>
          <CheckBoxExample />
            <ButtonGroup variant="contained" color='primary'>
        
        
        <Button variant="contained"
         href='#'
        startIcon={<SaveIcon />}
            size='large'
           >

             
          Save
          </Button>

        <Button 
         href='#'
        startIcon={<DeleteIcon />}
            size='large'
         >
          Upload
          </Button>
          </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
