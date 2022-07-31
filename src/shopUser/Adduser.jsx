import React from "react";
import { Form, Button,Row,Col } from "react-bootstrap";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";

export default function Adduser() {
  // let [data, setData] = useState([]);

  let [userid, setUserid] = useState("");
  let [username, setUsername] = useState("");
  let [contact, setContact] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [doj, setDoj] = useState("");
  let [role, setRole] = useState("");

  const postData = () => {
    let userdata = { userid, username, contact,email, password, doj,role};

    console.log(userdata);
    let reqData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    };
    fetch("http://localhost:3001/shop/shopuser-post", reqData)
      .then((response) => console.log(response.json()))
      .then((data) => console.log(data));
    toast("Data Submitted");
  };

  return (
    <div style={{ width: "70%", marginLeft: "60px" }}>
      <h1> Add User</h1>
      <Form >
      <Row>
          <Col>
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>User Id</Form.Label>
          <Form.Control
            type="id"
            placeholder="Enter user id"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
             </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="+91"
            placeholder="Name"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Date of joining</Form.Label>
          <Form.Control
            type="date"
            placeholder="Date"
            value={doj}
            onChange={(e) => setDoj(e.target.value)}
          />
        </Form.Group>
        </Col>
        <Col>
        <Form.Group className="mb-3" controlId="formBasicDepartment">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicRole">
          <Form.Label>Role</Form.Label>
          <Form.Control
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
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
