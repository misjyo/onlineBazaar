import React from 'react'
import {Modal,Button,Form} from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import DataTable from 'react-data-table-component';

export default function ViewCategory() {
// let[search,setSearch]=useState("")
// let[filterdata,setFilterdata]=useState([])
  let [data,setData]=useState([]);

  const [show, setShow] = useState(false);

const handleClose = () => setShow(false);


let [cid, setCid] = useState("");
  let [cname, setCname] = useState("");


 //getApi
  useEffect(()=>{
  async function displayCategory(){
 
let response = await fetch('http://localhost:3001/admin/product-cgt-get')
let udata = await response.json() 
setData(udata.response); 
// setFilterdata(udata.response); 
// console.log(udata)
    
    }
    displayCategory();
  },[])


 function deleteData (cid) {
    fetch(`http://localhost:3001/admin/product-cgt-delete/${cid}`, {
      method: "DELETE",
    }).then((response) => response.json())
    .then((json) => console.log(json));
  }
function updateData(cid,cname)
{
  setCid(cid);
  setCname(cname);

  setShow(true);
}


function updateCategory(){
  let userdata ={cid,cname}
  fetch(`http://localhost:3001/admin/product-cgt-update/${cid}`, {
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
    name: 'Category Name',
    selector: row => row.cname,
    sortable:true,
  },
  {
    name: "Edit",
    cell: row => <button className='btn btn-success' onClick={() => updateData(row.cid, row.cname)}>Update</button>
  },
  {
    name: "Edit",
    cell: (row) => {
      return (<button className='btn btn-danger' onClick={() => deleteData(row.cid)}>Delete</button>);
    }
  }
]

// useEffect(()=>{
//   const result = data.filter((category)=>{
//     return category.cname.toLowerCase().math(search.toLowerCase());
//   });
//   setFilterdata(result);
// },[search]);

  return (
    



<div>
     
      <div className='table-container'>
        <DataTable
          title="Category List"
          columns={columns}
          data={data}
          pagination
          fixedHeader
          fixedHeaderScrollHeight='450px'
          selectableRows
          selectedRowsHighlight
          highlightOnHover
          subHeader
      subHeaderComponent={<input type="text" placeholder='Search here' className='w-25 form-control'/>}
      //  value={search}
      //  onChange={(e)=> setSearch(e.target.value)}
       
       />
      </div>




      {/* <h1> Category List</h1>
      <Table striped bordered hover>
    <thead>
      <tr>
        <th>CategoryId</th>
        <th>CategoryName</th>
        <th>Action</th>
        <th>Update</th>
        
    
      </tr>
    </thead>
    <tbody>
      {data.map((item,index)=>{
        return(
      <tr key={index}>

        <td>{item.cid}</td>
        <td>{item.cname}</td>
        <td><button className='btn btn-danger' onClick={()=>deleteData(item.cid)}>Delete</button></td>
        <td><button className='btn btn-success'onClick={()=>{updateData(item.cid,item.cname)}}>Update</button></td>
      </tr>
        )
      })
}
    </tbody>
  </Table> */}
  
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>update shop</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form >
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>CategoryID</Form.Label>
      <Form.Control type="text" placeholder="category id" value={cid} onChange={(e)=>setCid(e.target.value)} />
      
    </Form.Group>

    <Form.Group className="mb-4" controlId="formBasicPassword">
      <Form.Label>Category Name</Form.Label>
      <Form.Control type="text" placeholder="category name"value={cname} onChange={(e)=>setCname(e.target.value)} />
    </Form.Group>
  </Form>
  </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={()=>{ updateCategory();handleClose()}}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  
  </div>
  )
}
