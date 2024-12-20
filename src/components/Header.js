import React, { useEffect } from 'react'
import { HEADER_NAME } from '../Constants';
import { useDispatch } from 'react-redux';
import { setData } from '../store/dashboradSlice';

const Header = () => {
  const dispatch = useDispatch();

  const handleBtnClick = ()=>{
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => dispatch(setData(data.users)));

  }
  return (
    <>
      <h1>{HEADER_NAME}</h1>
      <button onClick={handleBtnClick}>Load user Data</button>
      <button style={{marginLeft:'50px'}} onClick={()=> dispatch(setData([]))}>Clear Data</button>
    </>
  )
}

export default Header;