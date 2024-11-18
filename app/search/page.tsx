"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Blog1 from "@/assets/imgs/jed/blogs/blog-1.jpg";
import Image from 'next/image';

import News13 from "@/assets/imgs/news/news-13.jpg";
import Link from 'next/link';

const Page = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get('query'); // Access query parameter

    return (
        <div>
            <main>
                <div className="archive-header pt-50">
                    <div className="container">
                        <h2 className="font-weight-900">Résultats de recherche</h2>
                        <div className="breadcrumb">
                            {query ? (
                                <>articles pour le mot-clé <strong>"{query}"</strong></>
                            ) : (
                                <>Veuillez entrer un mot-clé pour la recherche.</>
                            )}
                        </div>
                        <div className="bt-1 border-color-1 mt-30 mb-50"></div>
                    </div>
                </div>
                <div className="pb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="post-module-3">
                                    <div className="loop-list loop-list-style-1">
                                        <article className="hover-up-2 transition-normal wow fadeInUp animated">
                                            <div className="row mb-40 list-style-2">
                                                <div className="col-md-4">
                                                    <div className="post-thumb position-relative border-radius-5">
                                                        <div
                                                            className="img-hover-slide border-radius-5 position-relative"
                                                            style={{ backgroundImage: `url(${Blog1.src})` }}
                                                        >
                                                            <a className="img-link" href="single.html"></a>
                                                        </div>
                                                        <ul className="social-share">
                                                            <li><a href="#"><i className="elegant-icon social_share"></i></a></li>
                                                            <li><a className="fb" href="#" title="Share on Facebook" target="_blank"><i className="elegant-icon social_facebook"></i></a></li>
                                                            <li><a className="tw" href="#" target="_blank" title="Tweet now"><i className="elegant-icon social_twitter"></i></a></li>
                                                            <li><a className="pt" href="#" target="_blank" title="Pin it"><i className="elegant-icon social_pinterest"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 align-self-center">
                                                    <div className="post-content">
                                                        <div className="entry-meta meta-0 font-small mb-10">
                                                            <a href="category.html"><span className="post-cat text-primary">Food</span></a>
                                                        </div>
                                                        <h5 className="post-title font-weight-900 mb-20">
                                                            <Link href="/details">Exemple de résultat pour "{query}"</Link>
                                                            <span className="post-format-icon"><i className="elegant-icon icon_star_alt"></i></span>
                                                        </h5>
                                                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                            <span className="post-on">18 Novembre</span>
                                                            <span className="time-reading has-dot">11 minutes de lecture</span>
                                                            <span className="post-by has-dot">3k Vues</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
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

export default Page;
