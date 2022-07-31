import React from "react";
import { Form, Button ,Row,Col} from "react-bootstrap";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";

export default function Addbank() {
  // let [data, setData] = useState([]);

  let [bankname, setBankname] = useState("");
  let [accno, setAccno] = useState("");
  let [ifsc_code, setIfsc_code] = useState("");
  let [branch, setBranch] = useState("");
  let [acc_holder_name, setAcc_holder_name] = useState("");
 

  const postData = () => {
    let userdata = { bankname, accno, ifsc_code ,branch, acc_holder_name};

    console.log(userdata);
    let reqData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    };
    fetch("http://localhost:3001/shop/bank-post", reqData)
      .then((response) => console.log(response.json()))
      .then((data) => console.log(data));
    toast("Data Submitted");
  };

  return (
    <div style={{ width: "70%", marginLeft: "60px" }}>
    
     <h1>Add Bank</h1>
      <Form >
      <Row>
        <Col>
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>Bank Name</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={bankname}
            onChange={(e) => setBankname(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Account Number</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={accno}
            onChange={(e) => setAccno(e.target.value)}
          />
             </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>IFSC CODE</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={ifsc_code}
            onChange={(e) => setIfsc_code(e.target.value)}
          />
        </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Branch Name</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDepartment">
          <Form.Label>Account Holder Name</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={acc_holder_name}
            onChange={(e) => setAcc_holder_name(e.target.value)}
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
