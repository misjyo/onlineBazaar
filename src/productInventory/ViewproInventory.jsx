import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { GoPencil, GoDiffAdded } from "react-icons/go";
import { ToastContainer, toast } from "react-toastify";

export default function ViewproInventory() {
  let[data,setData]=useState([]);
  let[data1,setData1]=useState([]);
  let[data2,setData2]=useState([]);
  let [filterdata, setFilterdata] = useState([]);
  let [search, setSearch] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  let [pid, setPid] = useState("");
  let [cid, setCid] = useState("");
  let [ccid, setCcid] = useState("");
  let [pname, setPname] = useState("");
  let [pcompany, setPcompany] = useState("");
  let [shopid, setShopid] = useState("");
  let [qty, setQty] = useState("");
  let [discription, setDiscription] = useState("");

  //getApi

  useEffect(() => {
    displayProinventory();
  }, []);

  async function displayProinventory() {
    let response = await fetch("http://localhost:3001/shop/proinventory-get");
    let udata = await response.json();
    setData(udata.response);
    setFilterdata(udata.response);
    console.log(udata);
  }

  function updateData(
    pid,
    cid,
    ccid,
    pname,
    pcompany,
    shopid,
    qty,
    discription
  ) {
    setPid(pid);
    setCid(cid);
    setCcid(ccid);
    setPname(pname);
    setPcompany(pcompany);
    setShopid(shopid);
    setQty(qty);
    setDiscription(discription);

    setShow(true);
  }

  function updateCategory() {
    let userdata = {
      pid,
      cid,
      ccid,
      pname,
      pcompany,
      shopid,
      qty,
      discription,
    };
    fetch(`http://localhost:3001/shop/proinventory-update/${pid}`, {
      method: "PATCH",
      body: JSON.stringify(userdata),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

      displayProinventory();

    toast("Data Updated");
  }



  const columns = [
    {
      name: "Product ID",
      selector: (row) => row.pid,
      sortable: true,
    },
    {
      name: "Category ID",
      selector: (row) => row.cid,
      sortable: true,
    },
    {
      name: "Category Sub ID",
      selector: (row) => row.ccid,
      sortable: true,
    },
    {
      name: "ProductName",
      selector: (row) => row.pname,
      sortable: true,
    },
    {
      name: "Shop Id",
      selector: (row) => row.shopid,
      sortable: true,
    },
    {
      name: "Quantity",
      selector: (row) => row.qty,
      sortable: true,
    },
    {
      name: "Discription",
      selector: (row) => row.discription,
      sortable: true,
    },
    {
      name: "Edit",
      cell: (row) => (
        <button
          className="btn btn-success"
          onClick={() =>
            updateData(
              row.pid,
              row.cid,
              row.ccid,
              row.pname,
              row.pcompany,
              row.shopid,
              row.qty,
              row.discription
            )
          }
        >
          <GoPencil />
        </button>
      ),
    },
    {
      name: "Specification",
      cell: (row) => {
        return <button className="btn btn-light"> <Link to ="/Viewprospecify"> specifiy</Link></button>;
      },
    },
  ];

  useEffect(() => {
    const result = data.filter((value) => {
      return value.pname.toLowerCase().match(search.toLowerCase());
    });
    setFilterdata(result);
  }, [search]);

  
  // get api category
  useEffect(() => {
    displayCategory();
  }, []);

  async function displayCategory() {
    let response = await fetch("http://localhost:3001/admin/product-cgt-get");
    let udata = await response.json();
    setData2(udata.response);
    console.log(udata);
  }


  // get api product sub category
  useEffect(() => {
    displaySubCategory();
  }, []);

  async function displaySubCategory() {
    let response = await fetch(
      "http://localhost:3001/admin/product-sub-cgt-get"
    );
    let udata = await response.json();
    setData1(udata.response);
    // console.log(udata)
  }

// get api shopregistration
useEffect(() => {
  displayShop();
}, []);

async function displayShop() {
  let response = await fetch(
    "http://localhost:3001/admin/shop-registration-get"
  );
  let udata = await response.json();
  setData(udata.response);

}


  return (
    <div>
      <button
        className="btn btn-light"
        style={{ marginLeft: "950px", marginTop: "30px" }}
      >
        {" "}
        <Link
          to="/Addproinventory"
          style={{
            textDecoration: "none",
            color: "green",
            fontWeight: "bolder",
            marginTop: "15px",
          }}
        >
          <GoDiffAdded />
          Add Product Inventory{" "}
        </Link>
      </button>
      <DataTable
        title="Product Inventory "
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
          <Modal.Title>update Product Inventory</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ProductID</Form.Label>
              <Form.Control
                type="text"
                placeholder="product id"
                value={pid}
                onChange={(e) => setPid(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>CategoryID</Form.Label>
          <select
            className="form-select"
            type="text"
            placeholder="category id"
            value={cid}
            onChange={(e) => setCid(e.target.value)}
          >
           <option value="">--select category Id--</option>
            {data2.map((item, index) => {
              return (
                <option key={index} value={item.cid}>
                  {item.cid}
                </option>
              );
            })}
          </select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>CategorySubID</Form.Label>
          <select
            className="form-select"
            type="text"
            placeholder="category id"
            value={ccid}
            onChange={(e) => setCcid(e.target.value)}
          >
           <option value="">--select sub category Id--</option>
            {data1.map((item, index) => {
              return (
                <option key={index} value={item.ccid}>
                  {item.ccid}
                </option>
              );
            })}
          </select>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="category name"
            value={pname}
            onChange={(e) => setPname(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>Product Company</Form.Label>
           <select
            className="form-select"
            type="text"
            placeholder="category id"
            value={pcompany}
            onChange={(e) => setPcompany(e.target.value)}
          >
           <option value="">--select Product company--</option>
            {data.map((item, index) => {
              return (
                <option key={index} value={item.shopid}>
                  {item.company}
                </option>
              );
            })}
          </select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>ShopId</Form.Label>
                <select
            className="form-select"
            type="text"
            placeholder="category id"
            value={shopid}
            onChange={(e) => setShopid(e.target.value)}
          >
           <option value="">--select Product company--</option>
            {data.map((item, index) => {
              return (
                <option key={index} value={item.shopid}>
                  {item.shopid}
                </option>
              );
            })}
              </select>
              </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Discription</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={discription}
                onChange={(e) => setDiscription(e.target.value)}
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
      <ToastContainer />
    </div>
  );
}
