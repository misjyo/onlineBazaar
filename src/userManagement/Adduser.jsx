import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";

export default function Adduser() {
  let [data, setData] = useState([]);

  let [userid, setUserid] = useState("");
  let [username, setUsername] = useState("");
  let [doj, setDoj] = useState("");
  let [password, setPassword] = useState("");
  let [dept, setDept] = useState("");
  let [role, setRole] = useState("");
  let [status, setStatus] = useState("");

  const postData = () => {
    let userdata = { userid, username, doj, password, dept, role, status };

    console.log(userdata);
    let reqData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    };
    fetch("http://localhost:3001/user/user-post", reqData)
      .then((response) => console.log(response.json()))
      .then((data) => console.log(data));
    toast("Data Submitted");
  };

  return (
    <div>
      <Form onSubmit={postData()}>
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
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Date of joining</Form.Label>
          <Form.Control
            type="date"
            placeholder="Date"
            value={doj}
            onChange={(e) => setDoj(e.target.value)}
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
        <Form.Group className="mb-3" controlId="formBasicDepartment">
          <Form.Label>Department</Form.Label>
          <Form.Control
            type="text"
            placeholder="Department"
            value={dept}
            onChange={(e) => setDept(e.target.value)}
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
        <Form.Group className="mb-3" controlId="formBasicStatus">
          <Form.Label>Status</Form.Label>
          <Form.Control
            type="text"
            placeholder="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
}
