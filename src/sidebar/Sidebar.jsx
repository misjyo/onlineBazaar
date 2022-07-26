import React from "react"
import {Link,Route,Routes} from 'react-router-dom';
import AddOffer from "../offer/AddOffer";
import ViewOffer from "../offer/ViewOffer";
import AddCategory from "../product/category/AddCategory";
import ViewCategory from "../product/category/ViewCategory";
import AddSubCategory from "../product/subCategory/AddSubCategory";
import ViewSubCategory from "../product/subCategory/ViewSubCategory";
import AddShop from "../shops/AddShop";
import ViewShop from "../shops/ViewShop";
import User from '../userManagement/User'
function Sidebar(){
  return (
    
    <div className="side">
    <div className="sidebar"> 
      
        <li style={{fontSize:"25px",color:"black"}}>Shop</li>
        <ul>
          <li> <Link to='/AddShop' style={{color:"black" ,textDecoration:"none",marginLeft:"-32px"}}>AddShop</Link> </li>
          <li> <Link to='/ViewShop' style={{color:"black" ,textDecoration:"none" ,marginLeft:"-32px"}}>ViewShop</Link></li>
       </ul>
        <li style={{fontSize:"25px" ,color:"black"}}>Product</li>
        <ul>
          <li style={{marginLeft:"-32px" ,fontSize:"20px" ,color:"black"}}>ProductCategory</li>
          <ul>
            <li> <Link to='/AddCategory' style={{color:"black" ,textDecoration:"none",marginLeft:"-62px"}}>AddCategory</Link></li>
            <li> <Link to='/ViewCategory' style={{color:"black" ,textDecoration:"none",marginLeft:"-62px"}}>ViewCategory</Link></li>
          </ul>
          <li style={{marginLeft:"-32px" ,fontSize:"20px" ,color:"black"}}>ProductSubCategory</li>
          <ul>
            <li> <Link to='/AddSubCategory' style={{color:"black" ,textDecoration:"none",marginLeft:"-62px"}}>AddSubCategory</Link></li>
            <li> <Link to='/ViewSubCategory' style={{color:"black" ,textDecoration:"none",marginLeft:"-62px"}}>ViewSubCategory</Link></li>
          </ul>
        
            </ul>
         
            <li style={{fontSize:"25px" ,color:"black"}}>Offer</li>
            <ul>
              <li><Link to='/AddOffer' style={{color:"black" ,textDecoration:"none",marginLeft:"-32px"}}>AddOffer</Link></li>
              <li><Link to='/ViewOffer' style={{color:"black" ,textDecoration:"none",marginLeft:"-32px"}}>ViewOffer</Link></li>
          </ul>
      <li style={{fontSize:"25px" ,color:"black"}}>UserManagement</li>
      <ul>
        <li><Link to='/User' style={{color:"black" ,textDecoration:"none",marginLeft:"-32px"}}>User</Link></li>
      </ul>   
     
    </div>
    <div className="route">
<Routes>
  <Route path='/AddOffer' element={<AddOffer/>}></Route>
  <Route path='/ViewOffer' element={<ViewOffer/>}></Route>
  <Route path='/AddShop' element={<AddShop/>}></Route>
  <Route path='/ViewShop' element={<ViewShop/>}></Route>
  <Route path='/AddSubCategory' element={<AddSubCategory/>}></Route>
  <Route path='/ViewSubCategory' element={<ViewSubCategory/>}></Route>
  <Route path='/AddCategory' element={<AddCategory/>}></Route>
  <Route path='/viewCategory' element={<ViewCategory/>}></Route>
  <Route path='/User' element={<User/>}></Route>
  
</Routes>
</div>
</div>
  
  )
}
export default Sidebar;