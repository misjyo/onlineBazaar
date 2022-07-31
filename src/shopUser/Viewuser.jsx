import React from "react";
import { useState, useEffect } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { GoTrashcan, GoPencil, GoDiffAdded } from "react-icons/go";
import { ToastContainer, toast } from "react-toastify";

function Viewuser() {
  let [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  let [filterdata, setFilterdata] = useState([]);
  let [search, setSearch] = useState("");

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  

 
  let [userid, setUserid] = useState("");
  let [username, setUsername] = useState("");
  let [contact, setContact] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [doj, setDoj] = useState("");
  let [role, setRole] = useState("");

  useEffect(() => {
    displayUser();
  }, []);

    async function displayUser() {
      let response = await fetch("http://localhost:3001/shop/shopuser-get");
      let udata = await response.json();
      setData(udata.response);
      setFilterdata(udata.response);
    }
 

  function deleteData(userid) {
    fetch(`http://localhost:3001/shop/shopuser-delete/${userid}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
      toast("User Deleted")
      displayUser();
  }

  function updateData(userid, username, contact,email, password, doj,role) {
    setUserid(userid);
    setUsername(username);
    setContact(contact);
    setEmail(email);
    setPassword(password);
    setDoj(doj);
    setRole(role);


    setShow(true);
  }

  function updateCategory() {
    let userdata = {userid, username, contact,email, password, doj,role };
    fetch(`http://localhost:3001/shop/shopuser-update/${userid}`, {
      method: "PATCH",
      body: JSON.stringify(userdata),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
      toast("User Updated")
      displayUser();
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
      name: "Contact",
      selector: (row) => row.contact,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
  
    {
      name: "Password",
      selector: (row) => row.password,
      sortable: true,
    },
    {
      name: "Date of joining",
      selector: (row) => row.doj,
      sortable: true,
    },
    {
      name: "Role",
      selector: (row) => row.role,
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
              row.contact,
              row.email,
              row.password,
              row.doj,
              row.role,
            
            )
          }
        >
          <GoPencil />
        </button>
      ),
    },
  ];

  useEffect(() => {
    const result = data.filter((value) => {
      return value.username.toLowerCase().match(search.toLowerCase());
    });
    setFilterdata(result);
  }, [search]);


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
          <GoDiffAdded /> 
          Add User
        </Link>
      </button>
      <DataTable
        title="User List"
        columns={columns}
        data={filterdata}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="450px"
        selectableRows
        selectedRowsHighlight
        highlightOnHover
        subHeader
        subHeaderComponent={
          <input
            type="search"
            placeholder="Search here"
            className="w-25 form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
export default Viewuser;
