import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log('Forgot password for:', email);
    alert('Password reset link sent to your email!');
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="bg-light rounded p-5">
              <div className="section-title section-title-sm position-relative pb-3 mb-4">
                <h3 className="mb-0">Forgot Password</h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12">
                    <p className="text-muted">Enter your email address and we'll send you a link to reset your password.</p>
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
                    <button className="btn btn-primary w-100 py-3" type="submit">
                      Send Reset Link
                    </button>
                  </div>
                  <div className="col-12 text-center">
                    <p className="mb-0">
                      Remember your password?{' '}
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

export default ForgotPassword;
