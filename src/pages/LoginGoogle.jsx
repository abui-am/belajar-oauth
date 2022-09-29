import React from 'react';
import { useLocation } from 'react-router-dom';
const getJsonFromUrl = (str) => {
  const query = str.substr(1);
  const result = {};

  query.split('&').forEach(function (part) {
    const item = part.split('=');
    result[item[0]] = decodeURIComponent(item[1]);
  });

  return result;
};

const LoginGoogle = () => {
  const location = useLocation();
  console.log(getJsonFromUrl(location.hash));
  return <div></div>;
};

export default LoginGoogle;
