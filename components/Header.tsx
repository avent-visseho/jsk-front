"use client";

import React, { useState } from "react";
import Image from "next/image";
import Blog1 from "@/assets/imgs/jed/blogs/blog-1.jpg";
import Blog2 from "@/assets/imgs/jed/blogs/blog-2.jpg";
import Blog3 from "@/assets/imgs/jed/blogs/blog-3.jpg";
import Ecole229 from "@/assets/imgs/jed/blogs/ecole229.png";
import Logo from "@/assets/imgs/jed/blogs/logo.png";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AiFillFacebook } from "react-icons/ai";
import { FiFacebook, FiLinkedin, FiX } from "react-icons/fi";
import SocialLinks from "./SocialLinks";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.search.value;

    if (pathname === "/") {
      setIsSearchOpen(false);
    }

    if (query) {
      // Redirige sur la page de recherche
      router.push(`${pathname}?q=${query}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <div>
      <div className="scroll-progress primary-bg"></div>
      {/* <!-- Start Preloader --> */}

      <div className=" text-center">
        {/*  <div className="circle"></div> */}
      </div>

      {/* <!--Offcanvas sidebar--> */}

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
                <button
                  className="search-icon d-none d-md-inline"
                  onClick={() => setIsSearchOpen((val) => !val)}
                >
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
                <ul className="main-menu d-block d-lg-inline font-medium">
                  <li className="menu-item-has-children">
                    <Link
                      href="/"
                      className={
                        pathname == "/" ? "text-primary font-weight-bold" : ""
                      }
                    >
                      <i className="fa-solid fa-house"></i> Acceuil
                    </Link>
                  </li>
                  <li>
                    <Link href="/#author">À propos</Link>
                  </li>
                  <li>
                    <Link href="/#contact">Contact</Link>
                  </li>
                  <li
                    className={
                      pathname == "/publications" ? "text-primary" : ""
                    }
                  >
                    <Link
                      href="/publications"
                      className={
                        pathname == "/publications"
                          ? "text-primary font-weight-bold"
                          : ""
                      }
                    >
                      Publications
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/interventions"
                      className={
                        pathname == "/interventions"
                          ? "text-primary font-weight-bold"
                          : ""
                      }
                    >
                      Interventions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className={
                        pathname == "/blog"
                          ? "text-primary font-weight-bold"
                          : ""
                      }
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
                {/*  <!--Mobile menu--> */}
                <ul id="mobile-menu" className="d-block d-lg-none text-muted">
                  <li className="menu-item-has-children">
                    <a href="/">
                      <i className="fa-solid fa-house"></i> Accueil
                    </a>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="/#author">À
                     propos</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="/#contact">Contact</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="/publications">Publications</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="/interventions">Interventions</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link href="/blog">Blog</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="float-right header-tools text-muted font-small">
              <SocialLinks />
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
      {isSearchOpen === true && (
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
                        placeholder="Recherchez des articles, des lieux et des personnes"
                      />
                      <div className="input-group-append">
                        <button type="submit" className="btn btn-primary">
                          <i className="fa-solid fa-magnifying-glass"></i>
                          Rechercher
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
                      <a href="category.html">Digital</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="category.html">Economie</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="category.html">Finance</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="category.html">Afrique</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
