import React from 'react'
import {Modal,Button,Form} from 'react-bootstrap';
import { useState,useEffect } from 'react';
import DataTable from 'react-data-table-component';
import {Link} from 'react-router-dom';
import { GoTrashcan,GoPencil,GoDiffAdded } from "react-icons/go";


export default function ViewSubCategory() {

  let [filterdata, setFilterdata] = useState([]);
  let [search, setSearch] = useState("");
let[data,setData]=useState([]);


const [show, setShow] = useState(false);

const handleClose = () => setShow(false);


let [cid, setCid] = useState("");
let [ccid, setCcid] = useState("");
let [cname, setCname] = useState("");


  useEffect(()=>{
    displaySubCategory();
  },[])

    async function displaySubCategory(){
  let response = await fetch('http://localhost:3001/admin/product-sub-cgt-get')
  let udata = await response.json() 
  setData(udata.response); 
  setFilterdata(udata.response);
  // console.log(udata)
      
      }
   

    function deleteData (cid) {

      fetch(`http://localhost:3001/admin/product-sub-cgt-delete/${cid}`, 
      {
        method: "DELETE",
      }).then((response) => response.json())
      .then((json) => console.log(json));
      displaySubCategory();
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
    displaySubCategory();
}



const columns = [
  {
    name: 'CategoryName',
    selector: row => row.cid,
    sortable:true,
  },
  {
    name: ' Sub Category ID',
    selector: row => row.ccid,
    sortable:true,
  },
  {
    name: ' Sub Category Name',
    selector: row => row.cname,
    sortable:true,
  },
  {
    name: "Update",
    cell: (row) => <button className='btn btn-success' onClick={() => updateData(row.cid,row.ccid, row.cname)}><GoPencil/></button>
  },
  {
    name: "Action",
    cell: (row) => {
      return (<button className='btn btn-danger' onClick={() => deleteData(row.cid)}><GoTrashcan/></button>);
    }
  }
]


useEffect(() => {
  const result = data.filter((value) => {
    return value.cname.toLowerCase().match(search.toLowerCase());
  });
  setFilterdata(result);
}, [search]);


  return (
    <div className='container'>
 <button  className="btn btn-light"> <Link to="/AddSubCategory" style={{textDecoration:"none",color:"green",fontWeight:"bolder",marginTop:"15px"}}> <GoDiffAdded/>AddSubCategory </Link></button>
      <div className='table-container'>
        <DataTable
          title=" Sub Category List"
          columns={columns}
          data={filterdata}

          pagination
          fixedHeader
          fixedHeaderScrollHeight='450px'
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
    </div>
  )
}
