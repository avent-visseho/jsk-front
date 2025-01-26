"use client";
import React, { useEffect, useState } from "react";
import {
  fullSearch,
  getHeadlined,
} from "@/services/DataService";
import BottomSection from "@/components/BottomSection";
import Pagination from "@/components/Pagination";
import { useSearchParams } from "next/navigation";

const page = () => {
  const [books, setBooks] = useState([]);
  const [tribunes, setTribunes] = useState([]);
  const [bookPage, setBookPage] = useState(1);
  const [tribunesPage, setTribunesPage] = useState(1);
  const [bookTotal, setBookTotal] = useState(0);
  const [tribunesTotal, setTribunesTotal] = useState(0);
  const [headlines, setHeadlines] = useState<any[]>([]);

  const searchParams = useSearchParams();

  const q = searchParams.get("q") ?? "";

  useEffect(() => {
    getHeadlined().then((res) => {
      setHeadlines(res);
    });
    fullSearch("book", q, bookPage).then((res) => {
      setBooks(res.data.data);
      setBookTotal(res.data.total);
    });

    fullSearch("tribune", q, tribunesPage).then((res) => {
      setTribunes(res.data.data);
      setTribunesTotal(res.data.total);
    });
  }, [bookPage, tribunesPage, q]);
  return (
    <>
      {/* <!-- Start Main content --> */}
      <main>
        <div className="archive-header pt-50 text-left">
          <div className="container">
            <h2 className="font-weight-900">Livres, articles & tribunes</h2>
            <span className="text-primary font-weight-900">À la une</span>
            <div className="bt-1 border-color-1 mt-30 mb-50"></div>
          </div>
        </div>
        <div className="container">
          <div className="loop-grid mb-30">
            <div className="row">
              {headlines.length > 0
                ? headlines.map((head: any) => (
                    <article
                      className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
                      data-wow-delay="0.2s"
                    >
                      <div className="post-card-1 border-radius-10 hover-up h-100">
                        <div
                          className="post-thumb thumb-overlay img-hover-slide position-relative"
                          style={{
                            backgroundImage: `url(${process.env.NEXT_PUBLIC_FILE_URL}/${head.coverImage})`,
                          }}
                        >
                          <a className="img-link" href="single.html"></a>
                          <span className="top-right-icon bg-success">
                            <i className="elegant-icon icon_camera_alt"></i>
                          </span>
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
                            <a href="">
                              <span className="post-cat text-success">
                                {head?.type == "book" ? "Livre" : "Article"}
                              </span>
                            </a>
                          </div>
                          <div className="d-flex post-card-content">
                            <h5 className="post-title mb-20 font-weight-900">
                              {head.title}
                            </h5>
                            <p
                              className="font-medium text-muted blog-box"
                              dangerouslySetInnerHTML={{
                                __html: head?.description,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </article>
                  ))
                : ""}
            </div>
            <div className="mb-30">
              <span className="text-primary font-weight-900">
                Tous les livres
              </span>
            </div>
            <div className="row">
              {books?.map((book: any, index) => (
                <article
                  className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
                  key={index}
                  data-wow-delay="0.2s"
                >
                  <div className="bshadowbox border-radius-10 hover-up h-100">
                    <div className="post-content p-30">
                      <div className="entry-meta meta-0 font-small mb-10">
                        <span>
                          <i
                            className="fa-solid fa-book"
                            style={{ color: "#f36944" }}
                          ></i>
                        </span>
                      </div>
                      <div className="d-flex post-card-content">
                        <h5 className="post-title mb-20 text-danger font-weight-900">
                          {book?.title}
                        </h5>
                        <p
                          className="font-medium text-muted"
                          dangerouslySetInnerHTML={{
                            __html: book?.description,
                          }}
                        />
                      </div>
                      <button
                        className="btn btn-radius bg-dark text-white font-small box-shadow"
                        onClick={() => {
                          window.open(book?.link, "_blank");
                        }}
                      >
                        Acheter ce livre
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <Pagination
              total={bookTotal}
              currentPage={bookPage}
              onPageChange={(page) => {
                setBookPage(page);
              }}
            />
            <div className="mb-30">
              <span className="text-primary font-weight-900">
                Tous les articles & tribunes
              </span>
            </div>
            <div className="row">
              {tribunes?.map((tribune: any, index) => (
                <article
                  className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
                  data-wow-delay="0.2s"
                  key={index}
                >
                  <div className="bshadowbox border-radius-10 hover-up h-100">
                    <div className="post-content p-30">
                      <div className="entry-meta meta-0 font-small mb-10">
                        <a href="">
                          <span className="post-cat text-success">
                            {tribune?.source?.name}
                          </span>
                        </a>
                        <span>
                          <i
                            className="fa-solid fa-book"
                            style={{ color: "#f36944" }}
                          ></i>
                        </span>
                      </div>
                      <div className="d-flex post-card-content">
                        <h5 className="post-title mb-20 text-danger font-weight-900">
                          {tribune?.title}
                        </h5>
                        <p
                          className="font-medium text-muted"
                          dangerouslySetInnerHTML={{
                            __html: tribune?.description,
                          }}
                        />
                      </div>
                      <button
                        className="btn btn-radius bg-dark text-white font-small box-shadow"
                        onClick={() => {
                          window.open(tribune?.link, "_blank");
                        }}
                      >
                        Tout lire
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <Pagination
              total={tribunesTotal}
              currentPage={tribunesPage}
              onPageChange={(page) => {
                setTribunesPage(page);
              }}
            />
          </div>
        </div>
      </main>

      <BottomSection />
    </>
  );
};

export default page;
