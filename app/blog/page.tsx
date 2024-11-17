"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Thumb2 from "@/assets/imgs/news/thumb-2.jpg";
import Thumb3 from "@/assets/imgs/news/thumb-3.jpg";
import Thumb4 from "@/assets/imgs/news/thumb-4.jpg";
import Thumb6 from "@/assets/imgs/news/thumb-6.jpg";

import {
  getBook,
  getIntervention,
  getPost,
  getTribunes,
  searchPost,
} from "@/services/DataService";
import { formatPostName, formatPublishedDate } from "@/helpers/utils";
import Link from "next/link";

const page = () => {
  const [posts, setPosts] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState([]);
  const [tribunes, setTribunes] = useState([]);
  const [interventions, setInterventions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search != "") {
      searchPost(search, page).then((res) => {
        setPosts(res.data.data);
        setTotalPage(res.data.total);
      });
    } else {
      getPost(page).then((res) => {
        setTotalPage(res.data.total);
        setPosts(res.data.data);
      });
    }
    getBook().then((res) => {
      setBooks(res.data.data);
    });
    getIntervention().then((res) => {
      setInterventions(res.data);
    });

    getTribunes().then((res) => {
      setTribunes(res.data.data);
    });
  }, [search, page]);
  return (
    <>
      {/* <!-- Start Main content --> */}
      <main>
        <div className="archive-header pt-50">
          <div className="container">
            <h2 className="font-weight-900">JSK Opinions</h2>
            <p className="mt-20">
              Je souhaite apporter un éclairage nouveau sur des questions
              complexes liées, entre autres, au continent africain. Je parlerai
              notamment des impacts des nouvelles technologies de l'information
              sur l'économie et la société, des enjeux économiques de l'Afrique,
              de la transition énergétique, et des politiques publiques à mettre
              en œuvre pour un développement durable. Chaque week-end, je vous
              adresserai une livraison.
            </p>
            <div className="bt-1 border-color-1 mt-30 mb-50"></div>
          </div>
        </div>
        <div className="pb-50">
          <div className="container">
            <div className="loop-grid mb-30">
              <div className="row">
                {posts?.map((post: any, index) => (
                  <article
                    className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
                    data-wow-delay="0.2s"
                    key={index}
                  >
                    <div className="post-card-1 border-radius-10 hover-up h-100">
                      <div
                        className="post-thumb thumb-overlay img-hover-slide position-relative"
                        style={{
                          backgroundImage: `url(${process.env.NEXT_PUBLIC_FILE_URL}/${post.coverImage})`,
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
                              <a href="category.html" key={indexCat}>
                                <span className="post-cat text-info">
                                  {category?.name}
                                </span>
                              </a>
                            )
                          )}
                        </div>
                        <div className="d-flex post-card-content">
                          <h6 className="post-title mb-20 font-weight-900">
                            <Link
                              href={`/blog/${formatPostName(post?.title)}?q=${
                                post?.id
                              }`}
                            >
                              {post?.title}
                            </Link>
                          </h6>
                          <div>
                            <p
                              className="font-medium text-muted"
                              dangerouslySetInnerHTML={{
                                __html: post?.content,
                              }}
                            />
                          </div>
                          <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                            <span className="post-on">
                              {"Publié le " +
                                formatPublishedDate(post?.publishedAt)}
                            </span>
                            <span className="post-by has-dot">
                              {post?.readCount} lectures
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
      </main>
      {/*  <!-- End Main content --> */}
      {/*    <!--site-bottom--> */}
      <div className="site-bottom pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="sidebar-widget widget-latest-posts mb-30 wow fadeInUp animated">
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Publications</h5>
                </div>
                <div className="post-block-list post-module-1">
                  <ul className="list-post">
                    {tribunes?.slice(0, 5)?.map((tribune: any, index: number) => (
                      <li className="mb-30" key={index}>
                        <div className="d-flex hover-up-2 transition-normal">
                          <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                            <div className="color-white">
                              <Image
                                src={`${process.env.NEXT_PUBLIC_FILE_URL}/${tribune?.coverImage}`}
                                alt={tribune?.title}
                                width={90}
                                height={80}
                              />
                            </div>
                          </div>
                          <div className="post-content media-body">
                            <h6 className="post-title mb-15 text-limit-2-row font-medium">
                              <a href={tribune?.link} target="_blank">
                                {tribune?.title}
                              </a>
                            </h6>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on text-primary">
                                <strong>{tribune?.source?.name} </strong>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="sidebar-widget widget-latest-posts mb-30 wow fadeInUp animated"
                data-wow-delay="0.2s"
              >
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Interventions</h5>
                </div>
                <div className="post-block-list post-module-1">
                  <ul className="list-post">
                    {interventions?.slice(0, 5)?.map((intervention: any, index: number) => (
                      <li className="mb-30" key={index}>
                        <div className="d-flex hover-up-2 transition-normal">
                          <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                            <div className="color-white">
                              <Image
                                src={intervention?.imageUrl}
                                alt={intervention?.title}
                                width={90}
                                height={80}
                              />
                            </div>
                          </div>
                          <div className="post-content media-body">
                            <h6 className="post-title mb-15 text-limit-2-row font-medium">
                              <a href={intervention?.link} target="_blank">
                                {intervention?.title}
                              </a>
                            </h6>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span
                                className="post-on text-primary"
                                style={{
                                  textTransform: "capitalize",
                                }}
                              >
                                <strong>
                                  {intervention?.type == "conference"
                                    ? "Conférence"
                                    : intervention?.type == "moderation"
                                    ? "Modération"
                                    : intervention.type}{" "}
                                </strong>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="sidebar-widget widget-latest-posts mb-30 wow fadeInUp animated"
                data-wow-delay="0.4s"
              >
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Livres</h5>
                </div>
                <div className="post-block-list post-module-1">
                  <ul className="list-post">
                    {books?.slice(0, 5)?.map((book: any, index: number) => (
                      <li className="mb-30" key={index}>
                        <div className="d-flex hover-up-2 transition-normal">
                          <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                            <div className="color-white">
                              <Image
                                src={`${process.env.NEXT_PUBLIC_FILE_URL}/${book?.coverImage}`}
                                alt={book?.title}
                                width={90}
                                height={80}
                              />
                            </div>
                          </div>
                          <div className="post-content media-body">
                            <h6 className="post-title mb-15 text-limit-2-row font-medium">
                              <a href={book?.link} target="_blank">
                                {book?.title}
                              </a>
                            </h6>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on text-primary">
                                <strong>Livre</strong>
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-widget widget-latest-posts mb-30 mt-20 wow fadeInUp animated">
            <div className="widget-header-2 position-relative mb-30">
              <h5 className="mt-5 mb-30">Tags</h5>
            </div>
            <div className="carausel-3-columns">
              <div className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
                <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                  <a className="color-white" href="details">
                    <Image src={Thumb2} alt="" />
                  </a>
                </div>
                <div className="post-content media-body">
                  <h6>
                    <a href="category.html">Tribunes</a>
                  </h6>
                  <p className="text-muted font-small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
                <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                  <a className="color-white" href="details">
                    <Image src={Thumb3} alt="" />
                    {/* <img src="assets/imgs/news/thumb-2.jpg" alt="" /> */}
                  </a>
                </div>
                <div className="post-content media-body">
                  <h6>
                    <a href="category.html">Podcast</a>
                  </h6>
                  <p className="text-muted font-small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
                <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                  <a className="color-white" href="details">
                    <Image src={Thumb4} alt="" />
                    {/*  <img src="assets/imgs/news/thumb-3.jpg" alt="" /> */}
                  </a>
                </div>
                <div className="post-content media-body">
                  <h6>
                    <a href="category.html">Emission</a>
                  </h6>
                  <p className="text-muted font-small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
                <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                  <a className="color-white" href="details">
                    <Image src={Thumb6} alt="" />
                    {/* <img src="assets/imgs/news/thumb-4.jpg" alt="" /> */}
                  </a>
                </div>
                <div className="post-content media-body">
                  <h6>
                    <a href="category.html">Livres</a>
                  </h6>
                  <p className="text-muted font-small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
