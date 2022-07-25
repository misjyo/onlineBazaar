import React from "react";
import { useState } from "react";
import { Table ,Form,Modal,Button} from 'react-bootstrap'
function UserManagement(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div>
      <h1>USER MANAGEMENT</h1>
      <button className="btn btn-primary"    onClick={handleShow}> Add New </button>
      <div className='container'> 
<Table striped bordered hover  >

      <thead>
        <tr>
          <th>UserId</th>
          <th>UserName</th>
          <th>Date of joining</th>
          <th>Password</th>
          <th>Department</th>
          <th>Role</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>10-02-2022</td>
          <td>****</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
        
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>10-02-2022</td>
          <td>****</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Thornton</td>
          
        </tr> 
      </tbody>
    </Table>
      </div>

    

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicId">
        <Form.Label>User Id</Form.Label>
        <Form.Control type="id" placeholder="Enter user id" />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Date of joining</Form.Label>
        <Form.Control type="date" placeholder="Date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDepartment">
        <Form.Label>Department</Form.Label>
        <Form.Control type="text" placeholder="Department" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicRole">
        <Form.Label>Role</Form.Label>
        <Form.Control type="text" placeholder="Role" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicStatus">
        <Form.Label>Status</Form.Label>
        <Form.Control type="text" placeholder="Status" />
     </Form.Group>
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  </div>
  )
}
export default UserManagement;