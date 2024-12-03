import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';

const Dashborad = () => {
  // Correctly select the state
  const { data } = useSelector((state) => state.dashborad);

  return (
    <div>
      <Header/>
      <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-200 text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="border border-gray-300 px-4 py-2">First Name</th>
            <th className="border border-gray-300 px-4 py-2">Last Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Age</th>
            <th className="border border-gray-300 px-4 py-2">Gender</th>
            <th className="border border-gray-300 px-4 py-2">Phone</th>
            <th className="border border-gray-300 px-4 py-2">Username</th>
            <th className="border border-gray-300 px-4 py-2">Country</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item,index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{item.firstName}</td>
              <td className="border border-gray-300 px-4 py-2">{item.lastName}</td>
              <td className="border border-gray-300 px-4 py-2">{item.email}</td>
              <td className="border border-gray-300 px-4 py-2">{item.age}</td>
              <td className="border border-gray-300 px-4 py-2">{item.gender}</td>
              <td className="border border-gray-300 px-4 py-2">{item.phone}</td>
              <td className="border border-gray-300 px-4 py-2">{item.username}</td>
              <td className="border border-gray-300 px-4 py-2">{item.address.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Dashborad;
