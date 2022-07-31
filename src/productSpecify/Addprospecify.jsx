import React from "react";
import { Form, Button,Row,Col } from "react-bootstrap";
import { useState,useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";

export default function Addprospecify() {
let[data,setData]=useState([]);

  let[pspecify,setPspecify]=useState("");
  let[pid,setPid]=useState("");
  let[height,setHeight]=useState("");
  let[width,setWidth]=useState("");
  let[size,setSize]=useState("");
  let[color,setColor]=useState("");
  let[price,setPrice]=useState("");
  let[expdate,setExpdate]=useState("");
  let[mfd,setMfd]=useState("");
  let[weight,setWeight]=useState("");
  let[dimension,setDimension]=useState("");

  const postData = () => {
    let userdata = { pspecify,pid,height,width,size,color,price,expdate,mfd,weight,dimension};

    console.log(userdata);
    let reqData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    };
    fetch("http://localhost:3001/shop/prospecify-post", reqData)
      .then((response) => console.log(response.json()))
      .then((data) => console.log(data));
    toast("Data Submitted");
  };

    //proinventory get api
    useEffect(() => {
      displayCategory();
    }, []);
  
    async function displayCategory() {
      let response = await fetch("http://localhost:3001/shop/proinventory-get");
      let udata = await response.json();
      setData(udata.response);
      console.log(udata);
    }

  return (
    <div style={{ width: "70%", marginLeft: "60px" }}>
        <h1>Add Product Specification</h1>
      <Form >
      <Row>
          <Col>
       
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>Product Specification</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={pspecify}
            onChange={(e) => setPspecify(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Product Id</Form.Label>
          <select
            className="form-select"
            type="text"
            placeholder="category id"
            value={pid}
            onChange={(e) => setPid(e.target.value)}
          >
           <option value="">--select Product Id--</option>
            {data.map((item, index) => {
              return (
                <option key={index} value={item.pspecify}>
                  {item.pid}
                </option>
              );
            })}
          </select>
             </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Height</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Width</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDepartment">
          <Form.Label>Size</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Color</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="formBasicRole">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRole">
          <Form.Label>Expiry Date</Form.Label>
          <Form.Control
            type="date"
            placeholder=""
            value={expdate}
            onChange={(e) => setExpdate(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRole">
          <Form.Label>Manufacturing Date</Form.Label>
          <Form.Control
            type="date"
            placeholder=""
            value={mfd}
            onChange={(e) => setMfd(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRole">
          <Form.Label>weight</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRole">
          <Form.Label>Dimension</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={dimension}
            onChange={(e) => setDimension(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={()=>postData()}>
          Submit
        </Button>
        </Col>
        </Row>
      </Form>
      <ToastContainer />
    </div>
  );
}

