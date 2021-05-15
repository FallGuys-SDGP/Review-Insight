import React from "react";
import { TextField, Button, Card } from '@material-ui/core';
import "./LogIn.css";
import Typography from '@material-ui/core/Typography';
import userIcon from "../../images/LogIn/userIcon.jpg"



function LogIn() {
  return (
    <div className="login-wrapper" >

      <div className="card-login">

        <Typography variant="h3" component="h3" gutterBottom> Review Insight </Typography>

        <div className="container-login">

          <div className='form-input'><img src={userIcon} alt="userIcon" height="120px" /></div>

          <div className="form-input" >
            <TextField id="username" label="User Name" variant="outlined" color="secondary" />
          </div>

          <div className="form-input" >
            <TextField id="password" label="Password" variant="outlined" color="secondary" />
          </div>

          <div className="form-input" >
            <Button id="btn-submit" /* onClick={() => { alert('Incorrect Password') }} */ variant="contained" color="primary" href="#outlined-buttons">  Submit </Button>
          </div>

          <div className="form-input" >
            <Button id="btn" variant="outlined" color="primary" href="/register">  Create Account </Button>
          </div>

          <div className="form-input" >
            <a id="btn-submit" variant="outlined" color="primary" href="#">  Forgot Password </a>
          </div>

        </div>
      </div>

    </div>
  );


}

export default LogIn;