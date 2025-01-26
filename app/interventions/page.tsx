"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Jed from "@/assets/imgs/jed/blogs/jed.png";
import {
  fullSearch
} from "@/services/DataService";
import { getEmbedUrl } from "@/helpers/utils";
import BottomSection from "@/components/BottomSection";
import Pagination from "@/components/Pagination";
import { useSearchParams } from "next/navigation";
import Loader from "@/components/Loader";
const page = () => {
  const [interventions, setInterventions] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  const q = searchParams.get("q") ?? "";
  useEffect(() => {
    setLoading(true);
    fullSearch("intervention", q, page)
      .then((res) => {
        setInterventions(res.data?.data);
        setTotal(res.data.total);
      })
      .catch((error) => {
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, q]);
  return (
    <>
      {/* <!-- Start Main content --> */}
      <>
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
              {loading ? (
                <Loader />
              ) : (
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
                            src={getEmbedUrl(interv?.videoUrl)}
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
              )}
              <Pagination
                total={total}
                currentPage={page}
                onPageChange={(page) => {
                  setPage(page);
                }}
              />
            </div>
          </div>
        </div>
      </>
      {/*  <!-- End Main content --> */}
      {/*    <!--site-bottom--> */}
      <BottomSection />
    </>
  );
};

export default page;
