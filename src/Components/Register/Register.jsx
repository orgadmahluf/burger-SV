import React,{useRef} from 'react'
import './Register.css'
import { useAuth } from "../../AuthContext"
import {writeUserData} from '../../firebase'
import { useHistory } from "react-router-dom"
export default function Register() {
    const { signup,currentUser } = useAuth()
    const history = useHistory()
    const emailRef = useRef()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    function validDetails(){
        if(firstNameRef.current.value.length ===1 || firstNameRef.current.value.length>20)
            throw 'first name error'
        else if(lastNameRef.current.value.length===1 || lastNameRef.current.value.length>20)
            throw 'last name error'
        else if(emailRef.current.value.indexOf('@')<0)
            throw 'miising @'
        else if(emailRef.current.value.indexOf('gmail') < 0 && emailRef.current.value.indexOf('yahoo') < 0 )
            throw 'gmail of yhaoo only'
        else if(passwordRef.current.value.length < 2 || passwordRef.current.value.length>20)
            throw 'password error'
        else if(passwordRef.current.value !== passwordConfirmRef.current.value)
            throw 'password and confirm error'
    }

    async function handleSubmit(e) {
        e.preventDefault()
    
        try{
            
          validDetails();
          await signup(emailRef.current.value, passwordRef.current.value)
          writeUserData(firstNameRef.current.value,lastNameRef.current.value,passwordRef.current.value,emailRef.current.value)
          history.push('/')
        }catch(e){
          alert(e.toString());
        }

    
      
      }

    return (
        <div className='card container-input text-center'>
            <div className='card-body text-center'>
                <form onSubmit={handleSubmit}>
               <input  className='form-control' ref={firstNameRef} type="text" placeholder='Type your first name'/><br />
               <input  className='form-control' ref={lastNameRef} type="text" placeholder='Type your last name'/><br />
               <input required className='form-control' type="email" ref={emailRef} placeholder='Enter your email'/><br />
               <input required className='form-control' type="password" ref={passwordRef} placeholder='Create Password'/><br />
               <input required className='form-control' type="password" ref={passwordConfirmRef} placeholder='Confirm Password'/><br />
               <button type='submit' style={{fontWeight:'bold'}} className='btn btn-primary'>Sign Up</button><br />
               </form>
            </div>
        </div>
    )
}
