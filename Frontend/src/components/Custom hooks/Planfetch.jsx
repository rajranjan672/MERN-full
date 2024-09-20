// useFetch.js
import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data1, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:3001/api/actionPlans/getActionPlans');
       
        
        setData(res.data);
        console.log(`dt`, res.data)
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data1, loading, error };
};

export default useFetch;
