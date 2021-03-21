import { Component ,React } from "react";
import "./Register.css";
import { TextField, Button , Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

class Register extends Component  {
  
  constructor(props) {
    super(props);
    this.state = { 
      username:"",
      email: "",
      password : "",
      input:{},
      error:{}

     }
       
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    let input = this.state.input;

    input[event.target.name] = event.target.value;

    this.setState({
      input
    });
  }
   
  handleSubmit(event) {
    event.preventDefault();

    if(this.validate()){
      console.log(this.state);

      let input = {};
      input["username"] = "";
      input["email"] = "";
      input["password"] = "";
      input["confirm_password"] = "";
      this.setState({input:input});

      alert('Registation Form submited..');
    }
  }

  validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;
 
    if (!input["username"]) {
      isValid = false;
      errors["username"] = "Please enter your username.";
    }

    if (typeof input["username"] !== "undefined") {
      const re = /^\S*$/;
      if(input["username"].length < 6 || !re.test(input["username"])){
          isValid = false;
          errors["username"] = "Please enter valid username.";
      }
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
        
      // var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      
      var pattern = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    // if (!input["password"]) {
    //   isValid = false;
    //   errors["password"] = "Please enter your password.";
    // }

    // if (!input["confirm_password"]) {
    //   isValid = false;
    //   errors["confirm_password"] = "Please enter your confirm password.";
    // }

    // if (typeof input["password"] !== "undefined") {
    //   if(input["password"].length < 6){
    //       isValid = false;
    //       errors["password"] = "Please add at least 6 charachter.";
    //   }
    // }

    // if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
        
    //   if (input["password"] != input["confirm_password"]) {
    //     isValid = false;
    //     errors["password"] = "Passwords don't match.";
    //   }
    // }

    this.setState({
      errors: errors
    });

    return isValid;
  }
   


  render() { 
    return ( 
      <div  className = "wrapper-login" >

        <Card className = "card-login">

          <Typography variant="h3" component="h3" gutterBottom> Create An Account  </Typography>

          <form onSubmit = { this.handleSubmit }>

            <div className = "container-login">

              <div className = "form-input" >
                <TextField type="text" id="username" value={this.state.input.username} onChange={this.handleChange}  label="User Name"   name="username" variant="outlined"    color="secondary"  /> 

                {/* <div className="text-danger">{this.state.errors.username}</div> */}
              </div>
              
              {/* <div className = "form-input" >
                <TextField  id="firstname" value={this.state.input.firstname} onChange={this.handleChange} name ="first-name" label="First Name"    variant="outlined"    color="secondary"  /> 
              </div>

              <div className = "form-input" >
                <TextField  id="lastname"   label="Last Name"    variant="outlined"    color="secondary"  />
              </div> */}

              <div className = "form-input" >
                <TextField  id="email"  label="Email" value={this.state.input.email} onChange={this.handleChange}  name="email"  variant="outlined"    color="secondary"  />
                {/* <div className="text-danger">{this.state.errors.email}</div> */}
              </div>

              <div className = "form-input" >
                <TextField  id="password" label="Password" value={this.state.input.password} onChange={this.handleChange}  type="password"  name="password"  variant="outlined"    color="secondary"  />
                {/* <div className="text-danger">{this.state.errors.password}</div> */}
              </div>   

              <div className = "form-input" >
                <TextField  id="confirm_password" label="Confirm Password" type="password"  value={this.state.input.confirm_password } onChange={this.handleChange}    name="confirm_password" variant="outlined"    color="secondary"  />
                {/* _ <div className="text-danger">{this.state.errors.confirm_password}</div> */}
              </div> 

              <div className = "form-input" >
                <Button  id= "btn-submit"  variant="contained" color="primary" onClick={this.handleSubmit}  href="/accountSuccess">  Create Account </Button>
              </div>  

            </div>  
          
          </form>
        </Card>
      </div> 
    );
    
  }
}
 
export default Register;



