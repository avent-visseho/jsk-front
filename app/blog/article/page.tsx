"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Jed from "@/assets/imgs/jed/blogs/jed.png";
import { useSearchParams } from "next/navigation";
import { getPost, getSinglePost, readPost } from "@/services/DataService";
import { formatPublishedDate } from "@/helpers/utils";
import Loader from "@/components/Loader";
import SocialLinks from "@/components/SocialLinks";


const BlogDetail = () => {
  const [post, setPost] = useState<any>(null);
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const id = searchParams.get("q") ?? "";

  useEffect(() => {
    setLoading(true);
    getSinglePost(id)
      .then((res) => {
        setPost(res.data.data);
      })
      .catch(() => {
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
    readPost(id);
    getPost().then((res) => {
      setPosts(res.data.data);
    });
  }, [id]);
  return (
    <div>
      <main className="bg-grey pt-50 pb-50">
        <div className="pb-50">
          {loading ? (
            <Loader />
          ) : (
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
                                  width={100}
                                  height={100}
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
                              Le {formatPublishedDate(post?.publishedAt)}
                            </span>
                            {/* <span className="has-dot">
                              {" "}
                              {post?.readCount} lectures
                            </span> */}
                          </div>
                        </div>
                        <div className="col-md-6 text-right d-none d-md-inline">
                          <SocialLinks />
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
                      <div className=" mb-30">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: post?.content,
                          }}
                          style={{
                            //fontSize: "15px",
                            lineHeight: "30px",
                          }}
                          className="text-muted font-medium"
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
                        width={150}
                        height={150}
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
                        Passionné par les nouvelles technologies de
                        l'information, l'économie, l'énergie, l’Histoire et,
                        surtout, l'Afrique, et animé par la joie de transmettre,
                        je suis auteur de deux essais et intervient
                        régulièrement au travers de chroniques écrites ou
                        d’émissions télévisées.
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
                        <h5 className="mt-5 mb-30">Les plus récents</h5>
                      </div>
                      <div className="post-block-list post-module-1">
                        <ul className="list-post">
                          {posts?.slice(0, 5).map((data: any, index) => (
                            <li
                              className="mb-30 wow fadeInUp animated"
                              key={index}
                            >
                              <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                                <div className="post-content media-body">
                                  <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                    <a href="details">{data.title}</a>
                                  </h6>
                                  <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                    <span className="post-on">{formatPublishedDate(data?.publishedAt)}</span>
                                    {/* <span className="post-by has-dot">
                                      150 views
                                    </span> */}
                                  </div>
                                </div>
                                <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                                  <a className="color-white" href="details">
                                    <Image
                                      src={`${process.env.NEXT_PUBLIC_FILE_URL}/${data.coverImage}`}
                                      alt=""
                                      width={100}
                                      height={100}
                                    />
                                    {/* <img src="assets/imgs/news/thumb-6.jpg" alt="" /> */}
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
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
export const dynamic = "force-static";
export default BlogDetail;
