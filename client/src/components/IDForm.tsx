import { useState, FormEvent } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { IDFormControl } from "./form_template/IDFormControl";
import axios from "axios";
import { IDFormSelect } from "./form_template/IDFormSelect";

type formProps = {
  fName: string | number | undefined;
  mName: string | number | undefined;
  lName: string | number | undefined;
  idNumber: string | number | undefined;
};

function IDForm() {
  const [validated, setValidated] = useState(false);
  //personal info
  const [fName, setFName] = useState<string | number>();
  const [mName, setMName] = useState<string | number>();
  const [lName, setLName] = useState<string | number>();
  const [idNumber, setIdNumber] = useState<string | number>();
  const [address, setAddress] = useState<string | number>();
  const [course, setCourse] = useState<string | number>();
  const [bloodType, setBloodType] = useState<string | number>();
  const [sex, setSex] = useState<string | number>();
  const [birthDate, setBirthDate] = useState<string | number>();
  const [age, setAge] = useState<string | number>();
  //guardian info
  const [gfName, setGfName] = useState<string | number>();
  const [gmName, setGmName] = useState<string | number>();
  const [glName, setGlName] = useState<string | number>();
  const [gNumber, setGNumber] = useState<string | number>();

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      event.stopPropagation();
      console.log("Form is invalid. Submission prevented.");
    } else {
      console.log("Form is valid. Submitting...");
      const form = {
        fName,
        mName,
        lName,
        idNumber,
        address,
        course,
        bloodType,
        sex,
        birthDate,
        age,
        gfName,
        gmName,
        glName,
        gNumber,
      };
      // console.log(form);
      handleSaveForm(form);
    }
    setValidated(true);
  };
  const handleSaveForm = async (form: formProps) => {
    try {
      const endpoint = "http://192.168.1.22:4000/create";
      const result = await axios.post(endpoint, form);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmitForm}
      className="container-fluid border border-primary m-2 p-3 rounded"
    >
      <Row className="text-center mb-4">
        <h2 className="text-center">ID Form</h2>
      </Row>

      <Row className="mb-3">
        <h4 className="text-center mb-3">Personal Information</h4>
        <IDFormControl
          id="fName"
          md="4"
          type="text"
          label="First Name"
          invalidFeedback="Enter valid name"
          placeholder="Juan"
          value={fName}
          setter={setFName}
        />
        <IDFormControl
          id="mName"
          md="2"
          type="text"
          label="Middle Name"
          invalidFeedback="Enter valid name"
          placeholder="Dela"
          value={mName}
          setter={setMName}
        />
        <IDFormControl
          id="lName"
          md="4"
          type="text"
          label="Last Name"
          invalidFeedback="Enter valid name"
          placeholder="Cruz"
          value={lName}
          setter={setLName}
        />
        <IDFormControl
          id="idNumber"
          md="2"
          type="number"
          label="ID Number"
          invalidFeedback="Enter valid id number"
          placeholder="7xxxxxxx"
          value={idNumber}
          setter={setIdNumber}
        />
      </Row>
      <Row className="mb-3">
        <IDFormSelect
          id="course"
          md="2"
          label="Course"
          setter={setCourse}
          options={["BIT-AT", "BIT-CT", "BIT-DT", "BIT-ET", "BIT-GT"]}
        />
        <IDFormControl
          id="birthDate"
          md="2"
          type="date"
          label="Birth Date"
          invalidFeedback="Enter valid date"
          placeholder=""
          value={birthDate}
          setter={setBirthDate}
        />
        <IDFormControl
          id="address"
          md="3"
          type="text"
          label="Address"
          invalidFeedback="Enter valid address"
          placeholder="Canbanua, Argao, Cebu"
          value={address}
          setter={setAddress}
        />
        <IDFormSelect
          id="bloodType"
          md="2"
          label="Blood Type"
          setter={setBloodType}
          options={["A", "B", "O"]}
        />
        <IDFormSelect
          id="sex"
          md="2"
          label="Sex"
          setter={setSex}
          options={["Male", "Female"]}
        />
        <IDFormControl
          id="age"
          md="1"
          type="number"
          label="Age"
          invalidFeedback="Enter valid age"
          placeholder=""
          value={age}
          setter={setAge}
        />
      </Row>
      <Row className="mt-4 mb-3">
        <h4 className="text-center mb-3">Guardian Information</h4>
        <IDFormControl
          id="gfName"
          md="4"
          type="text"
          label="First Name"
          invalidFeedback="Enter valid name"
          placeholder="Juan"
          value={gfName}
          setter={setGfName}
        />
        <IDFormControl
          id="gmName"
          md="2"
          type="text"
          label="Middle Name"
          invalidFeedback="Enter valid name"
          placeholder="Dela"
          value={gmName}
          setter={setGmName}
        />
        <IDFormControl
          id="glName"
          md="4"
          type="text"
          label="Last Name"
          invalidFeedback="Enter valid name"
          placeholder="Cruz"
          value={glName}
          setter={setGlName}
        />
        <IDFormControl
          id="gContactNumber"
          md="2"
          type="number"
          label="Contact Number"
          invalidFeedback="Enter valid contact number"
          placeholder="09xxxxxxxxx"
          value={gNumber}
          setter={setGNumber}
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
