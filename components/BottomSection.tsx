"use client";
import {
  getBook,
  getIntervention,
  getPost,
  getTribunes,
} from "@/services/DataService";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const BottomSection = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [tribunes, setTribunes] = useState<any[]>([]);
  const [interventions, setInterventions] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    getIntervention().then((res) => {
      setInterventions(res.data?.data);
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
                  {tribunes?.slice(0, 3)?.map((tribune: any, index: number) => (
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
                    ?.slice(0, 3)
                    ?.map((intervention: any, index: number) => (
                      <li className="mb-30" key={index}>
                        <div className="d-flex hover-up-2 transition-normal">
                          {/* <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                            <div className="color-white">
                              <Image
                                src={intervention?.imageUrl}
                                alt={"Image"}
                                width={90}
                                height={80}
                              />
                            </div>
                          </div> */}
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
                  {books?.slice(0, 3)?.map((book: any, index: number) => (
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
                  <a href="#">Tribunes</a>
                </h6>
              </div>
            </div>
            <div className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
              <div className="post-content media-body">
                <h6>
                  <a href="#">Podcast</a>
                </h6>
              </div>
            </div>
            <div className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
              <div className="post-content media-body">
                <h6>
                  <a href="#">Emission</a>
                </h6>
              </div>
            </div>
            <div className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
              <div className="post-content media-body">
                <h6>
                  <a href="#">Livres</a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
