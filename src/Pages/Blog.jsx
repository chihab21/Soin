import React from 'react'

const Blog = () => {
  return (
    <div>
            <div className="container-fluid blog py-5">
  <div className="container py-5">
    <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="sub-style">
        <h4 className="sub-title px-3 mb-0">NOTRE BLOG</h4>
      </div>
      <h1 className="display-3 mb-4">Excellente therapy et services de haute qualité </h1>
    </div>
    <div className="row g-4 justify-content-center">
      <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
        <div className="blog-item rounded">
          <div className="blog-img">
            <img src="img/femme.jpg" className="img-fluid w-100" alt="Image" />
          </div>
          <div className="blog-centent p-4">
            <div className="d-flex justify-content-between mb-4">
              <a href="#" className="text-muted"><span className="fa fa-comments text-primary" /> 3 Commentaires</a>
            </div>
            <a href="#" className="h4">Ménage à domicile</a>
            <p className="my-4">Nettoyage des surfaces.
              Nettoyage des vitres et des sols.
              Rangement et Repassage.
              Entretien du linge : trier, laver, sécher, plier  …
              Préparation des repas ( unservice facultatif)</p>
            <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4 mb-1">En savoir plus</a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
        <div className="blog-item rounded">
          <div className="blog-img">
            <img src="img/jar.jpg" className="img-fluid w-100" alt="Image" />
          </div>
          <div className="blog-centent p-4">
            <div className="d-flex justify-content-between mb-4">
              <a href="#" className="text-muted"><span className="fa fa-comments text-primary" /> 2 Commentaires</a>
            </div>
            <a href="#" className="h4">Jardinage</a>
            <p className="my-4">Désherbage.
              Nettoyage du mobilier du jardin.
              Tailler vos arbustes.
              Remise en état de la structure du potager.
              Paillage, tonte et protection des sols.
              Enlever les épines.</p>
            <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4 mb-1">En savoir plus</a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.5s">
        <div className="blog-item rounded">
          <div className="blog-img">
            <img src="img/h.jpg" className="img-fluid w-100" alt="Image" />
          </div>
          <div className="blog-centent p-4">
            <div className="d-flex justify-content-between mb-4">
              <a href="#" className="text-muted"><span className="fa fa-comments text-primary" /> 5 Commentaires</a>
            </div>
            <a href="#" className="h4">Aides aux personnes Handicapées</a>
            <p className="my-4">Aide à la toilette, ou  aide de ménage à domicile, ou encore vous accompagner pour faire des courses,  notre société vous propose un pack de service global pour le maintien à domicile.</p>
            <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4 mb-1">En savoir plus</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Blog
