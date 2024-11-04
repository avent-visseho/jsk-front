import React from 'react';

import Book1 from "@/assets/imgs/jed/book1.jpg";

const page = () => {
    return (
        <div>
            <main>
                <div className="archive-header pt-50 text-center">
                    <div className="container">
                        <h2 className="font-weight-900">Livres, articles & tribunes</h2>
                        <div className="breadcrumb">
                            <h5>À la une</h5>
                        </div>
                        <div className="bt-1 border-color-1 mt-30 mb-50"></div>
                    </div>
                </div>
                <div className="container">
                    <div className="loop-grid mb-30">
                        <div className="row">
                            <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated" data-wow-delay="0.2s">
                                <a href="https://www.amazon.fr/terrasse-avec-Mara-Sophonie-Koboude/dp/2750018390/">
                                    <div className="post-card-1 border-radius-10 hover-up">
                                        <div className="post-thumb thumb-overlay img-hover-slide position-relative" style={{ backgroundImage: `url(${Book1.src})` }}>
                                            <ul className="social-share">
                                                <li><a href="#"><i className="elegant-icon social_share"></i></a></li>
                                                <li><a className="fb" href="#" title="Share on Facebook" target="_blank"><i className="elegant-icon social_facebook"></i></a></li>
                                                <li><a className="tw" href="#" target="_blank" title="Tweet now"><i className="elegant-icon social_twitter"></i></a></li>
                                                <li><a className="pt" href="#" target="_blank" title="Pin it"><i className="elegant-icon social_pinterest"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="post-content p-30">
                                            <div className="entry-meta meta-0 font-small mb-10">
                                                <a href="category.html"><span className="post-cat text-danger">Livre</span></a>
                                            </div>
                                            <div className="d-flex post-card-content">
                                                <h5 className="post-title mb-20 font-weight-700">
                                                    L’Afrique a la population la plus jeune au monde, avec plus de 400 millions de jeunes âgés de 15 à 35 ans.
                                                    Il n’est pas rare d’entendre que l’avenir de l’Afrique passera par le leadership de sa jeunesse. Mais comment cette jeunesse
                                                    réussira-t-elle sa mission ? Sur qui prendra-t-elle exemple ? Nous savons que le leadership ne naît pas d’un vide intersidéral.
                                                    Il prend corps chez les individus au moyen, entre autres, d’exemples de leadership. C’est là que réside la
                                                    raison d’être de ce livre qui donne à voir un exceptionnel modèle d’engagement au service du Mali et de l’Afrique.
                                                    À travers l’exemple de Son Excellence M. Moussa Mara, la jeunesse africaine a un repère placé à l’horizon.
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </article>

                        </div>
                        <div className="row mt-50">
                            <div className="col-12">
                                <div className="pagination-area mb-30 wow fadeInUp animated">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-start">
                                            <li className="page-item"><a className="page-link" href="#"><i className="elegant-icon arrow_left"></i></a></li>
                                            <li className="page-item active"><a className="page-link" href="#">01</a></li>
                                            <li className="page-item"><a className="page-link" href="#">02</a></li>
                                            <li className="page-item"><a className="page-link" href="#">03</a></li>
                                            <li className="page-item"><a className="page-link" href="#">04</a></li>
                                            <li className="page-item"><a className="page-link" href="#"><i className="elegant-icon arrow_right"></i></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default page;