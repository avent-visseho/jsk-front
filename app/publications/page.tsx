"use client";
import React, { useEffect, useState } from "react";
import Mara from "@/assets/imgs/jed/blogs/mara.jpg";
import DigitalSecourAfrique from "@/assets/imgs/jed/blogs/digitalSecourAfrique.png";
import CoupEtatAfrique from "@/assets/imgs/jed/blogs/coupEtatAfrique.png";
import AfriqueLiberteEconomique from "@/assets/imgs/jed/blogs/afriqueLiberteEconomique.jpg";
import Horizon from "@/assets/imgs/jed/blogs/horizon.png";
import { getBook, getIntervention, getTribunes } from "@/services/DataService";
import Image from "next/image";
import Thumb6 from "@/assets/imgs/news/thumb-6.jpg";
import Thumb2 from "@/assets/imgs/news/thumb-2.jpg";
import Thumb3 from "@/assets/imgs/news/thumb-3.jpg";
import Thumb4 from "@/assets/imgs/news/thumb-4.jpg";


const page = () => {
  const [books, setBooks] = useState([]);
  const [tribunes, setTribunes] = useState([]);
  const [bookPage, setBookPage] = useState(1);
  const [tribunesPage, setTribunesPage] = useState(1);
  const [bookTotal, setBookTotal] = useState(0);
  const [tribunesTotal, setTribunesTotal] = useState(0);
  const [interventions, setInterventions] = useState([]);


  useEffect(() => {
    getBook().then((res) => {
      setBooks(res.data.data);
      setBookTotal(res.data.total);
    });

    getTribunes().then((res) => {
      setTribunes(res.data.data);
      setTribunesTotal(res.data.total);
    });
    getIntervention().then((res) => {
      setInterventions(res.data);
    });
  }, []);
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
                    <span className="top-right-icon bg-success">
                      <i className="elegant-icon icon_camera_alt"></i>
                    </span>
                    <ul className="social-share">
                      <li>
                        <a href="#">
                          <i
                            className="fa-solid fa-share-nodes"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="fb"
                          href="#"
                          title="Share on Facebook"
                          target="_blank"
                        >
                          <i
                            className="fa-brands fa-facebook-f"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="tw"
                          href="#"
                          target="_blank"
                          title="Tweet now"
                        >
                          <i
                            className="fa-brands fa-twitter"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="pt"
                          href="#"
                          target="_blank"
                          title="Pin it"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="post-content p-30">
                    <div className="entry-meta meta-0 font-small mb-10">
                      <a href="">
                        <span className="post-cat text-success">Livre</span>
                      </a>
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
                        prendra-t-elle exemple ? Nous savons que le leadership
                        ne naît pas d’un vide intersidéral. Il prend corps chez
                        les individus au moyen, entre autres, d’exemples de
                        leadership. C’est là que réside la raison d’être de ce
                        livre qui donne à voir un exceptionnel modèle
                        d’engagement au service du Mali et de l’Afrique. À
                        travers l’exemple de Son Excellence M. Moussa Mara, la
                        jeunesse africaine a un repère placé à l’horizon.
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
                    <span className="top-right-icon bg-success">
                      <i className="elegant-icon icon_camera_alt"></i>
                    </span>
                    <ul className="social-share">
                      <li>
                        <a href="#">
                          <i
                            className="fa-solid fa-share-nodes"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="fb"
                          href="#"
                          title="Share on Facebook"
                          target="_blank"
                        >
                          <i
                            className="fa-brands fa-facebook-f"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="tw"
                          href="#"
                          target="_blank"
                          title="Tweet now"
                        >
                          <i
                            className="fa-brands fa-twitter"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="pt"
                          href="#"
                          target="_blank"
                          title="Pin it"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="post-content p-30">
                    <div className="entry-meta meta-0 font-small mb-10">
                      <a href="">
                        <span className="post-cat text-success">
                          Tribune Afrique des idées
                        </span>
                      </a>
                    </div>
                    <div className="d-flex post-card-content">
                      <h5 className="post-title mb-20 font-weight-900">
                        Les coups d'état en Afrique : malédiction ou point de
                        passage nécessaire ?
                      </h5>
                      <p className="font-medium text-muted">
                        Selon les données de <strong>Jonathan Powell</strong> ,
                        spécialiste des relations internationales, sur les 486
                        coups d’État réussis ou ratés depuis 1950, 214 – dont
                        106 réussis – ont eu lieu en Afrique; ce qui fait de
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
                    <span className="top-right-icon bg-success">
                      <i className="elegant-icon icon_camera_alt"></i>
                    </span>
                    <ul className="social-share">
                      <li>
                        <a href="#">
                          <i
                            className="fa-solid fa-share-nodes"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="fb"
                          href="#"
                          title="Share on Facebook"
                          target="_blank"
                        >
                          <i
                            className="fa-brands fa-facebook-f"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="tw"
                          href="#"
                          target="_blank"
                          title="Tweet now"
                        >
                          <i
                            className="fa-brands fa-twitter"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="pt"
                          href="#"
                          target="_blank"
                          title="Pin it"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="post-content p-30">
                    <div className="entry-meta meta-0 font-small mb-10">
                      <a href="">
                        <span className="post-cat text-success">Livre</span>
                      </a>
                    </div>
                    <div className="d-flex post-card-content">
                      <h5 className="post-title mb-20 font-weight-900">
                        L'horizon africain : Démographie, démocratie: Regards
                        d'un jeune africain
                      </h5>
                      <p className="font-medium text-muted">
                        L’avenir du continent africain est de moins en moins
                        incertain. Le potentiel de croissance du continent
                        semble être le point de convergence de tous les rapports
                        des institutions économiques et financières
                        internationales...
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
                    style={{
                      backgroundImage: `url(${DigitalSecourAfrique.src})`,
                    }}
                  >
                    <a className="img-link" href="single.html"></a>
                    <span className="top-right-icon bg-success">
                      <i className="elegant-icon icon_camera_alt"></i>
                    </span>
                    <ul className="social-share">
                      <li>
                        <a href="#">
                          <i
                            className="fa-solid fa-share-nodes"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="fb"
                          href="#"
                          title="Share on Facebook"
                          target="_blank"
                        >
                          <i
                            className="fa-brands fa-facebook-f"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="tw"
                          href="#"
                          target="_blank"
                          title="Tweet now"
                        >
                          <i
                            className="fa-brands fa-twitter"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="pt"
                          href="#"
                          target="_blank"
                          title="Pin it"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="post-content p-30">
                    <div className="entry-meta meta-0 font-small mb-10">
                      <a href="">
                        <span className="post-cat text-success">Livre</span>
                      </a>
                    </div>
                    <div className="d-flex post-card-content">
                      <h5 className="post-title mb-20 font-weight-900">
                        Le digital au secours de l'Afrique
                      </h5>
                      <p className="font-medium text-muted">
                        Nous pouvons raisonnablement craindre que le Nouveau
                        Monde soit une étape supplémentaire dans le
                        déclassNameement du continent africain. L'Afrique est
                        assurément un véritable laboratoire d'expérimentations
                        et de déploiements des usages du digital, mais elle
                        peine à se servir des effets d'entraînement du digital
                        pour doper sa croissance économique...
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
                    style={{
                      backgroundImage: `url(${AfriqueLiberteEconomique.src})`,
                    }}
                  >
                    <a className="img-link" href="single.html"></a>
                    <span className="top-right-icon bg-success">
                      <i className="elegant-icon icon_camera_alt"></i>
                    </span>
                    <ul className="social-share">
                      <li>
                        <a href="#">
                          <i
                            className="fa-solid fa-share-nodes"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="fb"
                          href="#"
                          title="Share on Facebook"
                          target="_blank"
                        >
                          <i
                            className="fa-brands fa-facebook-f"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="tw"
                          href="#"
                          target="_blank"
                          title="Tweet now"
                        >
                          <i
                            className="fa-brands fa-twitter"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="pt"
                          href="#"
                          target="_blank"
                          title="Pin it"
                        >
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="post-content p-30">
                    <div className="entry-meta meta-0 font-small mb-10">
                      <a href="">
                        <span className="post-cat text-success">
                          Tribune KANU
                        </span>
                      </a>
                    </div>
                    <div className="d-flex post-card-content">
                      <h5 className="post-title mb-20 font-weight-900">
                        Afrique: la liberté économique, condition indispensable
                        au développement
                      </h5>
                      <p className="font-medium text-muted">
                        Sur le continent africain, il n'existe aucun pays
                        "économiquement libre" (...) Soyons clairs. Une société
                        marquée par la liberté mène toujours à l'enrichissement
                        et au progrès économique et social...
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="mb-30">
              <span className="text-primary font-weight-900">
                Tous les livres
              </span>
            </div>
            <div className="row">
              {books?.map((book: any, index) => (
                <article
                  className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
                  key={index}
                  data-wow-delay="0.2s"
                >
                  <div className="bshadowbox border-radius-10 hover-up h-100">
                    <div className="post-content p-30">
                      <div className="entry-meta meta-0 font-small mb-10">
                        <span>
                          <i
                            className="fa-solid fa-book"
                            style={{ color: "#f36944" }}
                          ></i>
                        </span>
                      </div>
                      <div className="d-flex post-card-content">
                        <h5 className="post-title mb-20 text-danger font-weight-900">
                          {book?.title}
                        </h5>
                        <p
                          className="font-medium text-muted"
                          dangerouslySetInnerHTML={{
                            __html: book?.description,
                          }}
                        />
                      </div>
                      <button
                        className="btn btn-radius bg-dark text-white font-small box-shadow"
                        onClick={() => {
                          window.open(book?.link, "_blank");
                        }}
                      >
                        Acheter ce livre
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mb-30">
              <span className="text-primary font-weight-900">
                Tous les articles & tribunes
              </span>
            </div>
            <div className="row">
              {tribunes?.map((tribune: any, index) => (
                <article
                  className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
                  data-wow-delay="0.2s"
                  key={index}
                >
                  <div className="bshadowbox border-radius-10 hover-up h-100">
                    <div className="post-content p-30">
                      <div className="entry-meta meta-0 font-small mb-10">
                        <a href="">
                          <span className="post-cat text-success">
                            {tribune?.source?.name}
                          </span>
                        </a>
                        <span>
                          <i
                            className="fa-solid fa-book"
                            style={{ color: "#f36944" }}
                          ></i>
                        </span>
                      </div>
                      <div className="d-flex post-card-content">
                        <h5 className="post-title mb-20 text-danger font-weight-900">
                          {tribune?.title}
                        </h5>
                        <p
                          className="font-medium text-muted"
                          dangerouslySetInnerHTML={{
                            __html: tribune?.description,
                          }}
                        />
                      </div>
                      <button
                        className="btn btn-radius bg-dark text-white font-small box-shadow"
                        onClick={() => {
                          window.open(tribune?.link, "_blank");
                        }}
                      >
                        Tout lire
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="row mt-50">
              <div className="col-12">
                <div className="pagination-area mb-30 wow fadeInUp animated">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-start">
                      <li className="page-item">
                        <a className="page-link" href="#">
                          <i className="elegant-icon arrow_left"></i>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          01
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          02
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          03
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          04
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          <i className="elegant-icon arrow_right"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

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
                    {tribunes?.slice(0, 5)?.map((tribune: any, index: number) => (
                      <li className="mb-30" key={index}>
                        <div className="d-flex hover-up-2 transition-normal">
                          <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                            <div className="color-white">
                              <Image
                                src={`${process.env.NEXT_PUBLIC_FILE_URL}/${tribune?.coverImage}`}
                                alt={tribune?.title}
                                width={90}
                                height={80}
                              />
                            </div>
                          </div>
                          <div className="post-content media-body">
                            <h6 className="post-title mb-15 text-limit-2-row font-medium">
                              <a href={tribune?.link} target="_blank">
                                {tribune?.title}
                              </a>
                            </h6>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on text-primary">
                                <strong>{tribune?.source?.name} </strong>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
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
                    {interventions?.slice(0, 5)?.map((intervention: any, index: number) => (
                      <li className="mb-30" key={index}>
                        <div className="d-flex hover-up-2 transition-normal">
                          <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                            <div className="color-white">
                              <Image
                                src={intervention?.imageUrl}
                                alt={intervention?.title}
                                width={90}
                                height={80}
                              />
                            </div>
                          </div>
                          <div className="post-content media-body">
                            <h6 className="post-title mb-15 text-limit-2-row font-medium">
                              <a href={intervention?.link} target="_blank">
                                {intervention?.title}
                              </a>
                            </h6>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span
                                className="post-on text-primary"
                                style={{
                                  textTransform: "capitalize",
                                }}
                              >
                                <strong>
                                  {intervention?.type == "conference"
                                    ? "Conférence"
                                    : intervention?.type == "moderation"
                                    ? "Modération"
                                    : intervention.type}{" "}
                                </strong>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
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
                    {books?.slice(0, 5)?.map((book: any, index: number) => (
                      <li className="mb-30" key={index}>
                        <div className="d-flex hover-up-2 transition-normal">
                          <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                            <div className="color-white">
                              <Image
                                src={`${process.env.NEXT_PUBLIC_FILE_URL}/${book?.coverImage}`}
                                alt={book?.title}
                                width={90}
                                height={80}
                              />
                            </div>
                          </div>
                          <div className="post-content media-body">
                            <h6 className="post-title mb-15 text-limit-2-row font-medium">
                              <a href={book?.link} target="_blank">
                                {book?.title}
                              </a>
                            </h6>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on text-primary">
                                <strong>Livre</strong>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
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
                  <a className="color-white" href="details">
                    <Image src={Thumb2} alt="" />
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
                  <a className="color-white" href="details">
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
                  <a className="color-white" href="details">
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
                  <a className="color-white" href="details">
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
