import { useEffect, useState } from "react";

// url은 useFetch 밖에서 조합해서 넘기는 게 깔끔.
export const useFetch = ({ query }) => {
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
        const result = await query();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [query]);

  return { data, error, loading };
};
