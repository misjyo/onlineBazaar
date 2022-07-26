import React from 'react'
import {Modal,Button,Form} from 'react-bootstrap';
import { useState,useEffect } from 'react';
import DataTable from 'react-data-table-component';

export default function ViewSubCategory() {

let[data,setData]=useState([]);

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);


let [cid, setCid] = useState("");
let [ccid, setCcid] = useState("");
let [cname, setCname] = useState("");


  useEffect(()=>{
    async function displaySubCategory(){
   
  let response = await fetch('http://localhost:3001/admin/product-sub-cgt-get')
  let udata = await response.json() 
  setData(udata.response); 
  // console.log(udata)
      
      }
      displaySubCategory();
    },[])

    function deleteData (cid) {

      fetch(`http://localhost:3001/admin/product-sub-cgt-delete/${cid}`, 
      {
        method: "DELETE",
      }).then((response) => response.json())
      .then((json) => console.log(json));
    }
function updateData(cid,ccid,cname)
{
  setCid(cid);
  setCcid(ccid);
  setCname(cname);

  setShow(true);
}

function updateSubcategory(){
  let userdata = {cid,ccid,cname}
  fetch(`http://localhost:3001/admin/product-sub-cgt-update/${cid}`, {
    method: 'PATCH',
    body: JSON.stringify(userdata),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}



const columns = [
  {
    name: 'Category ID',
    selector: row => row.cid,
  },
  {
    name: ' Sub Category ID',
    selector: row => row.ccid,
  },
  {
    name: 'Category Name',
    selector: row => row.cname,
  },
  {
    name: "Update",
    cell: (row) => <button className='btn btn-success' onClick={() => updateData(row.cid,row.ccid, row.cname)}>Update</button>
  },
  {
    name: "Action",
    cell: (row) => {
      return (<button className='btn btn-danger' onClick={() => deleteData(row.cid)}>Delete</button>);
    }
  }
]
  return (
    <div className='container'>



{/* <h1 style={{ textAlign: 'center' }}>View Categories</h1> */}
      <div className='table-container'>
        <DataTable
          title="Category List"
          columns={columns}
          data={data}

          pagination
          fixedHeader
          highlightOnHover
        />
      </div>
      {/* <h1> Sub Category List</h1>
      <Table striped bordered hover>
    <thead>
      <tr>
        <th>CId</th>
        <th>CCId</th>
        <th>CName</th>
        <th>Action</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
        {data.map((item,index)=>{
          return(
  <tr key={index}>
      
        <td>{item.cid}</td>
        <td>{item.ccid}</td>
        <td>{item.cname}</td>
        <td><button className='btn btn-danger' onClick={()=>deleteData(item.cid)}>Delete</button></td>
        <td><button className='btn btn-success' onClick={()=>{updateData(item.cid,item.ccid,item.cname)}}>Update</button></td>
        
      </tr>
      )
    })}
    </tbody>
  </Table> */}
  

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>update sub category</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form >
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>CategoryId</Form.Label>
      <Form.Control type="text" placeholder="category id" value={cid} onChange={(e)=>setCid(e.target.value)} />
     
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>ProductId</Form.Label>
      <Form.Control type="text" placeholder="product id" value={ccid} onChange={(e)=>setCcid(e.target.value)}/>
     
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>CategoryName</Form.Label>
      <Form.Control type="text" placeholder="category name"value={cname} onChange={(e)=>setCname(e.target.value)} />
    </Form.Group>
  </Form>
  </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={()=>{ updateSubcategory();handleClose()}}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>

    </div>
  )
}
