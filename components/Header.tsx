import Image from "next/image";

/* thumb */
import Thumb1 from "@/assets/imgs/news/thumb-1.jpg";
import Thumb2 from "@/assets/imgs/news/thumb-2.jpg";
import Thumb3 from "@/assets/imgs/news/thumb-3.jpg";
import Thumb4 from "@/assets/imgs/news/thumb-4.jpg";

/* ADS */
import Ads1 from "@/assets/imgs/ads/ads-1.jpeg";
/* Featured */
import Logo from "@/assets/imgs/jed/logoJed.png";
import React from "react";

const Header = () => {
    return (
        <div>
            {/* <!-- Start Preloader --> */}
            {/*  <div className="preloader text-center">
        <div className="circle"></div>
      </div> */}
            <aside id="sidebar-wrapper" className="custom-scrollbar offcanvas-sidebar">
                <button className="off-canvas-close">
                    <i className="elegant-icon icon_close"></i>
                </button>
                <div className="sidebar-inner">
                    {/*  <!--Categories--> */}
                    <div className="sidebar-widget widget_categories mb-50 mt-30">
                        <div className="widget-header-2 position-relative">
                            <h5 className="mt-5 mb-15">Hot topics</h5>
                        </div>
                        <div className="widget_nav_menu">
                            <ul>
                                <li className="cat-item cat-item-2">
                                    <a href="category.html">Travel tips</a>
                                    <span className="post-count">30</span>
                                </li>
                                <li className="cat-item cat-item-3">
                                    <a href="category-grid.html">Book review</a>
                                    <span className="post-count">25</span>
                                </li>
                                <li className="cat-item cat-item-4">
                                    <a href="category-list.html">Hotel review</a>
                                    <span className="post-count">16</span>
                                </li>
                                <li className="cat-item cat-item-5">
                                    <a href="category-masonry.html">Destinations </a>
                                    <span className="post-count">22</span>
                                </li>
                                <li className="cat-item cat-item-6">
                                    <a href="category-big.html">Lifestyle</a>
                                    <span className="post-count">25</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!--Latest--> */}
                    <div className="sidebar-widget widget-latest-posts mb-50">
                        <div className="widget-header-2 position-relative mb-30">
                            <h5 className="mt-5 mb-30">Don't miss</h5>
                        </div>
                        <div className="post-block-list post-module-1 post-module-5">
                            <ul className="list-post">
                                <li className="mb-30">
                                    <div className="d-flex hover-up-2 transition-normal">
                                        <div
                                            className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden"
                                        >
                                            <a className="color-white" href="single.html">
                                                <Image src={Thumb1} alt="" />
                                            </a>
                                        </div>
                                        <div className="post-content media-body">
                                            <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                                <a href="single.html"
                                                >The Life of a Travel Writer with David Farley</a
                                                >
                                            </h6>
                                            <div
                                                className="entry-meta meta-1 float-left font-x-small text-uppercase"
                                            >
                                                <span className="post-on">05 August</span>
                                                <span className="post-by has-dot">300 views</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-30">
                                    <div className="d-flex hover-up-2 transition-normal">
                                        <div
                                            className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden"
                                        >
                                            <a className="color-white" href="single.html">
                                                <Image src={Thumb2} alt="" />
                                            </a>
                                        </div>
                                        <div className="post-content media-body">
                                            <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                                <a href="single.html"
                                                >Why Don’t More Black American Women Travel Solo?</a
                                                >
                                            </h6>
                                            <div
                                                className="entry-meta meta-1 float-left font-x-small text-uppercase"
                                            >
                                                <span className="post-on">12 August</span>
                                                <span className="post-by has-dot">23k views</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-30">
                                    <div className="d-flex hover-up-2 transition-normal">
                                        <div
                                            className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden"
                                        >
                                            <a className="color-white" href="single.html">
                                                <Image src={Thumb3} alt="" />
                                            </a>
                                        </div>
                                        <div className="post-content media-body">
                                            <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                                <a href="single.html"
                                                >The 22 Best Things to See and Do in Bangkok</a
                                                >
                                            </h6>
                                            <div
                                                className="entry-meta meta-1 float-left font-x-small text-uppercase"
                                            >
                                                <span className="post-on">27 August</span>
                                                <span className="post-by has-dot">23k views</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*  <!--Ads--> */}
                    <div className="sidebar-widget widget-ads">
                        <div className="widget-header-2 position-relative mb-30">
                            <h5 className="mt-5 mb-30">Advertise banner</h5>
                        </div>
                        <a
                            href="https://themeforest.net/user/alithemes/portfolio"
                            target="_blank"
                        >
                            <Image src={Ads1} alt="" />
                        </a>
                    </div>
                </div>
            </aside>
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
                                    <li className="menu-item-has-children">
                                        <a href="">
                                            <i className="elegant-icon icon_house_alt mr-5"></i> Acceuil</a
                                        >
                                    </li>
                                    <li><a href="category-list.html">À propos</a></li>
                                    <li><a href="category-grid.html">Publications</a></li>
                                    <li><a href="category-big.html">Interventions</a></li>
                                    <li><a href="category.html">Faire un don</a></li>
                                    <li><a href="category.html">Contact </a></li>
                                    <li><a href="category.html">Blog</a></li>
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
                        <div className="float-right header-tools text-muted font-small">
                            <ul className="header-social-network d-inline-block list-inline mr-15">
                                <li className="list-inline-item">
                                    <a
                                        className="social-icon fb text-xs-center"
                                        target="_blank"
                                        href="#"
                                    ><i className="elegant-icon social_facebook"></i
                                    ></a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        className="social-icon tw text-xs-center"
                                        target="_blank"
                                        href="#"
                                    ><i className="elegant-icon social_twitter"></i
                                    ></a>
                                </li>
                                <li className="list-inline-item">
                                    <a
                                        className="social-icon pt text-xs-center"
                                        target="_blank"
                                        href="#"
                                    ><i className="elegant-icon social_pinterest"></i
                                    ></a>
                                </li>
                            </ul>
                            <div className="off-canvas-toggle-cover d-inline-block">
                                <div
                                    className="off-canvas-toggle hidden d-inline-block"
                                    id="off-canvas-toggle"
                                >
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
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
                                    <span className="search-text-bg">Search</span>
                                </p>
                                <form action="#" className="search-header">
                                    <div className="input-group w-100">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search stories, places and people"
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
                                    <strong>Suggested keywords:</strong>
                                </h5>
                                <ul className="list-inline d-inline-block">
                                    <li className="list-inline-item">
                                        <a href="category.html">World</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html">American</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html">Opinion</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html">Tech</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html">Science</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html">Books</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html">Travel</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="category.html">Business</a>
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
                                        <h6><a href="category.html">Travel Tips</a></h6>
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
                                        <h6><a href="category.html">Lifestyle</a></h6>
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
                                        <h6><a href="category.html">Hotel Review</a></h6>
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