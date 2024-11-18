"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Thumb2 from "@/assets/imgs/news/thumb-2.jpg";
import Thumb3 from "@/assets/imgs/news/thumb-3.jpg";
import Thumb4 from "@/assets/imgs/news/thumb-4.jpg";
import Thumb6 from "@/assets/imgs/news/thumb-6.jpg";
import Jed from "@/assets/imgs/jed/blogs/jed.png";
import {
  getBook,
  getIntervention,
  getPost,
  getTribunes,
} from "@/services/DataService";
const page = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [tribunes, setTribunes] = useState<any[]>([]);
  const [interventions, setInterventions] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    getIntervention().then((res) => {
      setInterventions(res.data);
    });
    getBook().then((res) => {
      setBooks(res.data.data);
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
      <main>
        <div className="archive-header pt-50">
          <div className="container">
            <h2 className="font-weight-900">Interventions</h2>
            <h5 className="mt-20 text-primary">
              Radio, podcasts, conférence, modération
            </h5>
            <div className="bt-1 border-color-1 mt-30 mb-50"></div>
          </div>
        </div>
        <div className="pb-50">
          <div className="container">
            <div className="loop-grid mb-30">
              <div className="row">
                {interventions?.map((interv: any, index) => (
                  <div
                    className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
                    data-wow-delay="0.2s"
                    key={index}
                  >
                    <div className="post-card-1 border-radius-10 hover-up h-100">
                      <div className="post-thumb position-relative">
                        <iframe
                          width="100%"
                          height="200"
                          src={interv?.videoUrl}
                          title={interv?.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <div className="post-content p-30">
                        <div className="entry-meta meta-0 font-small mb-10">
                          <a href="details">
                            <span
                              className="post-cat text-info"
                              style={{
                                textTransform: "capitalize",
                              }}
                            >
                              {interv?.type == "conference"
                                ? "Conférence"
                                : interv?.type == "moderation"
                                ? "Modération"
                                : interv.type}
                            </span>
                          </a>
                        </div>
                        <div className="d-flex post-card-content">
                          <h6 className="post-title mb-20 font-weight-900">
                            <a href="single.html">{interv?.title}</a>
                          </h6>
                          <div>
                            <p
                              className="font-medium text-muted"
                              dangerouslySetInnerHTML={{
                                __html: interv?.description,
                              }}
                            />
                          </div>
                          <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                            <Image
                              className="about-author-img"
                              src={Jed}
                              alt="Jed Sophonie KOBOUDE"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                    {tribunes
                      ?.slice(0, 5)
                      ?.map((tribune: any, index: number) => (
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
                    {interventions
                      ?.slice(0, 5)
                      ?.map((intervention: any, index: number) => (
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
               
                <div className="post-content media-body">
                  <h6>
                    <a href="category.html">Tribunes</a>
                  </h6>
                </div>
              </div>
              <div className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
                
                <div className="post-content media-body">
                  <h6>
                    <a href="category.html">Podcast</a>
                  </h6>
                </div>
              </div>
              <div className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
                
                <div className="post-content media-body">
                  <h6>
                    <a href="category.html">Emission</a>
                  </h6>
                </div>
              </div>
              <div className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
                
                <div className="post-content media-body">
                  <h6>
                    <a href="category.html">Livres</a>
                  </h6>
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
