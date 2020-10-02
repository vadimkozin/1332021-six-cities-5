import React from 'react';
import {useLocation, Link} from 'react-router-dom';

const NotFound = () => {
  let location = useLocation();

  return (
    <>
      <h3>
        No match for: <code>{location.pathname}</code>
      </h3>
      <Link to="/" style={{color: `blue`, textDecoration: `underline`}}>Go home..</Link>
    </>
  );
};

export default NotFound;
