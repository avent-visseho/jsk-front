import React from "react";
import Image from "next/image";
import Blog1 from "@/assets/imgs/jed/blogs/blog-1.jpg";
import Blog2 from "@/assets/imgs/jed/blogs/blog-2.jpg";
import Blog3 from "@/assets/imgs/jed/blogs/blog-3.jpg";
import Ecole229 from "@/assets/imgs/jed/blogs/ecole229.png";
import Logo from "@/assets/imgs/jed/blogs/logo.png";
import Thumb2 from "@/assets/imgs/news/thumb-2.jpg";
import Thumb3 from "@/assets/imgs/news/thumb-3.jpg";
import Thumb4 from "@/assets/imgs/news/thumb-4.jpg";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="scroll-progress primary-bg"></div>
      {/* <!-- Start Preloader --> */}

      <div className=" text-center">
        {/*  <div className="circle"></div> */}
      </div>

      {/* <!--Offcanvas sidebar--> */}
      <aside
        id="sidebar-wrapper"
        className="custom-scrollbar offcanvas-sidebar"
      >
        <button className="off-canvas-close">
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="sidebar-inner">
          {/*  <!--Categories--> */}
          <div className="sidebar-widget widget_categories mb-50 mt-30">
            <div className="widget-header-2 position-relative">
              <h5 className="mt-5 mb-15">Catégories</h5>
            </div>
            <div className="widget_nav_menu">
              <ul>
                <li className="cat-item cat-item-2">
                  <a href="category.html">Tribunes</a>
                  <span className="post-count">30</span>
                </li>
                <li className="cat-item cat-item-3">
                  <a href="category-grid.html">Livres</a>
                  <span className="post-count">25</span>
                </li>
                <li className="cat-item cat-item-4">
                  <a href="category-list.html">Intervention</a>
                  <span className="post-count">16</span>
                </li>
                <li className="cat-item cat-item-5">
                  <a href="category-masonry.html">Articles </a>
                  <span className="post-count">22</span>
                </li>
              </ul>
            </div>
          </div>
          {/*  <!--Latest--> */}
          <div className="sidebar-widget widget-latest-posts mb-50">
            <div className="widget-header-2 position-relative mb-30">
              <h5 className="mt-5 mb-30">Articles</h5>
            </div>
            <div className="post-block-list post-module-1 post-module-5">
              <ul className="list-post">
                <li className="mb-30">
                  <div className="d-flex hover-up-2 transition-normal">
                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                      <a className="color-white" href="details">
                        <Image src={Blog1} alt="" />
                        {/*  <img src="assets/imgs/jed/blogs/blog-1.jpg" alt="" /> */}
                      </a>
                    </div>
                    <div className="post-content media-body">
                      <h6 className="post-title mb-15 text-limit-2-row font-medium">
                        <a href="details">
                          Sortir de l’illusion de la prospérité assurée par
                          l'État
                        </a>
                      </h6>
                      <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                        <span className="post-on">01 Novembre 2024</span>
                        <span className="post-by has-dot">300 vues</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mb-30">
                  <div className="d-flex hover-up-2 transition-normal">
                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                      <a className="color-white" href="details">
                        <Image src={Blog2} alt="" />
                        {/*  <img src="assets/imgs/jed/blogs/blog-2.jpg" alt="" /> */}
                      </a>
                    </div>
                    <div className="post-content media-body">
                      <h6 className="post-title mb-15 text-limit-2-row font-medium">
                        <a href="details">Liberté, Beauté, Prospérité</a>
                      </h6>
                      <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                        <span className="post-on">25 Octobre 2024</span>
                        <span className="post-by has-dot">23k vues</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="mb-30">
                  <div className="d-flex hover-up-2 transition-normal">
                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                      <a className="color-white" href="details">
                        <Image src={Blog3} alt="" />
                        {/* <img src="assets/imgs/jed/blogs/blog-3.jpg" alt="" /> */}
                      </a>
                    </div>
                    <div className="post-content media-body">
                      <h6 className="post-title mb-15 text-limit-2-row font-medium">
                        <a href="details">
                          Déficits jumeaux : Faute de vendre suffisamment, le
                          Bénin se vend pour soutenir sa consommation
                        </a>
                      </h6>
                      <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                        <span className="post-on">27 Août 2024</span>
                        <span className="post-by has-dot">23k vues</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <!--Ads--> */}
          <div className="sidebar-widget widget-ads">
            <div className="widget-header-2 position-relative mb-30">
              <h5 className="mt-5 mb-30">BANNIÈRE PUBLICITAIRE</h5>
            </div>
            <a href="https://ecole229.bj/candidature-2024-v2/" target="_blank">
              <Image
                className="advertise-img border-radius-5"
                src={Ecole229}
                alt=""
              />
              {/* <img
              className="advertise-img border-radius-5"
              src="assets/imgs/jed/blogs/ecole229.png"
              alt=""
            /> */}
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
                <a href="/">
                  <Image className="logo" src={Logo} alt="" />
                </a>
              </div>
              <div className="col-md-9 col-xs-6 text-right header-top-right">
                <span className="vertical-divider mr-20 ml-20 d-none d-md-inline"></span>
                <button className="search-icon d-none d-md-inline">
                  <span className="mr-15 text-muted font-small">
                    <i className="fa-solid fa-magnifying-glass"></i> Rechercher
                  </span>
                </button>
                <Link
                  className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow"
                  href="/#don"
                >
                  {" "}
                  Faire un don
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="header-sticky">
          <div className="container align-self-center position-relative">
            <div className="mobile_menu d-lg-none d-block"></div>
            <div className="main-nav d-none d-lg-block float-left">
              <nav>
                {/* <!--Desktop menu--> */}
                <ul className="main-menu d-none d-lg-inline font-small">
                  <li className="menu-item-has-children">
                    <Link href="/">
                      <i className="fa-solid fa-house"></i> Acceuil
                    </Link>
                  </li>
                  <li>
                    <Link href="/#author">À propos</Link>
                  </li>
                  <li>
                    <Link href="publications">Publications</Link>
                  </li>
                  <li>
                    <Link href="interventions">Interventions</Link>
                  </li>
                  <li>
                    <Link href="blog">Blog</Link>
                  </li>
                 {/*  <li>
                    <Link href="#">Contact</Link>
                  </li> */}
                </ul>
                {/*  <!--Mobile menu--> */}
                <ul id="mobile-menu" className="d-block d-lg-none text-muted">
                  <li className="menu-item-has-children">
                    <Link href="/">
                      <i className="fa-solid fa-house"></i> Acceuil
                    </Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="/#author">À propos</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="publications">Publications</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="interventions">Interventions</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="blog">Blog</Link>
                  </li>
                 {/*  <li className="menu-item-has-children">
                    <a href="#">Contact</a>
                  </li> */}
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
                  >
                    <i
                      className="fa-brands fa-facebook-f"
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
                    <i
                      className="fa-brands fa-pinterest-p"
                      style={{ color: "#fff" }}
                    ></i>
                  </a>
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
      {/*  <!--Start search form--> */}
      <div className="main-search-form">
        <div className="container">
          <div className="pt-50 pb-50">
            <div className="row mb-20">
              <div className="col-12 align-self-center main-search-form-cover m-auto">
                <p className="text-center">
                  <span className="search-text-bg">Rechercher</span>
                </p>
                <form action="#" className="search-header">
                  <div className="input-group w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Rechercher des articles, des livres"
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
                    <a href="category.html">Livres</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="category.html">Tribunes</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="category.html">Opinions</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="category.html">Interventions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
