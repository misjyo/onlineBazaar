import React from 'react'
import {Form,Button} from 'react-bootstrap';
import {useState} from 'react';

export default function AddCategory() {

  let [cid, setCid] = useState("");
  let [cname, setCname] = useState("");


  function submitData(e) {
    let userdata = {cid,cname};
    e.preventDefault();
    console.log(userdata);
    let reqData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    };
    fetch("http://localhost:3001/admin/product-cgt-post", reqData)
    .then(response => console.log(response.json())).then(data => console.log(data))
  }


  return (
    <div className='AddShop'   style={{width:"70%",marginLeft:"60px"}}>
      <h1> Add  Category</h1>
      <Form >
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>CategoryID</Form.Label>
      <Form.Control type="text" placeholder="category id" value={cid} onChange={(e)=>setCid(e.target.value)} />
      
    </Form.Group>

    <Form.Group className="mb-4" controlId="formBasicPassword">
      <Form.Label>Category Name</Form.Label>
      <Form.Control type="text" placeholder="category name"value={cname} onChange={(e)=>setCname(e.target.value)} />
    </Form.Group>
   
    <Button variant="primary" type="submit" onClick={submitData}>
      Submit
    </Button>
  </Form></div>
  )
}
