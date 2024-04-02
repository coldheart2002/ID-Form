import { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import IDForm from "../components/IDForm";
import { DisplayForms } from "../components/DisplayForms";

export const Home = () => {
  const [willCreate, setWillCreate] = useState(false);
  const [willCheck, setWillCheck] = useState(false);
  const [visibility, setVisibility] = useState(true);

  return (
    <>
      {visibility && (
        <Stack gap={4} className="col-md-3 mx-auto my-5">
          <Button
            variant="outline-primary"
            onClick={() => {
              setWillCreate(true);
              setVisibility(false);
            }}
          >
            Create
          </Button>
          <Button
            variant="outline-primary"
            onClick={() => {
              setWillCheck(true);
              setVisibility(false);
            }}
          >
            Check
          </Button>
        </Stack>
      )}
      {willCreate && <IDForm />}
      {willCheck && <DisplayForms />}
    </>
  );
};
