import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CoordinatorDetail = () => {
  const { id } = useParams();
  const [coordinator, setCoordinator] = useState(null);

  useEffect(() => {
    const fetchCoordinator = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/posts/${id}?type=Coordinator`);
        setCoordinator(response.data);
      } catch (error) {
        console.error('Error fetching coordinator:', error);
      }
    };

    fetchCoordinator();
  }, [id]);

  if (!coordinator) {
    return <div>Loading...</div>;
  }

  const { name, age, district, role, bio, image } = coordinator;

  return (
    <div className="bg-gradient-to-b from-[#440a0a] to-[#085328] min-h-screen flex flex-col items-center p-4 sm:p-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 h-64 sm:h-auto">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
          />
        </div>
        <div className="p-6 flex flex-col justify-center sm:w-1/2 text-center sm:text-left">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{name}</h1>
          <p className="text-lg text-gray-800">বয়স: {age} বছর</p>
          <p className="text-lg text-gray-800">জেলা: {district}</p>
          <div className="mt-4 text-lg text-green-900 font-semibold">
            <p>তিনি আমাদের নায়ক, আদর্শ।</p>
            <p>যাদের নেতৃত্বে আমরা পেয়েছি বিজয়।</p>
            <p>দেশকে দুর্নীতি মুক্ত করতে চাইলে, তাঁদের মতো হতে হবে।</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 shadow-lg rounded-lg overflow-hidden w-full max-w-4xl mt-8 p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">ব্যক্তিগত তথ্য</h2>
        <p className="text-lg text-gray-700 leading-relaxed px-2">
          {bio}
        </p>
      </div>

      <div className="bg-gray-200 shadow-lg rounded-lg overflow-hidden w-full max-w-4xl mt-8 p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">অবদান ও ভূমিকা</h2>
        <p className="text-lg text-gray-700 leading-relaxed px-2">
          {role}
        </p>
      </div>
    </div>
  );
};

export default CoordinatorDetail;
