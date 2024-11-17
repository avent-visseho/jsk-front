"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Blog1 from "@/assets/imgs/jed/blogs/blog-1.jpg";
import Blog2 from "@/assets/imgs/jed/blogs/blog-2.jpg";
import Blog3 from "@/assets/imgs/jed/blogs/blog-3.jpg";
import Blog4 from "@/assets/imgs/jed/blogs/blog-4.jpg"
import Blog5 from "@/assets/imgs/jed/blogs/blog-5.jpg"
import Blog6 from "@/assets/imgs/jed/blogs/blog-6.jpg"
import Ecole229 from "@/assets/imgs/jed/blogs/ecole229.png";
import Thumb2 from "@/assets/imgs/news/thumb-2.jpg";
import Thumb3 from "@/assets/imgs/news/thumb-3.jpg";
import Thumb4 from "@/assets/imgs/news/thumb-4.jpg";
import Thumb6 from "@/assets/imgs/news/thumb-6.jpg";
import Jed from "@/assets/imgs/jed/blogs/jed.png";
import CultureMonde from "@/assets/imgs/jed/blogs/cultureMonde.jpg";
import JeuneAfrique from "@/assets/imgs/jed/blogs/jeuneAfrique.jpg";
import Fcfa from "@/assets/imgs/jed/blogs/fcfa.png";
import New12 from "@/assets/imgs/news/news-12.jpg";
import Eden from "@/assets/imgs/jed/blogs/eden.png";
import FocCharure from "@/assets/imgs/jed/blogs/focCharure.jpg";
import AccelererDigit from "@/assets/imgs/jed/blogs/accerlererDigit.jpg";
import Talonomics from "@/assets/imgs/jed/blogs/talonomics.jpg"
import Mara from "@/assets/imgs/jed/blogs/mara.jpg"
import ComePremierFacteur from "@/assets/imgs/jed/blogs/comePremierFacteur.jpg";
import Entrepreunariat from "@/assets/imgs/jed/blogs/entrepreunariat.jpg";
import IndustriBenin from "@/assets/imgs/jed/blogs/industriBenin.jpg";
import DigitalSecourAfrique from "@/assets/imgs/jed/blogs/digitalSecourAfrique.png";
import CoupEtatAfrique from "@/assets/imgs/jed/blogs/coupEtatAfrique.png";
import Signature from "@/assets/imgs/jed/blogs/signature.png";
import DataService from "@/services/DataService";

const page = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Réinitialiser l'erreur et le succès
    setError("");
    setSuccess(false);
    setIsSubmitting(true);

    // Validation basique
    if (!prenom || !nom || !email || !tel || !message) {
      setError("Veuillez remplir tous les champs.");
      setIsSubmitting(false);
      return;
    }

    DataService.postContact({
      email: email,
      firstName: prenom,
      lastName: nom,
      phoneNumber: tel,
      message: message,
      aggreeWithTerm: true,
    })
      .then((response) => {
        setIsSubmitting(false);
        setNom("");
        setPrenom("");
        setEmail("");
        setTel("");
        setMessage("");
        setSuccess(true);
      })
      .catch((error) => {
        setIsSubmitting(false);
        setError("Une erreur est survenue. Veuillez réessayer.");
      });
  };

  useEffect(() => {
    
   
  }, []);
  return (
    <>
        
    {/* <!-- Start Main content --> */}
    <main>
      <div className="featured-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <p className="text-muted">
                <span
                  className="typewrite d-inline text-primary"
                  data-period="2000"
                  data-type='[ " Sophonie Jed Koboude. ", "Essayiste. ", "chroniqueur ", "analyste " ]'
                ></span>
              </p>
              <h2>Informer. <span>Contribuer.</span></h2>
              <h3 className="mb-20">Transmettre.</h3>
              <h5 className="text-muted">
                Essayiste, chroniqueur, analyste, porté par la volonté de faire
                progresser le monde à l'échelle des petits pas.
              </h5>
              <form className="input-group form-subcriber mt-30 d-flex">
                <input
                  type="email"
                  className="form-control bg-white font-small"
                  placeholder="Saisissez votre e-mail"
                />
                <button className="btn bg-primary text-white" type="submit">
                  S'abonner
                </button>
              </form>
            </div>
            <div className="col-lg-6 text-right d-none d-lg-block">
                <Image src={Jed} alt=""/>
              {/* <img src="assets/imgs/jed/blogs/jed.png" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="hot-tags pt-30 pb-30 font-small align-self-center">
          <div className="widget-header-3">
            <div className="row align-self-center">
              <div className="col-md-4 align-self-center">
                <h5 className="widget-title">Dernières contributions</h5>
              </div>
              <div className="col-md-8 text-md-right font-small align-self-center">
                <p className="d-inline-block mr-5 mb-0">
                  <i className="fa-solid fa-tag"></i>
                </p>
                <ul className="list-inline d-inline-block tags">
                  <li className="list-inline-item">
                    <a href="#"># Inspiration</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#"># Economie</a>
                  </li>
                  <li className="list-inline-item"><a href="#"># Politique</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="loop-grid mb-30">
          <div className="row">
            <div className="col-lg-8 mb-30">
              <div
                className="carausel-post-1 hover-up border-radius-10 overflow-hidden transition-normal position-relative wow fadeInUp animated"
              >
                <div className="arrow-cover"></div>
                <div className="slide-fade">
                  <div className="position-relative post-thumb">
                    <div
                      className="thumb-overlay img-hover-slide position-relative"
                      style={{ backgroundImage: `url(${Blog1.src})` }}
/* 
                      style="
                        background-image: url(assets/imgs/jed/blogs/blog-1.jpg);
                      " */
                    >
                      <a className="img-link" href="details"></a>
                      <span className="top-left-icon bg-warning"
                        ><i
                          className="fa-regular fa-star"
                          style={{color : "#fff"}}
                        ></i
                      ></span>
                      <div
                        className="post-content-overlay text-white ml-30 mr-30 pb-30"
                      >
                        <div className="entry-meta meta-0 font-small mb-20">
                          <a href="category.html"
                            ><span className="post-cat text-info text-uppercase"
                              >Articles</span
                            ></a
                          >
                        </div>
                        <h3 className="post-title font-weight-900 mb-20">
                          <a className="text-white" href="details"
                            >Sortir de l’illusion de la prospérité assurée par
                            l'État</a
                          >
                        </h3>
                        <div
                          className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5"
                        >
                        <span className="post-on">Il y a 20 minutes</span>
                        <span className="hit-count has-dot">23k vues</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="position-relative post-thumb">
                    <div
                      className="thumb-overlay img-hover-slide position-relative"
                      style={{ backgroundImage: `url(${Blog2.src})` }}
                      /* style="
                        background-image: url(assets/imgs/jed/blogs/blog-2.jpg);
                      " */
                    >
                      <a className="img-link" href="details"></a>
                      <span className="top-left-icon bg-danger"
                        ><i className="elegant-icon icon_image"></i
                      ></span>
                      <div
                        className="post-content-overlay text-white ml-30 mr-30 pb-30"
                      >
                        <div className="entry-meta meta-0 font-small mb-20">
                          <a href="category.html"
                            ><span className="post-cat text-info text-uppercase"
                              >Articles</span
                            ></a
                          >
                        </div>
                        <h3 className="post-title font-weight-900 mb-20">
                          <a className="text-white" href="details"
                            >Liberté, Beauté, Prospérité</a
                          >
                        </h3>
                        <div
                          className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5"
                        >
                          <span className="post-on">25 Octobre</span>
                          <span className="hit-count has-dot">18k vues</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <article
              className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
              data-wow-delay="0.2s"
            >
              <div className="post-card-1 border-radius-10 hover-up  h-100">
                <div
                  className="post-thumb thumb-overlay img-hover-slide position-relative"
                  style={{ backgroundImage: `url(${Blog3.src})` }}
                  /* style="
                    background-image: url(assets/imgs/jed/blogs/blog-3.jpg);
                  " */
                >
                  <a className="img-link" href="details"></a>
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
                    <a href="category.html"
                      ><span className="post-cat text-info">Articles</span></a
                    >
                  </div>
                  <div className="d-flex post-card-content">
                    <h5 className="post-title mb-20 font-weight-900">
                      <a href="details"
                        >Déficits jumeaux : Faute de vendre suffisamment, le
                        Bénin se vend pour soutenir sa consommation</a
                      >
                    </h5>
                    <div
                      className="entry-meta meta-1 float-left font-x-small text-uppercase"
                    >
                      <span className="post-on">18 Octobre</span>
                      <span className="time-reading has-dot"
                        >12 minutes de lecture</span
                      >
                      <span className="post-by has-dot">23k vues</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated">
              <div className="post-card-1 border-radius-10 hover-up  h-100">
                <div
                  className="post-thumb thumb-overlay img-hover-slide position-relative"
                  style={{ backgroundImage: `url(${Blog4.src})` }}
                  /* style="
                    background-image: url(assets/imgs/jed/blogs/blog-4.jpg);
                  " */
                >
                  <a className="img-link" href="details"></a>
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
                    <a href="category.html"
                      ><span className="post-cat text-warning">Articles</span></a
                    >
                  </div>
                  <div className="d-flex post-card-content">
                    <h5 className="post-title mb-20 font-weight-900">
                      <a href="details"
                        >Le mythe du multiplicateur keynésien au Bénin</a
                      >
                    </h5>
                    <div
                      className="entry-meta meta-1 float-left font-x-small text-uppercase"
                    >
                      <span className="post-on">11 Octobre</span>
                      <span className="time-reading has-dot"
                        >8 minutes de lecture</span
                      >
                      <span className="post-by has-dot">12k vues</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article
              className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
              data-wow-delay="0.2s"
            >
              <div className="post-card-1 border-radius-10 hover-up  h-100">
                <div
                  className="post-thumb thumb-overlay img-hover-slide position-relative"
                  style={{ backgroundImage: `url(${Blog5.src})` }}
                 /*  style="
                    background-image: url(assets/imgs/jed/blogs/blog-5.jpg);
                  " */
                >
                  <a className="img-link" href="details"></a>
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
                    <a href="category.html"
                      ><span className="post-cat text-danger">Articles</span></a
                    >
                  </div>
                  <div className="d-flex post-card-content">
                    <h5 className="post-title mb-20 font-weight-900">
                      <a href="details"
                        >Bénin : La transition vers un système de retraite par
                        capitalisation devient urgente</a
                      >
                    </h5>
                    <div
                      className="entry-meta meta-1 float-left font-x-small text-uppercase"
                    >
                      <span className="post-on">04 Octobre</span>
                      <span className="time-reading has-dot"
                        >15 minutes de lecture</span
                      >
                      <span className="post-by has-dot">500 vues</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article
              className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
              data-wow-delay="0.4s"
            >
              <div className="post-card-1 border-radius-10 hover-up  h-100">
                <div
                  className="post-thumb thumb-overlay img-hover-slide position-relative"
                  style={{ backgroundImage: `url(${Blog6.src})` }}
                  /* style="
                    background-image: url(assets/imgs/jed/blogs/blog-6.jpg);
                  " */
                >
                  <a className="img-link" href="details"></a>
                  <span className="top-right-icon bg-info"
                    ><i className="elegant-icon icon_headphones"></i
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
                    <a href="category.html"
                      ><span className="post-cat text-success">Articles</span></a
                    >
                  </div>
                  <div className="d-flex post-card-content">
                    <h5 className="post-title mb-20 font-weight-900">
                      <a href="details"
                        >Comprendre la création de richesse plutôt que l'origine
                        de la pauvreté</a
                      >
                    </h5>
                    <div
                      className="entry-meta meta-1 float-left font-x-small text-uppercase"
                    >
                      <span className="post-on">27 Septembre</span>
                      <span className="time-reading has-dot"
                        >9 minute de lecture</span
                      >
                      <span className="post-by has-dot">1.2k vues</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="bg-grey pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="post-module-2">
                <div
                  className="widget-header-1 position-relative mb-30 wow fadeInUp animated"
                >
                  <h5 className="mt-5 mb-30">Dernières contributions</h5>
                </div>
                <div className="loop-list loop-list-style-1">
                  <div className="row">
                    <article className="mb-40">
                      <div className="post-card-1 border-radius-10 hover-up">
                        <div
                          className="post-thumb thumb-overlay img-hover-slide position-relative"
                          style={{ backgroundImage: `url(${CultureMonde.src})` }}
                          /* style="
                            background-image: url(assets/imgs/jed/blogs/cultureMonde.jpg);
                          " */
                        >
                          <a className="img-link" href="details"></a>
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
                              <a
                                className="tw"
                                href="#"
                                target="_blank"
                                title="Tweet now"
                                ><i
                                  className="fa-brands fa-twitter"
                                  style={{color : "#fff"}}
                                ></i
                              ></a>
                            </li>
                            <li>
                              <a
                                className="pt"
                                href="#"
                                target="_blank"
                                title="Pin it"
                                ><i className="fa-brands fa-linkedin-in"></i></a>
                            </li>
                          </ul>
                        </div>
                        <div className="post-content p-30">
                          <div className="entry-meta meta-0 font-small mb-10">
                            <a href="category.html"
                              ><span className="post-cat text-info"
                                >Podcast</span
                              ></a
                            >
                          </div>
                          <div className="d-flex post-card-content">
                            <h5 className="post-title mb-20 font-weight-900">
                              <a href="details">
                                Révolution numérique : s’émanciper par
                                l’innovation</a
                              >
                            </h5>
                            <div
                              className="post-excerpt mb-25 font-small text-muted"
                            >
                              <p>
                                Ces dernières années, le continent africain a
                                connu un véritable boom de l’usage du numérique.
                                On assiste même selon certains experts à un
                                processus “d’innovation inversée” où le
                                continent invente de nouveaux usages avant
                                diffusion en dehors du continent. Avec Sophonie
                                Koboudé, Essayiste. Séverin Yao Kouamé,
                                Sociologue, enseignant-chercheur à l'université
                                de Bouaké en Côte d'Ivoire et coordonnateur de
                                l'Initiative de Dialogue et de Recherche-Action
                                pour la Paix en Côte d'Ivoire. Marine Al Dahdah,
                                Sociologue et chargée de recherche au CNRS au
                                Centre d’étude des mouvements sociaux.
                              </p>
                            </div>
                            <div
                              className="entry-meta meta-1 float-left font-x-small text-uppercase"
                            >
                              <span className="post-on text-primary"
                                ><strong>▶ Ecouter l'épisode</strong></span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="mb-40 animated">
                      <div className="post-card-1 border-radius-10 hover-up">
                        <div
                          className="post-thumb thumb-overlay img-hover-slide position-relative"
                          style={{ backgroundImage: `url(${JeuneAfrique.src})` }}
                          /* style="
                            background-image: url(assets/imgs/jed/blogs/jeuneAfrique.jpg);
                          " */
                        >
                          <a className="img-link" href="details"></a>
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
                              <a
                                className="tw"
                                href="#"
                                target="_blank"
                                title="Tweet now"
                                ><i
                                  className="fa-brands fa-twitter"
                                  style={{color : "#fff"}}
                                ></i
                              ></a>
                            </li>
                            <li>
                              <a
                                className="pt"
                                href="#"
                                target="_blank"
                                title="Pin it"
                                ><i className="fa-brands fa-linkedin-in"></i></a>
                            </li>
                          </ul>
                        </div>
                        <div className="post-content p-30">
                          <div className="entry-meta meta-0 font-small mb-10">
                            <a href="category.html"
                              ><span className="post-cat">Tribune</span></a
                            >
                          </div>
                          <div className="d-flex post-card-content">
                            <h5 className="post-title mb-20 font-weight-900">
                              <a href="details"
                                >Jeune Afrique : La mise en œuvre de la Zleca
                                est la vraie réponse à la crise</a
                              >
                            </h5>
                            <div
                              className="post-excerpt mb-25 font-small text-muted"
                            >
                              <p>
                                Plutôt que de recourir à des plans de relance
                                basés sur la dette, c’est en misant sur le
                                libre-échange que l’Afrique pourrait renouer
                                avec la croissance, estime Sophonie Koboudé. Il
                                ne fait guère de doute que « ça » va mal. « Ça
                                », quoi ? La situation sanitaro-économique, ou
                                plus nommément, la crise de la Covid-19.
                                L’économie mondiale a été forcée à l’arrêt, et
                                les économies africaines n’ont pas été épargnées
                                : selon la Banque africaine de développement
                                (BAD), le PIB réel en Afrique, d’après le
                                scénario de base qui suppose un impact
                                considérable du virus, mais sur une courte
                                durée, devrait se contracter de 1,7 % en 2020,
                                soit une baisse de 5,6 points de pourcentage par
                                rapport aux projections de janvier 2020. Cette
                                contraction de l’économie pourrait coûter à
                                l’Afrique des pertes de l’ordre de 145,5
                                milliards de dollars.....
                              </p>
                            </div>
                            <div
                              className="entry-meta meta-1 float-left font-x-small text-uppercase"
                            >
                              <span className="post-on text-primary"
                                ><strong>▶ Lire la tribune </strong></span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="mb-40">
                      <div className="post-card-1 border-radius-10 hover-up">
                        <div
                          className="post-thumb thumb-overlay img-hover-slide position-relative"
                          style={{ backgroundImage: `url(${Fcfa.src})` }}
                          /* style="
                            background-image: url(assets/imgs/jed/blogs/fcfa.png);
                          " */
                        >
                          <a className="img-link" href="details"></a>
                          <span className="top-right-icon bg-secondary"
                            ><i className="elegant-icon icon_heart_alt"></i
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
                              <a
                                className="tw"
                                href="#"
                                target="_blank"
                                title="Tweet now"
                                ><i
                                  className="fa-brands fa-twitter"
                                  style={{color : "#fff"}}
                                ></i
                              ></a>
                            </li>
                            <li>
                              <a
                                className="pt"
                                href="#"
                                target="_blank"
                                title="Pin it"
                                ><i className="fa-brands fa-linkedin-in"></i></a>
                            </li>
                          </ul>
                        </div>
                        <div className="post-content p-30">
                          <div className="entry-meta meta-0 font-small mb-10">
                            <a href="category.html"
                              ><span className="post-cat text-success"
                                >Tribune</span
                              ></a
                            >
                          </div>
                          <div className="d-flex post-card-content">
                            <h5 className="post-title mb-20 font-weight-900">
                              <a href="details"
                                >Franc CFA, ce que le Christ a à nous dire</a
                              >
                            </h5>
                            <div
                              className="post-excerpt mb-25 font-small text-muted"
                            >
                              <p>
                                "Au prince il a fallu conquérir la monnaie comme
                                il a conquis les provinces qui ont agrandi son
                                royaume ; il en a surveillé les frappes, fixé la
                                valeur, contrôlé la diffusion. La monnaie a fait
                                le roi."
                              </p>
                            </div>
                            <div
                              className="entry-meta meta-1 float-left font-x-small text-uppercase"
                            >
                              <span className="post-on text-primary"
                                ><strong>▶ Lire l'intégralité</strong></span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <article className="mb-40">
                      <div className="post-card-1 border-radius-10 hover-up">
                        <div
                          className="post-thumb thumb-overlay img-hover-slide position-relative"
                          style={{ backgroundImage: `url(${New12.src})` }}
                          /* style="
                            background-image: url(assets/imgs/news/news-12.jpg);
                          " */
                        >
                          <a className="img-link" href="details"></a>
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
                              <a
                                className="tw"
                                href="#"
                                target="_blank"
                                title="Tweet now"
                                ><i
                                  className="fa-brands fa-twitter"
                                  style={{color : "#fff"}}
                                ></i
                              ></a>
                            </li>
                            <li>
                              <a
                                className="pt"
                                href="#"
                                target="_blank"
                                title="Pin it"
                                ><i className="fa-brands fa-linkedin-in"></i></a>
                            </li>
                          </ul>
                        </div>
                        <div className="post-content p-30">
                          <div className="entry-meta meta-0 font-small mb-10">
                            <a href="category.html"
                              ><span className="post-cat text-danger"
                                >Modération</span
                              ></a
                            >
                          </div>
                          <div className="d-flex post-card-content">
                            <h5 className="post-title mb-20 font-weight-900">
                              <a href="details"
                                >L’innovation numérique en Afrique : enjeux et
                                dynamiques</a
                              >
                            </h5>
                            <div
                              className="post-excerpt mb-25 font-small text-muted"
                            >
                              <p>
                                Conférence, initiée et organisée par le Réseau
                                Francophone des FabLabs d’Afrique de l’Ouest
                                (ReFFAO), présentant le tableau dynamique et
                                assez particulier de l’innovation numérique en
                                Afrique - propulsé notamment par ces espaces
                                créatifs que sont les FabLabs -....
                              </p>
                            </div>
                            <div
                              className="entry-meta meta-1 float-left font-x-small text-uppercase"
                            >
                              <span className="post-on text-primary"
                                ><strong>▶ Lire l'intégralité</strong></span
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4" id="author">
              <div className="widget-area">
                <div
                  className="sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 bg-white border-radius-5 has-border wow fadeInUp animated"
                  >
                    <Image src={Jed} className="about-author-img mb-25" alt="" />
                  {/* <img
                    className="about-author-img mb-25"
                    src="assets/imgs/jed/blogs/jed.png"
                    alt=""
                  /> */}
                  <h5 className="mb-20">Sophonie Jed Koboude</h5>
                  <p className="text-muted">
                    <span
                      className="typewrite d-inline"
                      data-period="2000"
                      data-type='[ " Sophonie Jed Koboude. ", "Essayiste. ", "chroniqueur ", "analyste " ]'
                    ></span>
                  </p>
                  <p className="font-medium text-muted">
                    Passionné par les nouvelles technologies de l'information,
                    l'économie, l'énergie, l’Histoire et, surtout, l'Afrique, et
                    animé par la joie de transmettre, je suis auteur de deux
                    essais et intervient régulièrement au travers de chroniques
                    écrites ou d’émissions télévisées.
                  </p>
                  <strong>Suivez-moi : </strong>
                  <ul
                    className="header-social-network d-inline-block list-inline color-white mb-20"
                  >
                    <li className="list-inline-item">
                      <a className="fb" href="#" target="_blank" title="Facebook"
                        ><i
                        className="fa-solid fa-facebook-f"
                        style={{color : "#fff"}}
                      ></i
                    ></a>
                    </li>
                    <li className="list-inline-item">
                      <a className="tw" href="#" target="_blank" title="Tweet now"
                        ><i
                        className="fa-brands fa-twitter"
                        style={{color : "#fff"}}
                      ></i
                    ></a>
                    </li>
                    <li className="list-inline-item">
                      <a className="pt" href="#" target="_blank" title="Pin it"
                        ><i className="fa-brands fa-linkedin-in"></i></a>
                    </li>
                  </ul>
                </div>
                <div
                  className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated"
                  >
                  <div className="widget-header-1 position-relative mb-30">
                    <h5 className="mt-5 mb-30">Les plus populaires</h5>
                  </div>
                  <div className="post-block-list post-module-1">
                    <ul className="list-post">
                      <li className="mb-30 wow fadeInUp animated">
                        <div
                          className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5"
                        >
                          <div className="post-content media-body">
                            <h6
                              className="post-title mb-15 text-limit-2-row font-medium"
                            >
                              <a href="details"
                                >Spending Some Quality Time with Kids? It’s
                                Possible</a
                              >
                            </h6>
                            <div
                              className="entry-meta meta-1 float-left font-x-small text-uppercase"
                            >
                              <span className="post-on">05 August</span>
                              <span className="post-by has-dot">150 views</span>
                            </div>
                          </div>
                          <div
                            className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden"
                          >
                            <a className="color-white" href="details">
                                <Image src={Thumb6} alt=""/>
                              {/* <img src="assets/imgs/news/thumb-6.jpg" alt="" /> */}
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="mb-30 wow fadeInUp animated">
                        <div
                          className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5"
                        >
                          <div className="post-content media-body">
                            <h6
                              className="post-title mb-15 text-limit-2-row font-medium"
                            >
                              <a href="details"
                                >Relationship Podcasts are Having “That” Talk</a
                              >
                            </h6>
                            <div
                              className="entry-meta meta-1 float-left font-x-small text-uppercase"
                            >
                              <span className="post-on">12 August</span>
                              <span className="post-by has-dot">6k views</span>
                            </div>
                          </div>
                          <div
                            className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden"
                          >
                            <a className="color-white" href="details">
                            <Image src={Blog1} alt="" />
                              {/* <img src="assets/imgs/news/thumb-7.jpg" alt="" /> */}
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="mb-30 wow fadeInUp animated">
                        <div
                          className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5"
                        >
                          <div className="post-content media-body">
                            <h6
                              className="post-title mb-15 text-limit-2-row font-medium"
                            >
                              <a href="details"
                                >Here’s How to Get the Best Sleep at Night</a
                              >
                            </h6>
                            <div
                              className="entry-meta meta-1 float-left font-x-small text-uppercase"
                            >
                              <span className="post-on">15 August</span>
                              <span className="post-by has-dot">16k views</span>
                            </div>
                          </div>
                          <div
                            className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden"
                          >
                            <a className="color-white" href="details">
                                <Image src={Thumb3} alt=""/>
                             {/*  <img src="assets/imgs/news/thumb-2.jpg" alt="" /> */}
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="wow fadeInUp animated">
                        <div
                          className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5"
                        >
                          <div className="post-content media-body">
                            <h6
                              className="post-title mb-15 text-limit-2-row font-medium"
                            >
                              <a href="details"
                                >America’s Governors Get Tested for a Virus That
                                Is Testing Them</a
                              >
                            </h6>
                            <div
                              className="entry-meta meta-1 float-left font-x-small text-uppercase"
                            >
                              <span className="post-on">12 August</span>
                              <span className="post-by has-dot">3k views</span>
                            </div>
                          </div>
                          <div
                            className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden"
                          >
                            <a className="color-white" href="details">
                                <Image src={Thumb3} alt="" />
                              {/* <img src="assets/imgs/news/thumb-3.jpg" alt="" /> */}
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated"
                >
                  <div className="widget-header-1 position-relative mb-30">
                    <h5 className="mt-5 mb-30">dernier commentaire </h5>
                  </div>
                  <div className="post-block-list post-module-2">
                    <ul className="list-post">
                      <li className="mb-30 wow fadeInUp animated">
                        <div
                          className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5"
                        >
                          <div
                            className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden"
                          >
                            <a className="color-white" href="details">
                                <Image src={Jed} alt="" />
                             {/*  <img
                                src="assets/imgs/authors/author-2.jpg"
                                alt=""
                              /> */}
                            </a>
                          </div>
                          <div className="post-content media-body">
                            <p className="mb-10">
                              <a href="author.html"><strong>David</strong></a>
                              <span className="ml-15 font-small text-muted has-dot"
                                >16 Jan 2020</span
                              >
                            </p>
                            <p className="text-muted font-small">
                              A writer is someone for whom writing is more
                              difficult than...
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="mb-30 wow fadeInUp animated">
                        <div
                          className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5"
                        >
                          <div
                            className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden"
                          >
                            <a className="color-white" href="details">
                                <Image src={Jed} alt=""/>
                              {/* <img
                                src="assets/imgs/authors/author-3.jpg"
                                alt=""
                              /> */}
                            </a>
                          </div>
                          <div className="post-content media-body">
                            <p className="mb-10">
                              <a href="author.html"><strong>Kokawa</strong></a>
                              <span className="ml-15 font-small text-muted has-dot"
                                >12 Feb 2020</span
                              >
                            </p>
                            <p className="text-muted font-small">
                              Striking pewter studded epaulettes silver zips
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="wow fadeInUp animated">
                        <div
                          className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5"
                        >
                          <div
                            className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden"
                          >
                            <a className="color-white" href="details">
                                <Image src={Thumb2} alt=""/>
                              {/* <img src="assets/imgs/news/thumb-1.jpg" alt="" /> */}
                            </a>
                          </div>
                          <div className="post-content media-body">
                            <p className="mb-10">
                              <a href="author.html"><strong>Tsukasi</strong></a>
                              <span className="ml-15 font-small text-muted has-dot"
                                >18 May 2020</span
                              >
                            </p>
                            <p className="text-muted font-small">
                              Workwear bow detailing a slingback buckle strap
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="don" className="archive-header pt-50 text-center">
            <h2 className="font-weight-900">Soutenir des causes</h2>
            <div className=""><p>qui me tiennent à coeur</p></div>
            <div className="bt-1 border-color-1 mt-30 mb-50"></div>
            <div className="loop-grid mb-30">
              <div className="row">
                <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated">
                  <div className="post-card-1 border-radius-10 hover-up h-100">
                    <div
                      className="post-thumb thumb-overlay img-hover-slide position-relative"
                      style={{ backgroundImage: `url(${Jed.src})` }}
                    >
                      <a className="img-link" href="details"></a>
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
                          <a
                            className="tw"
                            href="#"
                            target="_blank"
                            title="Tweet now"
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
                      {/* <!-- <div className="entry-meta meta-0 font-small mb-10">
                        <span className="post-cat text-warning">Fashion</span>
                      </div> --> */}
                      <div className="d-flex post-card-content">
                        <h5 className="post-title mb-20 font-weight-900">
                          "La générosité est la meilleure chose qui existe, car
                          elle est l'origine de toutes les autres vertus."
                        </h5>
                        <p className="font-medium text-muted">
                          Je souhaite mettre en avant l'importance de la
                          générosité et du don envers les autres, soulignant que
                          donner peut non seulement aider les autres, mais peut
                          aussi contribuer à son propre développement personnel,
                          dans une dynamique harmonieuse et pour le bien commun.
                        </p>
                        <button
                          className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow"
                        >
                          Faire un don
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated">
                  <div className="post-card-1 border-radius-10 hover-up h-100">
                    <div
                      className="post-thumb thumb-overlay img-hover-slide position-relative"
                      style={{ backgroundImage: `url(${Eden.src})` }}
                    >
                      <a className="img-link" href="details"></a>
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
                          <a
                            className="tw"
                            href="#"
                            target="_blank"
                            title="Tweet now"
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
                     {/*  <!-- <div className="entry-meta meta-0 font-small mb-10">
                        <span className="post-cat text-warning">Fashion</span>
                      </div> --> */}
                      <div className="d-flex post-card-content">
                        <h5 className="post-title mb-20 font-weight-900">
                          Eden ONG Orphelinat / Association
                        </h5>
                        <p className="font-medium text-muted">
                          L’association Eden soutient l’orphelinat «la Bergerie»
                          pour: sa vocation humanitaire au service d'enfants
                          orphelins ; on autonomie de fonctionnement ; la
                          stabilité politique de la République du Bénin. Après
                          quelques années d'existence, elle a élargit ses
                          activités en intégrant une école et un centre de santé
                          à l'orphelinat pour contribuer au bien-être des
                          orphelins.
                        </p>
                        <button
                          className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow"
                        >
                          Faire un don
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated">
                  <div className="post-card-1 border-radius-10 hover-up h-100">
                    <div
                      className="post-thumb thumb-overlay img-hover-slide position-relative"
                      style={{ backgroundImage: `url(${Ecole229.src})` }}
                    >
                      <a className="img-link" href="details"></a>
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
                          <a
                            className="tw"
                            href="#"
                            target="_blank"
                            title="Tweet now"
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
                      {/* <!-- <div className="entry-meta meta-0 font-small mb-10">
                        <span className="post-cat text-warning">Fashion</span>
                      </div> --> */}
                      <div className="d-flex post-card-content">
                        <h5 className="post-title mb-20 font-weight-900">
                          Ecole 229Enseignement / Formation
                        </h5>
                        <p className="font-medium text-muted">
                          L'école 229 a pour mission de faire du numérique un
                          levier d’inclusion capable de révéler des talents et
                          d’assurer l'autonomie des apprenants à travers leur
                          insertion professionnelle. Elle oeuvre pour le
                          développement de l'écosystème numérique en Afrique
                          pour favoriser l'inclusivité et l'accès à l'emploi.
                        </p>
                        <button
                          className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow"
                        >
                          Faire un don
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
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
            <div
              className="sidebar-widget widget-latest-posts mb-30 wow fadeInUp animated"
            >
              <div className="widget-header-2 position-relative mb-30">
                <h5 className="mt-5 mb-30">Publications</h5>
              </div>
              <div className="post-block-list post-module-1">
                <ul className="list-post">
                  <li className="mb-30">
                    <div className="d-flex hover-up-2 transition-normal">
                      <div
                        className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden"
                      >
                        <a className="color-white" href="details">
                            <Image src={FocCharure} alt=""/>
                          {/* <img
                            src="assets/imgs/jed/blogs/focCharure.jpg"
                            alt=""
                          /> */}
                        </a>
                      </div>
                      <div className="post-content media-body">
                        <h6
                          className="post-title mb-15 text-limit-2-row font-medium"
                        >
                          <a href="details"
                            >Le froc, la charrue et la croissance économique du
                            Bénin</a
                          >
                        </h6>
                        <div
                          className="entry-meta meta-1 float-left font-x-small text-uppercase"
                        >
                          <span className="post-on text-primary"
                            ><strong>KANU </strong></span
                          >
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="mb-30">
                    <div className="d-flex hover-up-2 transition-normal">
                      <div
                        className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden"
                      >
                        <a className="color-white" href="details">
                            <Image src={AccelererDigit} alt=""/>
                          {/* <img
                            src="assets/imgs/jed/blogs/accerlererDigit.jpg"
                            alt=""
                          /> */}
                        </a>
                      </div>
                      <div className="post-content media-body">
                        <h6
                          className="post-title mb-15 text-limit-2-row font-medium"
                        >
                          <a href="details"
                            >C'est le moment d'accélérer la digitalisation de
                            l'Afrique</a
                          >
                        </h6>
                        <div
                          className="entry-meta meta-1 float-left font-x-small text-uppercase"
                        >
                          <span className="post-on text-primary"
                            ><strong>KANU </strong></span
                          >
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="mb-30">
                    <div className="d-flex hover-up-2 transition-normal">
                      <div
                        className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden"
                      >
                        <a className="color-white" href="details">
                            <Image  src={Talonomics} alt=""/>
                          {/* <img
                            src="assets/imgs/jed/blogs/talonomics.jpg"
                            alt=""
                          /> */}
                        </a>
                      </div>
                      <div className="post-content media-body">
                        <h6
                          className="post-title mb-15 text-limit-2-row font-medium"
                        >
                          <a href="details"
                            >Qu'est-ce que le «Talonomics» ?</a
                          >
                        </h6>
                        <div
                          className="entry-meta meta-1 float-left font-x-small text-uppercase"
                        >
                          <span className="post-on text-primary"
                            ><strong>KANU </strong></span
                          >
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
                      <div
                        className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden"
                      >
                        <a className="color-white" href="details">
                        <Image  src={ComePremierFacteur} alt=""/>
                         {/*  <img
                            src="assets/imgs/jed/blogs/comePremierFacteur.jpg"
                            alt=""
                          /> */}
                        </a>
                      </div>
                      <div className="post-content media-body">
                        <h6
                          className="post-title mb-15 text-limit-2-row font-medium"
                        >
                          <a href="details">Les Insights de l'éco</a>
                        </h6>
                        <div
                          className="entry-meta meta-1 float-left font-x-small text-uppercase"
                        >
                          <span className="post-on text-primary"
                            ><strong>Podcast </strong></span
                          >
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="mb-30">
                    <div className="d-flex hover-up-2 transition-normal">
                      <div
                        className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden"
                      >
                        <a className="color-white" href="details">
                        <Image  src={Entrepreunariat} alt=""/>
                          {/* <img
                            src="assets/imgs/jed/blogs/entrepreunariat.jpg"
                            alt=""
                          /> */}
                        </a>
                      </div>
                      <div className="post-content media-body">
                        <h6
                          className="post-title mb-15 text-limit-2-row font-medium"
                        >
                          <a href="details"
                            >Comprendre l’écosystème entrepreneurial et
                            favoriser son émergence au Bénin</a
                          >
                        </h6>
                        <div
                          className="entry-meta meta-1 float-left font-x-small text-uppercase"
                        >
                          <span className="post-on text-primary"
                            ><strong>Podcast </strong></span
                          >
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="mb-30">
                    <div className="d-flex hover-up-2 transition-normal">
                      <div
                        className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden"
                      >
                        <a className="color-white" href="details">
                        <Image  src={IndustriBenin} alt=""/>
                          {/* <img
                            src="assets/imgs/jed/blogs/industriBenin.jpg"
                            alt=""
                          /> */}
                        </a>
                      </div>
                      <div className="post-content media-body">
                        <h6
                          className="post-title mb-15 text-limit-2-row font-medium"
                        >
                          <a href="details"
                            >L'INDUSTRIALISATION DU BÉNIN : UN CHANTIER BIEN
                            ENTAMÉ</a
                          >
                        </h6>
                        <div
                          className="entry-meta meta-1 float-left font-x-small text-uppercase"
                        >
                          <span className="post-on text-primary"
                            ><strong>Emission / ECHOS D'ECO </strong></span
                          >
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
                      <div
                        className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden"
                      >
                        <a className="color-white" href="details">
                        <Image  src={Mara} alt=""/>
                         {/*  <img src="assets/imgs/jed/blogs/mara.jpg" alt="" /> */}
                        </a>
                      </div>
                      <div className="post-content media-body">
                        <h6
                          className="post-title mb-15 text-limit-2-row font-medium"
                        >
                          <a href="details">En terrasse avec Mara</a>
                        </h6>
                        <div
                          className="entry-meta meta-1 float-left font-x-small text-uppercase"
                        >
                          <span className="post-on text-primary"
                            ><strong>Livres</strong></span
                          >
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="mb-30">
                    <div className="d-flex hover-up-2 transition-normal">
                      <div
                        className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden"
                      >
                        <a className="color-white" href="details">
                        <Image  src={DigitalSecourAfrique} alt=""/>
                          {/* <img
                            src="assets/imgs/jed/blogs/digitalSecourAfrique.png"
                            alt=""
                          /> */}
                        </a>
                      </div>
                      <div className="post-content media-body">
                        <h6
                          className="post-title mb-15 text-limit-2-row font-medium"
                        >
                          <a href="details"
                            >Le digital au secours de l'Afrique</a
                          >
                        </h6>
                        <div
                          className="entry-meta meta-1 float-left font-x-small text-uppercase"
                        >
                          <span className="post-on text-primary"
                            ><strong>Livres</strong></span
                          >
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="mb-30">
                    <div className="d-flex hover-up-2 transition-normal">
                      <div
                        className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden"
                      >
                        <a className="color-white" href="details">
                        <Image  src={CoupEtatAfrique} alt=""/>
                         {/*  <img
                            src="assets/imgs/jed/blogs/coupEtatAfrique.png"
                            alt=""
                          /> */}
                        </a>
                      </div>
                      <div className="post-content media-body">
                        <h6
                          className="post-title mb-15 text-limit-2-row font-medium"
                        >
                          <a href="details"
                            >Les coups d'état en Afrique: malédition ou point de
                            passage nécessaire?</a
                          >
                        </h6>
                        <div
                          className="entry-meta meta-1 float-left font-x-small text-uppercase"
                        >
                          <span className="post-on text-primary"
                            ><strong>Livres</strong></span
                          >
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="sidebar-widget widget-latest-posts mb-30 mt-20 wow fadeInUp animated"
        >
          <div className="widget-header-2 position-relative mb-30">
            <h5 className="mt-5 mb-30">Categories</h5>
          </div>
          <div className="carausel-3-columns">
            <div
              className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5"
            >
              <div
                className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden"
              >
                <a className="color-white" href="details">
                <Image  src={Thumb2} alt=""/>
                 {/*  <img src="assets/imgs/news/thumb-1.jpg" alt="" /> */}
                </a>
              </div>
              <div className="post-content media-body">
                <h6><a href="category.html">Tribunes</a></h6>
                <p className="text-muted font-small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div
              className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5"
            >
              <div
                className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden"
              >
                <a className="color-white" href="details">
                <Image  src={Thumb3} alt=""/>
                  {/* <img src="assets/imgs/news/thumb-2.jpg" alt="" /> */}
                </a>
              </div>
              <div className="post-content media-body">
                <h6><a href="category.html">Podcast</a></h6>
                <p className="text-muted font-small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div
              className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5"
            >
              <div
                className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden"
              >
                <a className="color-white" href="details">
                <Image  src={Thumb4} alt=""/>
                 {/*  <img src="assets/imgs/news/thumb-3.jpg" alt="" /> */}
                </a>
              </div>
              <div className="post-content media-body">
                <h6><a href="category.html">Emission</a></h6>
                <p className="text-muted font-small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div
              className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5"
            >
              <div
                className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden"
              >
                <a className="color-white" href="details">
                <Image  src={Thumb6} alt=""/>
                  {/* <img src="assets/imgs/news/thumb-4.jpg" alt="" /> */}
                </a>
              </div>
              <div className="post-content media-body">
                <h6><a href="category.html">Livres</a></h6>
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
