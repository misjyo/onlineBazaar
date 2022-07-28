import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";
import { ToastContainer, toast } from 'react-toastify';

export default function AddShop() {
  // console.log(Country.getAllCountries())
  // console.log(State.getAllStates())
  // console.log(City.getAllcity());

  let [regno, setRegno] = useState("");
  let [shopid, setShopid] = useState("");
  let [shopname, setShopname] = useState("");
  let [address, setAddress] = useState("");
  let [country, setCountry] = useState([]);
  let [state, setState] = useState([]);
  let [city, setCity] = useState([]);
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

  function submitData(e) {
    let userdata = {
      regno: regno,
      shopid: shopid,
      shopname: shopname,
      address: address,
      country: country,
      state: state,
      city: city,
      pincode: pincode,
      contact: contact,
      owner: owner,
      type: type,
      email: email,
      url: url,
      gst: gst,
      turnover: turnover,
      discription: discription,
      termscondition: termscondition,
      status: status,
      uploaddocs: uploaddocs,
    };

    e.preventDefault();
    // console.log(userdata);
    let reqData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    };
    fetch("http://localhost:3001/admin/shop-registration-post", reqData)
      .then((response) => console.log(response.json()))
      .then((data) => console.log(data));
      toast("data submitted");
  }

  return (
    <>
      <div className="AddShop">
        <Form onSubmit={submitData}>
          <Row>
            <h2> Shop Registration</h2>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Registration No.</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={regno}
                  onChange={(e) => setRegno(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>ShopId</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={shopid}
                  onChange={(e) => setShopid(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>ShopName</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={shopname}
                  onChange={(e) => setShopname(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Country</Form.Label>
                <select
                  className="form-select"
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="">Country</option>
                  {Country &&
                    Country.getAllCountries().map((item) => (
                      <option key={item.isoCode} value={item.isoCode}>
                        {item.name}
                      </option>
                    ))}
                </select>

                {/* <Form.Control type="text" placeholder=""   value={country} onChange={(e)=>setCountry(e.target.value)}/> */}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>State</Form.Label>

                {country && (
                  <select
                  className="form-select"
                    required
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  >
                    <option value="">State</option>
                    {State &&
                      State.getStatesOfCountry(country).map((item) => (
                        <option key={item.isoCode} value={item.isoCode}>
                          {item.name}
                        </option>
                      ))}
                  </select>
                )}

                {/* <Form.Control
                  type="text"
                  placeholder=""
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                /> */}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>City</Form.Label>
                {state  && (
                  <select
                  className="form-select"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option value="">City</option>
                    {City && 
                      City.getCitiesOfState(country,state).map((item) => (
                        <option key={item.isoCode} value={item.isoCode}>
                          {item.name}
                          
                        </option>
                      ))}
                  </select>
                )} 
 

                 {/* <Form.Control
                  type="text"
                  placeholder=""
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />  */}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contact</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Owner</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Type</Form.Label>
                <select
                  className="form-select"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option> Electronic </option>
                  <option> Groccery </option>
                  <option> Stationary </option>
                  <option> Clothing </option>
                  <option> Footwears</option>
                  <option> GeneralStore </option>
                </select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="Email"
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Url</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>GST</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={gst}
                  onChange={(e) => setGst(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Turnover</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={turnover}
                  onChange={(e) => setTurnover(e.target.value)}
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

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Terms and Condition</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={termscondition}
                  onChange={(e) => setTermscondition(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Status</Form.Label>
                <select
                  className="form-select"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option> Pending </option>
                  <option> Activated</option>
                </select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Upload Document</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={uploaddocs}
                  onChange={(e) => setUploaddocs(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
        <ToastContainer/>
      </div>

    </>
  );
}
