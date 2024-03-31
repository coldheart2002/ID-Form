import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

type propTypes = {
  id: string;
  md: string;
  type: "text" | "email" | "number";
  placeholder: string;
  value: string | number | undefined;
  label: string;
  invalidFeedback: string;
  setter: (event: string | number) => void;
};

export const IDFormGroup = ({
  id,
  md,
  type,
  placeholder,
  value,
  label,
  invalidFeedback,
  setter,
}: propTypes) => {
  return (
    <>
      <Form.Group as={Col} md={md} controlId={id}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          required
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(event) => setter(event.target.value)}
        />
        <Form.Control.Feedback type="invalid">
          {invalidFeedback}
        </Form.Control.Feedback>
      </Form.Group>
    </>
  );
};
