import React from 'react';
import { useSelector } from 'react-redux';

export default function Clients() {
  const userInfo = useSelector((state) => state.loginReducer);

  const welcomeUser = () => {
    if (userInfo.auth) {
      return <span>You arrived at clients Page</span>;
    }
    return <span>YOU ARE NOT LOGGED IN</span>;
  };

  return <div>{welcomeUser()}</div>;
}
