import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddOffer from "../offer/AddOffer";
import ViewOffer from "../offer/ViewOffer";
import AddCategory from "../product/category/AddCategory";
import ViewCategory from "../product/category/ViewCategory";
import AddSubCategory from "../product/subCategory/AddSubCategory";
import ViewSubCategory from "../product/subCategory/ViewSubCategory";
import AddShop from "../shops/AddShop";
import ViewShop from "../shops/ViewShop";
import User from "../userManagement/User";
import Adduser from "../userManagement/Adduser";
function Sidebar() {
  return (
    <div className="side">
      <div className="sidebar">
        <li style={{ fontSize: "25px", color: "black" ,fontWeight:"bold"}}></li>
        <ul>
          <li>
            {" "}
            <Link
              to="/AddShop"
              style={{
                color: "black",
                textDecoration: "none",
                marginLeft: "-32px",
              }}
            ></Link>
          </li>
          <li>
          
            <Link
              to="/ViewShop"
              style={{
                color: "black",
                textDecoration: "none",
                marginLeft: "-32px",
                fontWeight:"bold"
              }}
            >
              Shop
            </Link>
          </li>
        </ul>
        <li style={{ fontSize: "25px", color: "black" ,fontWeight:"bold"}}></li>
        <ul>
          <li style={{ marginLeft: "-32px", fontSize: "20px", color: "black" }}>
           
          </li>
          <ul>
            <li>
              {" "}
              <Link
                to="/AddCategory"
                style={{
                  color: "black",
                  textDecoration: "none",
                  marginLeft: "-62px",
                }}
              ></Link>
            </li>
            <li>
              {" "}
              <Link
                to="/ViewCategory"
                style={{
                  color: "black",
                  textDecoration: "none",
                  marginLeft: "-62px",
                  fontWeight:"bold"
                }}
              >
                Category
              </Link>
            </li>
          </ul>
          <li style={{ marginLeft: "-32px", fontSize: "20px", color: "black" }}>
           
          </li>
          <ul>
            <li>
              {" "}
              <Link
                to="/AddSubCategory"
                style={{
                  color: "black",
                  textDecoration: "none",
                  marginLeft: "-62px",
                }}
              ></Link>
            </li>
            <li>
              {" "}
              <Link
                to="/ViewSubCategory"
                style={{
                  color: "black",
                  textDecoration: "none",
                  marginLeft: "-62px",
                  fontWeight:"bold"
                }}
              >
                Sub Category
              </Link>
            </li>
          </ul>
        </ul>

        <li style={{ fontSize: "25px", color: "black",fontWeight:"bold" }}></li>
        <ul>
          <li>
            <Link
              to="/AddOffer"
              style={{
                color: "black",
                textDecoration: "none",
                marginLeft: "-32px",
              }}
            ></Link>
          </li>
          <li style={{hover:"blue"}}>
            <Link
              to="/ViewOffer"
              style={{
                color: "black",
                textDecoration: "none",
                marginLeft: "-32px",
                fontWeight:"bold"
              }}
            >
              Offer
            </Link>
          </li>
        </ul>
        <li style={{ fontSize: "20px", color: "black" ,fontWeight:"bold"}}></li>
        <ul>
          <li>
            <Link
              to="/User"
              style={{
                color: "black",
                textDecoration: "none",
                marginLeft: "-32px",
                fontWeight:"bold"
              }}
            >
              User
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              to="/Adduser"
              style={{
                color: "black",
                textDecoration: "none",
                marginLeft: "-32px",
              }}
            ></Link>
          </li>
        </ul>
        <button className="btn btn-light">Logout</button>
      </div>
      <div className="route">
        <Routes>
          <Route path="/AddOffer" element={<AddOffer />}></Route>
          <Route path="/ViewOffer" element={<ViewOffer />}></Route>
          <Route path="/AddShop" element={<AddShop />}></Route>
          <Route path="/ViewShop" element={<ViewShop />}></Route>
          <Route path="/AddSubCategory" element={<AddSubCategory />}></Route>
          <Route path="/ViewSubCategory" element={<ViewSubCategory />}></Route>
          <Route path="/AddCategory" element={<AddCategory />}></Route>
          <Route path="/viewCategory" element={<ViewCategory />}></Route>
          <Route path="/User" element={<User />}></Route>
          <Route path="/Adduser" element={<Adduser />}></Route>
        </Routes>
      </div>
    </div>
  );
}
export default Sidebar;
