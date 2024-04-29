import React from 'react'

const Navbar = () => {
  return (
   <>
  <div className="container-fluid bg-dark px-5 d-none d-lg-block">
    <div className="row gx-0 align-items-center" style={{height: 45}}>
      <div className="col-lg-8 text-center text-lg-start mb-lg-0">
        <div className="d-flex flex-wrap">
          <a href="#" className="text-light me-4"><i className="fas fa-map-marker-alt text-primary me-2" />Location</a>
          <a href="#" className="text-light me-4"><i className="fas fa-phone-alt text-primary me-2" />+216 26993204</a>
          <a href="#" className="text-light me-0"><i className="fas fa-envelope text-primary me-2" />Compdesoins@gmail.com</a>
        </div>
      </div>
      <div className="col-lg-4 text-center text-lg-end">
        <div className="d-flex align-items-center justify-content-end">
          <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-facebook-f" /></a>
          <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-twitter" /></a>
          <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-instagram" /></a>
          <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-0"><i className="fab fa-linkedin-in" /></a>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
      <a href="/" className="navbar-brand p-0">
        <h1 className="text-primary m-0"><i className="fas fa-star-of-life me-3" />Compagnon de soins</h1>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <a href="/" className="nav-item nav-link active">Acceuil</a>
          <a href="/propos" className="nav-item nav-link">À propos</a>
          <a href="/services" className="nav-item nav-link">Services</a>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
            <div className="dropdown-menu m-0">
              <a href="/rendez-vous" className="dropdown-item">rendez-vous</a>
              <a href="/Evenement" className="dropdown-item">Evenement</a>
              <a href="/blog" className="dropdown-item">notre blog</a>
            </div>
          </div>
          <a href="/contact" className="nav-item nav-link">Contact</a>
        </div>
        <a href="/login" className="btn btn-primary rounded-pill text-white py-2 px-4 flex-wrap flex-sm-shrink-0">login</a>
      </div>
    </nav>
    <div className="header-carousel owl-carousel">
      <div className="header-carousel-item">
        <img src="img/image3.jpg" className="img-fluid w-100" alt="Image" />
        <div className="carousel-caption">
          <div className="carousel-caption-content p-3">
            <h5 className="text-white text-uppercase fw-bold mb-4" style={{letterSpacing: 3}}>Acceuil</h5>
            <h1 className="display-1 text-capitalize text-white mb-4">Meilleure solution pour une bonne vie</h1>
            <p />
            <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="/login">Login</a>
          </div>
        </div>
      </div>
      <div className="header-carousel-item">
        <img src="img/handicap.jpg" className="img-fluid w-100" alt="Image" />
        <div className="carousel-caption">
          <div className="carousel-caption-content p-3">
            <h5 className="text-white text-uppercase fw-bold mb-4" style={{letterSpacing: 3}}>Acceuil</h5>
            <h1 className="display-1 text-capitalize text-white mb-4">Meilleure solution pour une bonne vie</h1>
            <p />
            <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="/login">Login</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Navbar
