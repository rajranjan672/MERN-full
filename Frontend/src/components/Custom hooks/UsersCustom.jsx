import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'

const UsersCustom = () => {
    const [users, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get('http://localhost:3001/api/user/allusers');
         
          
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
  
    const memoizedUsers = useMemo(() => {
      return users;
    }, [users]);
  
    return { users: memoizedUsers, loading, error };
  };

export default UsersCustom