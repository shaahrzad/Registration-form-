import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {validate} from './validate'
import {notify} from './toast'
import styles from './SignUp.module.css'

const SignUp = () => {

 const [data,setData] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    isAccepted: false
 })

 const [errors,setErrors] = useState({})
 const [touched,setTouched] = useState({})

 useEffect(() =>{
    setErrors(validate(data,"SignUp"))
 },[data ,touched ])

 const changeHandler = (event) => {
    if(event.target.name === "isAccepted"){
        setData({...data,[event.target.name] : event.target.checked})
    } else{
        setData({...data, [event.target.name] : event.target.value})
    }
    console.log(data)
 }

 const focusHandler = event => {
    setTouched({...touched,[event.target.name] : true})
 }

 const submitHandler = (event) => {
    event.preventDefault();
    if(!Object.keys(errors).length){
        notify("you signed up successfully", "success")
    } else {
        notify("in valid data", "error")
        setTouched({
            name:true,
            email:true,
            password:true,
            confirmPassword:true,
            isAccepted: true
        })
    }
 }


  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h2 className={styles.header}>SignUp</h2>
        <div  className={styles.formField} >
            <label>Name</label>
            <input className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput} type='text' name="name" value={data.name} onChange={changeHandler}  onFocus={focusHandler}/>
            {errors.name && touched.name && <span>{errors.name}</span>}
        </div>

        <div className={styles.formField} >
            <label>email</label>
            <input className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput} type='text' name="email" value={data.email} onChange={changeHandler} onFocus={focusHandler}/>
            {errors.email && touched.email && <span>{errors.email}</span>}    
        </div>

        <div className={styles.formField} >
            <label>password</label>
            <input className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput} type='password' name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler}/>
            {errors.password && touched.password && <span>{errors.password}</span>}
        </div>

        <div className={styles.formField} >
            <label>confirmPassword</label>
            <input className={(errors.confirmPassword && touched.confirmPassword) ? styles.uncompleted : styles.formInput} type='password' name="confirmPassword" value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler}/>
            {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>

        <div className={styles.formField} >
            <div className={styles.checkBoxContainer}>
                <label>I accepted</label>
                <input className={styles.checkBoxContainer} type='checkbox' name="isAccepted" value={data.isAccepted} onChange={changeHandler} onFocus={focusHandler}/>
            </div>
            {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
        </div>

        <div className={styles.formButtons}>
            <Link to='/Login'>Login</Link>
            <button type='submit'>SignUp</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default SignUp
