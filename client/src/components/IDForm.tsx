import { useState } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { IDFormGroup } from "./IDFormGroup";

function IDForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const [fName, setFName] = useState<string | number>();
  const [mName, setMName] = useState<string | number>();
  const [lName, setLName] = useState<string | number>();
  const [idNumber, setIdNumber] = useState<string | number>();

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="container-fluid border border-primary m-2 p-3 rounded"
    >
      <Row className=" mb-3">
        <IDFormGroup
          id="fName"
          md="4"
          type="text"
          label="First Name"
          invalidFeedback="Enter valid name"
          placeholder="First name"
          value={fName}
          setter={setFName}
        />
        <IDFormGroup
          id="mName"
          md="2"
          type="text"
          label="Middle Name"
          invalidFeedback="Enter valid name"
          placeholder="Middle name"
          value={mName}
          setter={setMName}
        />
        <IDFormGroup
          id="lName"
          md="4"
          type="text"
          label="Last Name"
          invalidFeedback="Enter valid name"
          placeholder="Last name"
          value={lName}
          setter={setLName}
        />
        <IDFormGroup
          id="idNumber"
          md="2"
          type="number"
          label="ID Number"
          invalidFeedback="Enter valid id number"
          placeholder="7240xxxx"
          value={idNumber}
          setter={setIdNumber}
        />
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
      <Button
        onClick={() => {
          console.log(fName, mName, lName);
        }}
      >
        log
      </Button>
    </Form>
  );
}

export default IDForm;
