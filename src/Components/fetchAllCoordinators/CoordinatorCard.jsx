import React from 'react';
import { Link } from 'react-router-dom';

const CoordinatorCard = ({ coordinator }) => {
  if (!coordinator) return null;

  return (
    <Link to={`/coordinators/${coordinator._id}`}>
      <div className="bg-stone-200 shadow-lg rounded-lg overflow-hidden w-32 md:w-52 lg:w-72 max-w-sm mx-auto">
        <img 
          src={coordinator.image} 
          alt={coordinator.name} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg  text-gray-800 font-semibold">{coordinator.name}</h3>
          <p className="text-sm text-green-800">সমন্বয়ক</p>
        </div>
      </div>
    </Link>
  );
};

export default CoordinatorCard;
