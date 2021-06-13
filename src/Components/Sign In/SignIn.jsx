import React,{useRef} from 'react'
import { useAuth } from "../../AuthContext"
import { useHistory } from "react-router-dom"
import './SignIn.css'

export default function SignIn() {
  
    const { login } = useAuth()
    const history = useHistory()
    const emailRef = useRef()
    const passwordRef = useRef()

    async function handleSubmit(e) {
        e.preventDefault()
    
        try {

          await login(emailRef.current.value, passwordRef.current.value)
          history.push("/")
        } catch {
          alert("Failed to log in")
        }
    

      }
    


    return (
    <div className='card container-input text-center'>
        <form onSubmit={handleSubmit}>
            <div className='card-body text-center'>
               <input className='form-control' ref={emailRef} type="text" placeholder='Enter your email'/><br />
               <input className='form-control' ref={passwordRef} type="password" placeholder='Enter your password'/><br />
               <button type='submit' style={{fontWeight:'bold'}} className='btn btn-primary'>Sign in</button>
            </div>
        </form>
    </div>
    )
}
