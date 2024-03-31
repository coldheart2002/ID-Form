import { useState, FormEvent } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { IDFormGroup } from "./IDFormGroup";
import axios from "axios";

type formProps = {
  fName: string | number | undefined;
  mName: string | number | undefined;
  lName: string | number | undefined;
  idNumber: string | number | undefined;
};

function IDForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
      console.log("Form is invalid. Submission prevented.");
    } else {
      console.log("Form is valid. Submitting...");
      const form = { fName, mName, lName, idNumber };
      handleSaveForm(form);
    }
    setValidated(true);
  };
  const handleSaveForm = async (form: formProps) => {
    try {
      const endpoint = "http://192.168.6.5:4000/create";
      const result = await axios.post(endpoint, form);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const [fName, setFName] = useState<string | number>();
  const [mName, setMName] = useState<string | number>();
  const [lName, setLName] = useState<string | number>();
  const [idNumber, setIdNumber] = useState<string | number>();

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmitForm}
      className="container-fluid border border-primary m-2 p-3 rounded"
    >
      <Row className=" mb-3">
        <IDFormGroup
          id="fName"
          md="4"
          type="text"
          label="First Name"
          invalidFeedback="Enter valid name"
          placeholder="Juan"
          value={fName}
          setter={setFName}
        />
        <IDFormGroup
          id="mName"
          md="2"
          type="text"
          label="Middle Name"
          invalidFeedback="Enter valid name"
          placeholder="Dela"
          value={mName}
          setter={setMName}
        />
        <IDFormGroup
          id="lName"
          md="4"
          type="text"
          label="Last Name"
          invalidFeedback="Enter valid name"
          placeholder="Cruz"
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
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="All the data I have provided is accurate and correct."
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Create</Button>
    </Form>
  );
}

export default IDForm;
