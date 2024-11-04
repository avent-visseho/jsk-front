import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div>
            {/*   <!-- Footer Start--> */}
            <footer className="pt-50 pb-20 bg-grey">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-6">
                            <div
                                className="sidebar-widget widget_categories wow fadeInUp animated mb-30"
                                data-wow-delay="0.1s"
                            >
                                <div className="widget-header-2 position-relative mb-30">
                                    <h5 className="mt-5 mb-30">LIEN RAPIDE</h5>
                                </div>
                                <ul className="font-small">
                                    <li className="cat-item cat-item-2"><Link href="/#about">À propos</Link></li>
                                    <li className="cat-item cat-item-2"><Link href="/publications">Publications</Link></li>
                                    <li className="cat-item cat-item-2"><Link href="/interventions">Interventions</Link></li>
                                    <li className="cat-item cat-item-2"><Link href="/#don">Faire un don</Link></li>
                                    <li className="cat-item cat-item-2"><Link href="/#contact">Contact</Link></li>
                                    <li className="cat-item cat-item-2"><Link href="/blog">Blog</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="sidebar-widget widget_tagcloud wow fadeInUp animated mb-30"
                                data-wow-delay="0.2s"
                            >
                                <div className="widget-header-2 position-relative mb-30">
                                    <h5 className="mt-5 mb-30">Catégories</h5>
                                </div>
                                <div className="tagcloud mt-50">
                                    <Link className="tag-cloud-link" href="">Livres</Link>
                                    <Link className="tag-cloud-link" href="">Tribunes</Link>
                                    <Link className="tag-cloud-link" href="">Podcast </Link>
                                    <Link className="tag-cloud-link" href="">Emission </Link>
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
                                        Abonnez-vous à notre lettre d'information et recevez nos dernières mises à jour directement dans votre boîte de réception.
                                    </p>
                                    <form className="input-group form-subcriber mt-30 d-flex">
                                        <input
                                            type="email"
                                            className="form-control bg-white font-small"
                                            placeholder="Saisissez votre e-mail"
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
                                            <a href="#" target="_blank"> terms & conditions</a>
                                        </label>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copy-right pt-30 mt-20 wow fadeInUp animated">
                        <p className="float-md-left font-small text-muted">
                            © 2024, jsk-opinions
                        </p>
                        <p className="float-md-right font-small text-muted"> | Tous
                            droits réservés
                        </p>
                    </div>
                </div>
            </footer>
            {/* <!-- End Footer --> */}
            <div className="dark-mark"></div>
        </div>
    );
};

export default Footer;