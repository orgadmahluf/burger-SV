import React,{useState} from 'react'
import { useAuth } from "../../AuthContext"
import { useHistory } from "react-router-dom"
import Product from "../Product/Product"
import Payment from '../Payment/Payment'
import './CurrentUser.css'

export default function CurrentUser() {
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    const [show,setShow]=useState(true)
    const [showPayment,setShowPayment] = useState(false)
    const [shoopingCart,setShoopingCart] = useState([])

    const products = [
    {title:'ארוחה רגילה', info:' ארוחת המבורגר + שתייה',price:'59',src:'https://st.depositphotos.com/1004059/2748/v/950/depositphotos_27488437-stock-illustration-fast-food.jpg'},
    {title:'ארוחת ילדים', info:'ארוחת ילדים שניצל + שתייה',price:'39',src:'https://st2.depositphotos.com/5739646/11649/v/950/depositphotos_116498516-stock-illustration-kids-restaurant-menu-cardboard-character.jpg'},
    {title:'המבורגר', info:'המבורגר 220',price:'45',src:'https://image.freepik.com/free-vector/hamburger-cheeseburger-cartoon-icon_202271-1154.jpg'},
    {title:'ארוחה טבעונית', info:'המבורגר טבעוני',price:'45',src:'https://st2.depositphotos.com/5739646/11444/v/950/depositphotos_114446346-stock-illustration-kids-restaurant-menu-cardboard-character.jpg'},
    {title:'תוספת', info:'ציפס',price:'12',src:'https://st2.depositphotos.com/5739646/11444/v/950/depositphotos_114446306-stock-illustration-kids-restaurant-menu-cardboard-character.jpg'}]


    async function handleLogout() {
      try {
        await logout()
        history.push("/HomePage")
      } catch {
        alert("error")
      }
    }

    const addProduct = (index)=>{
      shoopingCart.push(products[index])
      if(shoopingCart.length == 1){
        setShow(false)
      }
      setShoopingCart([...shoopingCart])
    }
    
    const deleteProduct = (index)=>{
      debugger
      let newShoopingCart = shoopingCart.filter((item)=>item.title!==products[index].title)
      if(newShoopingCart.length == 0){
        setShow(true)
      }
      setShoopingCart([...newShoopingCart])
    }

    return (
        <div className='text-center'>
            current user works!!!
            
          <strong>Email:</strong> {currentUser.email}
          <div className='productsMain'>
          {products.map((item,index)=>{
            return <Product key={index} add={addProduct} delete={deleteProduct} title={item.title} info={item.info} price={item.price} src={item.src} index={index}/>
          })}
          </div>
          <button className='btn btn-primary' variant="link" onClick={handleLogout}> Log out </button>
          <button className='btn btn-primary' disabled={show} onClick={()=>{setShowPayment(true)}}> Buy </button>
          {showPayment == true?<Payment closePopup={setShowPayment} items={shoopingCart} />:null}
        </div>
    )
}




