import React from 'react'
import './HomePage.css'
import {Link} from 'react-router-dom'
export default function HomePage() {
    return (
        <div className='card'>
            <div className='card-body container-btn text-center'>
              <Link to='/SignIn'>  <button style={{marginBottom:'40px',fontWeight:'bold'}} className='btn btn-primary'>לקוח קיים</button></Link>
              <Link to='/SignUp'>  <button style={{fontWeight:'bold'}} className='btn btn-primary'>לקוח חדש</button></Link>
            </div>
        </div>

    )
}
