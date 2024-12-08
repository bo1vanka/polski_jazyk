import { useState } from 'react';
import React  from 'react';
import s from './Registration.module.scss';
import { Link } from 'react-router-dom';

const Register = () => {

  const[formData,setFormData] = useState({
    username:'',
    email:'',
    password:''
  });
  const [error,setError] = useState('');
  
  return (
    <div className={s.register_container}>
      <form>
        <div className={s.input_group}>
          <label htmlFor="username" >Username</label>
          <input 
            type="text" 
            id="username" 
            placeholder="Enter your username" 
          />
        </div>

        <div className={s.input_group}>
          <label htmlFor="email">Email address</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Enter your email" 
            aria-describedby="emailHelp" 
          />
          <small id="emailHelp" className={s.form_text}>
            You can enter a fictitious one, I won't send you a confirmation email anyway.
          </small>
        </div>

        <div className={s.input_group}>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Enter your password" 
          />
        </div>
 

         

        <button type="submit" className={s.primary}>
          Register
        </button>
      </form>
      <Link to="/login">
      <button type="button" className={s.secondary}>
        Login
      </button>
      </Link>
    </div>
  );
}

export default Register;
