import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import {  GoTrashcan, GoPencil, GoDiffAdded } from "react-icons/go";
import { ToastContainer, toast } from "react-toastify";

export default function ViewproSpecify() {
  let [data, setData] = useState([]);
  let [filterdata, setFilterdata] = useState([]);
  let [search, setSearch] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  let [pspecify, setPspecify] = useState("");
  let [pid, setPid] = useState("");
  let [height, setHeight] = useState("");
  let [width, setWidth] = useState("");
  let [size, setSize] = useState("");
  let [color, setColor] = useState("");
  let [price, setPrice] = useState("");
  let [expdate, setExpdate] = useState("");
  let [mfd, setMfd] = useState("");
  let [weight, setWeight] = useState("");
  let [dimension, setDimension] = useState("");

  useEffect(() => {
    displayProduct();
  }, []);

  async function displayProduct() {
    let response = await fetch("http://localhost:3001/shop/prospecify-get");
    let udata = await response.json();
    setData(udata.response);
    setFilterdata(udata.response);
    console.log(udata);
  }

  function deleteData(pspecify) {
    fetch(`http://localhost:3001/shop/prospecify-delete/${pspecify}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    toast("User Deleted");
    displayProduct();
  }

  function updateData(
    pspecify,
    pid,
    height,
    width,
    size,
    color,
    price,
    expdate,
    mfd,
    weight,
    dimension
  ) {
    setPspecify(pspecify);
    setPid(pid);
    setHeight(height);
    setWidth(width);
    setSize(size);
    setColor(color);
    setPrice(price);
    setExpdate(expdate);
    setMfd(mfd);
    setWeight(weight);
    setDimension(dimension);

    setShow(true);
  }

  function updateProduct() {
    let userdata = {
      pspecify,
      pid,
      height,
      width,
      size,
      color,
      price,
      expdate,
      mfd,
      weight,
      dimension,
    };
    fetch(`http://localhost:3001/shop/prospecify-update/${pspecify}`, {
      method: "PATCH",
      body: JSON.stringify(userdata),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    displayProduct();
    toast("Data Updated");
  }

    const columns = [
      {
        name: "Product Specification",
        selector: (row) => row.pspecify,
        sortable: true,
      },
      {
        name: "Product ID",
        selector: (row) => row.pid,
        sortable: true,
      },

      {
        name: "Height",
        selector: (row) => row.height,
        sortable: true,
      },
      {
        name: "Width",
        selector: (row) => row.width,
        sortable: true,
      },
      {
        name: "Size",
        selector: (row) => row.size,
        sortable: true,
      },
      {
        name: "Color",
        selector: (row) => row.color,
        sortable: true,
      },
      {
        name: "Price",
        selector: (row) => row.price,
        sortable: true,
      },
      {
        name: "Expiry Date",
        selector: (row) => row.expdate,
        sortable: true,
      },

      {
        name: "Manufacturing Date",
        selector: (row) => row.mfd,
        sortable: true,
      },

      {
        name: "Weight",
        selector: (row) => row.weight,
        sortable: true,
      },

      {
        name: "Dimension",
        selector: (row) => row.dimension,
        sortable: true,
      },
      {
        name: "Edit",
        cell: (row) => (
          <button
            className="btn btn-success"
            onClick={() =>
              updateData(
                row.pspecify,
                row.pid,
                row.height,
                row.width,
                row.size,
                row.color,
                row.price,
                row.expdate,
                row.mfd,
                row.weight,
                row.dimension
              )
            }
          >
            <GoPencil />
          </button>
        ),
      },
      {
        name: "Action",
        cell: (row) => {
          return <button className="btn btn-danger" onClick={()=>{deleteData(row.pspecify)}}>
            <GoTrashcan/>
          </button>;
        },
      },
    ];
  useEffect(() => {
    const result = data.filter((value) => {
      return value.pspecify.toLowerCase().match(search.toLowerCase());
    });
    setFilterdata(result);
  }, [search]);


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
    <div>
      <button
        className="btn btn-light"
        style={{ marginLeft: "950px", marginTop: "30px" }}
      >
        {" "}
        <Link
          to="/AddproSpecify"
          style={{
            textDecoration: "none",
            color: "green",
            fontWeight: "bolder",
            marginTop: "15px",
          }}
        >
          <GoDiffAdded />
          Add Product Specification{" "}
        </Link>
      </button>
      <DataTable
        title="Product Specification "
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
          <Modal.Title>update Product Specification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
            placeholder=""
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
                type=""
                placeholder=""
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Width</Form.Label>
              <Form.Control
                type=""
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              updateProduct();
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  );
}
