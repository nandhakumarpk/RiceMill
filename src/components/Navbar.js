import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Topbar */}
      <div className="container-fluid top-bar bg-dark text-light px-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="row gx-0 align-items-center d-none d-lg-flex">
          <div className="col-lg-6 px-5 text-start">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item"><Link className="small text-light" to="#">Home</Link></li>
              <li className="breadcrumb-item"><Link className="small text-light" to="#">Career</Link></li>
              <li className="breadcrumb-item"><Link className="small text-light" to="#">Terms</Link></li>
              <li className="breadcrumb-item"><Link className="small text-light" to="#">Privacy</Link></li>
            </ol>
          </div>
          <div className="col-lg-6 px-5 text-end">
            <small>Follow us:</small>
            <div className="h-100 d-inline-flex align-items-center">
              <a className="btn-lg-square text-primary border-end rounded-0" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="btn-lg-square text-primary border-end rounded-0" href="#"><i className="fab fa-twitter"></i></a>
              <a className="btn-lg-square text-primary border-end rounded-0" href="#"><i className="fab fa-linkedin-in"></i></a>
              <a className="btn-lg-square text-primary pe-0" href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top py-lg-0 px-lg-5 wow fadeIn ${isScrolled || location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/forgot-password' ? 'bg-dark' : ''}`} data-wow-delay="0.1s" style={{ top: isScrolled ? '0' : '45px' }}>
        <Link to="/" className="navbar-brand ms-4 ms-lg-0">
          <h1 className="text-primary m-0">Baker</h1>
        </Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto p-4 p-lg-0">
            <Link to="/" className={`nav-item nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link to="/about" className={`nav-item nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
            {/* <Link to="/service" className={`nav-item nav-link ${location.pathname === '/service' ? 'active' : ''}`}>Services</Link> */}
            <Link to="/product" className={`nav-item nav-link ${location.pathname === '/product' ? 'active' : ''}`}>Products</Link>
            {/* <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu m-0">
                <Link to="/team" className="dropdown-item">Our Team</Link>
                <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                <Link to="/404" className="dropdown-item">404 Page</Link>
              </div>
            </div> */}
            <Link to="/contact" className={`nav-item nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
            <Link to="/login" className={`nav-item nav-link ${location.pathname === '/login' ? 'active' : ''}`}>Login</Link>
            {/* <Link to="/register" className={`nav-item nav-link ${location.pathname === '/register' ? 'active' : ''}`}>Register</Link> */}
          </div>
          <div className="d-none d-lg-flex">
            <div className="flex-shrink-0 btn-lg-square border border-light rounded-circle">
              <i className="fa fa-phone text-primary"></i>
            </div>
            <div className="ps-3">
              <small className="text-primary mb-0">Call Us</small>
              <p className="text-light fs-5 mb-0">+012 345 6789</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
