import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
export default function AddSubCategory() {
  let [data, setData] = useState([]);
  let [cid, setCid] = useState("");
  let [ccid, setCcid] = useState("");
  let [cname, setCname] = useState("");

  function submitData(e) {
    let userdata = { cid, ccid, cname };
    e.preventDefault();
    console.log(userdata);
    let reqData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    };
    fetch("http://localhost:3001/admin//product-sub-cgt-post", reqData)
      .then((response) => console.log(response.json()))
      .then((data) => console.log(data));
    toast("data submitted");
  }
  ////////////////api call  get category
  useEffect(() => {
    displayCategory();
  }, []);

  async function displayCategory() {
    let response = await fetch("http://localhost:3001/admin/product-cgt-get");
    let udata = await response.json();
    setData(udata.response);
    console.log(udata);
  }

  return (
    <div className="AddShop" style={{ width: "70%", marginLeft: "60px" }}>
      <h1> Add Sub Category</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* mapping */}

          <Form.Label>CategoryName</Form.Label>

          <select
            className="form-select"
            type="text"
            placeholder="category id"
            value={cid}
            onChange={(e) => setCid(e.target.value)}
          >
            <option value="">--select category--</option>
            {data.map((item, index) => {
              return (
                <option key={index} value={item.cid}>
                  {item.cname}
                </option>
              );
            })}
          </select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>ProductId</Form.Label>
          <Form.Control
            type="text"
            placeholder="product id"
            value={ccid}
            onChange={(e) => setCcid(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>SubCategoryName</Form.Label>
          <Form.Control
            type="text"
            placeholder="category name"
            value={cname}
            onChange={(e) => setCname(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={submitData}>
          Submit
        </Button>
      </Form>
      <ToastContainer/>
    </div>
  );
}
