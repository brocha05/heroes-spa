import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  const {login} = useContext( AuthContext)
  const navigate = useNavigate();

  const onLogin = () => {

    login('Jorge');

    navigate("/marvel", {
        replace: true,
    });
  }

  return (
    <>
      <div>
        <h1>Login</h1>
        <hr />
      </div>
      <button
        onClick={ onLogin }
      >
        Log in 
      </button>
    </>
  )
}
