import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Handle registration logic here
    console.log('Registration attempt:', { name, email, password });
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="bg-light rounded p-5">
              <div className="section-title section-title-sm position-relative pb-3 mb-4">
                <h3 className="mb-0">Register</h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Your Name"
                      style={{ height: '55px' }}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control border-0"
                      placeholder="Your Email"
                      style={{ height: '55px' }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="password"
                      className="form-control border-0"
                      placeholder="Your Password"
                      style={{ height: '55px' }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="password"
                      className="form-control border-0"
                      placeholder="Confirm Password"
                      style={{ height: '55px' }}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">
                      Register
                    </button>
                  </div>
                  <div className="col-12 text-center">
                    <p className="mb-0">
                      Already have an account?{' '}
                      <Link to="/login" className="text-primary">
                        Login here
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
