import { Col, Form } from "react-bootstrap";

type propTypes = {
  id: string;
  label: string;
  md: string;
  options: string[];
  setter: (event: string | number) => void;
};

export const IDFormSelect = ({ id, md, label, setter, options }: propTypes) => {
  return (
    <>
      <Form.Group as={Col} md={md} controlId={id}>
        <Form.Label>{label}</Form.Label>
        <Form.Select
          defaultValue="Choose..."
          onChange={(event) => setter(event.target.value)}
        >
          <option>Choose...</option>
          {options.map((opt, i) => {
            return (
              <option value={opt} key={i}>
                {opt}
              </option>
            );
          })}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Please choose an option.
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
};
