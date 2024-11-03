import React from 'react';
import Image from 'next/image';


import Illusion from "@/assets/imgs/jed/illusion.jpg";
import Liberte from "@/assets/imgs/jed/liberte.jpg";
import Deficit from "@/assets/imgs/jed/deficit.jpg";
import Transition from "@/assets/imgs/jed/transition.jpg"
import Richess from "@/assets/imgs/jed/richesse.jpg";
import Multiplicateur from "@/assets/imgs/jed/multiplicateur.jpg";
import Jed from "@/assets/imgs/jed/jed.jpg";


const blogs = () => {
    return (
        <div>
            <main>
                {/*  <!--archive header--> */}
                <div className="archive-header pt-50 text-center">
                    <div className="container">
                        <h2 className="font-weight-900">Interventions</h2>
                        <div className="breadcrumb mt-20">
                            Radio, podcasts, conférence, modérations
                        </div>
                        <div className="bt-1 border-color-1 mt-30 mb-50"></div>
                    </div>
                </div>
                <div className="container">
                    <div className="loop-list loop-list-style-1">
                        <div className="row">

                            <article className="col-md-6 mb-40 wow fadeInUp animated">
                                <div className="post-card-1 border-radius-10 hover-up">
                                    <div className="post-thumb position-relative">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src="https://www.youtube.com/embed/uSh2NL_foB8"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="video-iframe"
                                            style={{ position: 'relative', zIndex: 1 }}
                                        ></iframe>
                                    </div>
                                    <div className="post-content p-30">
                                        <div className="entry-meta meta-0 font-small mb-10">
                                            <a href="/details">
                                                <span className="post-cat text-info">Podcast</span>
                                            </a>
                                        </div>
                                        <div className="d-flex post-card-content">
                                            <h5 className="post-title mb-20 font-weight-900">
                                                <a href="">Les Insights de l'éco</a>
                                            </h5>
                                            <div className="post-excerpt mb-25 font-small text-muted">
                                                <p>
                                                    Le 5 juillet 2022, l'💶 s'est effondré face au 💵 ... Quelles sont les enjeux et
                                                    les perspectives liés à cet événement, notamment pour les économies des pays
                                                    de la zone FCFA ? Sophonie @Jed KOBOUDE - Économiste et Directeur Général de l'Afrique
                                                    des Idées nous donne son point de vue à ce sujet à travers une analyse qui prend en
                                                    compte l'impact socio-économique de la pandémie et de l'inflation, l'économie, les
                                                    marchés financiers, la ZLECA, l'industrialisation, etc.
                                                </p>
                                            </div>
                                            <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 mb-20 img-hover-scale overflow-hidden">
                                                <a className="color-white" href="single.html">
                                                    <Image src={Jed} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="col-md-6 mb-40 wow fadeInUp animated">
                                <div className="post-card-1 border-radius-10 hover-up">
                                    <div className="post-thumb position-relative">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src="https://youtu.be/MS4cKrtAsME"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="video-iframe"
                                            style={{ position: 'relative', zIndex: 1 }}
                                        ></iframe>
                                    </div>
                                    <div className="post-content p-30">
                                        <div className="entry-meta meta-0 font-small mb-10">
                                            <a href="/details">
                                                <span className="post-cat text-info">Podcast</span>
                                            </a>
                                        </div>
                                        <div className="d-flex post-card-content">
                                            <h5 className="post-title mb-20 font-weight-900">
                                                <a href=""> Comprendre l’écosystème entrepreneurial et favoriser son émergence au Bénin</a>
                                            </h5>
                                            <div className="post-excerpt mb-25 font-small text-muted">
                                                <p>
                                                    A l'occasion de la publication d'une note d'analyse sur les écosystèmes d'entreprenariat
                                                    appliqués au cas du Bénin, l'Afrique des Idées a organisé une rencontre avec ses deux auteurs:
                                                    Sophonie Jed Koboudé, économiste et directeur général de l’Afrique des Idées, et Abel Mensah,
                                                    enseignant en Sciences de Gestion à l’Université de Caen Normandie. Dans cette rencontre, a
                                                    nimée par Nadia Lamlili, les deux auteurs ont livré une analyse comparative des différents
                                                    écosystèmes qui existent dans le monde et en Afrique tout en s'attardant sur le cas du Bénin
                                                    et des différents défis auxquels ce dernier fait face. Vous pouvez consulter le rapport sur
                                                    ce lien: https://www.calameo.com/read/00736137...
                                                    Pour avoir une copie en PDF merci d'écrire à : publications@lafriquedesidees.org
                                                </p>
                                            </div>
                                            <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 mb-20 img-hover-scale overflow-hidden">
                                                <a className="color-white" href="single.html">
                                                    <Image src={Jed} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="col-md-6 mb-40 wow fadeInUp animated">
                                <div className="post-card-1 border-radius-10 hover-up">
                                    <div className="post-thumb position-relative">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src="https://youtu.be/1USzwaORhpI?si=fG-TlowWj0gKyzDz"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="video-iframe"
                                            style={{ position: 'relative', zIndex: 1 }}
                                        ></iframe>
                                    </div>
                                    <div className="post-content p-30">
                                        <div className="entry-meta meta-0 font-small mb-10">
                                            <a href="/details">
                                                <span className="post-cat text-info">Emission / ECHOS D'ECO</span>
                                            </a>
                                        </div>
                                        <div className="d-flex post-card-content">
                                            <h5 className="post-title mb-20 font-weight-900">
                                                <a href="">  L'INDUSTRIALISATION DU BÉNIN : UN CHANTIER BIEN ENTAMÉ
                                                </a>
                                            </h5>
                                            <div className="post-excerpt mb-25 font-small text-muted">
                                                <p>
                                                    Qu'en est-il de l'industrialisation au Bénin ? L'économiste Sophonie
                                                    Jed KOBOUDÉ analyse et donne son point de vue.
                                                </p>
                                            </div>
                                            <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 mb-20 img-hover-scale overflow-hidden">
                                                <a className="color-white" href="single.html">
                                                    <Image src={Jed} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="col-md-6 mb-40 wow fadeInUp animated">
                                <div className="post-card-1 border-radius-10 hover-up">
                                    <div className="post-thumb position-relative">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src="https://youtu.be/1USzwaORhpI?si=fG-TlowWj0gKyzDz"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="video-iframe"
                                            style={{ position: 'relative', zIndex: 1 }}
                                        ></iframe>
                                    </div>
                                    <div className="post-content p-30">
                                        <div className="entry-meta meta-0 font-small mb-10">
                                            <a href="/details">
                                                <span className="post-cat text-info">Emission / Ça se discute</span>
                                            </a>
                                        </div>
                                        <div className="d-flex post-card-content">
                                            <h5 className="post-title mb-20 font-weight-900">
                                                <a href="">  Électrification hors-réseau : un impératif pour accélérer l'accès universel à l'énergie ?

                                                    Au menu
                                                </a>
                                            </h5>
                                            <div className="post-excerpt mb-25 font-small text-muted">
                                                <p>
                                                    🔴 Électrification hors-réseau :un impératif pour accélérer l'accès universel à l'énergie ?
                                                    🔴 L' Inde restreint ses exportations sur le riz blanc : Une flambée du prix à prévoir sur nos marchés ?

                                                    Animateur : François-Xavier NOUMON
                                                </p>
                                            </div>
                                            <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 mb-20 img-hover-scale overflow-hidden">
                                                <a className="color-white" href="single.html">
                                                    <Image src={Jed} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="col-md-6 mb-40 wow fadeInUp animated">
                                <div className="post-card-1 border-radius-10 hover-up">
                                    <div className="post-thumb position-relative">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src="https://youtu.be/wFiw1ZZqFCk"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="video-iframe"
                                            style={{ position: 'relative', zIndex: 1 }}
                                        ></iframe>
                                    </div>
                                    <div className="post-content p-30">
                                        <div className="entry-meta meta-0 font-small mb-10">
                                            <a href="/details">
                                                <span className="post-cat text-info">Emission / Ça se discute</span>
                                            </a>
                                        </div>
                                        <div className="d-flex post-card-content">
                                            <h5 className="post-title mb-20 font-weight-900">
                                                <a href=""> 34ᵉ édition de la journée mondiale de la population à Savè : L'enjeu de la transition démographique
                                                    Au menu
                                                </a>
                                            </h5>
                                            <div className="post-excerpt mb-25 font-small text-muted">
                                                <p>
                                                    Ça se discute du 17 juillet 2023

                                                    34e édition de la journée mondiale de la population à Savè  : La transition démographique comme principal enjeu
                                                    Présidentielle à venir au Gabon  : Ali Bongo comme d'habitude...

                                                    Animateur : François-Xavier NOUMON                                                </p>
                                            </div>
                                            <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 mb-20 img-hover-scale overflow-hidden">
                                                <a className="color-white" href="single.html">
                                                    <Image src={Jed} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="col-md-6 mb-40 wow fadeInUp animated">
                                <div className="post-card-1 border-radius-10 hover-up">
                                    <div className="post-thumb position-relative">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src="https://youtu.be/cb72wxgM9eo"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="video-iframe"
                                            style={{ position: 'relative', zIndex: 1 }}
                                        ></iframe>
                                    </div>
                                    <div className="post-content p-30">
                                        <div className="entry-meta meta-0 font-small mb-10">
                                            <a href="/details">
                                                <span className="post-cat text-info">Emission / Ça se discute</span>
                                            </a>
                                        </div>
                                        <div className="d-flex post-card-content">
                                            <h5 className="post-title mb-20 font-weight-900">
                                                <a href=""> Suspension de l'application Tik-Tok au Sénégal pour combattre "les messages haineux ...
                                                    Au menu
                                                </a>
                                            </h5>
                                            <div className="post-excerpt mb-25 font-small text-muted">
                                                <p>
                                                    ➡ Suspension de l'application Tik-Tok au Sénégal pour combattre " les messages haineux" : Rien de plus normal ?
                                                    ➡ Quelles conséquences économiques pour le Bénin de l'application des sanctions envers le Niger ?                                            </p>
                                            </div>
                                            <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 mb-20 img-hover-scale overflow-hidden">
                                                <a className="color-white" href="single.html">
                                                    <Image src={Jed} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="col-md-6 mb-40 wow fadeInUp animated">
                                <div className="post-card-1 border-radius-10 hover-up">
                                    <div className="post-thumb position-relative">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src="https://youtu.be/i44vqIvlqAs"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="video-iframe"
                                            style={{ position: 'relative', zIndex: 1 }}
                                        ></iframe>
                                    </div>
                                    <div className="post-content p-30">
                                        <div className="entry-meta meta-0 font-small mb-10">
                                            <a href="/details">
                                                <span className="post-cat text-info">Emission / Spécial 60 ans d'indépendance</span>
                                            </a>
                                        </div>
                                        <div className="d-flex post-card-content">
                                            <h5 className="post-title mb-20 font-weight-900">
                                                <a href=""> Les politiques de développement de 1960 à nos jours : Enfin le bon modèle ?
                                                </a>
                                            </h5>
                                            <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 mb-20 img-hover-scale overflow-hidden">
                                                <a className="color-white" href="single.html">
                                                    <Image src={Jed} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="col-md-6 mb-40 wow fadeInUp animated">
                                <div className="post-card-1 border-radius-10 hover-up">
                                    <div className="post-thumb position-relative">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src="https://youtu.be/GIsbqFbMCao"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="video-iframe"
                                            style={{ position: 'relative', zIndex: 1 }}
                                        ></iframe>
                                    </div>
                                    <div className="post-content p-30">
                                        <div className="entry-meta meta-0 font-small mb-10">
                                            <a href="/details">
                                                <span className="post-cat text-info">Emission / Ça se discute </span>
                                            </a>
                                        </div>
                                        <div className="d-flex post-card-content">
                                            <h5 className="post-title mb-20 font-weight-900">
                                                <a href=""> Fraudes à la pompe : Enfin des sanctions
                                                </a>
                                            </h5>
                                            <div className="post-excerpt mb-25 font-small text-muted">
                                                <p>
                                                    ça se discute du 03 Juillet 2023                                           </p>
                                            </div>
                                            <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 mb-20 img-hover-scale overflow-hidden">
                                                <a className="color-white" href="single.html">
                                                    <Image src={Jed} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="col-md-6 mb-40 wow fadeInUp animated">
                                <div className="post-card-1 border-radius-10 hover-up">
                                    <div className="post-thumb position-relative">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src="https://youtu.be/4Swl2QlHisw"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="video-iframe"
                                            style={{ position: 'relative', zIndex: 1 }}
                                        ></iframe>
                                    </div>
                                    <div className="post-content p-30">
                                        <div className="entry-meta meta-0 font-small mb-10">
                                            <a href="/details">
                                                <span className="post-cat text-info">Emission / IMPACT BUSINESS  </span>
                                            </a>
                                        </div>
                                        <div className="d-flex post-card-content">
                                            <h5 className="post-title mb-20 font-weight-900">
                                                <a href=""> Numéro 3
                                                </a>
                                            </h5>
                                            <div className="post-excerpt mb-25 font-small text-muted">
                                                <p>
                                                    Au menu du troisième numéro de l'émission Impact Business :
                                                    Le Dossier : La production, la commercialisation et les défis de la filière d'œufs de table au Bénin.
                                                    Boost your business : Les entreprises débutantes face aux défis des besoins en ressources humaines.
                                                    L’heure des services : Eclairage sur l'innovation qui défraie la chronique : l’Intelligence artificielle. Entretien avec l'Expert Mahouna AKLPOGAN.
                                                    Développement durable : Sur les traces d’un groupe d’écoliers au contact de l’agroécologie.
                                                    Question d’éco : L’économiste et essayiste Jed KOBOUDE se penche sur la croissance économique. A quoi sert-elle ?</p>
                                            </div>
                                            <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 mb-20 img-hover-scale overflow-hidden">
                                                <a className="color-white" href="single.html">
                                                    <Image src={Jed} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="col-md-6 mb-40 wow fadeInUp animated">
                                <div className="post-card-1 border-radius-10 hover-up">
                                    <div className="post-thumb position-relative">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src="https://youtu.be/fJ44t8R7CD0"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="video-iframe"
                                            style={{ position: 'relative', zIndex: 1 }}
                                        ></iframe>
                                    </div>
                                    <div className="post-content p-30">
                                        <div className="entry-meta meta-0 font-small mb-10">
                                            <a href="/details">
                                                <span className="post-cat text-info">Emission / IMPACT BUSINESS  </span>
                                            </a>
                                        </div>
                                        <div className="d-flex post-card-content">
                                            <h5 className="post-title mb-20 font-weight-900">
                                                <a href=""> Numéro 4
                                                </a>
                                            </h5>
                                            <div className="post-excerpt mb-25 font-small text-muted">
                                                <p>
                                                    Au sommaire de ce numéro d'Impact Business : Le Dossier :
                                                    Le pagne tissé devient de plus en plus raffiné, imposant dans la haute couture, et pourvoyeur de devises.
                                                    Retour en plateau : Interview avec Monsieur Charlemagne Amoussou, promoteur de la marque Lolo Andoch.
                                                    Développement durable : Démarche RSE, Odile Nivard, consultante en gestion des Ressources Humaines propose quelques astuces pour la prise en compte des parties prenantes.
                                                    L’heure des services : Nouveau focus sur l’intelligence artificielle au service des entreprises en quête d’innovations.
                                                    Boost your business  : Les mécanismes de financement des très petites entreprises.
                                                    Question d’éco : présentation du concept le « bénino-optimisme ».</p>
                                            </div>
                                            <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 mb-20 img-hover-scale overflow-hidden">
                                                <a className="color-white" href="single.html">
                                                    <Image src={Jed} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="col-md-6 mb-40 wow fadeInUp animated">
                                <div className="post-card-1 border-radius-10 hover-up">
                                    <div className="post-thumb position-relative">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src="https://youtu.be/9AeSfiGUvZ8"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="video-iframe"
                                            style={{ position: 'relative', zIndex: 1 }}
                                        ></iframe>
                                    </div>
                                    <div className="post-content p-30">
                                        <div className="entry-meta meta-0 font-small mb-10">
                                            <a href="/details">
                                                <span className="post-cat text-info">Podcast / Les Insights de l'Eco  </span>
                                            </a>
                                        </div>
                                        <div className="d-flex post-card-content">
                                            <h5 className="post-title mb-20 font-weight-900">
                                                <a href="">  Café Juridique Investir en Afrique : le cas du Bénin
                                                </a>
                                            </h5>
                                            <div className="post-excerpt mb-25 font-small text-muted">
                                                <p>
                                                    Autrefois appelé le Dahomey ou encore le pays des Amazones, avec une croissance qui culmine à 7% depuis pratiquement 10ans,
                                                    le Bénin représente en Afrique et dans le monde, un cas atypique du point de vue économique. Quels sont les vecteurs
                                                    de l'attractivité économique du Bénin ? Quels sont les secteurs porteurs d'opportunités d'investissement identifiés dans
                                                    ce pays d'Afrique de l'Ouest ?
                                                    Le Café Juridique placé sous le thème "Investir en Afrique : le cas du Bénin" vise à apporter des réponses à ces préoccupations
                                                    à travers l'éclairage de Théophile KEPNANG Senior Legal & Tax Manager chez TAX AFRICA et Sophonie Jed KOBOUDE économiste et
                                                    Directeur Général de l'Afrique des idées.
                                                    La rencontre initialement programmée avec ces deux experts n'a finalement pu être tenu qu'avec Sophonie Jed KOBOUDE en raison
                                                    d'un empêchement de dernière minute ayant occasionné l'absence de son co-panéliste. Vous souhaitez investir au Bénin, alors
                                                    nous vous invitons à écouter ce podcast</p>
                                            </div>
                                            <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 mb-20 img-hover-scale overflow-hidden">
                                                <a className="color-white" href="single.html">
                                                    <Image src={Jed} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="col-md-6 mb-40 wow fadeInUp animated">
                                <div className="post-card-1 border-radius-10 hover-up">
                                    <div className="post-thumb position-relative">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src="https://youtu.be/tKt7aU4IEtU"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="video-iframe"
                                            style={{ position: 'relative', zIndex: 1 }}
                                        ></iframe>
                                    </div>
                                    <div className="post-content p-30">
                                        <div className="entry-meta meta-0 font-small mb-10">
                                            <a href="/details">
                                                <span className="post-cat text-info">Modération / conférence  </span>
                                            </a>
                                        </div>
                                        <div className="d-flex post-card-content">
                                            <h5 className="post-title mb-20 font-weight-900">
                                                <a href="">  L’innovation numérique en Afrique : enjeux et dynamiques impulsés par les Fab Labs
                                                </a>
                                            </h5>
                                            <div className="post-excerpt mb-25 font-small text-muted">
                                                <p>
                                                    Conférence, initiée et organisée par le Réseau Francophone des FabLabs d’Afrique de l’Ouest (ReFFAO),
                                                    présentant le tableau dynamique et assez particulier de l’innovation numérique en Afrique - propulsé
                                                    notamment par ces espaces créatifs que sont les FabLabs - partage des projets concrets et collaboratifs
                                                    alliant agilité et besoin local conduits par les Fablabs du ReFFAO.</p>
                                            </div>
                                            <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 mb-20 img-hover-scale overflow-hidden">
                                                <a className="color-white" href="single.html">
                                                    <Image src={Jed} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>

                        </div>
                    </div>
                    <div className="row mt-50">
                        <div className="col-12">
                            <div
                                className="pagination-area mb-30 wow fadeInUp animated"
                            >
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-start">
                                        <li className="page-item">
                                            <a className="page-link" href="#"
                                            ><i
                                                className="elegant-icon arrow_left"
                                            ></i
                                                ></a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="#">01</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">02</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">03</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">04</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#"
                                            ><i
                                                className="elegant-icon arrow_right"
                                            ></i
                                                ></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default blogs;