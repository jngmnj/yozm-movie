import { useEffect, useState } from "react";

export const useFetch = ({ options, query }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) {
      setLoading(false);
      setError(new Error("Query function is not provided"));
      return;
    }

    const fetchData = async () => {
      try {
        // const response = await fetch(url, options);
        const response = await query(options);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, options]);

  return { data, error, loading };
};
