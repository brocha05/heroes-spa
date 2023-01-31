import React from 'react'
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
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
