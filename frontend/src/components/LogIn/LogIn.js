import React, { useState }  from "react";
import { TextField, Button , Card } from '@material-ui/core';
import "./LogIn.css";
import Typography from '@material-ui/core/Typography';
import userIcon from '../../images/log-in/userIcon.jpg';
import { Component } from 'react';



class LogIn extends Component{
  constructor (){
    super();
  }

  render(){
    return(

      <div className = "wrapper-login" >
  
        <Card className = "card-login">
  
          <Typography variant="h3" component="h3" gutterBottom> Review Insight  </Typography>

          <div className = "container-login">
            
            <div className= 'tf-login'><img src={userIcon} alt="userIcon" height="150px" /></div>
  
            <div className = "tf-login" >
              <TextField  id="username"   label="User Name"    variant="outlined"    color="secondary"  />
            </div>
      
            <div className = "tf-login" >
              <TextField    id="password"  type="password"  label="Password"    variant="outlined"    color="secondary"  />
            </div>   
        
            <div className = "tf-login" >
              <Button  id= "btn-submit" /* onClick={() => { alert('Incorrect Password') }} */ variant="contained" color="primary" href="#outlined-buttons">  Submit </Button>
            </div>  
  
            <div className = "tf-login" >
              <Button  id= "btn"  variant="outlined" color="primary" href="/register">  Create Account </Button>
            </div>
  
            <div className = "tf-login" >
              <a id= "btn-submit"  variant="outlined" color="primary" href="#">  Forgot Password </a>
            </div>
  
          </div>  
        </Card>
           
      </div>

      );
    }
  }


export default LogIn;