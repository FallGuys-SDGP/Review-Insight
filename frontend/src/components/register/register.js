import React, { Component } from "react";
import "../log-in/login.css";
import { TextField, Button , Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

// import { Auth } from '@aws-amplify/auth';

class Register extends Component{
  state= { username: '',password: '',email: '',authenication: '',step: 0 } 

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  // signUp = async () => {
  //   const { firstName , password, email }

  // }

  render(){
      return(

      <div  className = "wrapper-login" >

        <Card className = "card-login">

          <Typography variant="h3" component="h3" gutterBottom> Create An Account  </Typography>
        

          <div className = "container-login">

              <div className = "tf-login" >
                <TextField onChange = {this.onChange} id="first-name" name = "firstName" label="First Name"    variant="outlined"    color="secondary"  />
              </div>

              <div className = "tf-login" >
                <TextField onChange = {this.onChange} id="last-name" name = "lastName" label="Last Name"    variant="outlined"    color="secondary"  />
              </div>

              <div className = "tf-login" >
                <TextField  onChange = {this.onChange} id="email"  name = "email"  label="Email"    variant="outlined"    color="secondary"  />
              </div>

              <div className = "tf-login" >
                  <TextField  onChange = {this.onChange}  id="password"  name = "password"  type = "password" label="Password"    variant="outlined"    color="secondary"  />
              </div>   

              <div className = "tf-login" >
                  <TextField  onChange = {this.onChange}  id="password"  name = "password" type = "password"  label="Confirm Password"    variant="outlined"    color="secondary"  />
              </div> 
          
              <div className = "tf-login" >
                  <Button  id= "btn-submit"  variant="contained" color="primary" href="#outlined-buttons">  Create Account </Button>
              </div>  
      
          </div>  
        </Card>
            
      </div> 
    );
  }
} 




export default Register;