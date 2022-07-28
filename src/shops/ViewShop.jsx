import React from 'react'
import { Modal,Button,Form,Col,Row} from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import {Link} from 'react-router-dom';
import { GoTrashcan,GoPencil,GoDiffAdded } from "react-icons/go";


export default function ViewShop() {

  let [filterdata, setFilterdata] = useState([]);
  let [search, setSearch] = useState("");

  let [data, setData] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);



  
  let [regno, setRegno] = useState("");
  let [shopid, setShopid] = useState("");
  let [shopname, setShopname] = useState("");
  let [address, setAddress] = useState("");
  let [state, setState] = useState("");
  let [city, setCity] = useState("");
  let [pincode, setPincode] = useState("");
  let [contact, setContact] = useState("");
  let [owner, setOwner] = useState("");
  let [type, setType] = useState("");
  let [email, setEmail] = useState("");
  let [url, setUrl] = useState("");
  let [gst, setGst] = useState("");
  let [turnover, setTurnover] = useState("");
  let [discription, setDiscription] = useState("");
  let [termscondition, setTermscondition] = useState("");
  let [status, setStatus] = useState("");
  let [uploaddocs, setUploaddocs] = useState("");

  useEffect(()=>{
    displayShop();
  },[])

    async function displayShop(){
   
  let response = await fetch('http://localhost:3001/admin/shop-registration-get')
  let udata = await response.json()
  setData(udata.response); 
  setFilterdata(udata.response);
      }
    


    function deleteData(shopid) {
     
      fetch(`http://localhost:3001/admin/shop-registration-delete/${shopid}`, {
        method: "DELETE",
      }).then((response) => response.json())
      .then((json) => console.log(json));

      displayShop();
    }

    function updateData(regno,shopid,shopname,address,state,city,pincode,contact,owner,type,email,url,gst,turnover,discription,termscondition,status,uploaddocs)
     {
      setRegno(regno); 
      setShopid(shopid);
      setShopname(shopname);
      setAddress (address);
      setState(state);
      setCity(city);
      setPincode(pincode);
      setContact(contact);
      setOwner(owner);
      setType(type);
      setEmail(email);
      setUrl(url);
      setGst( gst);
      setTurnover (turnover);
      setDiscription(discription);
      setTermscondition(termscondition);
      setStatus(status);
      setUploaddocs(uploaddocs);

      setShow(true);
    }
  
   
  
    const  updateShop1= ()=> {
      let data={regno,shopid,shopname,address,state,city,pincode,contact,owner,type,email,url,gst,turnover,discription,termscondition,status,uploaddocs}
      fetch(`http://localhost:3001/admin/shop-registration-update/${shopid}`,{
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          
      'Content-type': 'application/json; charset=UTF-8',
        },

      })
      .then((response) => response.json())
      .then((json) => console.log(json));
      
      displayShop();
    }

  
const columns = [
  {
    name: 'Registration no.',
    selector: row => row.regno,
    sticky:"left"
  },
  {
    name: 'Shop ID',
    selector: row => row.shopid,
    sortable:true,
  },
  {
    name: 'Shopname',
    selector: row => row.shopname,
    sortable:true,
  },
  {
    name: 'Address',
    selector: row => row.address,
    sortable:true,
  },
  {
    name: 'State',
    selector: row => row.state,
    sortable:true,
  },
  {
    name: 'City',
    selector: row => row.city,
    sortable:true,
  },
  {
    name: 'Pincode',
    selector: row => row.pincode,
  },
  {
    name: 'Contact',
    selector: row => row.contact,
  },
  {
    name: 'Owner',
    selector: row => row.owner,
  },
  {
    name: 'Type',
    selector: row => row.type,
    sortable:true,
  },
  {
    name: 'Email',
    selector: row => row.email,
    sortable:true,
  },
  {
    name: 'Url',
    selector: row => row.url,
  },
  {
    name: 'GST',
    selector: row => row.gst,
  },
  {
    name: 'Turnover',
    selector: row => row.turnover,
  },
  {
    name: 'Discription',
    selector: row => row.discription,
  },
  {
    name: 'TermsCondition',
    selector: row => row.termscondition,
  },
  {
    name: 'Status',
    selector: row => row.status,
  },
  {
    name: 'Uploaddocs',
    selector: row => row.uploaddocs,
  },
  {
    name: "Update",
    cell: (row) => <button className='btn btn-success' onClick={() => updateData(row.regno,row.shopid,row.shopname, row.address,row.state,row.city,row.pincode,row.contact, row.owner,row.type,row.email
     , row.url,row.gst,row.turnover,row.discription, row.termscondition, row.status,row.uploaddocs)}><GoPencil/></button>
  },
  {
    name: "Action",
    cell: (row) => {
      return (<button className='btn btn-danger' onClick={() => deleteData(row.shopid)}><GoTrashcan/></button>);
    }
  }
]

useEffect(() => {
  const result = data.filter((value) => {
    return value.shopname.toLowerCase().match(search.toLowerCase());
  });
  setFilterdata(result);
}, [search]);

     
  return (
    <div className='container'> 
     <button  className="btn btn-light"> <Link to="/AddShop" style={{textDecoration:"none",color:"green",fontWeight:"bolder",marginTop:"15px"}}><GoDiffAdded/>Addshop </Link></button>
       <DataTable
          title="Shop List"
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

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>update shop</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form className='form-control' style={{padding: "5rem"}}>
        <Row>
          <Col>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Registration No.</Form.Label>
      <Form.Control type="text" placeholder=""  value={regno} onChange={(e)=>setRegno(e.target.value)}/>
     
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>ShopId</Form.Label>
      <Form.Control type="text" placeholder=""   value={shopid} onChange={(e)=>setShopid(e.target.value)}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>ShopName</Form.Label>
      <Form.Control type="text" placeholder=""  value={shopname} onChange={(e)=>setShopname(e.target.value)} />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Address</Form.Label>
      <Form.Control type="text" placeholder=""  value={address} onChange={(e)=>setAddress(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>State</Form.Label>
      <Form.Control type="text" placeholder=""   value={state} onChange={(e)=>setState(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>City</Form.Label>
      <Form.Control type="text" placeholder=""  value={city} onChange={(e)=>setCity(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Pincode</Form.Label>
      <Form.Control type="text" placeholder=""  value={pincode} onChange={(e)=>setPincode(e.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Contact</Form.Label>
      <Form.Control type="text" placeholder=""  value={contact} onChange={(e)=>setContact(e.target.value)} />
    </Form.Group>
    </Col>
    <Col>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Owner</Form.Label>
      <Form.Control type="text" placeholder=""  value={owner} onChange={(e)=>setOwner(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Type</Form.Label>
      <select className="form-select"  value={type} onChange={(e)=>setType(e.target.value)}> 
      <option> Electronic </option>
      <option> Grocery </option>
      <option> Stationary </option>
      <option> Clothing </option>
      <option> Footwears</option>
      <option> GeneralStore </option>
      </select>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Email</Form.Label>
      <Form.Control type="Email" placeholder=""  value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </Form.Group>
    
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Url</Form.Label>
      <Form.Control type="text" placeholder=""  value={url} onChange={(e)=>setUrl(e.target.value)}/>
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>GST</Form.Label>
      <Form.Control type="text" placeholder=""  value={gst} onChange={(e)=>setGst(e.target.value)} />
    </Form.Group>
    
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Turnover</Form.Label>
      <Form.Control type="text" placeholder=""  value={turnover} onChange={(e)=>setTurnover(e.target.value)}/>
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Discription</Form.Label>
      <Form.Control type="text" placeholder=""  value={discription} onChange={(e)=>setDiscription(e.target.value)} />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Terms and Condition</Form.Label>
      <Form.Control type="text" placeholder=""  value={termscondition} onChange={(e)=>setTermscondition(e.target.value)} />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Status</Form.Label>
      <select className="form-select"  value={status} onChange={(e)=>setStatus(e.target.value)}> 
      <option> Pending </option>
      <option> Activated</option>
      </select>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Upload Document</Form.Label>
      <Form.Control type="text" placeholder=""  value={uploaddocs} onChange={(e)=>setUploaddocs(e.target.value)} />
    </Form.Group>
  </Col>
  </Row>
  </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={()=>{updateShop1();handleClose()}}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  
  
  </div>
  )
}
