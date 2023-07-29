
export const validate = (data,type) => {

  const errors = {};

  if(!data.email){
    errors.email = "email required"
  } else if (!/\s+@\s+\.\s+/.test(data.email)){
    errors.email = "email address is invalid"
  } else {
    delete errors.email
  }

  if(!data.password){
    errors.password = "password is required"
  } else if (data.password.length < 6) {
    errors.password = "password need to be 6 character or more"
  }else{
    delete errors.password
  }

  

  if(type === "SignUp"){
    if(!data.name.trim()){
      errors.name = "username required"
    } else {
      delete errors.name
    }

    if(!data.confirmPassword){
      errors.confirmPassword = "confirm the Password"
    } else if (data.confirmPassword !== data.password){
      errors.confirmPassword = "Password do not match"
    } else{
      delete errors.confirmPassword
    }
  
    if(data.isAccepted){
      delete errors.isAccepted
    } else{
      errors.isAccepted = "isAccepted our regulations"
    }
  }

  return errors
}


