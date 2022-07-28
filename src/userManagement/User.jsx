import React from "react";
import { useState, useEffect } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { GoTrashcan, GoPencil, GoDiffAdded } from "react-icons/go";
import { ToastContainer, toast } from "react-toastify";

function UserManagement() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  let [data, setData] = useState([]);

  let [userid, setUserid] = useState("");
  let [username, setUsername] = useState("");
  let [doj, setDoj] = useState("");
  let [password, setPassword] = useState("");
  let [dept, setDept] = useState("");
  let [role, setRole] = useState("");
  let [status, setStatus] = useState("");

  useEffect(() => {
    async function displayUser() {
      let response = await fetch("http://localhost:3001/user/user-get");
      let udata = await response.json();
      setData(udata.response);
    }
    displayUser();
  }, []);

  function deleteData(userid) {
    fetch(`http://localhost:3001/user/user-delete/${userid}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
      toast("User Deleted")
  }

  function updateData(userid, username, doj, password, dept, role, status) {
    setUserid(userid);
    setUsername(username);
    setDoj(doj);
    setPassword(password);
    setDept(dept);
    setRole(role);
    setStatus(status);

    setShow(true);
  }

  function updateCategory() {
    let userdata = { userid, username, doj, password, dept, role, status };
    fetch(`http://localhost:3001/user/user-update/${userid}`, {
      method: "PATCH",
      body: JSON.stringify(userdata),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
      toast("User Updated")
  }

  const columns = [
    {
      name: "User ID",
      selector: (row) => row.userid,
      sortable: true,
    },
    {
      name: "User Name",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Date of joining",
      selector: (row) => row.doj,
      sortable: true,
    },
    {
      name: "Password",
      selector: (row) => row.password,
      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.dept,
      sortable: true,
    },
    {
      name: "Role",
      selector: (row) => row.role,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          className="btn btn-danger"
          onClick={() => deleteData(row.userid)}
        >
          {" "}
          <GoTrashcan />
        </button>
      ),
    },
    {
      name: "Edit",
      cell: (row) => (
        <button
          className="btn btn-success"
          onClick={() =>
            updateData(
              row.userid,
              row.username,
              row.doj,
              row.password,
              row.dept,
              row.role,
              row.status
            )
          }
        >
          <GoPencil />
        </button>
      ),
    },
  ];

  return (
    <div className="container">
      <button className="btn btn-light" style={{marginLeft:"950px",marginTop:"30px"}}>
        {" "}
        <Link
          to="/Adduser"
          style={{
            textDecoration: "none",
            color: "green",
            fontWeight: "bolder",
            marginTop: "15px",
          }}
        >
          <GoDiffAdded /> Add User
        </Link>
      </button>
      <DataTable
        title="User List"
        columns={columns}
        data={data}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="450px"
        selectableRows
        selectedRowsHighlight
        highlightOnHover
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="Search here"
            className="w-25 form-control"
          />
        }
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
              updateCategory();
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer/>
    </div>
  );
}
export default UserManagement;
