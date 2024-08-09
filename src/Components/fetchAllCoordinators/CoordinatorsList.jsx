import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CoordinatorCard from './CoordinatorCard';

const CoordinatorsList = () => {
  const [coordinators, setCoordinators] = useState([]);

  useEffect(() => {
    const fetchCoordinators = async () => {
      try {
        const response = await axios.get('http://localhost:4000/posts', {
          params: {
            type: 'Coordinator'
          }
        });
        console.log(response.data); // Log the data received
        setCoordinators(response.data);
      } catch (error) {
        console.error('Error fetching Coordinators:', error);
      }
    };

    fetchCoordinators();
  }, []);

  return (<div>
    <h1 className='text-4xl text-center font-bold '>Our Hiroes</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {coordinators.map(coordinator => (
        <CoordinatorCard key={coordinator._id} coordinator={coordinator} />
      ))}
    </div>
    </div>
  );
};

export default CoordinatorsList;
