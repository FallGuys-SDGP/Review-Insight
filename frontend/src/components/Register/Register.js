import React from "react";
import "./Register.css";
import { TextField, Button, Card , Typography }  from '@material-ui/core';


function Register() {
 

  return (
    <div className="wrapper-login" >

      <Card className="card-login">

        <Typography variant="h3" component="h3" gutterBottom> Create An Account  </Typography>


        <div className="container-login">

          <div className="form-input" >
            <TextField type="text" id="username"/*  value={this.state.input.username} onChange={this.handleChange} */ label="User Name" name="username" variant="outlined" color="secondary" />
          </div>

          <div className="form-input" >
            <TextField id="email" label="Email" /* value={this.state.input.email} onChange={this.handleChange} */ name="email" variant="outlined" color="secondary" />
          </div>

          <div className="form-input" >
            <TextField id="password" label="Password" /* value={this.state.input.password} onChange={this.handleChange} */ type="password" name="password" variant="outlined" color="secondary" />
          </div>

          <div className="form-input" >
            <TextField id="confirm_password" label="Confirm Password" type="password" /* value={this.state.input.confirm_password} onChange={this.handleChange}  */name="confirm_password" variant="outlined" color="secondary" />
          </div>

          <div className="form-input" >
            <Button id="btn-submit" variant="contained" color="primary" /* onClick={this.handleSubmit} */ href="/accountSuccess">  Create Account </Button>
          </div>

        </div>

      </Card>
    </div>
  );
}

export default Register;