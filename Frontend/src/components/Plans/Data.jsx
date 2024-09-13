import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Data = () => {
    const [data, setData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredData, setFilteredData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get(`http://localhost:3001/api/actionPlans/getActionPlans`);
            setData(res.data);
            setFilteredData(res.data); // Initialize filteredData with fetched data
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);


      const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        if (category === 'All') {
          setFilteredData(data);
        } else {
          const filtered = data.filter(item => item.category === category);
          setFilteredData(filtered);
        }
      };
    
      // Example categories (these might be dynamic based on your data)
      const categories = ['All', 'Indian', 'Chinese', 'Maxician'];


  return (
    <div>
    <div>
      {categories.map((category) => (
        <button className='btnn'
          key={category}
          onClick={() => handleCategoryChange(category)}
          style={{ margin: '5px' }}
        >
          {category}
        </button>
      ))}
    </div>

    <div>
      {filteredData.map((item) => (
        <div className='card' key={item.id}>
          <h3 className='card-title'>{item.title}</h3>
          <p>Type: {item.category}</p>
          <p>{item.description}</p>
          
        </div>
      ))}
    </div>
  </div>
  )
}

export default Data