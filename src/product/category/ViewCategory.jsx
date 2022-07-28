import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { GoTrashcan, GoPencil, GoDiffAdded } from "react-icons/go";
import { ToastContainer, toast } from "react-toastify";

export default function ViewCategory() {
  let [data, setData] = useState([]);
  let [filterdata, setFilterdata] = useState([]);
  let [search, setSearch] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  let [cid, setCid] = useState("");
  let [cname, setCname] = useState("");

  //getApi

  useEffect(() => {
    displayCategory();
  }, []);

  async function displayCategory() {
    let response = await fetch("http://localhost:3001/admin/product-cgt-get");
    let udata = await response.json();
    setData(udata.response);
    setFilterdata(udata.response);
    console.log(udata);
  }

  function deleteData(cid) {
    fetch(`http://localhost:3001/admin/product-cgt-delete/${cid}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    displayCategory();
    toast("Data deleted");
  }

  function updateData(cid, cname) {
    setCid(cid);
    setCname(cname);

    setShow(true);
  }

  function updateCategory() {
    let userdata = { cid, cname };
    fetch(`http://localhost:3001/admin/product-cgt-update/${cid}`, {
      method: "PATCH",
      body: JSON.stringify(userdata),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    displayCategory();
    toast("Data Updated");
  }

  const columns = [
    {
      name: "Category ID",
      selector: (row) => row.cid,
      sortable: true,
    },
    {
      name: "CategoryName",
      selector: (row) => row.cname,
      sortable: true,
    },
    {
      name: "Edit",
      cell: (row) => (
        <button
          className="btn btn-success"
          onClick={() => updateData(row.cid, row.cname)}
        >
          <GoPencil />
        </button>
      ),
    },
    {
      name: "Action",
      cell: (row) => {
        return (
          <button
            className="btn btn-danger"
            onClick={() => deleteData(row.cid)}
          >
            <GoTrashcan />
          </button>
        );
      },
    },
  ];

  useEffect(() => {
    const result = data.filter((value) => {
      return value.cname.toLowerCase().match(search.toLowerCase());
    });
    setFilterdata(result);
  }, [search]);

  return (
    <div>
      <button className="btn btn-light" style={{marginLeft:"950px",marginTop:"30px"}}>
        {" "}
        <Link
          to="/AddCategory"
          style={{
            textDecoration: "none",
            color: "green",
            fontWeight: "bolder",
            marginTop: "15px",
          }}
        >
          <GoDiffAdded />
          Add Category{" "}
        </Link>
      </button>
      <div className="table-container">
        <DataTable
          title="Category List"
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
            <Modal.Title>update shop</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>CategoryID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="category id"
                  value={cid}
                  onChange={(e) => setCid(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Category Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="category name"
                  value={cname}
                  onChange={(e) => setCname(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                updateCategory();
                handleClose();
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <ToastContainer />
    </div>
  );
}
