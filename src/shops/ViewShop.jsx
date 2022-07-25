import React from 'react'
import {Table, Modal,Button,Form,Col,Row} from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';

export default function ViewShop() {

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
    async function displayShop(){
   
  let response = await fetch('http://localhost:3001/admin/shop-registration-get')
  let udata = await response.json()
  setData(udata.response); 
      }
      displayShop();
    },[])



    function deleteData(shopid) {
     
      fetch(`http://localhost:3001/admin/shop-registration-delete/${shopid}`, {
        method: "DELETE",
      }).then((response) => response.json())
      .then((json) => console.log(json));
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
  
    // function updateShop1() {
    //   fetch(`http://localhost:3001/admin/shop-registration-update/${shopid}`,{
    //     method: "PATCH",
    //     headers: {
    //       " Accept": "application/json",
    //       "content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       regno: regno,
    //             shopid: shopid,
    //             shopname: shopname,
    //             address: address,
    //             state: state,
    //             city: city,
    //             pincode: pincode,
    //             contact: contact,
    //             owner: owner,
    //             type: type,
    //             email: email,
    //             url: url,
    //             gst: gst,
    //             turnover: turnover,
    //             discription: discription,
    //             termscondition: termscondition,
    //             status: status,
    //             uploaddocs: uploaddocs
    //           }),

    //   })
      
    //   .then((result) => {
    //     result.json().then((response) => {
    //       console.log(response);
    //     });
    //   });
    // }
  
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
    }
     
  return (
    <div className='container' style={{overflowX:'auto'}}> 
      <h1> ShopList</h1>
      <Table striped bordered hover>
    <thead>
      <tr>
        <th className='fixed-column' style={{marginRight:"10px"}}>RegNo.</th>
        <th >ShopId</th>
        <th>ShopName</th>
        <th>Address</th>
        <th>State</th>
        <th>City</th>
        <th>Pincode</th>
        <th>Contact</th>
        <th>Owner</th>
        <th>Type</th>
        <th>Email</th>
        <th>Url</th>
        <th>GST</th>
        <th>Turnover</th>
        <th>Discription</th>
        <th>Terms and condition</th>
        <th>Status</th>
        <th>Uploaddocs</th>
        <th>Action</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
{
data.map((item,index)=>{
  return(
      <tr key={index}>
      <td className='fixed-column'>{item.regno}</td>
        <td >{item.shopid}</td>
        <td>{item.shopname}</td>
        <td>{item.address}</td>
        <td>{item.state}</td>
        <td>{item.city}</td>
        <td>{item.pincode}</td>
        <td>{item.contact}</td>
        <td>{item.owner}</td>
        <td>{item.type}</td>
        <td>{item.email}</td>
        <td>{item.url}</td>
        <td>{item.gst}</td>
        <td>{item.turnover}</td>
        <td>{item.discription}</td>
        <td>{item.termscondition}</td>
        <td>{item.status}</td>
        <td>{item.uploaddocs}</td>
        <td><button className='btn btn-danger' onClick={()=>deleteData(item.shopid)}>Delete</button></td>
        <td><button className='btn btn-success' onClick={()=>{updateData( item.regno,  
          item.shopid,
          item.shopname,
          item.address,
          item.state,
          item.city,
          item.pincode,
          item.contact,
          item.owner,
          item.type,
          item.email,
          item.url,
          item.gst,
          item.turnover,
          item.discription,
          item.termscondition,
          item.status,
          item.uploaddocs);
          }}> Update</button></td>
        </tr>
)}
)
}
    </tbody>
  </Table>
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
