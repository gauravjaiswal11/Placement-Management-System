import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// import {toast}  from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loginAction = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:9090/api/users/login', {
        email,
        password,
      });
      const userData = response.data;
      localStorage.setItem('userData', JSON.stringify(userData));
      setIsSubmitting(false);
      setError(null);
      // toast.success('Login successful!');
      if (email === 'admin@gmail.com' && password === 'admin') {
        navigate('/admin'); // Navigate to admin page
      } 
      else if(email === 'shivamkumarsingh@gmail.com' && password === 'shivam2004'){
          navigate("/student");
      }
      else if(email === 'coordinator@gmail.com' && password === 'coordinator'){
        navigate("/coordinator");
    }
      else {
        navigate('/'); // Navigate to home page
      }
    } catch (error) {
      setIsSubmitting(false);
      if (error.response && error.response.status === 401) {
        setError('Invalid email or password');
        // toast.error('Invalid email or password');
      } else {
        console.error('Error occurred:', error);
        setError('An error occurred during login.');
        // toast.error('An error occurred during login.');
      }
    }
  };

  return (
      <div className="container ">
            <div className="card-body">
              <h1 className="card-title mb-4">Sign In</h1>
              {error && <p className="text-center text-danger">{error}</p>}
              <form onSubmit={loginAction}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-grid gap-2">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="btn btn-primary btn-block"
                  >
                    Login
                  </button>
                  <p className="text-center">
                    Don't have an account? <Link to="/register">Register here</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
  );
}

export default Login;
