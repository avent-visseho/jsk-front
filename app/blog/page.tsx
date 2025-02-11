"use client";
import { useEffect, useState } from "react";

import {  getCategories, searchPost } from "@/services/DataService";
import { formatPostName, formatPublishedDate } from "@/helpers/utils";
import Link from "next/link";
import BottomSection from "@/components/BottomSection";
import { useSearchParams } from "next/navigation";
import Loader from "@/components/Loader";
import Pagination from "@/components/Pagination";
import Multiselect from "multiselect-react-dropdown";

const page = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const [total, setTotal] = useState(0);
  const q = searchParams.get("q") ?? "";
  const [isOpen, setIsOpen] = useState(false);
  const [tags, setTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState({
    query: "",
    tags: "",
    dateFrom: "",
    dateTo: "",
    category: "",
  });
  const [search, setSearch] = useState(true);

  const handleReset = () => {
    setSearchQuery({
      query: "",
      tags: "",
      dateFrom: "",
      dateTo: "",
      category: "",
    });
  };

  const handleSearch = (e:any) => {
    e.preventDefault();
    setSearch(!search);
    // Logique de recherche à implémenter
    console.log("Searching with params:", searchQuery);
  };

  useEffect(() => {
    setLoading(true);
    searchPost(
      searchQuery.query,
      page,
      10,
      searchQuery.dateFrom,
      searchQuery.dateTo,
      searchQuery.tags
    )
      .then((res) => {
        setTotal(res.data.total);
        setPosts(res.data.data);
      })
      .catch(() => {
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
    getCategories().then((res) => {
      setTags(res.data.data);
    });
  }, [q, page, searchQuery.query, search]);

  return (
    <>
      {/* <!-- Start Main content --> */}
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
      <div className="search-container">
        <div className="search-main">
          <div className="search-input-wrapper">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#666"
            >
              <path
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Rechercher dans le blog..."
              value={searchQuery.query}
              onChange={(e) =>
                setSearchQuery({ ...searchQuery, query: e.target.value })
              }
            />
          </div>

          <button
            className="toggle-filters-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M4 4h16M4 12h16M4 20h16"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Filtres avancés
          </button>
        </div>

        <div
          className={`filters-panel ${isOpen ? "open" : ""}`}
          style={{
            transition: "0.5",
          }}
        >
          <form
            onSubmit={handleSearch}
            style={{
              transition: "0.5",
            }}
          >
            <div className="filters-grid">
              <div className="filter-group">
                <label>Tag</label>
                <div>
                  <Multiselect
                    options={tags}
                    displayValue="name"
                    emptyRecordMsg="Aucun tags disponible"
                    onSelect={(values) => {
                      setSearchQuery({
                        ...searchQuery,
                        tags: values?.map((item: any) => item.id).join(","),
                      });
                    }}
                    placeholder="Selectionner"
                    onRemove={(values) => {
                      setSearchQuery({
                        ...searchQuery,
                        tags: values?.map((item: any) => item.id).join(","),
                      });
                    }}
                    style={{
                      padding: "8px",
                      border: "1px solid #e0e0e0",
                      borderRadius: "6px",
                      fontSize: "14px",
                      width: "100%",
                    }}
                    loading={loading}
                    keepSearchTerm
                  />
                </div>
              </div>

              <div className="filter-group">
                <label>Date de début</label>
                <input
                  type="date"
                  value={searchQuery.dateFrom}
                  onChange={(e) =>
                    setSearchQuery({
                      ...searchQuery,
                      dateFrom: e.target.value,
                    })
                  }
                  max={new Date().toISOString()?.split("T")[0]}
                  placeholder="Selectionner une date de début"
                />
              </div>

              <div className="filter-group">
                <label>Date de fin</label>
                <input
                  type="date"
                  value={searchQuery.dateTo}
                  onChange={(e) =>
                    setSearchQuery({
                      ...searchQuery,
                      dateTo: e.target.value,
                    })
                  }
                  min={new Date().toISOString()?.split("T")[0]}
                />
              </div>
            </div>

            <div className="filters-actions">
              <button
                type="button"
                className="btn btn-reset"
                onClick={handleReset}
              >
                Réinitialiser
              </button>
              <button
                type="submit"
                className="btn btn-apply"
                onClick={() => {}}
              >
                Appliquer les filtres
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="pb-50">
        <div className="container">
          <div className="loop-grid mb-30">
            {loading ? (
              <Loader />
            ) : posts?.length == 0 ? (
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                Aucun résultat trouvé
              </div>
            ) : (
              <>
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
                                <a href="#" key={indexCat}>
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
                                href={`/blog/article?title=${formatPostName(
                                  post?.title
                                )}&q=${post?.id}`}
                              >
                                {post?.title}
                              </Link>
                            </h6>
                            <div>
                              <p
                                className="font-medium text-muted blog-box"
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
                              {/* <span className="post-by has-dot">
                                {post?.readCount} lectures
                              </span> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                <Pagination
                  total={total}
                  currentPage={page}
                  onPageChange={(page) => {
                    setPage(page);
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
      {/*  <!-- End Main content --> */}
      {/*    <!--site-bottom--> */}
      <BottomSection />
    </>
  );
};

export default page;
