import React from 'react';
import Image from "next/image";

/* JED */

import Illusion from "@/assets/imgs/jed/illusion.jpg";
import Jed from "@/assets/imgs/jed/jed.jpg";
import Deficit from "@/assets/imgs/jed/deficit.jpg";
import Liberte from "@/assets/imgs/jed/liberte.jpg";
import Multiplicateur from "@/assets/imgs/jed/multiplicateur.jpg";
import Desequilibre from "@/assets/imgs/jed/sesequilibre.jpg";


const details = () => {
    return (
        <div>
            <main className="bg-grey pb-30">
                <div className="container single-content">
                    <div className="entry-header entry-header-style-1 mb-50 pt-50">
                        <h1 className="entry-title mb-50 font-weight-900">
                            Sortir de l’illusion de la prospérité assurée par l'État
                        </h1>
                        <div className="row">
                            <div className="col-md-6">
                                <div
                                    className="entry-meta align-items-center meta-2 font-small color-muted"
                                >
                                    <p className="mb-5">
                                        <a className="author-avatar" href="#"
                                        >
                                            <Image src={Jed} className="img-circle" alt=''/></a>
                                        Publié par
                                        <a href="author.html"
                                        ><span
                                            className="author-name font-weight-bold"
                                        >Sophonie Jed Koboude
                                            </span></a
                                        >
                                    </p>
                                    <span className="mr-10"> November 01, 2024</span>
                                    <span className="has-dot"> November 01, 2024</span>
                                </div>
                            </div>
                            <div className="col-md-6 text-right d-none d-md-inline">
                                <ul
                                    className="header-social-network d-inline-block list-inline mr-15"
                                >
                                    <li className="list-inline-item text-muted">
                                        <span>partager ceci: </span>
                                    </li>
                                    <li className="list-inline-item">
                                        <a
                                            className="social-icon fb text-xs-center"
                                            target="_blank"
                                            href="#"
                                        ><i
                                            className="elegant-icon social_facebook"
                                        ></i
                                            ></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a
                                            className="social-icon tw text-xs-center"
                                            target="_blank"
                                            href="#"
                                        ><i
                                            className="elegant-icon social_twitter"
                                        ></i
                                            ></a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a
                                            className="social-icon pt text-xs-center"
                                            target="_blank"
                                            href="#"
                                        ><i
                                            className="elegant-icon social_pinterest"
                                        ></i
                                            ></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!--end single header--> */}
                    <figure className="image mb-30 m-auto text-center border-radius-10">
                         <Image src={Illusion}  className="border-radius-10" alt=''/>
                    </figure>
                    {/* <!--figure--> */}
                    <article className="entry-wraper mb-50">
                        <div className="excerpt mb-30">
                            <p>
                                Dans un pays, l'amélioration du niveau de vie de sa
                                population est intrinsèquement liée à l'augmentation
                                de la quantité et de la qualité des biens et
                                services ayant une valeur marchande, et ce, à un
                                rythme supérieur à la croissance démographique.
                                Cette dynamique soulève une question fondamentale :
                                qui sont les véritables artisans de cette élévation
                                du niveau de vie ?
                            </p>
                        </div>
                        <div className="entry-main-content dropcap wow fadeIn animated">
                            <p>
                                La réponse à cette interrogation est bien connue :
                                ce sont les entrepreneurs qui jouent ce rôle
                                crucial. Ces acteurs économiques prennent des
                                risques en investissant leur capital pour créer des
                                emplois et générer une production de biens et de
                                services. Ces produits sont ensuite proposés sur le
                                marché, où les consommateurs ont la liberté de les
                                acquérir ou non.
                            </p>
                            <hr className="wp-block-separator is-style-dots" />
                            <p>
                                Le succès de ces entrepreneurs dépend de leur
                                capacité à effectuer des calculs précis. Après avoir
                                rémunéré le capital et le travail aux prix du
                                marché, s'il leur reste un excédent, celui-ci
                                constitue le profit. Ce bénéfice peut être réinvesti
                                dans leur activité existante ou dans de nouveaux
                                projets, alimentant ainsi le cycle de croissance
                                économique. Cependant, si les pertes deviennent trop
                                importantes, ces entreprises risquent de
                                disparaître. La sélection naturelle des entreprises
                                les plus performantes et adaptées au marché s'opère,
                                tandis que celles qui ne parviennent pas à s'ajuster
                                sont éliminées. Cette réalité, parfois brutale,
                                explique pourquoi l'entrepreneuriat n'attire qu'un
                                nombre limité de personnes prêtes à relever ce défi.
                                Toutefois, c’est bien l’entrepreneuriat qui est le
                                moteur du développement d’une nation.
                            </p>
                            <p>
                                Cependant, cette antique leçon sur la croissance
                                économique est étrangère aux dirigeants béninois.
                                L’on continue de croire que le développement est
                                l’œuvre de l’État et de ses dépenses publiques
                                massives, soutenues par la dette. Cette idée,
                                pourtant ancrée dans l’imaginaire économique de
                                nombreux gouvernements, mérite d’être sérieusement
                                remise en question. Cette conception, héritée d'une
                                interprétation simpliste du keynésianisme, ignore
                                les mécanismes fondamentaux de l'économie de marché
                                et les conséquences à long terme de
                                l'interventionnisme étatique. Premièrement,
                                l'économie est un système complexe dont aucun
                                planificateur central ne peut prétendre avoir une
                                connaissance parfaite. L'État, malgré ses bonnes
                                intentions, ne peut anticiper efficacement les
                                besoins du marché ni allouer les ressources de
                                manière optimale. Seul le libre jeu des forces du
                                marché, guidé par les prix et les signaux qu'ils
                                transmettent, permet une allocation efficiente des
                                ressources. L'interventionnisme étatique et
                                l'accumulation de dette publique ont des effets
                                pervers à long terme. Effet d'éviction : les
                                emprunts d'État captent l'épargne au détriment des
                                investissements privés productifs. Distorsion des
                                incitations : les subventions et régulations
                                faussent les signaux du marché et encouragent des
                                comportements économiquement inefficients. Poids
                                fiscal : le remboursement de la dette impose un
                                fardeau aux générations futures, freinant la
                                croissance à long terme. Dépendance : l'omniprésence
                                de l'État étouffe l'initiative privée et
                                l'innovation, véritables moteurs de la croissance.
                            </p>
                            <p>
                                L'État n'est jamais en mesure de saisir les besoins
                                et aspirations spécifiques des individus mieux que
                                ceux-ci ne le pourraient eux-mêmes. Cette «
                                présomption fatale » d'un État omniscient détruit la
                                spontanéité du marché, laquelle est pourtant au cœur
                                de l'innovation et de l'efficacité économique.
                                Lorsque l'État béninois intervient massivement en
                                allouant des budgets publics aux secteurs qu'il juge
                                stratégiques, il empêche la libre concurrence et
                                limite les opportunités d’investissement pour les
                                entreprises privées. Dans ce contexte, les
                                ressources ne sont plus allouées en fonction de leur
                                rendement économique, mais en fonction de la vision
                                d’une administration déconnectée du terrain. Ce
                                détournement de la dynamique du marché conduit
                                souvent à une « économie de rente », où seules les
                                entreprises proches du pouvoir bénéficient
                                réellement des dépenses publiques, au détriment de
                                l’ensemble du tissu économique. Un État qui
                                s’approprie l’initiative économique asphyxie la
                                société. En assumant le rôle de « moteur de la
                                croissance », il repousse l’initiative individuelle,
                                annihilant la créativité et limitant la
                                responsabilité des individus. Cette dépendance crée
                                des citoyens assistés et non des entrepreneurs, ce
                                qui mène inévitablement à une stagnation économique.
                                Une économie où l'État est le principal moteur de
                                croissance est une économie de « fausses promesses
                                ». L’on s’accorde pour dire que le rôle légitime de
                                l’État est de fournir un cadre juridique et de
                                protéger les libertés individuelles, non d’assumer
                                le rôle de producteur. La dette publique devient,
                                sous prétexte de développement, une arme pour
                                asservir l’économie aux besoins de l’État. Au lieu
                                de laisser les individus décider où investir leurs
                                ressources, l’État décide pour eux, limitant ainsi
                                leur capacité à innover et à entreprendre.
                            </p>
                            <p>
                                Alexis de Tocqueville, en parlant de la France,
                                écrit ceci dans son livre Souvenirs : “La vérité
                                est, vérité déplorable, que le goût des fonctions
                                publiques et le désir de vivre de l’impôt ne sont
                                point chez nous une maladie particulière à un parti,
                                c’est la grande et permanente infirmité de la nation
                                elle-même ; c’est le produit combiné de la
                                constitution démocratique de notre société civile et
                                de la centralisation excessive de notre gouvernement
                                ; c’est ce mal secret, qui a rongé tous les anciens
                                pouvoirs et qui rongera de même tous les nouveaux.”
                                Je ne changerai pas le moindre mot à propos du
                                Bénin. Regardons les faits. « Un bon croquis vaut
                                mieux qu'un long discours » (Napoléon Bonaparte)
                            </p>
                            <hr className="section-divider" />
                            <p>
                                Le graphique montre l’évolution du PIB et de la
                                dette publique du Bénin de 2000 à 2023, avec deux
                                échelles distinctes : la gauche en valeur absolue
                                (en milliards de dollars américains) et la droite en
                                base 100 (avec l’année de base 2016). La courbe
                                grise (indice en base 100) montre une croissance
                                relativement constante du PIB ; celui-ci a augmenté
                                de 64% depuis 2016. La ligne jaune, qui représente
                                l'indice de la dette en base 100, montre une
                                accélération de l’endettement bien supérieure à
                                celle du PIB. En effet, depuis 2016, l’indice de la
                                dette augmente beaucoup plus rapidement que celui du
                                PIB, traduisant une accumulation de dette plus
                                rapide que la croissance économique.
                            </p>
                            {/*       <!--Begin Subcrible--> */}
                            <div
                                className="border-radius-10 border bg-white mb-30 p-30 wow fadeIn animated"
                            >
                                <div className="row justify-content-between">
                                    <div className="col-md-5 mb-2 mb-md-0">
                                        <h5
                                            className="font-weight-bold secondfont mb-30 mt-0"
                                        >
                                            Devenir membre
                                        </h5>
                                        <p className="font-small">
                                            Recevez les dernières nouvelles
                                            directement dans votre boîte de
                                            réception. Nous n'envoyons jamais de
                                            spam !
                                        </p>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Saisissez votre adresse e-mail"
                                                />
                                            </div>
                                            <div className="col-md-12 mt-2">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary btn-block"
                                                >
                                                    S'abonner
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*   <!--End Subcrible--> */}
                            <p>
                                Il est essentiel de comprendre que l’illusion de la
                                prospérité par l’endettement est une voie
                                dangereuse. Pour le Bénin, l’heure est venue de
                                réévaluer ses priorités. Le développement ne peut
                                reposer uniquement sur l’argent emprunté, car ce
                                modèle comporte des risques économiques et sociaux
                                majeurs. L’adhésion au keynésianisme béat risque de
                                nuire gravement à l'économie béninoise.
                            </p>
                        </div>

                        {/*  <!--author box-->
                        <!--related posts--> */}
                        <div className="related-posts">
                            <div className="post-module-3">
                                <div
                                    className="widget-header-2 position-relative mb-30"
                                >
                                    <h5 className="mt-5 mb-30">Postes connexes</h5>
                                </div>
                                <div className="loop-list loop-list-style-1">
                                    <article
                                        className="hover-up-2 transition-normal wow fadeInUp animated"
                                    >
                                        <div className="row mb-40 list-style-2">
                                            <div className="col-md-4">
                                                <div
                                                    className="post-thumb position-relative border-radius-5"
                                                >
                                                    <div
                                                        className="img-hover-slide border-radius-5 position-relative"
                                                        style={{ backgroundImage: `url(${Liberte.src})` }}
                                                    >
                                                        <a
                                                            className="img-link"
                                                            href="single.html"
                                                        ></a>
                                                    </div>
                                                    <ul className="social-share">
                                                        <li>
                                                            <a href="#"
                                                            ><i
                                                                className="elegant-icon social_share"
                                                            ></i
                                                                ></a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="fb"
                                                                href="#"
                                                                title="Share on Facebook"
                                                                target="_blank"
                                                            ><i
                                                                className="elegant-icon social_facebook"
                                                            ></i
                                                                ></a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="tw"
                                                                href="#"
                                                                target="_blank"
                                                                title="Tweet now"
                                                            ><i
                                                                className="elegant-icon social_twitter"
                                                            ></i
                                                                ></a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="pt"
                                                                href="#"
                                                                target="_blank"
                                                                title="Pin it"
                                                            ><i
                                                                className="elegant-icon social_pinterest"
                                                            ></i
                                                                ></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-8 align-self-center">
                                                <div className="post-content">
                                                    <div
                                                        className="entry-meta meta-0 font-small mb-10"
                                                    >
                                                        <a href="category.html"
                                                        ><span
                                                            className="post-cat text-primary"
                                                        >Food</span
                                                            ></a
                                                        >
                                                    </div>
                                                    <h5
                                                        className="post-title font-weight-900 mb-20"
                                                    >
                                                        <a href="single.html"
                                                        >Liberté, Beauté,
                                                            Prospérité</a
                                                        >
                                                        <span
                                                            className="post-format-icon"
                                                        ><i
                                                            className="elegant-icon icon_star_alt"
                                                        ></i
                                                            ></span>
                                                    </h5>
                                                    <div
                                                        className="entry-meta meta-1 float-left font-x-small text-uppercase"
                                                    >
                                                        <span className="post-on"
                                                        >7 Novembre, 2024</span
                                                        >
                                                        <span
                                                            className="time-reading has-dot"
                                                        >11 minutes de
                                                            lecture</span
                                                        >
                                                        <span
                                                            className="post-by has-dot"
                                                        >3k vues</span
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                    <article
                                        className="hover-up-2 transition-normal wow fadeInUp animated"
                                    >
                                        <div className="row mb-40 list-style-2">
                                            <div className="col-md-4">
                                                <div
                                                    className="post-thumb position-relative border-radius-5"
                                                >
                                                    <div
                                                        className="img-hover-slide border-radius-5 position-relative"
                                                        style={{ backgroundImage: `url(${Deficit.src})` }}
                                                    >
                                                        <a
                                                            className="img-link"
                                                            href="single.html"
                                                        ></a>
                                                    </div>
                                                    <ul className="social-share">
                                                        <li>
                                                            <a href="#"
                                                            ><i
                                                                className="elegant-icon social_share"
                                                            ></i
                                                                ></a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="fb"
                                                                href="#"
                                                                title="Share on Facebook"
                                                                target="_blank"
                                                            ><i
                                                                className="elegant-icon social_facebook"
                                                            ></i
                                                                ></a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="tw"
                                                                href="#"
                                                                target="_blank"
                                                                title="Tweet now"
                                                            ><i
                                                                className="elegant-icon social_twitter"
                                                            ></i
                                                                ></a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="pt"
                                                                href="#"
                                                                target="_blank"
                                                                title="Pin it"
                                                            ><i
                                                                className="elegant-icon social_pinterest"
                                                            ></i
                                                                ></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-8 align-self-center">
                                                <div className="post-content">
                                                    <div
                                                        className="entry-meta meta-0 font-small mb-10"
                                                    >
                                                        <a href="category.html"
                                                        ><span
                                                            className="post-cat text-success"
                                                        >Cooking</span
                                                            ></a
                                                        >
                                                    </div>
                                                    <h5
                                                        className="post-title font-weight-900 mb-20"
                                                    >
                                                        <a href="single.html"
                                                        >Déficits jumeaux :
                                                            Faute de vendre
                                                            suffisamment, le Bénin
                                                            se vend pour soutenir sa
                                                            consommation</a
                                                        >
                                                    </h5>
                                                    <div
                                                        className="entry-meta meta-1 float-left font-x-small text-uppercase"
                                                    >
                                                        <span className="post-on"
                                                        >27 Septembre,
                                                            2024</span
                                                        >
                                                        <span
                                                            className="time-reading has-dot"
                                                        >10 minutes de
                                                            lecture</span
                                                        >
                                                        <span
                                                            className="post-by has-dot"
                                                        >22k vues</span
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
               {/*  <!--container--> */}
            </main>
           {/*  <!-- End Main content -->
            <!--site-bottom--> */}
            <div className="site-bottom pt-50 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="sidebar-widget widget-latest-posts mb-30 wow fadeInUp animated"
                            >
                                <div
                                    className="widget-header-2 position-relative mb-30"
                                >
                                    <h5 className="mt-5 mb-30">Economies</h5>
                                </div>
                                <div className="post-block-list post-module-1">
                                    <ul className="list-post">
                                        <li className="mb-30">
                                            <div
                                                className="d-flex hover-up-2 transition-normal"
                                            >
                                                <div
                                                    className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden"
                                                >
                                                    <a
                                                        className="color-white"
                                                        href="single.html"
                                                    >
                                                        <Image src={Multiplicateur} alt=''/>
                                                    </a>
                                                </div>
                                                <div
                                                    className="post-content media-body"
                                                >
                                                    <h6
                                                        className="post-title mb-15 text-limit-2-row font-medium"
                                                    >
                                                        <a href="single.html"
                                                        >Le mythe du
                                                            multiplicateur keynésien
                                                            au Bénin</a
                                                        >
                                                    </h6>
                                                    <div
                                                        className="entry-meta meta-1 float-left font-x-small text-uppercase"
                                                    >
                                                        <span className="post-on"
                                                        >27 Janvier,2024</span
                                                        >
                                                        <span
                                                            className="post-by has-dot"
                                                        >13k vues</span
                                                        >
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
                                <div
                                    className="widget-header-2 position-relative mb-30"
                                >
                                    <h5 className="mt-5 mb-30">Politiques</h5>
                                </div>
                                <div className="post-block-list post-module-1">
                                    <ul className="list-post">
                                        <li className="mb-30">
                                            <div
                                                className="d-flex hover-up-2 transition-normal"
                                            >
                                                <div
                                                    className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden"
                                                >
                                                    <a
                                                        className="color-white"
                                                        href="single.html"
                                                    >
                                                        <img
                                                            src="assets/imgs/jed/transition.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div
                                                    className="post-content media-body"
                                                >
                                                    <h6
                                                        className="post-title mb-15 text-limit-2-row font-medium"
                                                    >
                                                        <a href="single.html"
                                                        >Bénin : La transition
                                                            vers un système de
                                                            retraite par
                                                            capitalisation devient
                                                            urgente</a
                                                        >
                                                    </h6>
                                                    <div
                                                        className="entry-meta meta-1 float-left font-x-small text-uppercase"
                                                    >
                                                        <span className="post-on"
                                                        >12 Novembre,2024</span
                                                        >
                                                        <span
                                                            className="post-by has-dot"
                                                        >3k vues</span
                                                        >
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
                                <div
                                    className="widget-header-2 position-relative mb-30"
                                >
                                    <h5 className="mt-5 mb-30">Test</h5>
                                </div>
                                <div className="post-block-list post-module-1">
                                    <ul className="list-post">
                                        <li className="mb-30">
                                            <div
                                                className="d-flex hover-up-2 transition-normal"
                                            >
                                                <div
                                                    className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden"
                                                >
                                                    <a
                                                        className="color-white"
                                                        href="single.html"
                                                    >
                                                         <Image src={Desequilibre} alt=''/>
                                                    </a>
                                                </div>
                                                <div
                                                    className="post-content media-body"
                                                >
                                                    <h6
                                                        className="post-title mb-15 text-limit-2-row font-medium"
                                                    >
                                                        <a href="single.html"
                                                        >Sur le déséquilibre
                                                            extérieur de l’économie
                                                            béninoise</a
                                                        >
                                                    </h6>
                                                    <div
                                                        className="entry-meta meta-1 float-left font-x-small text-uppercase"
                                                    >
                                                        <span className="post-on"
                                                        >06 May</span
                                                        >
                                                        <span
                                                            className="post-by has-dot"
                                                        >23k views</span
                                                        >
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
                {/* <!--container--> */}
            </div>
        </div>
    );
};

export default details;