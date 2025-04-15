import React from 'react'

function Login() {
  return (
    <form className="login">
      <input type="text" 
      placeholder='username' 
      />
      <input type="password" 
      placeholder='password'
      />
      <button className='button-login'>Login</button>
    </form>
  )
}

export default Login;