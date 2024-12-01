import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';

const Dashborad = () => {
  // Correctly select the state
  const { data } = useSelector((state) => state.dashborad);

  return (
    <div>
      <Header/>
      {console.log("Data :- ",data)}
      <ul>
        {data?.map((item, index) => (
          <li key={index}>
            FirstName: {item.firstName}, LastName: {item.lastName} , ID : {index}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashborad;
