"use client"; // This makes the component a Client Component

import Image from "next/image";
import { useRouter } from "next/navigation"; // Updated import
import React from "react";
import Link from "next/link";

/* thumb */
import Thumb1 from "@/assets/imgs/news/thumb-1.jpg";
import Thumb2 from "@/assets/imgs/news/thumb-2.jpg";
import Thumb3 from "@/assets/imgs/news/thumb-3.jpg";
import Thumb4 from "@/assets/imgs/news/thumb-4.jpg";

/* ADS */
import Ads1 from "@/assets/imgs/ads/ads-1.jpeg";
/* Featured */
import Logo from "@/assets/imgs/jed/logoJed.png";

const Header = () => {

    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const query = form.search.value;

        if (query) {
            // je redirige sur la page de recherche avec la réponse
            router.push(`/search?query=${query}`);
        }
    };

    return (
        <div>
            {/* <!-- Start Header --> */}
            <header className="main-header header-style-1 font-heading">
                <div className="header-top">
                    <div className="container">
                        <div className="row pt-20 pb-20">
                            <div className="col-md-3 col-xs-6">
                                <a href="index.html"
                                ><Image src={Logo} className="logo" alt="" /></a>
                            </div>
                            <div className="col-md-9 col-xs-6 text-right header-top-right">
                                <ul className="list-inline nav-topbar d-none d-md-inline">
                                </ul>
                                <span
                                    className="vertical-divider mr-20 ml-20 d-none d-md-inline"
                                ></span>
                                <button className="search-icon d-none d-md-inline">
                                    <span className="mr-15 text-muted font-small"
                                    ><i className="elegant-icon icon_search mr-5"></i>Rechercher</span
                                    >
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-sticky">
                    <div className="container align-self-center position-relative">
                        <div className="mobile_menu d-lg-none d-block"></div>
                        <div className="main-nav d-none d-lg-block float-left">
                            <nav>
                                {/*  <!--Desktop menu--> */}
                                <ul className="main-menu d-none d-lg-inline font-small">
                                    <li >
                                        <Link href="/">Acceuil</Link>
                                    </li>

                                    <li><Link href="/#about">À propos</Link></li>
                                    <li><Link href="/publications">Publications</Link></li>
                                    <li><Link href="/interventions">Interventions</Link></li>
                                    <li><Link href="/#don">Faire un don</Link></li>
                                    <li><Link href="/#contact">Contact</Link></li>
                                    <li><Link href="/blog">Blog</Link></li>
                                </ul>
                                {/* <!--Mobile menu--> */}
                                <ul id="mobile-menu" className="d-block d-lg-none text-muted">
                                    <li><a href="category-list.html">À propos</a></li>
                                    <li><a href="category-grid.html">Publications</a></li>
                                    <li><a href="category-big.html">Interventions</a></li>
                                    <li><a href="category.html">Faire un don</a></li>
                                    <li><a href="category.html">Contact </a></li>
                                    <li><a href="category.html">Blog</a></li>
                                </ul>
                            </nav>
                        </div>
                       
                    </div>
                </div>
            </header>
            {/* <!--Start search form--> */}
            <div className="main-search-form">
                <div className="container">
                    <div className="pt-50 pb-50">
                        <div className="row mb-20">
                            <div className="col-12 align-self-center main-search-form-cover m-auto">
                                <p className="text-center">
                                    <span className="search-text-bg">Rechercher</span>
                                </p>
                                <form onSubmit={handleSearch} className="search-header">
                                    <div className="input-group w-100">
                                        <input
                                            type="text"
                                            name="search"
                                            className="form-control"
                                            placeholder="Recherchez des articles"
                                        />
                                        <div className="input-group-append">
                                            <button className="btn btn-search bg-white" type="submit">
                                                <i className="elegant-icon icon_search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row mt-80 text-center">
                            <div className="col-12 font-small suggested-area">
                                <h5 className="suggested font-heading mb-20 text-muted">
                                    <strong>Mots clés suggérés :</strong>
                                </h5>
                                <ul className="list-inline d-inline-block">
                                    <li className="list-inline-item">
                                        <a href="category.html">Economir</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html">Politique</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html">Culture</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html">Science</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row mt-80">
                            <div className="col-lg-4">
                                <div
                                    className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30"
                                >
                                    <div
                                        className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden"
                                    >
                                        <a className="color-white" href="single.html">
                                            <Image src={Thumb2} alt="" />
                                        </a>
                                    </div>
                                    <div className="post-content media-body">
                                        <h6><a href="category.html">Livres</a></h6>
                                        <p className="text-muted font-small">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div
                                    className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30"
                                >
                                    <div
                                        className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden"
                                    >
                                        <a className="color-white" href="single.html">
                                            <Image src={Thumb4} alt="" />
                                        </a>
                                    </div>
                                    <div className="post-content media-body">
                                        <h6><a href="category.html">Tribunes</a></h6>
                                        <p className="text-muted font-small">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div
                                    className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30"
                                >
                                    <div
                                        className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden"
                                    >
                                        <a className="color-white" href="single.html">
                                            <Image src={Thumb3} alt="" />
                                        </a>
                                    </div>
                                    <div className="post-content media-body">
                                        <h6><a href="category.html">Podcast</a></h6>
                                        <p className="text-muted font-small">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;