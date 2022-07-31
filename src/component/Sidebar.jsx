import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Addbank from "../bank/Addbank";
import Viewbank from "../bank/Viewbank";
import AddproInventory from "../productInventory/AddproInventory";
import ViewproInventory from "../productInventory/ViewproInventory";
import Addprospecify from "../productSpecify/Addprospecify";
import ViewproSpecify from "../productSpecify/ViewproSpecify";
import ShopDiscription from "../shop/ShopDiscription";
import Adduser from "../shopUser/Adduser";
import Viewuser from "../shopUser/Viewuser";
import Request from "../request/Request";

function Sidebar() {
  return (
    <div className="side">
      <div className="sidebar">
        <li>
          {" "}
          <Link to="/ShopDiscription"> Shop</Link>
        </li>
        <li> User </li>
        <ul>
          <li>
            <Link to="/Adduser"> AddUser</Link>
          </li>
          <li>
            <Link to="/Viewuser">ViewUser</Link>
          </li>
        </ul>
        <li> Product Inventory </li>
        <ul>
          <li>
            <Link to="/AddproInventory"> Add PRO IN</Link>
          </li>
          <li>
            <Link to="/ViewproInventory"> View Pro In</Link>
          </li>
        </ul>
        <li> Product Specify </li>
        <ul>
          <li>
            <Link to="/AddproSpecify"> Add Pro Specify</Link>
          </li>
          <li>
            <Link to="/Viewprospecify">View Pro Specify</Link>
          </li>
        </ul>
        <li> Bank</li>
        <ul>
          <li>
            <Link to="/Addbank"> Add Bank</Link>
          </li>
          <li>
            <Link to="/Viewbank">View Bank</Link>
          </li>
        </ul>
      </div>
      <div className="route">
        <Routes>
          <Route path="/Addbank" element={<Addbank />}></Route>
          <Route path="/Viewbank" element={<Viewbank />}></Route>
          <Route path="/Adduser" element={<Adduser />}></Route>
          <Route path="/Viewuser" element={<Viewuser />}></Route>
          <Route path="/AddproInventory" element={<AddproInventory />}></Route>
          <Route
            path="/ViewproInventory"
            element={<ViewproInventory />}
          ></Route>
          <Route path="/Addprospecify" element={<Addprospecify />}></Route>
          <Route path="/viewproSpecify" element={<ViewproSpecify />}></Route>
          <Route path="/Request" element={<Request />}></Route>
          <Route path="/ShopDiscription" element={<ShopDiscription />}></Route>
        </Routes>
      </div>
    </div>
  );
}
export default Sidebar;
