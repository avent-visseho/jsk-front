import React from "react";
import Image from "next/image";

import Blog1 from "@/assets/imgs/jed/blogs/blog-1.jpg";
import Blog2 from "@/assets/imgs/jed/blogs/blog-2.jpg";
import Blog3 from "@/assets/imgs/jed/blogs/blog-3.jpg";
import Blog4 from "@/assets/imgs/jed/blogs/blog-4.jpg";
import Blog5 from "@/assets/imgs/jed/blogs/blog-5.jpg";
import Blog6 from "@/assets/imgs/jed/blogs/blog-6.jpg";
import Ecole229 from "@/assets/imgs/jed/blogs/ecole229.png";
import Logo from "@/assets/imgs/jed/blogs/logo.png";
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
import Talonomics from "@/assets/imgs/jed/blogs/talonomics.jpg";
import Mara from "@/assets/imgs/jed/blogs/mara.jpg";
import ComePremierFacteur from "@/assets/imgs/jed/blogs/comePremierFacteur.jpg";
import Entrepreunariat from "@/assets/imgs/jed/blogs/entrepreunariat.jpg";
import IndustriBenin from "@/assets/imgs/jed/blogs/industriBenin.jpg";
import DigitalSecourAfrique from "@/assets/imgs/jed/blogs/digitalSecourAfrique.png";
import CoupEtatAfrique from "@/assets/imgs/jed/blogs/coupEtatAfrique.png";
import Signature from "@/assets/imgs/jed/blogs/signature.png";

const details = () => {
  return (
    <div>
      <main className="bg-grey pt-50 pb-50">
        <div className="pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="single-content2">
                  <div className="entry-header entry-header-style-1 mb-50">
                    <h1 className="entry-title mb-30 font-weight-900">
                      Tribune Afrique des idées 
                    </h1>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="entry-meta align-items-center meta-2 font-small color-muted">
                          <p className="mb-5">
                            <a className="author-avatar" href="#">
                              <Image className="img-circle" src={Jed} alt="" />
                            </a>
                            Par 
                            <a href="author.html">
                              <span className="author-name font-weight-bold">
                               Sophonie Jed Koboude
                              </span>
                            </a>
                          </p>
                          <span className="mr-10"> 15 Novembre 2024</span>
                          <span className="has-dot"> 8 minutes de lecture</span>
                        </div>
                      </div>
                      <div className="col-md-6 text-right d-none d-md-inline">
                        <ul className="header-social-network d-inline-block list-inline mr-15">
                          <li className="list-inline-item text-muted">
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon fb text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i
                                className="fa-solid fa-facebook-f"
                                style={{ color: "#fff" }}
                              ></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon tw text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i
                                className="fa-brands fa-twitter"
                                style={{ color: "#fff" }}
                              ></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon pt text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!--end single header--> */}
                  <figure className="image mb-30 m-auto text-center border-radius-10">
                    <Image
                      className="border-radius-10"
                      src={CoupEtatAfrique}
                      alt=""
                    />
                  </figure>
                  {/*  <!--figure--> */}
                  <article className="entry-wraper mb-50">
                    <div className="excerpt mb-30">
                      <p>
                        Gosh jaguar ostrich quail one excited dear hello and
                        bound and the and bland moral misheard roadrunner
                        flapped lynx far that and jeepers giggled far and far
                        bald that roadrunner python inside held shrewdly the
                        manatee.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id vero possimus quo ipsa porro natus dignissimos
                        provident exercitationem facere odit est sint illo,
                        cupiditate, recusandae quibusdam tempora veniam ab quae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id vero possimus quo ipsa porro natus dignissimos
                        provident exercitationem facere odit est sint illo,
                        cupiditate, recusandae quibusdam tempora veniam ab quae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id vero possimus quo ipsa porro natus dignissimos
                        provident exercitationem facere odit est sint illo,
                        cupiditate, recusandae quibusdam tempora veniam ab quae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id vero possimus quo ipsa porro natus dignissimos
                        provident exercitationem facere odit est sint illo,
                        cupiditate, recusandae quibusdam tempora veniam ab quae.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-lg-4" id="author">
                <div className="widget-area">
                  <div className="sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 bg-white border-radius-5 has-border wow fadeInUp animated">
                    <Image
                      src={Jed}
                      className="about-author-img mb-25"
                      alt=""
                    />
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
                      l'économie, l'énergie, l’Histoire et, surtout, l'Afrique,
                      et animé par la joie de transmettre, je suis auteur de
                      deux essais et intervient régulièrement au travers de
                      chroniques écrites ou d’émissions télévisées.
                    </p>
                    <strong>Suivez-moi : </strong>
                    <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                      <li className="list-inline-item">
                        <a
                          className="fb"
                          href="#"
                          target="_blank"
                          title="Facebook"
                        >
                          <i
                            className="fa-solid fa-facebook-f"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
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
                      <li className="list-inline-item">
                        <a
                          className="pt"
                          href="#"
                          target="_blank"
                          title="Pin it"
                        >
                          <i
                            className="fa-brands fa-pinterest-p"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                    <div className="widget-header-1 position-relative mb-30">
                      <h5 className="mt-5 mb-30">Les plus populaires</h5>
                    </div>
                    <div className="post-block-list post-module-1">
                      <ul className="list-post">
                        <li className="mb-30 wow fadeInUp animated">
                          <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                            <div className="post-content media-body">
                              <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                <a href="details">
                                  Spending Some Quality Time with Kids? It’s
                                  Possible
                                </a>
                              </h6>
                              <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                <span className="post-on">05 August</span>
                                <span className="post-by has-dot">
                                  150 views
                                </span>
                              </div>
                            </div>
                            <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                              <a className="color-white" href="details">
                                <Image src={Thumb6} alt="" />
                                {/* <img src="assets/imgs/news/thumb-6.jpg" alt="" /> */}
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="mb-30 wow fadeInUp animated">
                          <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                            <div className="post-content media-body">
                              <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                <a href="details">
                                  Relationship Podcasts are Having “That” Talk
                                </a>
                              </h6>
                              <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                <span className="post-on">12 August</span>
                                <span className="post-by has-dot">
                                  6k views
                                </span>
                              </div>
                            </div>
                            <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                              <a className="color-white" href="details">
                                <Image src={Blog1} alt="" />
                                {/* <img src="assets/imgs/news/thumb-7.jpg" alt="" /> */}
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="mb-30 wow fadeInUp animated">
                          <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                            <div className="post-content media-body">
                              <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                <a href="details">
                                  Here’s How to Get the Best Sleep at Night
                                </a>
                              </h6>
                              <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                <span className="post-on">15 August</span>
                                <span className="post-by has-dot">
                                  16k views
                                </span>
                              </div>
                            </div>
                            <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                              <a className="color-white" href="details">
                                <Image src={Thumb3} alt="" />
                                {/*  <img src="assets/imgs/news/thumb-2.jpg" alt="" /> */}
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="wow fadeInUp animated">
                          <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                            <div className="post-content media-body">
                              <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                <a href="details">
                                  America’s Governors Get Tested for a Virus
                                  That Is Testing Them
                                </a>
                              </h6>
                              <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                <span className="post-on">12 August</span>
                                <span className="post-by has-dot">
                                  3k views
                                </span>
                              </div>
                            </div>
                            <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default details;
