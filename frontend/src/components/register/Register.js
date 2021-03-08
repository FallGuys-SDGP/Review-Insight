import { Component ,React } from "react";
import "../log-in/LogIn.css";
import { TextField, Button , Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstName: '',
      LastName: '',
      email: '',
      password: ''
     }
  }
  render() { 
    return ( 
      <div  className = "wrapper-login" >

    <Card className = "card-login">

    <Typography variant="h3" component="h3" gutterBottom> Create An Account  </Typography>
    

      <div className = "container-login">

          <div className = "tf-login" >
             <TextField  id="first-name"   label="First Name"    variant="outlined"    color="secondary"  />
          </div>

          <div className = "tf-login" >
             <TextField  id="last-name"   label="Last Name"    variant="outlined"    color="secondary"  />
          </div>

          <div className = "tf-login" >
             <TextField  id="username"   label="Email"    variant="outlined"    color="secondary"  />
          </div>

          <div className = "tf-login" >
              <TextField    id="password"    label="Password"    variant="outlined"    color="secondary"  />
          </div>   

          <div className = "tf-login" >
              <TextField    id="password"    label="Confirm Password"    variant="outlined"    color="secondary"  />
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



