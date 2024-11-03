import React from 'react';


import Illusion from "@/assets/imgs/jed/illusion.jpg";
import Liberte from "@/assets/imgs/jed/liberte.jpg";
import Deficit from "@/assets/imgs/jed/deficit.jpg";
import Transition from "@/assets/imgs/jed/transition.jpg"
import Richess from "@/assets/imgs/jed/richesse.jpg";
import Multiplicateur from "@/assets/imgs/jed/multiplicateur.jpg";


const blogs = () => {
    return (
        <div>
            <main>
               {/*  <!--archive header--> */}
                <div className="archive-header pt-50 text-center">
                    <div className="container">
                        <h2 className="font-weight-900">JSK Opinions</h2>
                        <div className="breadcrumb">
                            <a href="index.html" rel="nofollow">Home</a>
                            <span></span> Hotels Review
                        </div>
                        <div className="mt-30">
                            <p>
                                Je souhaite apporter un éclairage nouveau sur des
                                questions complexes liées, entre autres, au
                                continent africain. Je parlerai notamment des
                                impacts des nouvelles technologies de l'information
                                sur l'économie et la société, des enjeux économiques
                                de l'Afrique, de la transition énergétique, et des
                                politiques publiques à mettre en œuvre pour un
                                développement durable. Chaque week-end, je vous
                                adresserai une livraison.
                            </p>
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
                                        style={{ backgroundImage: `url(${Illusion.src})` }}
                                    >
                                        <a className="img-link" href="/details"></a>
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
                                            <a href="category.html"
                                            ><span className="post-cat text-info"
                                            >Artists</span
                                                ></a
                                            >
                                            <a href="category.html"
                                            ><span className="post-cat text-success"
                                            >Film</span
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
                                                className="post-excerpt mb-25 font-small text-muted"
                                            >
                                                <p>
                                                    Dans un pays, l'amélioration du
                                                    niveau de vie de sa population
                                                    est intrinsèquement liée à
                                                    l'augmentation de la quantité et
                                                    de la qualité des biens ...
                                                </p>
                                            </div>
                                            <div
                                                className="entry-meta meta-1 float-left font-x-small text-uppercase"
                                            >
                                                <span className="post-on"
                                                >November 01, 2024</span
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
                            <article className="col-md-6 mb-40 wow fadeInUp animated">
                                <div className="post-card-1 border-radius-10 hover-up">
                                    <div
                                        className="post-thumb thumb-overlay img-hover-slide position-relative"
                                        style={{ backgroundImage: `url(${Liberte.src})` }}
                                    >
                                        <a className="img-link" href="/details"></a>
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
                                            <a href="category.html"
                                            ><span className="post-cat"
                                            >Fashion</span
                                                ></a
                                            >
                                        </div>
                                        <div className="d-flex post-card-content">
                                            <h5
                                                className="post-title mb-20 font-weight-900"
                                            >
                                                <a href="/details"
                                                >Liberté, Beauté, Prospérité</a
                                                >
                                            </h5>
                                            <div
                                                className="post-excerpt mb-25 font-small text-muted"
                                            >
                                                <p>
                                                    Dans mes écrits, j'ai souvent
                                                    mis en lumière le lien
                                                    intrinsèque entre la liberté
                                                    économique et le développement
                                                    des nations. Cette liberté,...
                                                    Lire la suite
                                                </p>
                                            </div>
                                            <div
                                                className="entry-meta meta-1 float-left font-x-small text-uppercase"
                                            >
                                                <span className="post-on"
                                                >NOVEMBRE 01 24</span
                                                >
                                                <span className="time-reading has-dot"
                                                >6 minuites de lecture</span
                                                >
                                                <span className="post-by has-dot"
                                                >3k vues</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="col-md-6 mb-40 wow fadeInUp animated">
                                <div className="post-card-1 border-radius-10 hover-up">
                                    <div
                                        className="post-thumb thumb-overlay img-hover-slide position-relative"
                                        style={{ backgroundImage: `url(${Deficit.src})` }}
                                    >
                                        <a className="img-link" href="/details"></a>
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
                                        <div
                                            className="entry-meta meta-0 font-small mb-10"
                                        >
                                            <a href="category.html"
                                            ><span className="post-cat text-success"
                                            >Lifestyle</span
                                                ></a
                                            >
                                        </div>
                                        <div className="d-flex post-card-content">
                                            <h5
                                                className="post-title mb-20 font-weight-900"
                                            >
                                                <a href="/details"
                                                >Déficits jumeaux : Faute de
                                                    vendre suffisamment, le Bénin se
                                                    vend pour soutenir sa
                                                    consommation</a
                                                >
                                            </h5>
                                            <div
                                                className="post-excerpt mb-25 font-small text-muted"
                                            >
                                                <p>
                                                    La semaine dernière, j'ai eu
                                                    l'honneur d'être invité par un
                                                    groupe de réflexion parisien
                                                    pour partager ma vision de
                                                    l'économie béninoise. Lors de
                                                    la... Lire la suite
                                                </p>
                                            </div>
                                            <div
                                                className="entry-meta meta-1 float-left font-x-small text-uppercase"
                                            >
                                                <span className="post-on"
                                                >27 Novembre,2024</span
                                                >
                                                <span className="time-reading has-dot"
                                                >12 inuites de lecture</span
                                                >
                                                <span className="post-by has-dot"
                                                >23k vues</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="col-md-6 mb-40 wow fadeInUp animated">
                                <div className="post-card-1 border-radius-10 hover-up">
                                    <div
                                        className="post-thumb thumb-overlay img-hover-slide position-relative"
                                        style={{ backgroundImage: `url(${Multiplicateur.src})` }}
                                    >
                                        <a className="img-link" href="/details"></a>
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
                                            <a href="category.html"
                                            ><span className="post-cat text-danger"
                                            >Hotels</span
                                                ></a
                                            >
                                        </div>
                                        <div className="d-flex post-card-content">
                                            <h5
                                                className="post-title mb-20 font-weight-900"
                                            >
                                                <a href="/details"
                                                >Le mythe du multiplicateur
                                                    keynésien au Bénin</a
                                                >
                                            </h5>
                                            <div
                                                className="post-excerpt mb-25 font-small text-muted"
                                            >
                                                <p>
                                                    Dans le paysage économique du
                                                    Bénin, comme dans de nombreux
                                                    pays en développement, une
                                                    croyance persiste avec une
                                                    ténacité remarquable : celle du
                                                    multipli... Lire la suite
                                                </p>
                                            </div>
                                            <div
                                                className="entry-meta meta-1 float-left font-x-small text-uppercase"
                                            >
                                                <span className="post-on"
                                                >11 Octobre, 2024</span
                                                >
                                                <span className="time-reading has-dot"
                                                >14 minutes de lecture</span
                                                >
                                                <span className="post-by has-dot"
                                                >25k vues</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="col-md-6 mb-40 wow fadeInUp animated">
                                <div className="post-card-1 border-radius-10 hover-up">
                                    <div
                                        className="post-thumb thumb-overlay img-hover-slide position-relative"
                                        style={{ backgroundImage: `url(${Transition.src})` }}
                                    >
                                        <a className="img-link" href="/details"></a>
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
                                        <div
                                            className="entry-meta meta-0 font-small mb-10"
                                        >
                                            <a href="category.html"
                                            ><span className="post-cat text-success"
                                            >Lifestyle</span
                                                ></a
                                            >
                                        </div>
                                        <div className="d-flex post-card-content">
                                            <h5
                                                className="post-title mb-20 font-weight-900"
                                            >
                                                <a href="/details"
                                                >Comprendre la création de richesse plutôt que l'origine de la pauvreté</a
                                                >
                                            </h5>
                                            <div
                                                className="post-excerpt mb-25 font-small text-muted"
                                            >
                                                <p>
                                                    Depuis que l'humanité a quitté
                                                    l'état de subsistance pour se
                                                    structurer en sociétés, la
                                                    question de la sécurité
                                                    financière en fin de ... Lire la
                                                    suite
                                                </p>
                                            </div>
                                            <div
                                                className="entry-meta meta-1 float-left font-x-small text-uppercase"
                                            >
                                                <span className="post-on"
                                                >04 OCTOBRE, 2024</span
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
                            <article className="col-md-6 mb-40 wow fadeInUp animated">
                                <div className="post-card-1 border-radius-10 hover-up">
                                    <div
                                        className="post-thumb thumb-overlay img-hover-slide position-relative"
                                        style={{ backgroundImage: `url(${Richess.src})` }}
                                    >
                                        <a className="img-link" href="/details"></a>
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
                                            <a href="category.html"
                                            ><span className="post-cat text-danger"
                                            >Hotels</span
                                                ></a
                                            >
                                        </div>
                                        <div className="d-flex post-card-content">
                                            <h5
                                                className="post-title mb-20 font-weight-900"
                                            >
                                                <a href="/details"
                                                >Comprendre la création de richesse plutôt que l'origine de la pauvreté</a
                                                >
                                            </h5>
                                            <div
                                                className="post-excerpt mb-25 font-small text-muted"
                                            >
                                                <p>
                                                    Plus tôt cette semaine, j'ai eu l'occasion de présenter une communication à Cotonou sur les défis du développement en Afrique. Durant la séance, un ... Lire la suite
                                                </p>
                                            </div>
                                            <div
                                                className="entry-meta meta-1 float-left font-x-small text-uppercase"
                                            >
                                                <span className="post-on"
                                                >27 SEPTEMBRE, 2024</span
                                                >
                                                <span className="time-reading has-dot"
                                                >14 minutes de lecture</span
                                                >
                                                <span className="post-by has-dot"
                                                >25k vues</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="row mt-50">
                        <div className="col-12">
                            <div
                                className="pagination-area mb-30 wow fadeInUp animated"
                            >
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-start">
                                        <li className="page-item">
                                            <a className="page-link" href="#"
                                            ><i
                                                className="elegant-icon arrow_left"
                                            ></i
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
                                            ><i
                                                className="elegant-icon arrow_right"
                                            ></i
                                                ></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default blogs;