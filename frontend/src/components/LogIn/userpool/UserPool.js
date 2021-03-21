

import {
    ICognitoUserPoolData,
    CognitoUserPool,
  } from "amazon-cognito-identity-js";
  
  //todo add Pool Id and Client ID
  const poolData =  ICognitoUserPoolData = {
    UserPoolId: "",
    ClientId: "",
  };
  
  const userPool = new CognitoUserPool(poolData);
  
  export default userPool;