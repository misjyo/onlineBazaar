import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";

function AddOffer() {
  let [offerid, setOfferid] = useState("");
  let [coupancode, setCoupancode] = useState("");
  let [fromdate, setFromdate] = useState("");
  let [todate, setTodate] = useState("");
  let [discountpercentage, setDiscountpercentage] = useState("");
  let [flatdiscount, setFlatdiscount] = useState("");
  let [validin, setValidin] = useState("");
  let [bankoffer, setBankoffer] = useState("");

  function submitData(e) {
    let userdata = {
      offerid,
      coupancode,
      fromdate,
      todate,
      discountpercentage,
      flatdiscount,
      validin,
      bankoffer,
    };
    e.preventDefault();
    console.log(userdata);
    let reqData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    };
    fetch("http://localhost:3001/admin//offfer-post", reqData)
      .then((response) => console.log(response.json()))
      .then((data) => console.log(data));
  }

  return (
    <>
      <div className="AddShop" style={{ width: "70%", marginLeft: "60px" }}>
        <h1>Add Offer</h1>
        <Form>
          <Row>
            <Col>
              {" "}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>OfferId</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter offerId"
                  value={offerid}
                  onChange={(e) => setOfferid(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>CoupanCode</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="coupan code"
                  value={coupancode}
                  onChange={(e) => setCoupancode(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>From Date</Form.Label>
                <Form.Control
                  type="Date"
                  placeholder=""
                  value={fromdate}
                  onChange={(e) => setFromdate(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>To date</Form.Label>
                <Form.Control
                  type="Date"
                  placeholder=""
                  value={todate}
                  onChange={(e) => setTodate(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Discount Percentage</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  value={discountpercentage}
                  onChange={(e) => setDiscountpercentage(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Flat Discount</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="flat discount"
                  value={flatdiscount}
                  onChange={(e) => setFlatdiscount(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Bank Offer</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="bank offer"
                  value={bankoffer}
                  onChange={(e) => setBankoffer(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Valid In </Form.Label>
                <select
                  className="form-select"
                  type="text"
                  value={validin}
                  onChange={(e) => setValidin(e.target.value)}
                >
                  <option> all India </option>
                  <option> specificcity </option>
                </select>
              </Form.Group>

              <Button variant="primary" type="submit" onClick={submitData}>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}
export default AddOffer;
