import React from 'react'

const Footer = () => {
  return (
    <>
    <div>
  <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="text-white mb-4"><i className="fas fa-star-of-life me-3" />Compagnon De soins</h4>
            <p> </p>
            <div className="d-flex align-items-center">
              <i className="fas fa-share fa-2x text-white me-2" />
              <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
              <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
              <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
              <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="mb-4 text-white">Liens rapides</h4>
            <a href><i className="fas fa-angle-right me-2" /> À propos de nous</a>
            <a href><i className="fas fa-angle-right me-2" /> Contactez-nous</a>
            <a href><i className="fas fa-angle-right me-2" /> politique de confidentialité</a>
            <a href><i className="fas fa-angle-right me-2" /> termes et conditions</a>
            <a href><i className="fas fa-angle-right me-2" /> Notre blog et nos actualités</a>
            <a href><i className="fas fa-angle-right me-2" /> Notre équipe</a>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="mb-4 text-white">Services de Compagnon</h4>
            <a href><i className="fas fa-angle-right me-2" /> Tous les services</a>
            <a href><i className="fas fa-angle-right me-2" /> Physiothérapie</a>
            <a href><i className="fas fa-angle-right me-2" /> Diagnostique</a>
            <a href><i className="fas fa-angle-right me-2" /> Thérapie manuelle</a>
            <a href><i className="fas fa-angle-right me-2" /> Massage thérapeutique</a>
            <a href><i className="fas fa-angle-right me-2" /> Réhabilitation</a>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="mb-4 text-white">Informations de contact</h4>
            <a href><i className="fa fa-map-marker-alt me-2" /> Rue 1010,Tunis,Ariana</a>
            <a href><i className="fas fa-envelope me-2" /> compagnon@gmail.com</a>
            <a href><i className="fas fa-envelope me-2" /> abireya12@gmail.com</a>
            <a href><i className="fas fa-phone me-2" /> +216 26993204</a>
            <a href className="mb-3"><i className="fas fa-print me-2" /> +216 93687401</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Copyright Start */}
  <div className="container-fluid copyright py-4">
    <div className="container">
      <div className="row g-4 align-items-center">
        <div className="col-md-6 text-center text-md-start mb-md-0">
          <span className="text-white"><a href="#"><i className="fas fa-copyright text-light me-2" />Compagnon</a>Copyright @ 2024,Tous les droits sont réservés.</span>
        </div>
        <div className="col-md-6 text-center text-md-end text-white">
          {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
          {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
          {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
          Conçu par Abir et Eya <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
        </div>
      </div>
    </div>
  </div>
  {/* Copyright End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-primary btn-lg-square back-to-top"><i className="fa fa-arrow-up" /></a></div>
  
    </>
  )
}

export default Footer
