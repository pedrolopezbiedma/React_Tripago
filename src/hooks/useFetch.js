import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      const result = await axios.get(url);
      setData(result.data);
      setIsPending(false);
    };

    fetchData();

    // Cleaning callback
    return () => {
      // Do nothing for now
    };
  }, [url]);

  return { data, isPending };
};

export { useFetch };
