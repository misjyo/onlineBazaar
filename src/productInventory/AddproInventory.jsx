import React from "react";
import { Form, Button,Row,Col } from "react-bootstrap";
import { useState,useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function AddproInventory() {
  let[data,setData]=useState([]);
  let[data1,setData1]=useState([]);
  let[data2,setData2]=useState([]);
  let [pid, setPid] = useState("");
  let [cid, setCid] = useState("");
  let [ccid, setCcid] = useState("");
  let [pname, setPname] = useState("");
  let [pcompany, setPcompany] = useState("");
  let [shopid, setShopid] = useState("");
  let [qty, setQty] = useState("");
  let [discription, setDiscription] = useState("");


  function submitData(e) {
    let userdata = { pid,cid,ccid,pname,pcompany,shopid,qty,discription};
    e.preventDefault();
    console.log(userdata);
    let reqData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    };
    fetch("http://localhost:3001/shop/proinventory-post", reqData)
      .then((response) => console.log(response.json()))
      .then((data) => console.log(data));
    toast("Data Submitted");
  }


  // get api category
  useEffect(() => {
    displayCategory();
  }, []);

  async function displayCategory() {
    let response = await fetch("http://localhost:3001/admin/product-cgt-get");
    let udata = await response.json();
    setData2(udata.response);
    console.log(udata);
  }


  // get api product sub category
  useEffect(() => {
    displaySubCategory();
  }, []);

  async function displaySubCategory() {
    let response = await fetch(
      "http://localhost:3001/admin/product-sub-cgt-get"
    );
    let udata = await response.json();
    setData1(udata.response);
    // console.log(udata)
  }

// get api shopregistration
useEffect(() => {
  displayShop();
}, []);

async function displayShop() {
  let response = await fetch(
    "http://localhost:3001/admin/shop-registration-get"
  );
  let udata = await response.json();
  setData(udata.response);

}



  return (
    <div className="AddShop" style={{ width: "70%", marginLeft: "60px" }}>
      <h1> Add Product Inventory</h1>
      <Form>
        <Row>
          <Col>
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ProductID</Form.Label>
          <Form.Control
            type="text"
            placeholder="product id"
            value={pid}
            onChange={(e) => setPid(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>CategoryID</Form.Label>
          <select
            className="form-select"
            type="text"
            placeholder="category id"
            value={cid}
            onChange={(e) => setCid(e.target.value)}
          >
           <option value="">--select category Id--</option>
            {data2.map((item, index) => {
              return (
                <option key={index} value={item.cid}>
                  {item.cid}
                </option>
              );
            })}
          </select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>CategorySubID</Form.Label>
          <select
            className="form-select"
            type="text"
            placeholder="category id"
            value={ccid}
            onChange={(e) => setCcid(e.target.value)}
          >
           <option value="">--select sub category Id--</option>
            {data1.map((item, index) => {
              return (
                <option key={index} value={item.ccid}>
                  {item.ccid}
                </option>
              );
            })}
          </select>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="category name"
            value={pname}
            onChange={(e) => setPname(e.target.value)}
          />
        </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>Product Company</Form.Label>
           <select
            className="form-select"
            type="text"
            placeholder="category id"
            value={pcompany}
            onChange={(e) => setPcompany(e.target.value)}
          >
           <option value="">--select Product company--</option>
            {data.map((item, index) => {
              return (
                <option key={index} value={item.shopid}>
                  {item.company}
                </option>
              );
            })}
          </select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>ShopId</Form.Label>
                <select
            className="form-select"
            type="text"
            placeholder="category id"
            value={shopid}
            onChange={(e) => setShopid(e.target.value)}
          >
           <option value="">--select Product company--</option>
            {data.map((item, index) => {
              return (
                <option key={index} value={item.shopid}>
                  {item.shopid}
                </option>
              );
            })}
              </select>
              </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                />
              </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Discription</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={discription}
                  onChange={(e) => setDiscription(e.target.value)}
                />
              </Form.Group>

        <Button variant="primary" type="submit" onClick={submitData}>
          Submit
        </Button>
        </Col>
        </Row>
      </Form>

      <ToastContainer />
    </div>
  );
}
