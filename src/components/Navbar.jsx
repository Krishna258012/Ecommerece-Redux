import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./css/Navbar.css"
import { useSelector} from 'react-redux'

const Navbar = () => {
  const items = useSelector((state)=>state.cart)
  return (
    <div className='container'>
      <NavLink style={{fontWeight:'bolder' , fontSize:20}} className={"navlink"} to={"/"}>Home</NavLink>
      <NavLink style={{fontWeight:'bolder' , fontSize:20}} className={"navlink"} to={"/cart"}>Cart</NavLink>
      <span style={{fontWeight:'bolder' , fontSize:20}}>Items : {items.length}</span>
    </div>
  )
}

export default Navbar
