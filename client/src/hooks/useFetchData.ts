import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchData = (endpoint: string) => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(endpoint)
      .then((result) => setData(result))
      .catch((error) => console.log(error));
  }, [endpoint]);
  return { data };
};
