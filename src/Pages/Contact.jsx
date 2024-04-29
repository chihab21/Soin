import React from 'react'

const Contact = () => {
  return (
    <div>
              <div className="container-fluid contact py-5">
  <div className="container py-5">
    <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="sub-style mb-4">
        <h4 className="sub-title text-white px-3 mb-0">Contactez-nous</h4>
      </div>
    </div>
    <div className="row g-4 align-items-center">
      <div className="col-lg-5 col-xl-5 contact-form wow fadeInLeft" data-wow-delay="0.1s">
        <h2 className="display-5 text-white mb-2">Entrer en contact</h2>
        <form>
          <div className="row g-3">
            <div className="col-lg-12 col-xl-6">
              <div className="form-floating">
                <input type="text" className="form-control bg-transparent border border-white" id="name" placeholder="Votre Nom" />
                <label htmlFor="name">Votre Nom</label>
              </div>
            </div>
            <div className="col-lg-12 col-xl-6">
              <div className="form-floating">
                <input type="email" className="form-control bg-transparent border border-white" id="email" placeholder="votre email" />
                <label htmlFor="email">Votre email</label>
              </div>
            </div>
            <div className="col-lg-12 col-xl-6">
              <div className="form-floating">
                <input type="phone" className="form-control bg-transparent border border-white" id="phone" placeholder="Téléphone" />
                <label htmlFor="phone">Votre Téléphone</label>
              </div>
            </div>
            <div className="col-lg-12 col-xl-6">
              <div className="form-floating">
                <input type="text" className="form-control bg-transparent border border-white" id="project" placeholder="Projet" />
                <label htmlFor="project">
                  Votre projet</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <input type="text" className="form-control bg-transparent border border-white" id="subject" placeholder="Sujet" />
                <label htmlFor="sujet">sujet</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <textarea className="form-control bg-transparent border border-white" placeholder="Laissez un message ici" id="message" style={{height: 160}} defaultValue={""} />
                <label htmlFor="message">Message</label>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-light text-primary w-100 py-3">Envoyer le message</button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-lg-2 col-xl-2 wow fadeInUp" data-wow-delay="0.5s">
        <div className="bg-transparent rounded">
          <div className="d-flex flex-column align-items-center text-center mb-4">
            <div className="bg-white d-flex align-items-center justify-content-center mb-3" style={{width: 90, height: 90, borderRadius: 50}}><i className="fa fa-map-marker-alt fa-2x text-primary" /></div>
            <h4 className="text-dark">
              Adresses</h4>
            <p className="mb-0 text-white">Rue 1200 Ariana, Tunis</p>
          </div>
          <div className="d-flex flex-column align-items-center text-center mb-4">
            <div className="bg-white d-flex align-items-center justify-content-center mb-3" style={{width: 90, height: 90, borderRadius: 50}}><i className="fa fa-phone-alt fa-2x text-primary" /></div>
            <h4 className="text-dark">Téléphone</h4>
            <p className="mb-0 text-white">+216 26993204</p>
            <p className="mb-0 text-white">+216 93555444</p>
          </div>
          <div className="d-flex flex-column align-items-center text-center">
            <div className="bg-white d-flex align-items-center justify-content-center mb-3" style={{width: 90, height: 90, borderRadius: 50}}><i className="fa fa-envelope-open fa-2x text-primary" /></div>
            <h4 className="text-dark">Email</h4>
            <p className="mb-0 text-white">compagnon@gamil.com</p>
            <p className="mb-0 text-white">abireya12@gamil.com</p>
          </div>
        </div>
      </div>
      <div className="col-lg-5 col-xl-5 wow fadeInRight" data-wow-delay="0.3s">
        <div className="d-flex justify-content-center mb-4">
          <a className="btn btn-lg-square btn-light rounded-circle mx-2" href><i className="fab fa-facebook-f" /></a>
          <a className="btn btn-lg-square btn-light rounded-circle mx-2" href><i className="fab fa-twitter" /></a>
          <a className="btn btn-lg-square btn-light rounded-circle mx-2" href><i className="fab fa-instagram" /></a>
          <a className="btn btn-lg-square btn-light rounded-circle mx-2" href><i className="fab fa-linkedin-in" /></a>
        </div>
        <div className="rounded h-100">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d52229.00474599395!2d10.159412314620425!3d36.85729604297453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2stn!4v1711771278009!5m2!1sfr!2stn" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Contact
