import React from "react";
import Image from "next/image";
import Thumb2 from "@/assets/imgs/news/thumb-2.jpg";
import Thumb3 from "@/assets/imgs/news/thumb-3.jpg";
import Thumb4 from "@/assets/imgs/news/thumb-4.jpg";
import Thumb6 from "@/assets/imgs/news/thumb-6.jpg";
import FocCharure from "@/assets/imgs/jed/blogs/focCharure.jpg";
import AccelererDigit from "@/assets/imgs/jed/blogs/accerlererDigit.jpg";
import Talonomics from "@/assets/imgs/jed/blogs/talonomics.jpg";
import Mara from "@/assets/imgs/jed/blogs/mara.jpg";
import ComePremierFacteur from "@/assets/imgs/jed/blogs/comePremierFacteur.jpg";
import Entrepreunariat from "@/assets/imgs/jed/blogs/entrepreunariat.jpg";
import IndustriBenin from "@/assets/imgs/jed/blogs/industriBenin.jpg";
import DigitalSecourAfrique from "@/assets/imgs/jed/blogs/digitalSecourAfrique.png";
import CoupEtatAfrique from "@/assets/imgs/jed/blogs/coupEtatAfrique.png";
import Jed from "@/assets/imgs/jed/blogs/jed.png";
const page = () => {
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
                <div
                  className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
                  data-wow-delay="0.2s"
                >
                  <div className="post-card-1 border-radius-10 hover-up h-100">
                    <div className="post-thumb position-relative">
                      <iframe
                        width="100%"
                        height="200"
                        src="https://www.youtube.com/embed/ID_VIDEO"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="post-content p-30">
                      <div className="entry-meta meta-0 font-small mb-10">
                        <a href="details">
                          <span className="post-cat text-info">Podcast</span>
                        </a>
                      </div>
                      <div className="d-flex post-card-content">
                        <h6 className="post-title mb-20 font-weight-900">
                          <a href="single.html"> Les Insights de l'éco</a>
                        </h6>
                        <div>
                          <p className="font-medium text-muted">
                            Le 5 juillet 2022, l'💶 s'est effondré face au 💵
                            ... Quelles sont les enjeux et les perspectives
                            lié-e-s à cet événement notamment pour les économies
                            des pays de la zone FCFA ? Sophonie @Jed KOBOUDE -
                            Economiste et Directeur General de l'Afrique des
                            Idées nous donne son point de vue à ce sujet à
                            travers une analyse qui prend en compte l'impact
                            socio-économique de la pandémie et de l'inflation,
                            l'économie, les marchés financiers, la ZLECA,
                            l'industrialisation, etc.
                          </p>
                        </div>
                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                          <Image
                            className="about-author-img"
                            src={Jed}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
                  data-wow-delay="0.2s"
                >
                  <div className="post-card-1 border-radius-10 hover-up h-100">
                    <div className="post-thumb position-relative">
                      {/* <!-- Embed YouTube video --> */}
                      <iframe
                        width="100%"
                        height="200"
                        src="https://www.youtube.com/embed/ID_VIDEO"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="post-content p-30">
                      <div className="entry-meta meta-0 font-small mb-10">
                        <a href="details">
                          <span className="post-cat text-info">Podcast</span>
                        </a>
                      </div>
                      <div className="d-flex post-card-content">
                        <h6 className="post-title mb-20 font-weight-900">
                          <a href="single.html">
                            Comprendre l’écosystème entrepreneurial et favoriser
                            son émergence au Bénin
                          </a>
                        </h6>
                        <div>
                          <p className="font-medium text-muted">
                            A l'occasion de la publication d'une note d'analyse
                            sur les écosystèmes d'entreprenariat appliqués au
                            cas du Bénin, l'Afrique des Idées a organisé une
                            rencontre avec ses deux auteurs: Sophonie Jed
                            Koboudé, économiste et directeur général de
                            l’Afrique des Idées, et Abel Mensah, enseignant en
                            Sciences de Gestion à l’Université de Caen
                            Normandie. Dans cette rencontre, animée par Nadia
                            Lamlili, les deux auteurs ont livré une analyse
                            comparative des différents écosystèmes qui existent
                            dans le monde et en Afrique tout en s'attardant sur
                            le cas du Bénin et des différents défis auxquels ce
                            dernier fait face. Vous pouvez consulter le rapport
                            sur ce lien:
                            https://www.calameo.com/read/00736137... Pour avoir
                            une copie en PDF merci d'écrire à :
                            publications@lafriquedesidees.org
                          </p>
                        </div>
                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                          <Image
                            className="about-author-img"
                            src={Jed}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated"
                  data-wow-delay="0.2s"
                >
                  <div className="post-card-1 border-radius-10 hover-up h-100">
                    <div className="post-thumb position-relative">
                      <iframe
                        width="100%"
                        height="200"
                        src="https://www.youtube.com/embed/ID_VIDEO"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="post-content p-30">
                      <div className="entry-meta meta-0 font-small mb-10">
                        <a href="details">
                          <span className="post-cat text-info">
                            Emission / Ça se discute
                          </span>
                        </a>
                      </div>
                      <div className="d-flex post-card-content">
                        <h6 className="post-title mb-20 font-weight-900">
                          <a href="single.html">
                            Électrification hors-réseau : un impératif pour
                            accélérer l'accès universel à l'énergie ? Au menu
                          </a>
                        </h6>
                        <div>
                          <p className="font-medium text-muted">
                            🔴 Électrification hors-réseau :un impératif pour
                            accélérer l'accès universel à l'énergie ? 🔴 L' Inde
                            restreint ses exportations sur le riz blanc : Une
                            flambée du prix à prévoir sur nos marchés ?
                            Animateur : François-Xavier NOUMON
                          </p>
                        </div>
                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                          <Image
                            className="about-author-img"
                            src={Jed}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                    <li className="mb-30">
                      <div className="d-flex hover-up-2 transition-normal">
                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                          <a className="color-white" href="single.html">
                            <Image src={FocCharure} alt="" />
                            {/* <img
                            src="assets/imgs/jed/blogs/focCharure.jpg"
                            alt=""
                          /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="single.html">
                              Le froc, la charrue et la croissance économique du
                              Bénin
                            </a>
                          </h6>
                          <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                            <span className="post-on text-primary">
                              <strong>KANU </strong>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mb-30">
                      <div className="d-flex hover-up-2 transition-normal">
                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                          <a className="color-white" href="single.html">
                            <Image src={AccelererDigit} alt="" />
                            {/* <img
                            src="assets/imgs/jed/blogs/accerlererDigit.jpg"
                            alt=""
                          /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="single.html">
                              C'est le moment d'accélérer la digitalisation de
                              l'Afrique
                            </a>
                          </h6>
                          <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                            <span className="post-on text-primary">
                              <strong>KANU </strong>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mb-30">
                      <div className="d-flex hover-up-2 transition-normal">
                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                          <a className="color-white" href="single.html">
                            <Image src={Talonomics} alt="" />
                            {/* <img
                            src="assets/imgs/jed/blogs/talonomics.jpg"
                            alt=""
                          /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="single.html">
                              Qu'est-ce que le «Talonomics» ?
                            </a>
                          </h6>
                          <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                            <span className="post-on text-primary">
                              <strong>KANU </strong>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
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
                    <li className="mb-30">
                      <div className="d-flex hover-up-2 transition-normal">
                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                          <a className="color-white" href="single.html">
                            <Image src={ComePremierFacteur} alt="" />
                            {/*  <img
                            src="assets/imgs/jed/blogs/comePremierFacteur.jpg"
                            alt=""
                          /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="single.html">Les Insights de l'éco</a>
                          </h6>
                          <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                            <span className="post-on text-primary">
                              <strong>Podcast </strong>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mb-30">
                      <div className="d-flex hover-up-2 transition-normal">
                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                          <a className="color-white" href="single.html">
                            <Image src={Entrepreunariat} alt="" />
                            {/* <img
                            src="assets/imgs/jed/blogs/entrepreunariat.jpg"
                            alt=""
                          /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="single.html">
                              Comprendre l’écosystème entrepreneurial et
                              favoriser son émergence au Bénin
                            </a>
                          </h6>
                          <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                            <span className="post-on text-primary">
                              <strong>Podcast </strong>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mb-30">
                      <div className="d-flex hover-up-2 transition-normal">
                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                          <a className="color-white" href="single.html">
                            <Image src={IndustriBenin} alt="" />
                            {/* <img
                            src="assets/imgs/jed/blogs/industriBenin.jpg"
                            alt=""
                          /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="single.html">
                              L'INDUSTRIALISATION DU BÉNIN : UN CHANTIER BIEN
                              ENTAMÉ
                            </a>
                          </h6>
                          <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                            <span className="post-on text-primary">
                              <strong>Emission / ECHOS D'ECO </strong>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
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
                    <li className="mb-30">
                      <div className="d-flex hover-up-2 transition-normal">
                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                          <a className="color-white" href="single.html">
                            <Image src={Mara} alt="" />
                            {/*  <img src="assets/imgs/jed/blogs/mara.jpg" alt="" /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="single.html">En terrasse avec Mara</a>
                          </h6>
                          <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                            <span className="post-on text-primary">
                              <strong>Livres</strong>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mb-30">
                      <div className="d-flex hover-up-2 transition-normal">
                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                          <a className="color-white" href="single.html">
                            <Image src={DigitalSecourAfrique} alt="" />
                            {/* <img
                            src="assets/imgs/jed/blogs/digitalSecourAfrique.png"
                            alt=""
                          /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="single.html">
                              Le digital au secours de l'Afrique
                            </a>
                          </h6>
                          <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                            <span className="post-on text-primary">
                              <strong>Livres</strong>
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="mb-30">
                      <div className="d-flex hover-up-2 transition-normal">
                        <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                          <a className="color-white" href="single.html">
                            <Image src={CoupEtatAfrique} alt="" />
                            {/*  <img
                            src="assets/imgs/jed/blogs/coupEtatAfrique.png"
                            alt=""
                          /> */}
                          </a>
                        </div>
                        <div className="post-content media-body">
                          <h6 className="post-title mb-15 text-limit-2-row font-medium">
                            <a href="single.html">
                              Les coups d'état en Afrique: malédition ou point
                              de passage nécessaire?
                            </a>
                          </h6>
                          <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                            <span className="post-on text-primary">
                              <strong>Livres</strong>
                            </span>
                          </div>
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
    </>
  );
};

export default page;
