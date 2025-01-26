"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Signature from "@/assets/imgs/jed/blogs/signature.png";
import Link from "next/link";
import { getSource, subscribeEmail } from "@/services/DataService";
import SocialLinks from "./SocialLinks";
import Loader from "./Loader";

const Footer = () => {
  const [sources, setSources] = useState([]);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
                  <div>
                    <strong className="color-black">Suivez-moi</strong>
                    <br />
                    <SocialLinks />
                  </div>
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
                  {sources?.slice(0, 5)?.map((source: any, index: number) => (
                    <span key={index} className="tag-cloud-link">
                      {source?.name}
                    </span>
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
                  {isSubmitting ? (
                    <Loader />
                  ) : (
                    <form
                      className="input-group form-subcriber mt-30 d-flex"
                      onSubmit={(e) => {
                        e.preventDefault();
                        setIsSubmitting(true);
                        subscribeEmail({ email: email })
                          .then(() => {
                            alert("Merci de votre abonnement!");
                            setEmail("");
                            setIsSubmitting(false);
                          })
                          .catch(() => {
                            alert("Vous êtes déjà abonné(e)!");
                            setEmail("");
                            setIsSubmitting(false);
                          });
                      }}
                    >
                      <input
                        type="email"
                        className="form-control bg-white font-small"
                        placeholder="Saisissez votre e-mail"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {
                        <button
                          className="btn bg-primary text-white"
                          type="submit"
                        >
                          S'abonner
                        </button>
                      }
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copy-right pt-30 mt-20 wow fadeInUp animated">
            <p className="float-md-left font-small text-muted">
              © 2023 Sophonie Jed Koboude
            </p>
            <p className="float-md-right font-small text-muted">
              Par
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
