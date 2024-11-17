"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Signature from "@/assets/imgs/jed/blogs/signature.png";
import Link from "next/link";
import { getSource, subscribeEmail } from "@/services/DataService";

const Footer = () => {
  const [sources, setSources] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    getSource().then((res) => setSources(res.data.data));
  }, []);
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
                  <li className="cat-item cat-item-2">
                    <Link href="/#contact">Contact</Link>
                  </li>
                  <li className="cat-item cat-item-4">
                    <Link href="/publications">Publications</Link>
                  </li>
                  <li className="cat-item cat-item-5">
                    <Link href="/interventions">Interventions</Link>
                  </li>
                  <li className="cat-item cat-item-6">
                    <Link href="/blog">Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="sidebar-widget widget_tagcloud wow fadeInUp animated mb-30"
                data-wow-delay="0.2s"
              >
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Sources</h5>
                </div>
                <div className="tagcloud mt-50">
                  {sources?.slice(0, 10)?.map((source: any, index: number) => (
                    <a className="tag-cloud-link" href="category.html">
                      {source?.name}
                    </a>
                  ))}
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
                      placeholder="Saisissez votre e-mail"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      className="btn bg-primary text-white"
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        subscribeEmail({ email: email })
                          .then(() => {
                            alert("Merci de votre abonnement!");
                          })
                          .catch(() => {
                            alert("Email invalide ou déjà abonné");
                          });
                      }}
                    >
                      S'abonner
                    </button>
                    <label className="mt-20">
                      <input
                        className="mr-5"
                        name="name"
                        type="checkbox"
                        value="1"
                      />
                      J'accepte les &nbsp;
                      <a href="#" target="_blank">
                        termes &nbsp;
                      </a>
                      et
                      <a href="#" target="_blank">
                        &nbsp; conditions
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
