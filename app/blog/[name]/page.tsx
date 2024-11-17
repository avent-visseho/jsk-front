"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Blog1 from "@/assets/imgs/jed/blogs/blog-1.jpg";
import Thumb3 from "@/assets/imgs/news/thumb-3.jpg";
import Thumb4 from "@/assets/imgs/news/thumb-4.jpg";
import Thumb6 from "@/assets/imgs/news/thumb-6.jpg";
import Jed from "@/assets/imgs/jed/blogs/jed.png";
import CoupEtatAfrique from "@/assets/imgs/jed/blogs/coupEtatAfrique.png";
import { useSearchParams } from "next/navigation";
import { getSinglePost, readPost } from "@/services/DataService";
import { formatPublishedDate } from "@/helpers/utils";

const BlogDetail = ({ params }: { params: Promise<{ name: string }> }) => {
  const name = params.then(({ name }) => {
    return name;
  });
  const [post, setPost] = useState<any>(null);
  const searchParams = useSearchParams();

  const id = searchParams.get("q") ?? "";

  useEffect(() => {
    console.log("location", id);
    getSinglePost(id).then((res) => {
      setPost(res.data.data);
    });
    readPost(id);
  }, []);
  return (
    <div>
      <main className="bg-grey pt-50 pb-50">
        <div className="pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="single-content2">
                  <div className="entry-header entry-header-style-1 mb-50">
                    <h1 className="entry-title mb-30 font-weight-900">
                      {post?.title}
                    </h1>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="entry-meta align-items-center meta-2 font-small color-muted">
                          <p className="mb-5">
                            <a className="author-avatar" href="#">
                              <Image
                                className="img-circle"
                                src={Jed}
                                alt="Jed Sophonie KOBOUDE"
                              />
                            </a>
                            Par &nbsp;
                            <a href="author.html">
                              <span className="author-name font-weight-bold">
                                {post?.title &&
                                  post?.author?.firstName +
                                    " " +
                                    post?.author?.lastName}
                              </span>
                            </a>
                          </p>
                          <span className="mr-10">
                            {formatPublishedDate(post?.publishedAt)}
                          </span>
                          <span className="has-dot">
                            {" "}
                            {post?.readCount} lectures
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6 text-right d-none d-md-inline">
                        <ul className="header-social-network d-inline-block list-inline mr-15">
                          <li className="list-inline-item text-muted"></li>
                          <li className="list-inline-item">
                            <a
                              className="social-icon fb text-xs-center"
                              target="_blank"
                              href="#"
                            >
                              <i
                                className="fa-solid fa-facebook-f"
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
                              <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!--end single header--> */}
                  <figure
                    className="image mb-30 m-auto text-center border-radius-10"
                    style={{
                      minHeight: "450px",
                    }}
                  >
                    {post?.coverImage && (
                      <Image
                        className="border-radius-10"
                        src={`${process.env.NEXT_PUBLIC_FILE_URL}/${post?.coverImage}`}
                        alt={post?.title}
                        fill
                      />
                    )}
                  </figure>
                  {/*  <!--figure--> */}
                  <article className="entry-wraper mb-50">
                    <div className="excerpt mb-30">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post?.content,
                        }}
                      />
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-lg-4" id="author">
                <div className="widget-area">
                  <div className="sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 bg-white border-radius-5 has-border wow fadeInUp animated">
                    <Image
                      src={Jed}
                      className="about-author-img mb-25"
                      alt="Jed Sophonie KOBOUDE"
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
                    <strong>Suivez-moi : </strong>
                    <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                      <li className="list-inline-item">
                        <a
                          className="fb"
                          href="#"
                          target="_blank"
                          title="Facebook"
                        >
                          <i
                            className="fa-solid fa-facebook-f"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
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
                      <li className="list-inline-item">
                        <a
                          className="pt"
                          href="#"
                          target="_blank"
                          title="Pin it"
                        >
                          <i
                            className="fa-brands fa-pinterest-p"
                            style={{ color: "#fff" }}
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                    <div className="widget-header-1 position-relative mb-30">
                      <h5 className="mt-5 mb-30">Les plus populaires</h5>
                    </div>
                    <div className="post-block-list post-module-1">
                      <ul className="list-post">
                        <li className="mb-30 wow fadeInUp animated">
                          <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                            <div className="post-content media-body">
                              <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                <a href="details">
                                  Spending Some Quality Time with Kids? It’s
                                  Possible
                                </a>
                              </h6>
                              <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                <span className="post-on">05 August</span>
                                <span className="post-by has-dot">
                                  150 views
                                </span>
                              </div>
                            </div>
                            <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                              <a className="color-white" href="details">
                                <Image src={Thumb6} alt="" />
                                {/* <img src="assets/imgs/news/thumb-6.jpg" alt="" /> */}
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="mb-30 wow fadeInUp animated">
                          <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                            <div className="post-content media-body">
                              <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                <a href="details">
                                  Relationship Podcasts are Having “That” Talk
                                </a>
                              </h6>
                              <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                <span className="post-on">12 August</span>
                                <span className="post-by has-dot">
                                  6k views
                                </span>
                              </div>
                            </div>
                            <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                              <a className="color-white" href="details">
                                <Image src={Blog1} alt="" />
                                {/* <img src="assets/imgs/news/thumb-7.jpg" alt="" /> */}
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="mb-30 wow fadeInUp animated">
                          <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                            <div className="post-content media-body">
                              <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                <a href="details">
                                  Here’s How to Get the Best Sleep at Night
                                </a>
                              </h6>
                              <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                <span className="post-on">15 August</span>
                                <span className="post-by has-dot">
                                  16k views
                                </span>
                              </div>
                            </div>
                            <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                              <a className="color-white" href="details">
                                <Image src={Thumb3} alt="" />
                                {/*  <img src="assets/imgs/news/thumb-2.jpg" alt="" /> */}
                              </a>
                            </div>
                          </div>
                        </li>
                        <li className="wow fadeInUp animated">
                          <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                            <div className="post-content media-body">
                              <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                <a href="details">
                                  America’s Governors Get Tested for a Virus
                                  That Is Testing Them
                                </a>
                              </h6>
                              <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                <span className="post-on">12 August</span>
                                <span className="post-by has-dot">
                                  3k views
                                </span>
                              </div>
                            </div>
                            <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                              <a className="color-white" href="details">
                                <Image src={Thumb3} alt="" />
                                {/* <img src="assets/imgs/news/thumb-3.jpg" alt="" /> */}
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogDetail;
