import React from "react";
import { useState, useEffect } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { GoTrashcan, GoPencil, GoDiffAdded } from "react-icons/go";
import { ToastContainer, toast } from "react-toastify";

function Viewbank() {
  let [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  let [filterdata, setFilterdata] = useState([]);
  let [search, setSearch] = useState("");

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  let [bankname, setBankname] = useState("");
  let [accno, setAccno] = useState("");
  let [ifsc_code, setIfsc_code] = useState("");
  let [branch, setBranch] = useState("");
  let [acc_holder_name, setAcc_holder_name] = useState("");

  useEffect(() => {
    displayBank();
  }, []);

  async function displayBank() {
    let response = await fetch("http://localhost:3001/shop/bank-get");
    let udata = await response.json();
    setData(udata.response);
    setFilterdata(udata.response);
  }

  function deleteData(accno) {
    fetch(`http://localhost:3001/shop/bank-delete/${accno}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    toast("User Deleted");
    displayBank();
  }

  function updateData(bankname, accno, ifsc_code, branch, acc_holder_name) {
    setBankname(bankname);
    setAccno(accno);
    setIfsc_code(ifsc_code);
    setBranch(branch);
    setAcc_holder_name(acc_holder_name);

    setShow(true);
  }

  function updateBank() {
    let userdata = { bankname, accno, ifsc_code, branch, acc_holder_name };

    fetch(`http://localhost:3001/shop/bank-update/${accno}`, {
      method: "PATCH",
      body: JSON.stringify(userdata),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    toast("User Updated");
    displayBank();
  }

  const columns = [
    {
      name: "Bank Name",
      selector: (row) => row.bankname,
      sortable: true,
    },
    {
      name: "Account Number",
      selector: (row) => row.accno,
      sortable: true,
    },
    {
      name: "IFSC CODE",
      selector: (row) => row.ifsc_code,
      sortable: true,
    },
    {
      name: "Branch",
      selector: (row) => row.branch,
      sortable: true,
    },

    {
      name: "Account Holder Name",
      selector: (row) => row.acc_holder_name,
      sortable: true,
    },

    {
      name: "Action",
      cell: (row) => (
        <button
          className="btn btn-danger"
          onClick={() => deleteData(row.accno)}
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
              row.bankname,
              row.accno,
              row.ifsc_code,
              row.branch,
              row.acc_holder_name
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
      return value.bankname.toLowerCase().match(search.toLowerCase());
    });
    setFilterdata(result);
  }, [search]);

  return (
    <div className="container">
      <button
        className="btn btn-light"
        style={{ marginLeft: "950px", marginTop: "30px" }}
      >
        {" "}
        <Link
          to="/Addbank"
          style={{
            textDecoration: "none",
            color: "green",
            fontWeight: "bolder",
            marginTop: "15px",
          }}
        >
          <GoDiffAdded />
          Add Bank 
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
          <Modal.Title>Add Bank</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form >
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
              updateBank();
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
export default Viewbank;
