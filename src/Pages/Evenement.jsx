import React from 'react'

const Evenement = () => {
  return (
    <div>
           <div className="container-fluid blog py-5">
  <div className="container py-5">
    <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="sub-style">
        <h4 className="sub-title px-3 mb-0">Evenement</h4>
      </div>
      <h1 className="display-3 mb-4">Toutes les actualités</h1>
    </div>
    <div className="row g-4 justify-content-center">
      <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.1s">
        <div className="blog-item rounded">
          <div className="blog-img">
            <img src="img/rose.png" className="img-fluid w-100" alt="Image" />
          </div>
          <div className="blog-centent p-4">
            <div className="d-flex justify-content-between mb-4">
              <p className="mb-0 text-muted"><i className="fa fa-calendar-alt text-primary" /> 19 Oct 2024</p>
              <a href="#" className="text-muted"><span className="fa fa-comments text-primary" /> 3 Commentaires</a>
            </div>
            <a href="#" className="h4">Octobre Rose</a>
            <p className="my-4">Octobre rose est une campagne annuelle de communication destinée à sensibiliser les femmes au dépistage du cancer du sein et à récolter des fonds pour la recherche</p>
            <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4 mb-1">En savoir plus</a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
        <div className="blog-item rounded">
          <div className="blog-img">
            <img src="img/jour.png" className="img-fluid w-100" alt="Image" />
          </div>
          <div className="blog-centent p-4">
            <div className="d-flex justify-content-between mb-4">
              <p className="mb-0 text-muted"><i className="fa fa-calendar-alt text-primary" /> 8 Mars 2024</p>
              <a href="#" className="text-muted"><span className="fa fa-comments text-primary" /> 2 Commentaires</a>
            </div>
            <a href="#" className="h4">journée internationale des droits des femmes</a>
            <p className="my-4">Il est plus que jamais essentiel de parvenir à l'égalité des sexes et au bien-être des femmes dans tous les aspects de la vie si nous voulons créer des économies prospères.</p>
            <a href="#" className="btn btn-primary rounded-pill text-white py-2 px-4 mb-1">En savoir plus</a>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.5s">
        <div className="blog-item rounded">
          <div className="blog-img">
            <img src="img/Journee-Mondiale-Sante-19.jpg" className="img-fluid w-100" alt="Image" />
          </div>
          <div className="blog-centent p-4">
            <div className="d-flex justify-content-between mb-4">
              <p className="mb-0 text-muted"><i className="fa fa-calendar-alt text-primary" /> 07 Avril 2024</p>
              <a href="#" className="text-muted"><span className="fa fa-comments text-primary" /> 5 Commentaires</a>
            </div>
            <a href="#" className="h4">journée mondiale de la santé</a>
            <p className="my-4">La Journée mondiale de la Santé (JMS), célébrée chaque année le 7 avril, marque l'anniversaire de la fondation de l'Organisation mondiale de la santé (OMS) en 1948 et se porte chaque année sur une question de santé publique spécifique.</p>
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

export default Evenement
