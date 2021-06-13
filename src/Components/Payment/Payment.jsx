
import React,{useState} from 'react'
import './Payment.css'

export default function Payment(props) {

   
    const sum = ()=>{
        let sum = 0
        props.items.forEach(element => {
            sum+=Number(element.price)    
        });
        return sum
    }

    return (
        <div className='popup'>
            <div className='popup_inner'>
                <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>SV-Burger</h1>
                    </div>
                </div>
                <div className='row mainTitle' >
                    <div className='col-6'>
                        Summary
                    </div>
                    <div className='col-6'></div>
                </div>
            
                
            
                {props.items.map((item)=>(
                    <div className='row'>
                        <div className='col-6'>{item.title}</div>
                        <div className='col-6'>{item.price}</div>
                    </div>
                ))}
                    <div className='row'>
                    <div className='col-6'>
                        <img style={{width:'100px'}} src="https://svcollege.co.il/wp-content/uploads/2020/08/header-logo.png" alt="" />
                    </div>
                    <div className='col-6'>
                        total price: {sum()}
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <button className='btn btn-primary'>pay</button>
                    </div>
                    <div className='col-6'>
                        <button className='btn btn-primary' onClick={()=>{props.closePopup(false)}}>cancle</button>
                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}








  
  

  