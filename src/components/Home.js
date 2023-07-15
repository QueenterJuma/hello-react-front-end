import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchGreeting from '../redux/message/messageThunk';

const Home = () => {
  const greeting = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);
  return (
    <h1>{greeting.message}</h1>
  );
};

export default Home;
