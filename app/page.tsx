import Image from "next/image";

/* JED */
import Featured from "@/assets/imgs/authors/featured.png";
import CultureMonde from "@/assets/imgs/jed/CultutreMonde.jpg";
import InnovationAfrique from "@/assets/imgs/jed/InovationAfrique.jpg";
import FCFA from "@/assets/imgs/jed/Fcfa.png";
import Illusion from "@/assets/imgs/jed/illusion.jpg";
import Jed from "@/assets/imgs/jed/jed.jpg";
import Liberte from "@/assets/imgs/jed/liberte.jpg";
import Multiplicateur from "@/assets/imgs/jed/multiplicateur.jpg";
import Desequilibre from "@/assets/imgs/jed/sesequilibre.jpg";
import Entrepreneur from "@/assets/imgs/jed/entrepreuneur.jpg";
import Generosite from "@/assets/imgs/jed/generosite.jpg";
import EdenOng from "@/assets/imgs/jed/edenOng.png";
import Ecole229 from "@/assets/imgs/jed/ecole229.png";

import React from "react";

const page = () => {
  return (
    <>
      {/*  <!-- Start Main content --> */}
      <main>
        <div className="featured-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <p className="text-muted">
                  <span
                    className="typewrite d-inline"
                    data-period="2000"
                    data-type='[ " Sophonie Jed Koboude. ", "Essayiste. ", "chroniqueur ", "analyste " ]'
                  ></span>
                </p>
                <h2>Informer. <span>Contribuer.</span></h2>
                <h3 className="mb-20">Transmettre.</h3>
                <h5 className="text-muted">
                  Essayiste, chroniqueur, analyste, porté par la
                  volonté de faire progresser le monde à l'échelle
                  des petits pas.
                </h5>
                <form
                  className="input-group form-subcriber mt-30 d-flex"
                >
                  <input
                    type="email"
                    className="form-control bg-white font-small"
                    placeholder="Saisissez votre e-mail"
                  />
                  <button
                    className="btn bg-primary text-white"
                    type="submit"
                  >
                    S'abonner
                  </button>
                </form>
              </div>
              <div className="col-lg-6 text-right d-none d-lg-block">
                <Image src={Featured} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="hot-tags pt-30 pb-30 font-small align-self-center">
            <div className="widget-header-3">
              <div className="row align-self-center">
                <div className="col-md-4 align-self-center">
                  <h5 className="widget-title">
                    Articles en vedette
                  </h5>
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
                        style={{ backgroundImage: `url(${CultureMonde.src})` }}
                      >
                        <a
                          className="img-link"
                          href="/details"
                        ></a>
                        <span
                          className="top-left-icon bg-warning"
                        ><i
                          className="elegant-icon icon_star_alt"
                        ></i
                          ></span>
                        <div
                          className="post-content-overlay text-white ml-30 mr-30 pb-30"
                        >
                          <div
                            className="entry-meta meta-0 font-small mb-20"
                          >
                            <a href="Tribune"
                            ><span
                              className="post-cat text-info text-uppercase"
                            >Economies</span
                              ></a
                            >
                            <a href="Tribune"
                            ><span
                              className="post-cat text-success text-uppercase"
                            >Tribune</span
                              ></a
                            >
                          </div>
                          <h3
                            className="post-title font-weight-900 mb-20"
                          >
                            <a
                              className="text-white"
                              href="/details"
                            >
                              Franc CFA, ce que le
                              Christ a à nous dire</a
                            >
                          </h3>
                          <div
                            className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5"
                          >
                            <span className="post-on"
                            >Il y a 20 minutes</span
                            >
                            <span
                              className="hit-count has-dot"
                            >23k Vues</span
                            >
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
                <div className="post-card-1 border-radius-10 hover-up">
                  <div
                    className="post-thumb thumb-overlay img-hover-slide position-relative"
                    style={{ backgroundImage: `url(${InnovationAfrique.src})` }}
                  >
                    <a
                      className="img-link"
                      href="/details"
                    ></a>
                    <span className="top-right-icon bg-success"
                    ><i
                      className="elegant-icon icon_camera_alt"
                    ></i
                      ></span>
                    <ul className="social-share">
                      <li>
                        <a href="#"
                        ><i
                          className="elegant-icon social_share"
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
                          className="elegant-icon social_facebook"
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
                          className="elegant-icon social_twitter"
                        ></i
                          ></a>
                      </li>
                      <li>
                        <a
                          className="pt"
                          href="#"
                          target="_blank"
                          title="Pin it"
                        ><i
                          className="elegant-icon social_pinterest"
                        ></i
                          ></a>
                      </li>
                    </ul>
                  </div>
                  <div className="post-content p-30">
                    <div
                      className="entry-meta meta-0 font-small mb-10"
                    >
                      <a href="Tribune"
                      ><span className="post-cat text-info"
                      >Modération</span
                        ></a
                      >
                      <a href="Tribune"
                      ><span className="post-cat text-success"
                      >Economies</span
                        ></a
                      >
                    </div>
                    <div className="d-flex post-card-content">
                      <h5
                        className="post-title mb-20 font-weight-900"
                      >
                        <a href="/details"
                        >L’innovation numérique en
                          Afrique : enjeux et
                          dynamiques</a
                        >
                      </h5>
                      <div
                        className="entry-meta meta-1 float-left font-x-small text-uppercase"
                      >
                        <span className="post-on"
                        >02 Novembre</span
                        >
                        <span className="time-reading has-dot"
                        >12 minutes de lecture</span
                        >
                        <span className="post-by has-dot"
                        >23k vues</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article
                className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
              >
                <div className="post-card-1 border-radius-10 hover-up">
                  <div
                    className="post-thumb thumb-overlay img-hover-slide position-relative"
                    style={{ backgroundImage: `url(${FCFA.src})` }}
                  >
                    <a
                      className="img-link"
                      href="/details"
                    ></a>
                    <ul className="social-share">
                      <li>
                        <a href="#"
                        ><i
                          className="elegant-icon social_share"
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
                          className="elegant-icon social_facebook"
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
                          className="elegant-icon social_twitter"
                        ></i
                          ></a>
                      </li>
                      <li>
                        <a
                          className="pt"
                          href="#"
                          target="_blank"
                          title="Pin it"
                        ><i
                          className="elegant-icon social_pinterest"
                        ></i
                          ></a>
                      </li>
                    </ul>
                  </div>
                  <div className="post-content p-30">
                    <div
                      className="entry-meta meta-0 font-small mb-10"
                    >
                      <a href="Tribune"
                      ><span className="post-cat text-warning"
                      >Tribune</span
                        ></a
                      >
                    </div>
                    <div className="d-flex post-card-content">
                      <h5
                        className="post-title mb-20 font-weight-900"
                      >
                        <a href="/details"
                        >Franc CFA, ce que le Christ a à
                          nous dire</a
                        >
                      </h5>
                      <div
                        className="entry-meta meta-1 float-left font-x-small text-uppercase"
                      >
                        <span className="post-on"
                        >17 juillet</span
                        >
                        <span className="time-reading has-dot"
                        >8 minutes de lecture</span
                        >
                        <span className="post-by has-dot"
                        >12k vues</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article
                className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
                data-wow-delay="0.2s"
              >
                <div className="post-card-1 border-radius-10 hover-up">
                  <div
                    className="post-thumb thumb-overlay img-hover-slide position-relative"
                    style={{ backgroundImage: `url(${InnovationAfrique.src})` }}
                  >
                    <a
                      className="img-link"
                      href="/details"
                    ></a>
                    <ul className="social-share">
                      <li>
                        <a href="#"
                        ><i
                          className="elegant-icon social_share"
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
                          className="elegant-icon social_facebook"
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
                          className="elegant-icon social_twitter"
                        ></i
                          ></a>
                      </li>
                      <li>
                        <a
                          className="pt"
                          href="#"
                          target="_blank"
                          title="Pin it"
                        ><i
                          className="elegant-icon social_pinterest"
                        ></i
                          ></a>
                      </li>
                    </ul>
                  </div>
                  <div className="post-content p-30">
                    <div
                      className="entry-meta meta-0 font-small mb-10"
                    >
                      <a href="Tribune"
                      ><span className="post-cat text-danger"
                      >Modération</span
                        ></a
                      >
                    </div>
                    <div className="d-flex post-card-content">
                      <h5
                        className="post-title mb-20 font-weight-900"
                      >
                        <a href="/details"
                        >L’innovation numérique en
                          Afrique : enjeux et
                          dynamiques</a
                        >
                      </h5>
                      <div
                        className="entry-meta meta-1 float-left font-x-small text-uppercase"
                      >
                        <span className="post-on">7 août</span>
                        <span className="time-reading has-dot"
                        >15 minutes de lecture</span
                        >
                        <span className="post-by has-dot"
                        >500 vues</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article
                className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
                data-wow-delay="0.4s"
              >
                <div className="post-card-1 border-radius-10 hover-up">
                  <div
                    className="post-thumb thumb-overlay img-hover-slide position-relative"
                    style={{ backgroundImage: `url(${Illusion.src})` }}
                  >
                    <a
                      className="img-link"
                      href="/details"
                    ></a>
                    <span className="top-right-icon bg-info"
                    ><i
                      className="elegant-icon icon_headphones"
                    ></i
                      ></span>
                    <ul className="social-share">
                      <li>
                        <a href="#"
                        ><i
                          className="elegant-icon social_share"
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
                          className="elegant-icon social_facebook"
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
                          className="elegant-icon social_twitter"
                        ></i
                          ></a>
                      </li>
                      <li>
                        <a
                          className="pt"
                          href="#"
                          target="_blank"
                          title="Pin it"
                        ><i
                          className="elegant-icon social_pinterest"
                        ></i
                          ></a>
                      </li>
                    </ul>
                  </div>
                  <div className="post-content p-30">
                    <div
                      className="entry-meta meta-0 font-small mb-10"
                    >
                      <a href="Tribune"
                      ><span className="post-cat text-success"
                      >Politiques</span
                        ></a
                      >
                    </div>
                    <div className="d-flex post-card-content">
                      <h5
                        className="post-title mb-20 font-weight-900"
                      >
                        <a href="/details"
                        >Sortir de l’illusion de la
                          prospérité assurée par l'État</a
                        >
                      </h5>
                      <div
                        className="entry-meta meta-1 float-left font-x-small text-uppercase"
                      >
                        <span className="post-on">15 juin</span>
                        <span className="time-reading has-dot"
                        >9 minutes de lecture</span
                        >
                        <span className="post-by has-dot"
                        >1.2k vues</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div id="about" className="bg-grey pt-50 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div  className="post-module-2">
                  <div className="container">
                    <h2 className="font-weight-900">
                      Polycasquettes
                    </h2>
                    <p>
                      Et non pollypocket ^^. Même si, parfois,
                      il est agréable de prendre de la
                      distance avec l'analytique à flux
                      constant.
                    </p>
                    <article className="entry-wraper">
                      <p className="font-large">
                        Je suis actuellement Directeur
                        Général du think thank L'Afrique des
                        idées. Je suis ingénieur diplômé de
                        l'école CentraleSupélec à Paris et
                        économiste diplômé du Conservatoire
                        National des Arts et Métiers de
                        Paris. Après avoir accompagné
                        plusieurs startups dans la
                        structuration de leur business en
                        Afrique, je suis devenu Business
                        Analyst chez un leader mondial de
                        l'énergie.
                      </p>
                      <hr
                        className="wp-block-separator is-style-wide"
                      />
                    </article>
                    <div
                      className="bt-1 border-color-1 mt-30 mb-50"
                    ></div>
                  </div>
                  <div className="loop-list loop-list-style-1">
                    <div className="row">
                      <article
                        className="col-md-6 mb-40 wow fadeInUp animated"
                      >
                        <div
                          className="post-card-1 border-radius-10 hover-up"
                        >
                          <div className=""></div>
                          <div className="post-content p-30">
                            <div
                              className="d-flex post-card-content"
                            >
                              <h5>Essayiste</h5>
                              <div
                                className="post-excerpt mb-25 font-small text-muted"
                              >
                                <p>
                                  L’essai est un
                                  moyen de
                                  respiration
                                  intellectuelle.
                                  C’est mon outil
                                  préféré quand
                                  j’ai envie de
                                  développer ma
                                  pensée sur un
                                  sujet donné.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                      <article
                        className="col-md-6 mb-40 wow fadeInUp animated"
                      >
                        <div
                          className="post-card-1 border-radius-10 hover-up"
                        >
                          <div className=""></div>
                          <div className="post-content p-30">
                            <div
                              className="d-flex post-card-content"
                            >
                              <h5>Chroniqueur</h5>
                              <div
                                className="post-excerpt mb-25 font-small text-muted"
                              >
                                <p>
                                  Cette casquette
                                  me donne
                                  l’impression
                                  d’être un
                                  historien du
                                  présent, un
                                  témoin de
                                  l’histoire en
                                  train de se
                                  faire.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                      <article
                        className="col-md-6 mb-40 wow fadeInUp animated"
                      >
                        <div
                          className="post-card-1 border-radius-10 hover-up"
                        >
                          <div className=""></div>
                          <div className="post-content p-30">
                            <div
                              className="d-flex post-card-content"
                            >
                              <h5>
                                Analyste économique
                              </h5>
                              <div
                                className="post-excerpt mb-25 font-small text-muted"
                              >
                                <p>
                                  L’analyse
                                  économique est
                                  une discipline
                                  exigeante.
                                  J’essaie d’en
                                  vulgariser les
                                  méthodes et
                                  outils.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
                <div className="post-module-3">
                  <div
                    className="widget-header-1 position-relative mb-30"
                  >
                    <h4 className="font-weight-900">
                      Découvrir l'intégralité de mes
                      contributions
                    </h4>
                  </div>
                  <div className="post-block-list post-module-2">
                    <ul className="">
                      <li className="mb-30 wow fadeInUp animated">
                        <div
                          className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5"
                        >
                          <div
                            className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden"
                          >
                            <a
                              className="color-white"
                              href="/details"
                            >
                            </a>
                          </div>
                          <div
                            className="post-content media-body"
                          >
                            <p className="mb-10">
                              <a href="author.html"
                              ><strong
                              >Livres</strong
                                ></a
                              >
                            </p>
                            <button
                              className="btn btn-radius bg-primary text-white my-4 font-small box-shadow"
                            >
                              J'explore
                            </button>
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
                            <a
                              className="color-white"
                              href="/details"
                            >
                            </a>
                          </div>
                          <div
                            className="post-content media-body"
                          >
                            <p className="mb-10">
                              <a href="author.html"
                              ><strong
                              >Articles &
                                  tribunes</strong
                                ></a
                              >
                            </p>
                            <button
                              className="btn btn-radius bg-primary text-white my-4 font-small box-shadow"
                            >
                              J'explore
                            </button>
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
                            <a
                              className="color-white"
                              href="/details"
                            >
                            </a>
                          </div>
                          <div
                            className="post-content media-body"
                          >
                            <p className="mb-10">
                              <a href="author.html"
                              ><strong
                              >Articles &
                                  tribunes</strong
                                ></a
                              >
                            </p>
                            <button
                              className="btn btn-radius bg-primary text-white my-4 font-small box-shadow"
                            >
                              J'explore
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="widget-area">
                  <div
                    className="sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 bg-white border-radius-5 has-border wow fadeInUp animated"
                  >
                    <Image src={Jed} alt="" className="about-author-img mb-25" />
                    <h5 className="mb-10">Sophonie Jed Koboude</h5>
                    <h6 className="mb-20">
                      Essayiste, chroniqueur, analyste
                    </h6>
                    <p className="font-medium text-muted">
                      Passionné par les nouvelles technologies
                      de l'information, l'économie, l'énergie,
                      l’Histoire et, surtout, l'Afrique, et
                      animé par la joie de transmettre, je
                      suis auteur de deux essais et intervient
                      régulièrement au travers de chroniques
                      écrites ou d’émissions télévisées.
                    </p>
                    <strong>Suivez-moi : </strong>
                    <ul
                      className="header-social-network d-inline-block list-inline color-white mb-20"
                    >
                      <li className="list-inline-item">
                        <a
                          className="fb"
                          href="#"
                          target="_blank"
                          title="Facebook"
                        ><i
                          className="elegant-icon social_facebook"
                        ></i
                          ></a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          className="tw"
                          href="#"
                          target="_blank"
                          title="Tweet now"
                        ><i
                          className="elegant-icon social_twitter"
                        ></i
                          ></a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          className="pt"
                          href="#"
                          target="_blank"
                          title="Pin it"
                        ><i
                          className="elegant-icon social_pinterest"
                        ></i
                          ></a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated"
                  >
                    <div
                      className="widget-header-1 position-relative mb-30"
                    >
                      <h5 className="mt-5 mb-30">Les plus populaires</h5>
                    </div>
                    <div className="post-block-list post-module-1">
                      <ul className="list-post">
                        <li
                          className="mb-30 wow fadeInUp animated"
                        >
                          <div
                            className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5"
                          >
                            <div
                              className="post-content media-body"
                            >
                              <h6
                                className="post-title mb-15 text-limit-2-row font-medium"
                              >
                                <a
                                  href="/details"
                                >Liberté, Beauté, Prospérité</a
                                >
                              </h6>
                              <div
                                className="entry-meta meta-1 float-left font-x-small text-uppercase"
                              >
                                <span
                                  className="post-on"
                                >25 octobre 2024</span
                                >
                                <span
                                  className="post-by has-dot"
                                >150 vues</span
                                >
                              </div>
                            </div>
                            <div
                              className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden"
                            >
                              <a
                                className="color-white"
                                href="/details"
                              >
                                <Image src={Liberte} alt="" />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li
                          className="mb-30 wow fadeInUp animated"
                        >
                          <div
                            className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5"
                          >
                            <div
                              className="post-content media-body"
                            >
                              <h6
                                className="post-title mb-15 text-limit-2-row font-medium"
                              >
                                <a
                                  href="/details"
                                >Le mythe du multiplicateur keynésien au Bénin</a
                                >
                              </h6>
                              <div
                                className="entry-meta meta-1 float-left font-x-small text-uppercase"
                              >
                                <span
                                  className="post-on"
                                >11 octobre 2024</span
                                >
                                <span
                                  className="post-by has-dot"
                                >6k vues</span
                                >
                              </div>
                            </div>
                            <div
                              className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden"
                            >
                              <a
                                className="color-white"
                                href="/details"
                              >
                                <Image src={Multiplicateur} alt="" />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li
                          className="mb-30 wow fadeInUp animated"
                        >
                          <div
                            className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5"
                          >
                            <div
                              className="post-content media-body"
                            >
                              <h6
                                className="post-title mb-15 text-limit-2-row font-medium"
                              >
                                <a
                                  href="/details"
                                >Sur le déséquilibre extérieur de l’économie béninoise</a
                                >
                              </h6>
                              <div
                                className="entry-meta meta-1 float-left font-x-small text-uppercase"
                              >
                                <span
                                  className="post-on"
                                > 20 septembre 2024</span
                                >
                                <span
                                  className="post-by has-dot"
                                >16k vues</span
                                >
                              </div>
                            </div>
                            <div
                              className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden"
                            >
                              <a
                                className="color-white"
                                href="/details"
                              >
                                <Image src={Desequilibre} alt="" />
                              </a>
                            </div>
                          </div>
                        </li>
                        <li
                          className="mb-30 wow fadeInUp animated"
                        >
                          <div
                            className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5"
                          >
                            <div
                              className="post-content media-body"
                            >
                              <h6
                                className="post-title mb-15 text-limit-2-row font-medium"
                              >
                                <a
                                  href="/details"
                                >Le mythe du multiplicateur keynésien au Bénin</a
                                >
                              </h6>
                              <div
                                className="entry-meta meta-1 float-left font-x-small text-uppercase"
                              >
                                <span
                                  className="post-on"
                                >11 octobre 2024</span
                                >
                                <span
                                  className="post-by has-dot"
                                >6k vues</span
                                >
                              </div>
                            </div>
                            <div
                              className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden"
                            >
                              <a
                                className="color-white"
                                href="/details"
                              >
                                <Image src={Multiplicateur} alt="" />
                              </a>
                            </div>
                          </div>
                        </li>

                        <li className="wow fadeInUp animated">
                          <div
                            className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5"
                          >
                            <div
                              className="post-content media-body"
                            >
                              <h6
                                className="post-title mb-15 text-limit-2-row font-medium"
                              >
                                <a
                                  href="/details"
                                >L'économie béninoise récompense-t-elle davantage le rentier que l'entrepreneur ?</a
                                >
                              </h6>
                              <div
                                className="entry-meta meta-1 float-left font-x-small text-uppercase"
                              >
                                <span
                                  className="post-on"
                                >13 septembre 2024</span
                                >
                                <span
                                  className="post-by has-dot"
                                >3k vues</span
                                >
                              </div>
                            </div>
                            <div
                              className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden"
                            >
                              <a
                                className="color-white"
                                href="/details"
                              >
                                <Image src={Entrepreneur} alt="" />
                              </a>
                            </div>
                          </div>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  <!--archive header--> */}
        <div className="archive-header pt-50 text-center">
          <div className="container">
            <h2 className="font-weight-900">Soutenir des causes</h2>
            <div className="breadcrumb">
              <p>qui me tiennent à coeur</p>
            </div>
            <div className="bt-1 border-color-1 mt-30 mb-50"></div>
          </div>
        </div>
        <div className="container">
          <div className="loop-list loop-list-style-1">
            <div className="row">
              <article className="col-md-6 mb-40 wow fadeInUp animated">
                <div className="post-card-1 border-radius-10 hover-up">
                  <div
                    className="post-thumb thumb-overlay img-hover-slide position-relative"
                    style={{ backgroundImage: `url(${Generosite.src}` }}
                  >
                    <a className="img-link" href="single.html"></a>
                    <ul className="social-share">
                      <li>
                        <a href="#"
                        ><i
                          className="elegant-icon social_share"
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
                          className="elegant-icon social_facebook"
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
                          className="elegant-icon social_twitter"
                        ></i
                          ></a>
                      </li>
                      <li>
                        <a
                          className="pt"
                          href="#"
                          target="_blank"
                          title="Pin it"
                        ><i
                          className="elegant-icon social_pinterest"
                        ></i
                          ></a>
                      </li>
                    </ul>
                  </div>
                  <div className="post-content p-30">
                    <div className="d-flex post-card-content">
                      <h5
                        className="post-title mb-20 font-weight-900"
                      >
                        <a href="single.html"
                        >"La générosité est la meilleure
                          chose qui existe, car elle est
                          l'origine de toutes les autres
                          vertus."</a
                        >
                      </h5>
                      <div
                        className="post-excerpt mb-25 font-small text-muted"
                      >
                        <p>
                          Je souhaite mettre en avant
                          l'importance de la générosité et
                          du don envers les autres,
                          soulignant que donner peut non
                          seulement aider les autres, mais
                          peut aussi contribuer à son
                          propre développement personnel,
                          dans une dynamique harmonieuse
                          et pour le bien commun.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="col-md-6 mb-40 wow fadeInUp animated">
                <div className="post-card-1 border-radius-10 hover-up">
                  <div
                    className="post-thumb thumb-overlay img-hover-slide position-relative"
                    style={{ backgroundImage: `url(${EdenOng.src})` }}
                  >
                    <a className="img-link" href="single.html"></a>
                    <ul className="social-share">
                      <li>
                        <a href="#"
                        ><i
                          className="elegant-icon social_share"
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
                          className="elegant-icon social_facebook"
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
                          className="elegant-icon social_twitter"
                        ></i
                          ></a>
                      </li>
                      <li>
                        <a
                          className="pt"
                          href="#"
                          target="_blank"
                          title="Pin it"
                        ><i
                          className="elegant-icon social_pinterest"
                        ></i
                          ></a>
                      </li>
                    </ul>
                  </div>
                  <div className="post-content p-30">
                    <div className="d-flex post-card-content">
                      <h5
                        className="post-title mb-20 font-weight-900"
                      >
                        <a href="single.html"
                        >Eden ONG Orphelinat /
                          Association</a
                        >
                      </h5>
                      <div
                        className="post-excerpt mb-25 font-small text-muted"
                      >
                        <p>
                          L’association Eden soutient
                          l’orphelinat «la Bergerie» pour:
                          sa vocation humanitaire au
                          service d'enfants orphelins ; on
                          autonomie de fonctionnement ; la
                          stabilité politique de la
                          République du Bénin. Après
                          quelques années d'existence,
                          elle a élargit ses activités en
                          intégrant une école et un centre
                          de santé à l'orphelinat pour
                          contribuer au bien-être des
                          orphelins.L’association Eden
                          soutient l’orphelinat «la
                          Bergerie» pour: sa vocation
                          humanitaire au service d'enfants
                          orphelins ; on autonomie de
                          fonctionnement ; la stabilité
                          politique de la République du
                          Bénin. Après quelques années
                          d'existence, elle a élargit ses
                          activités en intégrant une école
                          et un centre de santé à
                          l'orphelinat pour contribuer au
                          bien-être des orphelins.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="col-md-6 mb-40 wow fadeInUp animated">
                <div className="post-card-1 border-radius-10 hover-up">
                  <div
                    className="post-thumb thumb-overlay img-hover-slide position-relative"
                    style={{ backgroundImage: `url(${Ecole229.src})` }}
                  >
                    <a className="img-link" href="single.html"></a>
                    <span className="top-right-icon bg-secondary"
                    ><i
                      className="elegant-icon icon_heart_alt"
                    ></i
                      ></span>
                    <ul className="social-share">
                      <li>
                        <a href="#"
                        ><i
                          className="elegant-icon social_share"
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
                          className="elegant-icon social_facebook"
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
                          className="elegant-icon social_twitter"
                        ></i
                          ></a>
                      </li>
                      <li>
                        <a
                          className="pt"
                          href="#"
                          target="_blank"
                          title="Pin it"
                        ><i
                          className="elegant-icon social_pinterest"
                        ></i
                          ></a>
                      </li>
                    </ul>
                  </div>
                  <div className="post-content p-30">
                    <div className="d-flex post-card-content">
                      <h5
                        className="post-title mb-20 font-weight-900"
                      >
                        <a href="single.html"
                        >Ecole 229 Enseignement /
                          Formation</a
                        >
                      </h5>
                      <div
                        className="post-excerpt mb-25 font-small text-muted"
                      >
                        <p>
                          L'école 229 a pour mission de
                          faire du numérique un levier
                          d’inclusion capable de révéler
                          des talents et d’assurer
                          l'autonomie des apprenants à
                          travers leur insertion
                          professionnelle. Elle oeuvre
                          pour le développement de
                          l'écosystème numérique en
                          Afrique pour favoriser
                          l'inclusivité et l'accès à
                          l'emploi.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div id="don" className="row">
            <div className="col-12">
              {/* <!--author box--> */}
              <div
                className="author-bio mb-50 bg-grey p-30 border-radius-10"
              >
                <div  
                  className="d-flex justify-content-between align-items-center"
                >
                  <h3 className="font-weight-900">
                    <span className="vcard author"
                    ><span className="fn"
                    ><a
                      href="author.html"
                      title="Posts by Steven"
                      rel="author"
                    >Je fais un don</a
                        ></span
                      ></span
                    >
                  </h3>
                  <div className="form-group ml-120">
                    <button
                      type="submit"
                      className="button button-contactForm"
                    >
                      <a className="text-white" href="index.html"
                      >Je soutiens l'école 229</a
                      >
                    </button>
                    <button
                      type="submit"
                      className="button button-contactForm"
                    >
                      <a className="text-white" href="index.html"
                      >Je soutiens Eden ONG</a
                      >
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/*   <!-- End Main content --> */}
      {/* <!--site-bottom--> */}
      <div id="contact" className="container single-content">
        <div className="entry-wraper mt-50">
          <h1 className="mt-30">Créer des opportunités</h1>
          <p>
            Discussions, échanges, besoin d'accompagnement ou
            d'intervenant, chaque message trouvera écho !
          </p>
          <hr className="wp-block-separator is-style-wide" />
          <form
            className="form-contact comment_form"
            action="#"
            id="commentForm"
          >
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Prénom-Nom"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="E-mail"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="website"
                    id="website"
                    type="text"
                    placeholder="Tél."
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <textarea
                    className="form-control w-100"
                    name="comment"
                    id="comment"
             /*        cols="30"
                    rows="9" */
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="button button-contactForm">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
      {/*  <!--end site-bottom--> */}

    </>
  );
};

export default page;