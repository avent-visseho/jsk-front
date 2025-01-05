"use client";
import { useEffect, useState } from "react";

import {
  getPost,
  searchPost,
} from "@/services/DataService";
import { formatPostName, formatPublishedDate } from "@/helpers/utils";
import Link from "next/link";
import BottomSection from "@/components/BottomSection";

const page = () => {
  const [posts, setPosts] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);
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
      <BottomSection />

    </>
  );
};

export default page;
