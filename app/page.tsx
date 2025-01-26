"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Ecole229 from "@/assets/imgs/jed/blogs/ecole229.png";
import Jed from "@/assets/imgs/jed/blogs/jed.png";
import Eden from "@/assets/imgs/jed/blogs/eden.png";
import {
  getBook,
  getCategories,
  getIntervention,
  getPost,
  getTribunes,
  postContact,
  subscribeEmail,
} from "@/services/DataService";
import { formatPostName, formatPublishedDate } from "@/helpers/utils";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import Loader from "@/components/Loader";

const page = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [books, setBooks] = useState([]);
  const [tribunes, setTribunes] = useState([]);
  const [interventions, setInterventions] = useState([]);
  const [posts, setPosts] = useState<any[]>([]);
  const [checked, setChecked] = useState(false);
  if (typeof window == "undefined") {
    return null;
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setSuccess(false);
    setIsSubmitting(true);

    // Validation basique
    if (!prenom || !nom || !email || !tel || !message) {
      setError("Veuillez remplir tous les champs.");
      alert("Veuillez remplir tous les champs");
      setIsSubmitting(false);
      return;
    }

    if (!checked) {
      setError("Veuillez accepter les conditions générales d'utilisation.");
      alert("Veuillez accepter les conditions générales d'utilisation");
      setIsSubmitting(false);
      return;
    }

    postContact({
      email: email,
      firstName: prenom,
      lastName: nom,
      phoneNumber: tel,
      message: message,
      aggreeWithTerm: true,
    })
      .then(() => {
        setIsSubmitting(false);
        setNom("");
        setPrenom("");
        setEmail("");
        setTel("");
        setMessage("");
        setChecked(false);
        setSuccess(true);
        alert("Merci pour votre message. Nous vous répondrons très bientôt");
      })
      .catch(() => {
        setIsSubmitting(false);
        setError("Une erreur est survenue. Veuillez réessayer.");
        alert("Une erreur est survenue. Veuillez réessayer.");
      });
  };

  useEffect(() => {
    getBook().then((res) => {
      setBooks(res.data.data);
    });
    getIntervention().then((res) => {
      setInterventions(res.data?.data);
    });
    getPost().then((res) => {
      setPosts(res.data.data);
    });
    getTribunes().then((res) => {
      setTribunes(res.data.data);
    });
  }, []);

  return (
    <>
      {/* <!-- Start Main content --> */}
      <>
        <div className="featured-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <p className="text-muted">
                  <span
                    className="typewrite d-inline text-primary"
                    data-period="2000"
                    data-type='[ " Sophonie Jed Koboude. ", "Essayiste. ", "chroniqueur ", "analyste " ]'
                  ></span>
                </p>
                <h2>
                  Informer. <span>Contribuer.</span>
                </h2>
                <h3 className="mb-20">Transmettre.</h3>
                <h5 className="text-muted">
                  Essayiste, chroniqueur, analyste, porté par la volonté de
                  faire progresser le monde à l'échelle des petits pas.
                </h5>
                {isSubmitting ? (
                  <Loader />
                ) : (
                  <form
                    className="input-group form-subcriber mt-30 d-flex"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setError("");
                      setSuccess(false);
                      setIsSubmitting(true);
                      subscribeEmail({ email: email })
                        .then(() => {
                          alert("Merci de votre abonnement!");
                          setIsSubmitting(false);
                          setEmail("");
                        })
                        .catch(() => {
                          alert("Vous êtes déjà abonné(e)!");
                          setIsSubmitting(false);
                        });
                    }}
                  >
                    <input
                      type="email"
                      className="form-control bg-white font-small"
                      placeholder="Saisissez votre e-mail"
                      required={true}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className="btn bg-primary text-white" type="submit">
                      S'abonner
                    </button>
                  </form>
                )}
              </div>
              <div className="col-lg-6 text-right d-none d-lg-block">
                <Image src={Jed} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="hot-tags pt-30 pb-30 font-small align-self-center">
            <div className="widget-header-3">
              <div className="row align-self-center">
                <div className="col-md-4 align-self-center">
                  <h5 className="widget-title">
                    Récemments publiés sur le blog
                  </h5>
                </div>
                <div className="col-md-8 text-md-right font-small align-self-center">
                  <p className="d-inline-block mr-5 mb-0">
                    <i className="fa-solid fa-tag"></i>
                  </p>
                  <ul className="list-inline d-inline-block tags">
                    <li className="list-inline-item">
                      <a href="#"># Inspiration</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#"># Economie</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#"># Politique</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="loop-grid mb-30">
            <div className="row">
              {posts?.slice(0, 6).map((post: any, index: number) =>
                index === 0 ? (
                  <div className="col-lg-8 mb-30" key={index}>
                    <div className="carausel-post-1 hover-up border-radius-10 overflow-hidden transition-normal position-relative wow fadeInUp animated">
                      <div className="arrow-cover"></div>
                      <div className="slide-fade">
                        <div className="position-relative post-thumb">
                          <div
                            className="thumb-overlay img-hover-slide position-relative"
                            style={{
                              backgroundImage: `url(${process.env.NEXT_PUBLIC_FILE_URL}/${post.coverImage})`,
                            }}
                          >
                            <a className="img-link" href="details"></a>
                            <span className="top-left-icon bg-warning">
                              <i
                                className="fa-regular fa-star"
                                style={{ color: "#fff" }}
                              ></i>
                            </span>
                            <div className="post-content-overlay text-white ml-30 mr-30 pb-30">
                              <div className="entry-meta meta-0 font-small mb-10">
                                {post?.categories?.map(
                                  (category: any, indexCat: number) => (
                                    <a href="#" key={indexCat}>
                                      <span className="post-cat text-info">
                                        {category?.name}
                                      </span>
                                    </a>
                                  )
                                )}
                              </div>
                              <h3 className="post-title font-weight-900 mb-20">
                                <Link
                                  className="text-white"
                                  href={`/blog/${formatPostName(
                                    post?.title
                                  )}?q=${post?.id}`}
                                >
                                  {post?.title}
                                </Link>
                              </h3>
                              <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                                <span className="post-on">
                                  {"Publié le " +
                                    formatPublishedDate(post?.publishedAt)}
                                </span>
                                {/*  <span className="hit-count has-dot">
                                  {post?.readCount} lectures
                                </span> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="position-relative post-thumb">
                          <div
                            className="thumb-overlay img-hover-slide position-relative"
                            style={{
                              backgroundImage: `url(${process.env.NEXT_PUBLIC_FILE_URL}/${posts[1]?.coverImage})`,
                            }}
                          >
                            <a className="img-link" href="details"></a>
                            <span className="top-left-icon bg-danger">
                              <i className="elegant-icon icon_image"></i>
                            </span>
                            <div className="post-content-overlay text-white ml-30 mr-30 pb-30">
                              <div className="entry-meta meta-0 font-small mb-10">
                                {posts[1]?.categories?.map(
                                  (category: any, indexCate: number) => (
                                    <a href="#" key={indexCate}>
                                      <span className="post-cat text-info">
                                        {category?.name}
                                      </span>
                                    </a>
                                  )
                                )}
                              </div>
                              <h3 className="post-title font-weight-900 mb-20">
                                <Link
                                  className="text-white"
                                  href={`/blog/${formatPostName(
                                    posts[1]?.title
                                  )}?q=${posts[1]?.id}`}
                                >
                                  {posts[1]?.title}
                                </Link>
                              </h3>
                              <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                                <span className="post-on">
                                  {"Publié le " +
                                    formatPublishedDate(posts[1]?.publishedAt)}
                                </span>
                                {/* <span className="hit-count has-dot">
                                  {post?.readCount} lectures
                                </span> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : index != 1 ? (
                  <article
                    key={index}
                    className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
                  >
                    <div className="post-card-1 border-radius-10 hover-up  h-100">
                      <div
                        className="post-thumb thumb-overlay img-hover-slide position-relative"
                        style={{
                          backgroundImage: `url(${process.env.NEXT_PUBLIC_FILE_URL}/${post?.coverImage})`,
                        }}
                      >
                        <ul className="social-share">
                          <li>
                            <a href="#">
                              <i
                                className="fa-solid fa-share-nodes"
                                style={{ color: "#fff" }}
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="fb"
                              href="#"
                              title="Share on Facebook"
                              target="_blank"
                            >
                              <i
                                className="fa-brands fa-facebook-f"
                                style={{ color: "#fff" }}
                              ></i>
                            </a>
                          </li>
                          <li>
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
                          <li>
                            <a
                              className="pt"
                              href="#"
                              target="_blank"
                              title="Pin it"
                            >
                              <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="post-content p-30">
                        <div className="entry-meta meta-0 font-small mb-10">
                          {post?.categories?.map(
                            (category: any, indexCat: number) => (
                              <a href="#" key={indexCat}>
                                <span className="post-cat text-info">
                                  {category?.name}
                                </span>
                              </a>
                            )
                          )}
                        </div>
                        <div className="d-flex post-card-content">
                          <h5 className="post-title mb-20 font-weight-900">
                            <Link
                              href={`/blog/${formatPostName(post?.title)}?q=${
                                post?.id
                              }`}
                            >
                              {post?.title}
                            </Link>{" "}
                          </h5>
                          <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                            <span className="post-on">
                              {"Publié le " +
                                formatPublishedDate(post?.publishedAt)}
                            </span>
                            {/* <span className="post-by has-dot">
                              {post?.readCount} lectures
                            </span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>
        <div className="bg-grey pt-50 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="post-module-2">
                  <div className="widget-header-1 position-relative mb-30 wow fadeInUp animated">
                    <h5 className="mt-5 mb-30">Dernières contributions</h5>
                  </div>
                  <div className="loop-list loop-list-style-1">
                    <div className="row">
                      {tribunes.length > 0 &&
                        tribunes?.slice(0, 3).map((tribune: any, i: number) => (
                          <article className="mb-40" key={i}>
                            <div className="post-card-1 border-radius-10 hover-up">
                              <div
                                className="post-thumb thumb-overlay img-hover-slide position-relative"
                                style={{
                                  backgroundImage: `url(${process.env.NEXT_PUBLIC_FILE_URL}/${tribune.coverImage})`,
                                }}
                              >
                                <a className="img-link" href="details"></a>
                                <ul className="social-share">
                                  <li>
                                    <a href="#">
                                      <i
                                        className="fa-solid fa-share-nodes"
                                        style={{ color: "#fff" }}
                                      ></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      className="fb"
                                      href="#"
                                      title="Share on Facebook"
                                      target="_blank"
                                    >
                                      <i
                                        className="fa-brands fa-facebook-f"
                                        style={{ color: "#fff" }}
                                      ></i>
                                    </a>
                                  </li>
                                  <li>
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
                                  <li>
                                    <a
                                      className="pt"
                                      href="#"
                                      target="_blank"
                                      title="Pin it"
                                    >
                                      <i className="fa-brands fa-linkedin-in"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="post-content p-30">
                                {/* <div className="entry-meta meta-0 font-small mb-10">
                                <a href="#">
                                  <span className="post-cat text-info">
                                    Podcast
                                  </span>
                                </a>
                              </div> */}
                                <div className="d-flex post-card-content">
                                  <h5 className="post-title mb-20 font-weight-900">
                                    <a href={tribune?.link} target="_blank">
                                      {tribune.title}
                                    </a>
                                  </h5>
                                  <div className="post-excerpt mb-25 font-small text-muted">
                                    <p
                                      //className="font-medium text-muted"
                                      dangerouslySetInnerHTML={{
                                        __html: tribune?.description,
                                      }}
                                    />
                                  </div>
                                  <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                    <span
                                      className="post-on text-primary"
                                      onClick={() => {
                                        window.open(tribune?.link, "_blank");
                                      }}
                                    >
                                      <strong>Tout lire</strong>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </article>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4" id="author">
                <div className="widget-area">
                  <div className="sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 bg-white border-radius-5 has-border wow fadeInUp animated">
                    <Image
                      src={Jed}
                      className="about-author-img mb-25"
                      alt=""
                    />
                    <h5 className="mb-20">Sophonie Jed Koboude</h5>
                    <p className="text-muted">
                      <span
                        className="typewrite d-inline"
                        data-period="2000"
                        data-type='[ " Sophonie Jed Koboude. ", "Essayiste. ", "chroniqueur ", "analyste " ]'
                      ></span>
                    </p>
                    <p className="font-medium text-muted">
                      Passionné par les nouvelles technologies de l'information,
                      l'économie, l'énergie, l’Histoire et, surtout, l'Afrique,
                      et animé par la joie de transmettre, je suis auteur de
                      deux essais et intervient régulièrement au travers de
                      chroniques écrites ou d’émissions télévisées.
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        marginTop: "10px",
                        gap: "15px",
                      }}
                    >
                      <strong>Suivez-moi : </strong>
                      <SocialLinks />
                    </div>
                  </div>
                  <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                    <div className="widget-header-1 position-relative mb-30">
                      <h5 className="mt-5 mb-30">Mes dernières oeuvres</h5>
                    </div>
                    <div className="post-block-list post-module-1">
                      <ul className="list-post">
                        {books.map((book: any, index: number) => (
                          <li
                            className="mb-30 wow fadeInUp animated"
                            key={index}
                          >
                            <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                              <div className="post-content media-body">
                                <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                  <a href="details">{book.title}</a>
                                </h6>

                                <button
                                  className="btn btn-radius bg-dark text-white font-small box-shadow"
                                  onClick={() => {
                                    window.open(book?.link, "_blank");
                                  }}
                                >
                                  Acheter ce livre
                                </button>
                              </div>
                              <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                                <a className="color-white" href="details">
                                  <Image
                                    src={`${process.env.NEXT_PUBLIC_FILE_URL}/${book.coverImage}`}
                                    alt={`book-${index}`}
                                    width={70}
                                    height={70}
                                    objectFit="contain"
                                  />
                                </a>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="don" className="archive-header pt-50 text-center">
              <h2 className="font-weight-900">Soutenir des causes</h2>
              <div className="">
                <p>qui me tiennent à coeur</p>
              </div>
              <div className="bt-1 border-color-1 mt-30 mb-50"></div>
              <div className="loop-grid mb-30">
                <div className="row">
                  <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated">
                    <div className="post-card-1 border-radius-10 hover-up h-100">
                      <div
                        className="post-thumb thumb-overlay img-hover-slide position-relative"
                        style={{ backgroundImage: `url(${Jed.src})` }}
                      >
                        <a className="img-link" href="details"></a>
                        <ul className="social-share">
                          <li>
                            <a href="#">
                              <i
                                className="fa-solid fa-share-nodes"
                                style={{ color: "#fff" }}
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="fb"
                              href="#"
                              title="Share on Facebook"
                              target="_blank"
                            >
                              <i
                                className="fa-brands fa-facebook-f"
                                style={{ color: "#fff" }}
                              ></i>
                            </a>
                          </li>
                          <li>
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
                          <li>
                            <a
                              className="pt"
                              href="#"
                              target="_blank"
                              title="Pin it"
                            >
                              <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="post-content p-30">
                        {/* <!-- <div className="entry-meta meta-0 font-small mb-10">
                        <span className="post-cat text-warning">Fashion</span>
                      </div> --> */}
                        <div className="d-flex post-card-content">
                          <h5 className="post-title mb-20 font-weight-900">
                            "La générosité est la meilleure chose qui existe,
                            car elle est l'origine de toutes les autres vertus."
                          </h5>
                          <p className="font-medium text-muted">
                            Je souhaite mettre en avant l'importance de la
                            générosité et du don envers les autres, soulignant
                            que donner peut non seulement aider les autres, mais
                            peut aussi contribuer à son propre développement
                            personnel, dans une dynamique harmonieuse et pour le
                            bien commun.
                          </p>
                          <button
                            className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow"
                            onClick={() => {
                              window.open("/#contact", "_self");
                            }}
                          >
                            Faire un don
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated">
                    <div className="post-card-1 border-radius-10 hover-up h-100">
                      <div
                        className="post-thumb thumb-overlay img-hover-slide position-relative"
                        style={{ backgroundImage: `url(${Eden.src})` }}
                      >
                        <a className="img-link" href="details"></a>
                        <ul className="social-share">
                          <li>
                            <a href="#">
                              <i
                                className="fa-solid fa-share-nodes"
                                style={{ color: "#fff" }}
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="fb"
                              href="#"
                              title="Share on Facebook"
                              target="_blank"
                            >
                              <i
                                className="fa-brands fa-facebook-f"
                                style={{ color: "#fff" }}
                              ></i>
                            </a>
                          </li>
                          <li>
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
                          <li>
                            <a
                              className="pt"
                              href="#"
                              target="_blank"
                              title="Pin it"
                            >
                              <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="post-content p-30">
                        <div className="d-flex post-card-content">
                          <h5 className="post-title mb-20 font-weight-900">
                            Eden ONG Orphelinat / Association
                          </h5>
                          <p className="font-medium text-muted">
                            L’association Eden soutient l’orphelinat «la
                            Bergerie» pour: sa vocation humanitaire au service
                            d'enfants orphelins ; on autonomie de fonctionnement
                            ; la stabilité politique de la République du Bénin.
                            Après quelques années d'existence, elle a élargit
                            ses activités en intégrant une école et un centre de
                            santé à l'orphelinat pour contribuer au bien-être
                            des orphelins.
                          </p>
                          <button
                            className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow"
                            onClick={() => {
                              window.open(
                                "https://www.eden-ong.org/soutien",
                                "_blank"
                              );
                            }}
                          >
                            Faire un don
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated">
                    <div className="post-card-1 border-radius-10 hover-up h-100">
                      <div
                        className="post-thumb thumb-overlay img-hover-slide position-relative"
                        style={{ backgroundImage: `url(${Ecole229.src})` }}
                      >
                        <a className="img-link" href="details"></a>
                        <ul className="social-share">
                          <li>
                            <a href="#">
                              <i
                                className="fa-solid fa-share-nodes"
                                style={{ color: "#fff" }}
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="fb"
                              href="#"
                              title="Share on Facebook"
                              target="_blank"
                            >
                              <i
                                className="fa-brands fa-facebook-f"
                                style={{ color: "#fff" }}
                              ></i>
                            </a>
                          </li>
                          <li>
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
                          <li>
                            <a
                              className="pt"
                              href="#"
                              target="_blank"
                              title="Pin it"
                            >
                              <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="post-content p-30">
                        <div className="d-flex post-card-content">
                          <h5 className="post-title mb-20 font-weight-900">
                            Ecole 229 Enseignement / Formation
                          </h5>
                          <p className="font-medium text-muted">
                            L'école 229 a pour mission de faire du numérique un
                            levier d’inclusion capable de révéler des talents et
                            d’assurer l'autonomie des apprenants à travers leur
                            insertion professionnelle. Elle oeuvre pour le
                            développement de l'écosystème numérique en Afrique
                            pour favoriser l'inclusivité et l'accès à l'emploi.
                          </p>
                          <button
                            className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow"
                            onClick={() => {
                              window.open(
                                "https://ecole229.bj/partenaires/",
                                "_blank"
                              );
                            }}
                          >
                            Faire un don
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="contact" className="container single-content mb-100">
          <div className="entry-wraper mt-50">
            <h1 className="mt-30">Créer des opportunités</h1>
            <p>
              Discussions, échanges, besoin d'accompagnement ou d'intervenant,
              chaque message trouvera écho !
            </p>
            <hr className="wp-block-separator is-style-wide" />
            <form
              className="form-contact comment_form"
              onSubmit={handleSubmit}
              id="commentForm"
            >
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Nom"
                      required
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="prenom"
                      id="prenom"
                      type="text"
                      placeholder="Prenom"
                      required
                      value={prenom}
                      onChange={(e) => setPrenom(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="E-mail"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="tel"
                      id="tel"
                      type="text"
                      placeholder="Téléphone"
                      required
                      value={tel}
                      onChange={(e) => setTel(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      className="form-control w-100"
                      name="comment"
                      id="comment"
                      placeholder="Message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="col-12 mb-20">
                  <div className="form-row">
                    <label className="form-check">
                      <input
                        className="mr-5"
                        name="name"
                        type="checkbox"
                        value={checked.toString()}
                        onChange={(e) => {
                          setChecked(e.target.checked);
                        }}
                      />
                      J'accepte les &nbsp;
                      <a href="#" target="_blank">
                        termes &nbsp;
                      </a>
                      et
                      <a href="#" target="_blank">
                        &nbsp; conditions necessaires
                      </a>
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                {isSubmitting ? (
                  <Loader />
                ) : (
                  <button
                    type="submit"
                    className="button button-contactForm"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Soumettre votre message
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </>
      {/*  <!-- End Main content --> */}
      {/*    <!--site-bottom--> */}
      {/*  <BottomSection /> */}
    </>
  );
};

export default page;
