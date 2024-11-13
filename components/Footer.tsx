import React from "react";
import Image from "next/image";

import Signature from "@/assets/imgs/jed/blogs/signature.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="pt-50 pb-20 bg-grey">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="sidebar-widget wow fadeInUp animated mb-30">
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">À PROPOS DE MOI</h5>
                </div>
                <div className="textwidget">
                  <p>
                    Je suis actuellement Directeur Général du think thank
                    L'Afrique des idées. Je suis ingénieur diplômé de l'école
                    CentraleSupélec à Paris et économiste diplômé du
                    Conservatoire National des Arts et Métiers de Paris.
                  </p>
                  <p>
                    <Image className="signature" src={Signature} alt="" />
                    {/* <img
                    src="/assets/imgs/jed/blogs/signature.png"
                    className="signature"
                    alt=""
                  /> */}
                  </p>
                  <p>
                    <strong className="color-black">Suivez-moi</strong>
                    <br />
                  </p>
                  <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                    <li className="list-inline-item">
                      <a
                        className="fb"
                        href="#"
                        target="_blank"
                        title="Facebook"
                      >
                        <i
                          className="fa-brands fa-facebook-f"
                          style={{ color: "#f7f7f8" }}
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
                      <a className="pt" href="#" target="_blank" title="Pin it">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div
                className="sidebar-widget widget_categories wow fadeInUp animated mb-30"
                data-wow-delay="0.1s"
              >
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">LIEN RAPIDE</h5>
                </div>
                <ul className="font-small">
                  <li className="cat-item cat-item-2">
                  <Link href="/#author">À propos</Link>
                  </li>
                  <li className="cat-item cat-item-4">
                  <Link href="publications">Publications</Link>
                  </li>
                  <li className="cat-item cat-item-5">
                  <Link href="interventions">Interventions</Link>
                  </li>
                  <li className="cat-item cat-item-6">
                  <Link href="blog">Blog</Link>
                  </li>
                 {/*  <li className="cat-item cat-item-7">
                  <Link href="">Contact</Link>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="sidebar-widget widget_tagcloud wow fadeInUp animated mb-30"
                data-wow-delay="0.2s"
              >
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Mots clés</h5>
                </div>
                <div className="tagcloud mt-50">
                  <a className="tag-cloud-link" href="category.html">
                    Tribune
                  </a>
                  <a className="tag-cloud-link" href="category.html">
                    Livre
                  </a>
                  <a className="tag-cloud-link" href="category.html">
                    Article
                  </a>
                  <a className="tag-cloud-link" href="category.html">
                    Podcast
                  </a>
                  <a className="tag-cloud-link" href="category.html">
                    Modération
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="sidebar-widget widget_newsletter wow fadeInUp animated mb-30"
                data-wow-delay="0.3s"
              >
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Newsletter</h5>
                </div>
                <div className="newsletter">
                  <p className="font-medium">
                    Abonnez-vous à notre lettre d'information et recevez nos
                    dernières mises à jour directement dans votre boîte de
                    réception.
                  </p>
                  <form className="input-group form-subcriber mt-30 d-flex">
                    <input
                      type="email"
                      className="form-control bg-white font-small"
                      placeholder="Enter your email"
                    />
                    <button className="btn bg-primary text-white" type="submit">
                      S'abonner
                    </button>
                    <label className="mt-20">
                      <input
                        className="mr-5"
                        name="name"
                        type="checkbox"
                        value="1"
                      />
                      J'accepte les
                      <a href="#" target="_blank">
                        termes &amp; conditions
                      </a>
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copy-right pt-30 mt-20 wow fadeInUp animated">
            <p className="float-md-left font-small text-muted">
              © 2023 Sophonie Jed Koboude
            </p>
            <p className="float-md-right font-small text-muted">
              par
              <a href="" target="_blank">
                Jsk-opinions
              </a>{" "}
              | Tous droits réservés
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
