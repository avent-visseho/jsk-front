"use client"
import React, { useState } from "react";
import Image from "next/image";
import Thumb2 from "@/assets/imgs/news/thumb-2.jpg";
import Thumb3 from "@/assets/imgs/news/thumb-3.jpg";
import Thumb4 from "@/assets/imgs/news/thumb-4.jpg";
import Thumb6 from "@/assets/imgs/news/thumb-6.jpg";
import FocCharure from "@/assets/imgs/jed/blogs/focCharure.jpg";
import AccelererDigit from "@/assets/imgs/jed/blogs/accerlererDigit.jpg";
import Talonomics from "@/assets/imgs/jed/blogs/talonomics.jpg";
import Mara from "@/assets/imgs/jed/blogs/mara.jpg";
import ComePremierFacteur from "@/assets/imgs/jed/blogs/comePremierFacteur.jpg";
import Entrepreunariat from "@/assets/imgs/jed/blogs/entrepreunariat.jpg";
import IndustriBenin from "@/assets/imgs/jed/blogs/industriBenin.jpg";
import DigitalSecourAfrique from "@/assets/imgs/jed/blogs/digitalSecourAfrique.png";
import CoupEtatAfrique from "@/assets/imgs/jed/blogs/coupEtatAfrique.png";
import AfriqueLiberteEconomique from "@/assets/imgs/jed/blogs/afriqueLiberteEconomique.jpg";
import Horizon from "@/assets/imgs/jed/blogs/horizon.png";

const page = () => {
  const [books, setBooks] = useState([])
  const [articles, setArticles] = useState([])
  const [tribunes, setTribunes] = useState([])
  return (
    <>
      {/* <!-- Start Main content --> */}
    <main>
      <div className="archive-header pt-50 text-left">
        <div className="container">
          <h2 className="font-weight-900">Livres, articles & tribunes</h2>
          <span className="text-primary font-weight-900">À la une</span>
          <div className="bt-1 border-color-1 mt-30 mb-50"></div>
        </div>
      </div>
      <div className="container">
        <div className="loop-grid mb-30">
          <div className="row">
            <article
              className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
              data-wow-delay="0.2s"
            >
              <div className="post-card-1 border-radius-10 hover-up h-100">
                <div
                  className="post-thumb thumb-overlay img-hover-slide position-relative"
                  style={{ backgroundImage: `url(${Mara.src})` }}
                >
                  <a className="img-link" href="single.html"></a>
                  <span className="top-right-icon bg-success"
                    ><i className="elegant-icon icon_camera_alt"></i
                  ></span>
                  <ul className="social-share">
                    <li>
                      <a href="#"
                        ><i
                          className="fa-solid fa-share-nodes"
                          style={{color : "#fff"}}
                        ></i
                      ></a>
                    </li>
                    <li>
                      <a
                        className="fb"
                        href="#"
                        title="Share on Facebook"
                        target="_blank"
                        ><i
                          className="fa-brands fa-facebook-f"
                          style={{color : "#fff"}}
                        ></i
                      ></a>
                    </li>
                    <li>
                      <a className="tw" href="#" target="_blank" title="Tweet now"
                        ><i
                          className="fa-brands fa-twitter"
                          style={{color : "#fff"}}
                        ></i
                      ></a>
                    </li>
                    <li>
                      <a className="pt" href="#" target="_blank" title="Pin it"
                        ><i className="fa-brands fa-linkedin-in"></i></a>
                    </li>
                  </ul>
                </div>
                <div className="post-content p-30">
                  <div className="entry-meta meta-0 font-small mb-10">
                    <a href=""
                      ><span className="post-cat text-success">Livre</span></a
                    >
                  </div>
                  <div className="d-flex post-card-content">
                    <h5 className="post-title mb-20 font-weight-900">
                      En terrasse avec Mara
                    </h5>
                    <p className="font-medium text-muted">
                      L’Afrique a la population la plus jeune au monde, avec
                      plus de 400 millions de jeunes âgés de 15 à 35 ans. Il
                      n’est pas rare d’entendre que l’avenir de l’Afrique
                      passera par le leadership de sa jeunesse. Mais comment
                      cette jeunesse réussira-t-elle sa mission ? Sur qui
                      prendra-t-elle exemple ? Nous savons que le leadership ne
                      naît pas d’un vide intersidéral. Il prend corps chez les
                      individus au moyen, entre autres, d’exemples de
                      leadership. C’est là que réside la raison d’être de ce
                      livre qui donne à voir un exceptionnel modèle d’engagement
                      au service du Mali et de l’Afrique. À travers l’exemple de
                      Son Excellence M. Moussa Mara, la jeunesse africaine a un
                      repère placé à l’horizon.
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <article
              className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
              data-wow-delay="0.2s"
            >
              <div className="post-card-1 border-radius-10 hover-up h-100">
                <div
                  className="post-thumb thumb-overlay img-hover-slide position-relative"
                  style={{ backgroundImage: `url(${CoupEtatAfrique.src})` }}
                >
                  <a className="img-link" href="single.html"></a>
                  <span className="top-right-icon bg-success"
                    ><i className="elegant-icon icon_camera_alt"></i
                  ></span>
                  <ul className="social-share">
                    <li>
                      <a href="#"
                        ><i
                          className="fa-solid fa-share-nodes"
                          style={{color : "#fff"}}
                        ></i
                      ></a>
                    </li>
                    <li>
                      <a
                        className="fb"
                        href="#"
                        title="Share on Facebook"
                        target="_blank"
                        ><i
                          className="fa-brands fa-facebook-f"
                          style={{color : "#fff"}}
                        ></i
                      ></a>
                    </li>
                    <li>
                      <a className="tw" href="#" target="_blank" title="Tweet now"
                        ><i
                          className="fa-brands fa-twitter"
                          style={{color : "#fff"}}
                        ></i
                      ></a>
                    </li>
                    <li>
                      <a className="pt" href="#" target="_blank" title="Pin it"
                        ><i className="fa-brands fa-linkedin-in"></i></a>
                    </li>
                  </ul>
                </div>
                <div className="post-content p-30">
                  <div className="entry-meta meta-0 font-small mb-10">
                    <a href=""
                      ><span className="post-cat text-success"
                        >Tribune Afrique des idées</span
                      ></a
                    >
                  </div>
                  <div className="d-flex post-card-content">
                    <h5 className="post-title mb-20 font-weight-900">
                      Les coups d'état en Afrique : malédiction ou point de
                      passage nécessaire ?
                    </h5>
                    <p className="font-medium text-muted">
                      Selon les données de <strong>Jonathan Powell</strong> ,
                      spécialiste des relations internationales, sur les 486
                      coups d’État réussis ou ratés depuis 1950, 214 – dont 106
                      réussis – ont eu lieu en Afrique; ce qui fait de
                      l’Afrique, la région la plus touchée au monde.
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <article
              className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
              data-wow-delay="0.2s"
            >
              <div className="post-card-1 border-radius-10 hover-up h-100">
                <div
                  className="post-thumb thumb-overlay img-hover-slide position-relative"
                  style={{ backgroundImage: `url(${Horizon.src})` }}
                >
                  <a className="img-link" href="single.html"></a>
                  <span className="top-right-icon bg-success"
                    ><i className="elegant-icon icon_camera_alt"></i
                  ></span>
                  <ul className="social-share">
                    <li>
                      <a href="#"
                        ><i
                          className="fa-solid fa-share-nodes"
                          style={{color : "#fff"}}
                        ></i
                      ></a>
                    </li>
                    <li>
                      <a
                        className="fb"
                        href="#"
                        title="Share on Facebook"
                        target="_blank"
                        ><i
                          className="fa-brands fa-facebook-f"
                          style={{color : "#fff"}}
                        ></i
                      ></a>
                    </li>
                    <li>
                      <a className="tw" href="#" target="_blank" title="Tweet now"
                        ><i
                          className="fa-brands fa-twitter"
                          style={{color : "#fff"}}
                        ></i
                      ></a>
                    </li>
                    <li>
                      <a className="pt" href="#" target="_blank" title="Pin it"
                        ><i className="fa-brands fa-linkedin-in"></i></a>
                    </li>
                  </ul>
                </div>
                <div className="post-content p-30">
                  <div className="entry-meta meta-0 font-small mb-10">
                    <a href=""
                      ><span className="post-cat text-success">Livre</span></a
                    >
                  </div>
                  <div className="d-flex post-card-content">
                    <h5 className="post-title mb-20 font-weight-900">
                      L'horizon africain : Démographie, démocratie: Regards d'un
                      jeune africain
                    </h5>
                    <p className="font-medium text-muted">
                      L’avenir du continent africain est de moins en moins
                      incertain. Le potentiel de croissance du continent semble
                      être le point de convergence de tous les rapports des
                      institutions économiques et financières internationales...
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <article
              className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
              data-wow-delay="0.2s"
            >
              <div className="post-card-1 border-radius-10 hover-up h-100">
                <div
                  className="post-thumb thumb-overlay img-hover-slide position-relative"
                  style={{ backgroundImage: `url(${DigitalSecourAfrique.src})` }}
                >
                  <a className="img-link" href="single.html"></a>
                  <span className="top-right-icon bg-success"
                    ><i className="elegant-icon icon_camera_alt"></i
                  ></span>
                  <ul className="social-share">
                    <li>
                      <a href="#"
                        ><i
                          className="fa-solid fa-share-nodes"
                          style={{color : "#fff"}}
                        ></i
                      ></a>
                    </li>
                    <li>
                      <a
                        className="fb"
                        href="#"
                        title="Share on Facebook"
                        target="_blank"
                        ><i
                          className="fa-brands fa-facebook-f"
                          style={{color : "#fff"}}
                        ></i
                      ></a>
                    </li>
                    <li>
                      <a className="tw" href="#" target="_blank" title="Tweet now"
                        ><i
                          className="fa-brands fa-twitter"
                          style={{color : "#fff"}}
                        ></i
                      ></a>
                    </li>
                    <li>
                      <a className="pt" href="#" target="_blank" title="Pin it"
                        ><i className="fa-brands fa-linkedin-in"></i></a>
                    </li>
                  </ul>
                </div>
                <div className="post-content p-30">
                  <div className="entry-meta meta-0 font-small mb-10">
                    <a href=""
                      ><span className="post-cat text-success">Livre</span></a
                    >
                  </div>
                  <div className="d-flex post-card-content">
                    <h5 className="post-title mb-20 font-weight-900">
                      Le digital au secours de l'Afrique
                    </h5>
                    <p className="font-medium text-muted">
                      Nous pouvons raisonnablement craindre que le Nouveau Monde
                      soit une étape supplémentaire dans le déclassNameement du
                      continent africain. L'Afrique est assurément un véritable
                      laboratoire d'expérimentations et de déploiements des
                      usages du digital, mais elle peine à se servir des effets
                      d'entraînement du digital pour doper sa croissance
                      économique...
                    </p>
                  </div>
                </div>
              </div>
            </article>
            <article
              className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
              data-wow-delay="0.2s"
            >
              <div className="post-card-1 border-radius-10 hover-up h-100">
                <div
                  className="post-thumb thumb-overlay img-hover-slide position-relative"
                  style={{ backgroundImage: `url(${AfriqueLiberteEconomique.src})` }}
                >
                  <a className="img-link" href="single.html"></a>
                  <span className="top-right-icon bg-success"
                    ><i className="elegant-icon icon_camera_alt"></i
                  ></span>
                  <ul className="social-share">
                    <li>
                      <a href="#"
                        ><i
                          className="fa-solid fa-share-nodes"
                          style={{color : "#fff"}}
                        ></i
                      ></a>
                    </li>
                    <li>
                      <a
                        className="fb"
                        href="#"
                        title="Share on Facebook"
                        target="_blank"
                        ><i
                          className="fa-brands fa-facebook-f"
                          style={{color : "#fff"}}
                        ></i
                      ></a>
                    </li>
                    <li>
                      <a className="tw" href="#" target="_blank" title="Tweet now"
                        ><i
                          className="fa-brands fa-twitter"
                          style={{color : "#fff"}}
                        ></i
                      ></a>
                    </li>
                    <li>
                      <a className="pt" href="#" target="_blank" title="Pin it"
                        ><i className="fa-brands fa-linkedin-in"></i></a>
                    </li>
                  </ul>
                </div>
                <div className="post-content p-30">
                  <div className="entry-meta meta-0 font-small mb-10">
                    <a href="">
                      <span className="post-cat text-success">Tribune KANU</span></a
                    >
                  </div>
                  <div className="d-flex post-card-content">
                    <h5 className="post-title mb-20 font-weight-900">
                      Afrique: la liberté économique, condition indispensable au
                      développement
                    </h5>
                    <p className="font-medium text-muted">
                      Sur le continent africain, il n'existe aucun pays
                      "économiquement libre" (...) Soyons clairs. Une société
                      marquée par la liberté mène toujours à l'enrichissement et
                      au progrès économique et social...
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="mb-30">
            <span className="text-primary font-weight-900">Tous les livres</span>
          </div>
          <div className="row">
            <article
              className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
              data-wow-delay="0.2s"
            >
              <div className="bshadowbox border-radius-10 hover-up h-100">
                <div className="post-content p-30">
                  <div className="entry-meta meta-0 font-small mb-10">
                    <span
                      ><i className="fa-solid fa-book" style={{color : "#f36944"}}></i
                    ></span>
                  </div>
                  <div className="d-flex post-card-content">
                    <h5 className="post-title mb-20 text-danger font-weight-900">
                      L'horizon africain : Démographie, démocratie: Regards d'un
                      jeune africain
                    </h5>
                    <p className="font-medium text-muted">
                      L’avenir du continent africain est de moins en moins
                      incertain. Le potentiel de croissance du continent semble
                      être le point de convergence de tous les rapports des
                      institutions économiques et financières internationales...
                    </p>
                  </div>
                  <button
                    className="btn btn-radius bg-dark text-white ml-15 font-small box-shadow"
                  >
                    Acheter un livre
                  </button>
                </div>
              </div>
            </article>
            <article
              className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
              data-wow-delay="0.2s"
            >
              <div className="bshadowbox border-radius-10 hover-up h-100">
                <div className="post-content p-30">
                  <div className="entry-meta meta-0 font-small mb-10">
                    <span
                      ><i className="fa-solid fa-book" style={{color : "#f36944"}}></i
                    ></span>
                  </div>
                  <div className="d-flex post-card-content">
                    <h5 className="post-title mb-20 text-danger font-weight-900">
                      Le digital au secours de l'Afrique
                    </h5>
                    <p className="font-medium text-muted">
                      Nous pouvons raisonnablement craindre que le Nouveau Monde
                      soit une étape supplémentaire dans le déclassNameement du
                      continent africain. L'Afrique est assurément un véritable
                      laboratoire d'expérimentations et de déploiements des
                      usages du digital, mais elle peine à se servir des effets
                      d'entraînement du digital pour doper sa croissance
                      économique...
                    </p>
                  </div>
                  <button
                    className="btn btn-radius bg-dark text-white ml-15 font-small box-shadow"
                  >
                    Acheter un livre
                  </button>
                </div>
              </div>
            </article>
            <article
              className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
              data-wow-delay="0.2s"
            >
              <div className="bshadowbox border-radius-10 hover-up h-100">
                <div className="post-content p-30">
                  <div className="entry-meta meta-0 font-small mb-10">
                    <span
                      ><i className="fa-solid fa-book" style={{color : "#f36944"}}></i
                    ></span>
                  </div>
                  <div className="d-flex post-card-content">
                    <h5 className="post-title mb-20 text-danger font-weight-900">
                      En terrasse avec Mara
                    </h5>
                    <p className="font-medium text-muted">
                      L’Afrique a la population la plus jeune au monde, avec
                      plus de 400 millions de jeunes âgés de 15 à 35 ans. Il
                      n’est pas rare d’entendre que l’avenir de l’Afrique
                      passera par le leadership de sa jeunesse. Mais comment
                      cette jeunesse réussira-t-elle sa mission ? Sur qui
                      prendra-t-elle exemple ? Nous savons que le leadership ne
                      naît pas d’un vide intersidéral. Il prend corps chez les
                      individus au moyen, entre autres, d’exemples de
                      leadership. C’est là que réside la raison d’être de ce
                      livre qui donne à voir un exceptionnel modèle d’engagement
                      au service du Mali et de l’Afrique. À travers l’exemple de
                      Son Excellence M. Moussa Mara, la jeunesse africaine a un
                      repère placé à l’horizon.
                    </p>
                  </div>
                  <button
                    className="btn btn-radius bg-dark text-white ml-15 font-small box-shadow"
                  >
                    Acheter un livre
                  </button>
                </div>
              </div>
            </article>
          </div>
          <div className="mb-30">
            <span className="text-primary font-weight-900"
              >Tous les articles & tribunes</span
            >
          </div>
          <div className="row">
            <article
              className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
              data-wow-delay="0.2s"
            >
              <div className="bshadowbox border-radius-10 hover-up h-100">
                <div className="post-content p-30">
                  <div className="entry-meta meta-0 font-small mb-10">
                    <a href=""
                      ><span className="post-cat text-success"
                        >Afrique des idées</span
                      ></a
                    >
                    <span
                      ><i className="fa-solid fa-book" style={{color : "#f36944"}}></i
                    ></span>
                  </div>
                  <div className="d-flex post-card-content">
                    <h5 className="post-title mb-20 text-danger font-weight-900">
                      Sur la lancinante question de la démocratie en Afrique
                    </h5>
                    <p className="font-medium text-muted">
                      Selon l’indice de démocratie 2022, 8 % de la population
                      mondiale dans 24 pays vivent dans une démocratie complète,
                      (...) et 36,9 % dans 59 pays dans un régime autoritaire.
                      Concernant l’Afrique...
                    </p>
                  </div>
                  <button
                    className="btn btn-radius bg-dark text-white ml-15 font-small box-shadow"
                  >
                    Tout lire
                  </button>
                </div>
              </div>
            </article>
            <article
              className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
              data-wow-delay="0.2s"
            >
              <div className="bshadowbox border-radius-10 hover-up h-100">
                <div className="post-content p-30">
                  <div className="entry-meta meta-0 font-small mb-10">
                    <a href=""
                      ><span className="post-cat text-success"
                        >Afrique des idées</span
                      ></a
                    >
                    <span
                      ><i className="fa-solid fa-book" style={{color : "#f36944"}}></i
                    ></span>
                  </div>
                  <div className="d-flex post-card-content">
                    <h5 className="post-title mb-20 text-danger font-weight-900">
                      Les coups d'état en Afrique : malédiction ou point de
                      passage nécessaire ?
                    </h5>
                    <p className="font-medium text-muted">
                      Selon les données de <strong>Jonathan Powell</strong>,
                      spécialiste des relations internationales, sur les 486
                      coups d’État réussis ou ratés depuis 1950, 214 – dont 106
                      réussis – ont eu lieu en Afrique; ce qui fait de
                      l’Afrique, la région la plus touchée au monde.
                    </p>
                  </div>
                  <button
                    className="btn btn-radius bg-dark text-white ml-15 font-small box-shadow"
                  >
                    Tout lire
                  </button>
                </div>
              </div>
            </article>
            <article
              className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
              data-wow-delay="0.2s"
            >
              <div className="bshadowbox border-radius-10 hover-up h-100">
                <div className="post-content p-30">
                  <div className="entry-meta meta-0 font-small mb-10">
                    <a href=""
                      ><span className="post-cat text-success">KANU</span></a
                    >
                    <span
                      ><i className="fa-solid fa-book" style={{color : "#f36944"}}></i
                    ></span>
                  </div>
                  <div className="d-flex post-card-content">
                    <h5 className="post-title mb-20 text-danger font-weight-900">
                      Franc CFA, ce que le Christ a à nous dire
                    </h5>
                    <p className="font-medium text-muted">
                      "Au prince il a fallu conquérir la monnaie comme il a
                      conquis les provinces qui ont agrandi son royaume ; il en
                      a surveillé les frappes, fixé la valeur, contrôlé la
                      diffusion. La monnaie a fait le roi."
                    </p>
                  </div>
                  <button
                    className="btn btn-radius bg-dark text-white ml-15 font-small box-shadow"
                  >
                    Tout lire
                  </button>
                </div>
              </div>
            </article>
            <article
              className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
              data-wow-delay="0.2s"
            >
              <div className="bshadowbox border-radius-10 hover-up h-100">
                <div className="post-content p-30">
                  <div className="entry-meta meta-0 font-small mb-10">
                    <a href=""
                      ><span className="post-cat text-success">KANU</span></a
                    >
                    <span
                      ><i className="fa-solid fa-book" style={{color : "#f36944"}}></i
                    ></span>
                  </div>
                  <div className="d-flex post-card-content">
                    <h5 className="post-title mb-20 text-danger font-weight-900">
                      Une leçon économique donnée par le Christ et utile pour
                      notre temps
                    </h5>
                    <p className="font-medium text-muted">
                      "Otez-lui donc le talent, et donnez-le à celui qui a les
                      dix talents. car on donnera à celui qui a, et il sera dans
                      l'abondance, mais à celui qui n'a pas, on ôtera même ce
                      qu'il a."
                    </p>
                  </div>
                  <button
                    className="btn btn-radius bg-dark text-white ml-15 font-small box-shadow"
                  >
                    Tout lire
                  </button>
                </div>
              </div>
            </article>
            <article
              className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
              data-wow-delay="0.2s"
            >
              <div className="bshadowbox border-radius-10 hover-up h-100">
                <div className="post-content p-30">
                  <div className="entry-meta meta-0 font-small mb-10">
                    <a href=""
                      ><span className="post-cat text-success">KANU</span></a
                    >
                    <span
                      ><i className="fa-solid fa-book" style={{color : "#f36944"}}></i
                    ></span>
                  </div>
                  <div className="d-flex post-card-content">
                    <h5 className="post-title mb-20 text-danger font-weight-900">
                      Afrique : la liberté économique, condition indispensable
                      au développement
                    </h5>
                    <p className="font-medium text-muted">
                      Sur le continent africain, il n'existe aucun pays
                      "économiquement libre" (...) Soyons clairs. Une société
                      marquée par la liberté mène toujours à l'enrichissement et
                      au progrès économique et social...
                    </p>
                  </div>
                  <button
                    className="btn btn-radius bg-dark text-white ml-15 font-small box-shadow"
                  >
                    Tout lire
                  </button>
                </div>
              </div>
            </article>
            <article
              className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
              data-wow-delay="0.2s"
            >
              <div className="bshadowbox border-radius-10 hover-up h-100">
                <div className="post-content p-30">
                  <div className="entry-meta meta-0 font-small mb-10">
                    <a href=""
                      ><span className="post-cat text-success">KANU</span></a
                    >
                    <span
                      ><i className="fa-solid fa-book" style={{color : "#f36944"}}></i
                    ></span>
                  </div>
                  <div className="d-flex post-card-content">
                    <h5 className="post-title mb-20 text-danger font-weight-900">
                      Le froc, la charrue et la croissance économique du Bénin
                    </h5>
                    <p className="font-medium text-muted">
                      Depuis les années 2000, le Bénin réalise une croissance
                      économique solide. En prenant l'année 2008 comme base 100,
                      le PIB du Bénin en volume est passé de 100 à 181 en
                      2021...
                    </p>
                  </div>
                  <button
                    className="btn btn-radius bg-dark text-white ml-15 font-small box-shadow"
                  >
                    Tout lire
                  </button>
                </div>
              </div>
            </article>
            <article
              className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
              data-wow-delay="0.2s"
            >
              <div className="bshadowbox border-radius-10 hover-up h-100">
                <div className="post-content p-30">
                  <div className="entry-meta meta-0 font-small mb-10">
                    <a href=""
                      ><span className="post-cat text-success">KANU</span></a
                    >
                    <span
                      ><i className="fa-solid fa-book" style={{color : "#f36944"}}></i
                    ></span>
                  </div>
                  <div className="d-flex post-card-content">
                    <h5 className="post-title mb-20 text-danger font-weight-900">
                      Qu'est-ce que le «Talonomics» ?
                    </h5>
                    <p className="font-medium text-muted">
                      Qu'il me soit permis de former le néologisme de forme
                      "Talonomics". Ceci, non pas par quelque vanité mais pure
                      nécessité. une fois que l'on permet cette gymnastique
                      lexicographique, il me faut en donner...
                    </p>
                  </div>
                  <button
                    className="btn btn-radius bg-dark text-white ml-15 font-small box-shadow"
                  >
                    Tout lire
                  </button>
                </div>
              </div>
            </article>
            <article
              className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
              data-wow-delay="0.2s"
            >
              <div className="bshadowbox border-radius-10 hover-up h-100">
                <div className="post-content p-30">
                  <div className="entry-meta meta-0 font-small mb-10">
                    <a href=""
                      ><span className="post-cat text-success">KANU</span></a
                    >
                    <span
                      ><i className="fa-solid fa-book" style={{color : "#f36944"}}></i
                    ></span>
                  </div>
                  <div className="d-flex post-card-content">
                    <h5 className="post-title mb-20 text-danger font-weight-900">
                      De la citoyenne responsable
                    </h5>
                    <p className="font-medium text-muted">
                      Il faut que quelqu'un dirige et décide. Le philosophe
                      Alain disait : "l'action, c'est comme une bataille ;
                      chaque détour du chemin veut une décision". Le pouvoir
                      législatif est ontologiquement oligarchique...
                    </p>
                  </div>
                  <button
                    className="btn btn-radius bg-dark text-white ml-15 font-small box-shadow"
                  >
                    Tout lire
                  </button>
                </div>
              </div>
            </article>
            <article
              className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
              data-wow-delay="0.2s"
            >
              <div className="bshadowbox border-radius-10 hover-up h-100">
                <div className="post-content p-30">
                  <div className="entry-meta meta-0 font-small mb-10">
                    <a href=""
                      ><span className="post-cat text-success">KANU</span></a
                    >
                    <span
                      ><i className="fa-solid fa-book" style={{color : "#f36944"}}></i
                    ></span>
                  </div>
                  <div className="d-flex post-card-content">
                    <h5 className="post-title mb-20 text-danger font-weight-900">
                      Comprendre la spécificité de l'économie numérique
                    </h5>
                    <p className="font-medium text-muted">
                      La compréhension de l'économie numérique part d'une
                      conséquence majeure de l'intégration du digital dans les
                      processus de production : les tâches répétitives sont
                      automatisées. De ce fait, qui peut sembler banal...
                    </p>
                  </div>
                  <button
                    className="btn btn-radius bg-dark text-white ml-15 font-small box-shadow"
                  >
                    Tout lire
                  </button>
                </div>
              </div>
            </article>
            <article
              className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
              data-wow-delay="0.2s"
            >
              <div className="bshadowbox border-radius-10 hover-up h-100">
                <div className="post-content p-30">
                  <div className="entry-meta meta-0 font-small mb-10">
                    <a href=""
                      ><span className="post-cat text-success">KANU</span></a
                    >
                    <span
                      ><i className="fa-solid fa-book" style={{color : "#f36944"}}></i
                    ></span>
                  </div>
                  <div className="d-flex post-card-content">
                    <h5 className="post-title mb-20 text-danger font-weight-900">
                      C'est le moment d'accélérer la digitalisation de l'Afrique
                    </h5>
                    <p className="font-medium text-muted">
                      Commençons par quelques vérités qui, pour être de la
                      Palisse, n'en sont pas moins éloquentes. (...) L' Afrique
                      du Sud est le pays ayant le plus de robots par di mille
                      travailleurs en Afrique et 28 robots par dix mille
                      travailleurs...
                    </p>
                  </div>
                  <button
                    className="btn btn-radius bg-dark text-white ml-15 font-small box-shadow"
                  >
                    Tout lire
                  </button>
                </div>
              </div>
            </article>
            <article
              className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
              data-wow-delay="0.2s"
            >
              <div className="bshadowbox border-radius-10 hover-up h-100">
                <div className="post-content p-30">
                  <div className="entry-meta meta-0 font-small mb-10">
                    <a href=""
                      ><span className="post-cat text-success">KANU</span></a
                    >
                    <span
                      ><i className="fa-solid fa-book" style={{color : "#f36944"}}></i
                    ></span>
                  </div>
                  <div className="d-flex post-card-content">
                    <h5 className="post-title mb-20 text-danger font-weight-900">
                      Afrique : dans l'économie numérique, les entrepreneurs ont
                      besoin de fonds propres, pas de dettes
                    </h5>
                    <p className="font-medium text-muted">
                      L'entrepreneur est un révolutionnaire dans l'économie. De
                      la pensée de Richard Cantillon, l'entrepreneur est la main
                      visible qui permet au marché de fonctionner...
                    </p>
                  </div>
                  <button
                    className="btn btn-radius bg-dark text-white ml-15 font-small box-shadow"
                  >
                    Tout lire
                  </button>
                </div>
              </div>
            </article>
            <article
              className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
              data-wow-delay="0.2s"
            >
              <div className="bshadowbox border-radius-10 hover-up h-100">
                <div className="post-content p-30">
                  <div className="entry-meta meta-0 font-small mb-10">
                    <a href=""
                      ><span className="post-cat text-success">KANU</span></a
                    >
                    <span
                      ><i className="fa-solid fa-book" style={{color : "#f36944"}}></i
                    ></span>
                  </div>
                  <div className="d-flex post-card-content">
                    <h5 className="post-title mb-20 text-danger font-weight-900">
                      La question de la pauvreté en Afrique est étroitement liée
                      à l'absence de droits de propriété
                    </h5>
                    <p className="font-medium text-muted">
                      Face à la pauvreté, la communauté internationale n'est pas
                      restée les bras croisés. Depuis le milieu des années 80,
                      de nombreux programmes de lutte contre...
                    </p>
                  </div>
                  <button
                    className="btn btn-radius bg-dark text-white ml-15 font-small box-shadow"
                  >
                    Tout lire
                  </button>
                </div>
              </div>
            </article>
          </div>
          <div className="row mt-50">
            <div className="col-12">
              <div className="pagination-area mb-30 wow fadeInUp animated">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-start">
                    <li className="page-item">
                      <a className="page-link" href="#"
                        ><i className="elegant-icon arrow_left"></i
                      ></a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">01</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">02</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">03</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">04</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#"
                        ><i className="elegant-icon arrow_right"></i
                      ></a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

      {/*  <!-- End Main content --> */}
      {/*    <!--site-bottom--> */}
      <div className="site-bottom pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="sidebar-widget widget-latest-posts mb-30 wow fadeInUp animated">
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Publications</h5>
                </div>
                <div className="post-block-list post-module-1">
                  <ul className="list-post">
                    <li className="mb-30">
                      <div className="d-flex hover-up-2 transition-normal">
                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                          <a className="color-white" href="single.html">
                            <Image src={FocCharure} alt="" />
                            {/* <img
                            src="assets/imgs/jed/blogs/focCharure.jpg"
                            alt=""
                          /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="single.html">
                              Le froc, la charrue et la croissance économique du
                              Bénin
                            </a>
                          </h6>
                          <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                            <span className="post-on text-primary">
                              <strong>KANU </strong>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mb-30">
                      <div className="d-flex hover-up-2 transition-normal">
                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                          <a className="color-white" href="single.html">
                            <Image src={AccelererDigit} alt="" />
                            {/* <img
                            src="assets/imgs/jed/blogs/accerlererDigit.jpg"
                            alt=""
                          /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="single.html">
                              C'est le moment d'accélérer la digitalisation de
                              l'Afrique
                            </a>
                          </h6>
                          <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                            <span className="post-on text-primary">
                              <strong>KANU </strong>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mb-30">
                      <div className="d-flex hover-up-2 transition-normal">
                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                          <a className="color-white" href="single.html">
                            <Image src={Talonomics} alt="" />
                            {/* <img
                            src="assets/imgs/jed/blogs/talonomics.jpg"
                            alt=""
                          /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="single.html">
                              Qu'est-ce que le «Talonomics» ?
                            </a>
                          </h6>
                          <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                            <span className="post-on text-primary">
                              <strong>KANU </strong>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="sidebar-widget widget-latest-posts mb-30 wow fadeInUp animated"
                data-wow-delay="0.2s"
              >
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Interventions</h5>
                </div>
                <div className="post-block-list post-module-1">
                  <ul className="list-post">
                    <li className="mb-30">
                      <div className="d-flex hover-up-2 transition-normal">
                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                          <a className="color-white" href="single.html">
                            <Image src={ComePremierFacteur} alt="" />
                            {/*  <img
                            src="assets/imgs/jed/blogs/comePremierFacteur.jpg"
                            alt=""
                          /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="single.html">Les Insights de l'éco</a>
                          </h6>
                          <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                            <span className="post-on text-primary">
                              <strong>Podcast </strong>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mb-30">
                      <div className="d-flex hover-up-2 transition-normal">
                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                          <a className="color-white" href="single.html">
                            <Image src={Entrepreunariat} alt="" />
                            {/* <img
                            src="assets/imgs/jed/blogs/entrepreunariat.jpg"
                            alt=""
                          /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="single.html">
                              Comprendre l’écosystème entrepreneurial et
                              favoriser son émergence au Bénin
                            </a>
                          </h6>
                          <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                            <span className="post-on text-primary">
                              <strong>Podcast </strong>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mb-30">
                      <div className="d-flex hover-up-2 transition-normal">
                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                          <a className="color-white" href="single.html">
                            <Image src={IndustriBenin} alt="" />
                            {/* <img
                            src="assets/imgs/jed/blogs/industriBenin.jpg"
                            alt=""
                          /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="single.html">
                              L'INDUSTRIALISATION DU BÉNIN : UN CHANTIER BIEN
                              ENTAMÉ
                            </a>
                          </h6>
                          <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                            <span className="post-on text-primary">
                              <strong>Emission / ECHOS D'ECO </strong>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="sidebar-widget widget-latest-posts mb-30 wow fadeInUp animated"
                data-wow-delay="0.4s"
              >
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Livres</h5>
                </div>
                <div className="post-block-list post-module-1">
                  <ul className="list-post">
                    <li className="mb-30">
                      <div className="d-flex hover-up-2 transition-normal">
                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                          <a className="color-white" href="single.html">
                            <Image src={Mara} alt="" />
                            {/*  <img src="assets/imgs/jed/blogs/mara.jpg" alt="" /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="single.html">En terrasse avec Mara</a>
                          </h6>
                          <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                            <span className="post-on text-primary">
                              <strong>Livres</strong>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mb-30">
                      <div className="d-flex hover-up-2 transition-normal">
                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                          <a className="color-white" href="single.html">
                            <Image src={DigitalSecourAfrique} alt="" />
                            {/* <img
                            src="assets/imgs/jed/blogs/digitalSecourAfrique.png"
                            alt=""
                          /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="single.html">
                              Le digital au secours de l'Afrique
                            </a>
                          </h6>
                          <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                            <span className="post-on text-primary">
                              <strong>Livres</strong>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mb-30">
                      <div className="d-flex hover-up-2 transition-normal">
                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                          <a className="color-white" href="single.html">
                            <Image src={CoupEtatAfrique} alt="" />
                            {/*  <img
                            src="assets/imgs/jed/blogs/coupEtatAfrique.png"
                            alt=""
                          /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="single.html">
                              Les coups d'état en Afrique: malédition ou point
                              de passage nécessaire?
                            </a>
                          </h6>
                          <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                            <span className="post-on text-primary">
                              <strong>Livres</strong>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-widget widget-latest-posts mb-30 mt-20 wow fadeInUp animated">
            <div className="widget-header-2 position-relative mb-30">
              <h5 className="mt-5 mb-30">Categories</h5>
            </div>
            <div className="carausel-3-columns">
              <div className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
                <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                  <a className="color-white" href="single.html">
                    <Image src={Thumb2} alt="" />
                    {/*  <img src="assets/imgs/news/thumb-1.jpg" alt="" /> */}
                  </a>
                </div>
                <div className="post-content media-body">
                  <h6>
                    <a href="category.html">Tribunes</a>
                  </h6>
                  <p className="text-muted font-small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
                <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                  <a className="color-white" href="single.html">
                    <Image src={Thumb3} alt="" />
                    {/* <img src="assets/imgs/news/thumb-2.jpg" alt="" /> */}
                  </a>
                </div>
                <div className="post-content media-body">
                  <h6>
                    <a href="category.html">Podcast</a>
                  </h6>
                  <p className="text-muted font-small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
                <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                  <a className="color-white" href="single.html">
                    <Image src={Thumb4} alt="" />
                    {/*  <img src="assets/imgs/news/thumb-3.jpg" alt="" /> */}
                  </a>
                </div>
                <div className="post-content media-body">
                  <h6>
                    <a href="category.html">Emission</a>
                  </h6>
                  <p className="text-muted font-small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
                <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                  <a className="color-white" href="single.html">
                    <Image src={Thumb6} alt="" />
                    {/* <img src="assets/imgs/news/thumb-4.jpg" alt="" /> */}
                  </a>
                </div>
                <div className="post-content media-body">
                  <h6>
                    <a href="category.html">Livres</a>
                  </h6>
                  <p className="text-muted font-small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
