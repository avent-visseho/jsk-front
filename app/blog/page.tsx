import React from "react";
import Image from "next/image";
import Blog1 from "@/assets/imgs/jed/blogs/blog-1.jpg";
import Blog2 from "@/assets/imgs/jed/blogs/blog-2.jpg";
import Blog3 from "@/assets/imgs/jed/blogs/blog-3.jpg";
import Blog4 from "@/assets/imgs/jed/blogs/blog-4.jpg";
import Blog5 from "@/assets/imgs/jed/blogs/blog-5.jpg";
import Blog6 from "@/assets/imgs/jed/blogs/blog-6.jpg";
import Ecole229 from "@/assets/imgs/jed/blogs/ecole229.png";
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

import Trump from "@/assets/imgs/jed/blogs/trump.jpg"

const page = () => {
  return (
    <>
      {/* <!-- Start Main content --> */}
      <main>

      <div className="archive-header pt-50">
        <div className="container">
          <h2 className="font-weight-900">JSK Opinions</h2>
          <p className="mt-20">
            Je souhaite apporter un éclairage nouveau sur des questions
            complexes liées, entre autres, au continent africain. Je parlerai
            notamment des impacts des nouvelles technologies de l'information
            sur l'économie et la société, des enjeux économiques de l'Afrique,
            de la transition énergétique, et des politiques publiques à mettre
            en œuvre pour un développement durable. Chaque week-end, je vous
            adresserai une livraison.
          </p>
          <div className="bt-1 border-color-1 mt-30 mb-50"></div>
        </div>
      </div>
      <div className="pb-50">
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
                    style={{ backgroundImage: `url(${Trump.src})` }}
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
                          ><i class="fa-brands fa-linkedin-in"></i></a>
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
                      <h6 className="post-title mb-20 font-weight-900">
                        <a href="details"
                          >Déficits jumeaux : Faute de vendre suffisamment, le
                          Bénin se vend pour soutenir sa consommation</a
                        >
                      </h6>
                      <div>
                        <p className="font-medium text-muted">
                          Donald Trump a remporté les élections et sera le 47ème
                          président des États-Unis. Cette victoire a été
                          confirmée après qu&rsquo... Lire la suite
                        </p>
                      </div>
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
              <article
                className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
                data-wow-delay="0.2s"
              >
                <div className="post-card-1 border-radius-10 hover-up h-100">
                  <div
                    className="post-thumb thumb-overlay img-hover-slide position-relative"
                    style={{ backgroundImage: `url(${Blog1.src})` }}
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
                      <h6 className="post-title mb-20 font-weight-900">
                        <a href="details"
                          >Sortir de l’illusion de la prospérité assurée par
                          l'État</a
                        >
                      </h6>
                      <div>
                        <p className="font-medium text-muted">
                          Dans un pays, l'amélioration du niveau de vie de sa
                          population est intrinsèquement liée à l'augmentation
                          de la quantité et de la qualité des biens ... Lire la
                          suite
                        </p>
                      </div>
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
              <article
                className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
                data-wow-delay="0.2s"
              >
                <div className="post-card-1 border-radius-10 hover-up h-100">
                  <div
                    className="post-thumb thumb-overlay img-hover-slide position-relative"
                    style={{ backgroundImage: `url(${Blog2.src})` }}
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
                      <h6 className="post-title mb-20 font-weight-900">
                        <a href="details"
                          >Sortir de l’illusion de la prospérité assurée par
                          l'État</a
                        >
                      </h6>
                      <div>
                        <p className="font-medium text-muted">
                          Dans mes écrits, j'ai souvent mis en lumière le lien
                          intrinsèque entre la liberté économique et le
                          développement des nations. Cette liberté,... Lire la
                          suite
                        </p>
                      </div>
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
              <article
                className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
                data-wow-delay="0.2s"
              >
                <div className="post-card-1 border-radius-10 hover-up h-100">
                  <div
                    className="post-thumb thumb-overlay img-hover-slide position-relative"
                    style={{ backgroundImage: `url(${Blog2.src})` }}
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
                      <h6 className="post-title mb-20 font-weight-900">
                        <a href="details"
                          >Déficits jumeaux : Faute de vendre suffisamment, le
                          Bénin se vend pour soutenir sa consommation</a
                        >
                      </h6>
                      <div>
                        <p className="font-medium text-muted">
                          La semaine dernière, j'ai eu l'honneur d'être invité
                          par un groupe de réflexion parisien pour partager ma
                          vision de l'économie béninoise. Lors de la... Lire la
                          suite
                        </p>
                      </div>
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
              <article
                className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
                data-wow-delay="0.2s"
              >
                <div className="post-card-1 border-radius-10 hover-up h-100">
                  <div
                    className="post-thumb thumb-overlay img-hover-slide position-relative"
                    style={{ backgroundImage: `url(${Blog4.src})` }}
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
                      <h6 className="post-title mb-20 font-weight-900">
                        <a href="details"
                          >Le mythe du multiplicateur keynésien au Bénin</a
                        >
                      </h6>
                      <div>
                        <p className="font-medium text-muted">
                          Dans le paysage économique du Bénin, comme dans de
                          nombreux pays en développement, une croyance persiste
                          avec une ténacité remarquable : celle du multipli...
                          Lire la suite
                        </p>
                      </div>
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
                          <a className="color-white" href="details">
                            <Image src={FocCharure} alt="" />
                            {/* <img
                            src="assets/imgs/jed/blogs/focCharure.jpg"
                            alt=""
                          /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="details">
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
                          <a className="color-white" href="details">
                            <Image src={AccelererDigit} alt="" />
                            {/* <img
                            src="assets/imgs/jed/blogs/accerlererDigit.jpg"
                            alt=""
                          /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="details">
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
                          <a className="color-white" href="details">
                            <Image src={Talonomics} alt="" />
                            {/* <img
                            src="assets/imgs/jed/blogs/talonomics.jpg"
                            alt=""
                          /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="details">
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
                          <a className="color-white" href="details">
                            <Image src={ComePremierFacteur} alt="" />
                            {/*  <img
                            src="assets/imgs/jed/blogs/comePremierFacteur.jpg"
                            alt=""
                          /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="details">Les Insights de l'éco</a>
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
                          <a className="color-white" href="details">
                            <Image src={Entrepreunariat} alt="" />
                            {/* <img
                            src="assets/imgs/jed/blogs/entrepreunariat.jpg"
                            alt=""
                          /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="details">
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
                          <a className="color-white" href="details">
                            <Image src={IndustriBenin} alt="" />
                            {/* <img
                            src="assets/imgs/jed/blogs/industriBenin.jpg"
                            alt=""
                          /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="details">
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
                          <a className="color-white" href="details">
                            <Image src={Mara} alt="" />
                            {/*  <img src="assets/imgs/jed/blogs/mara.jpg" alt="" /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="details">En terrasse avec Mara</a>
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
                          <a className="color-white" href="details">
                            <Image src={DigitalSecourAfrique} alt="" />
                            {/* <img
                            src="assets/imgs/jed/blogs/digitalSecourAfrique.png"
                            alt=""
                          /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="details">
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
                          <a className="color-white" href="details">
                            <Image src={CoupEtatAfrique} alt="" />
                            {/*  <img
                            src="assets/imgs/jed/blogs/coupEtatAfrique.png"
                            alt=""
                          /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="details">
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
                  <a className="color-white" href="details">
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
