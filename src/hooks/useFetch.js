import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      setData(result.data);
    };

    fetchData();

    // Cleaning callback
    return () => {
      // Do nothing for now
    };
  }, [url]);

  return { data };
};

export { useFetch };
