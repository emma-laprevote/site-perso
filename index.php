<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r70/three.min.js" type="text/javascript"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link type="text/css" rel="stylesheet" href="css/materialize.min.css" media="screen,projection"/>
    <link rel="stylesheet" type="text/css" href="css/style-perso.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Zilla+Slab+Highlight&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"/>
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <meta name="description" content="Emma Laprevote, développeuse web Full-stack junior, basée sur la métropole AIX-MARSEILLE, en apprentissage à l'école La Plateforme_ à Marseille.">
    <title>Emma Laprevote - Développeuse web full-stack</title>
</head>

<body>

<!--Section animation chargement page -->
  <div class="page-transition__red"></div>
  <div class="page-transition__black"></div>
  <div class="transition__logo">
       <img src="images/typoemka.png"  id="typoLogoEmka" alt="identité visuelle typographique de Emma Laprevote, dévellopeuse Marseille">
  </div>

<div id="siteComplet">
<!-- HEADER OBLIQUE + NAVBAR + IDENTITE + DEFINITION DU METIER DE DEVELOPPEUR WEB FULL STACK -->
<header>
    <div class="header__bg"></div>
      <nav id="navEmma">
        <div class="nav-wrapper">
           <img id="typoLogoMenu" src="images/typoemka.png" alt="identité visuelle typographique de Emma Laprevote, dévellopeuse Marseille">
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul id="navBar" class="right hide-on-med-and-down">
            <li><a href="#presentation"><span class="link">ABOUT ME</span></a></li>
            <li><a href="#project"><span class="link">PROJETS</span></a></li>
            <li><a href="#contactMe"><span class="link">CONTACT</span></a></li>
          </ul>
        </div>
      </nav>
      <ul class="sidenav" id="mobile-demo">
         <li><a href="#presentation">ABOUT ME</a></li>
         <li><a href="#project">PROJETS</a></li>
         <li><a href="#contactMe">CONTACT</a></li>
      </ul>
      <div id="presentEmma">
        <h1 id="nameIdentity">EMMA <span id="lastName">LAPREVOTE</span></h1>
        <h2 id="definitionDev"><span>Développeur(se) full-stack</span> / dev.lɔ.pœʁ / masculin / feminin</h2>
        <p>Un <strong>développeur full stack</strong>, appelé aussi "développeur à tout faire", est un codeur capable de réaliser la programmation
        d’un site ou d'une application web à la fois en <strong>front-end</strong> et <strong>back-end</strong>. Il dispose ainsi de compétences variées lui
        permettant de travailler sur chaque étape d'un projet de création allant du développement à la production.</p>
        <button class="waves-effect white black-text btn" type="submit" onclick="window.open('../pdf/laprevote emma.pdf')"><i class="material-icons black-text left">add</i>Télécharger mon cv</button>
      </div>
</header>

<main id="main_site">
    <article id="presentation">
        <div id="sectionAboutMe"></div>
            <img id="statutEmma" src="images/statut.png" alt="image 3D avec effet textuel du portrait de Emma laprevote, dévellopeuse web, Marseille">
        <div id="columnInfos">
            <div id="rowTitle">
                <div id="tabCaseAbout"><a id="linkAboutMe" href="#aboutMe"><p id="typoAboutMe">about me</p></a></div>
                <div id="tabCaseHard"><a id="linkHardSkill" href="#hardSkill"><p id="typoHardSkills">hardskills</p></a></div>
            </div>
           <div id="rowBlock">
            <div id="aboutMe">
                <h1>EMMA <span id="lastName">Laprevote / AIX-MARSEILLE</span> / <a href="https://www.linkedin.com/in/emkalaprevote/" target="_blank"><i class="fab fa-linkedin-in"></i></a><a href="https://github.com/emma-laprevote" target="_blank"><i class="fab fa-github-alt"></i></a><a href="https://twitter.com/ELaprevote" target="_blank"><i class="fab fa-twitter"></i></a></h1>
                <p>En pleine reconversion professionnelle dans le numérique au sein de la <strong>Coding
                   School à La Plateforme_</strong>, afin de fusionner mes compétences
                   en <strong>communication graphique</strong> avec celles acquises tout au long de ma formation, dans le <strong>développement web.</strong>
                </p>
                <p id="softskills"><span class="softNormal">attentive</span><span class="contrast">rigoureuse</span><span class="softS">passionnée</span> <span class="softS">motivée</span><span class="softNormal">dynamique</span><span class="softS">autodidacte</span>_</p>
            </div>
            <div id="hardSkill">
                <div class="rowColumn">
                    <img id="html" src="images/icones/html.png" alt="Icone language HTML5, utilisé dans le dévellopement web et par Emma Laprevote">
                    <img id="css" src="images/icones/css.png" alt="Icone language CSS3, utilisé dans le dévellopement web et par Emma Laprevote">
                    <img class="iconesTech" src="images/icones/php.png" alt="Icone du language de programmation PHP, utilisé dans le dévellopement web et par Emma Laprevote">
                    <img class="iconesTech" src="images/icones/sql.png" alt="Icone du language MYSQL, utilisé dans le dévellopement web et par Emma Laprevote">
                    <img id="git" src="images/icones/git.png" alt="Icone GIT, utilisé dans le dévellopement web, et par Emma Laprevote">
                </div>
                <div class="rowColumn">
                    <img id="composer" src="images/icones/composer.png" alt="Icone COMPOSER, utilisé dans le dévellopement web et par Emma Laprevote">
                    <img id="js" src="images/icones/js.png" alt="Icone language de programmation JAVASCRIPT, utilisé dans le dévellopement web et par Emma Laprevote">
                    <img id="jQuery" src="images/icones/jquery.png" alt="Icone de la librairie JQUERY, utilisé dans le dévellopement web et par Emma Laprevote">
                    <img id="ubuntu" src="images/icones/ubuntu.png" alt="Icone UBUNTU, utilisé dans le dévellopement web et par Emma Laprevote">
                    <img id="adobe" src="images/icones/adobe.png" alt="Icone ADOBE, utilisé dans le dévellopement web et par Emma Laprevote">
                </div>
            </div>
         </div>
        </article>
        <section id="project">
            <div class="project__bg"></div>
                <div id="titleSection">
                    <h1>projets</h1>
                    <p>Une petite selection de quelques projets réaliser depuis le début de l'année jusqu'à maintenant.
                    Vous pouvez retrouvez la totalité des projets sur mon  <a style="color: white;" href="https://github.com/emma-laprevote">GITHUB <i style="color: white; font-size: 1.2em;" class="fab fa-github-alt"></i></a>.</p>
                </div>
                <div id="carousel">
                   <div class="hideLeft">
                    <img src="images/carousel/ide.png" alt="page d'accueil projet Emma Laprevote html ide favoris, développement web">
                    <a id="modalIde" href="#ide"><p class="linkProject"><span>IDE FAVORIS / <strong>HTML5 / CSS3</strong></span></p></a>
                  </div>

                  <div class="prevLeftSecond">
                    <img src="images/carousel/appfav.png" alt="page d'accueil projet Emma Laprevote html application favorite, développement web">
                    <a id="modalApp" href="#appfav"><p class="linkProject"><span>APPLICATION FAVORITES / <strong>HTML5 / CSS3</strong></span></p></a>
                  </div>

                  <div class="prev">
                    <img src="images/carousel/slash.png" alt="page d'accueil projet Emma Laprevote php module-connexion, développement web">
                    <a id="modalSlash" href="#slash"><p class="linkProject"><span>SLASH MAGAZINE / <strong>PHP</strong></span></p></a>
                  </div>

                  <div class="selected">
                     <img src="images/carousel/livreor.png" alt="page d'accueil projet Emma Laprevote php livre d'or, développement web">
                     <a id="modalLivre" href="#modalProject"><p class="linkProject"><span>NOISE POLLUTION / <strong>PHP</strong></span></p></a>
                  </div>

                  <div class="next">
                    <img src="images/carousel/discussion.png" alt="page d'accueil projet Emma Laprevote php discussion, développement web">
                    <a id="modalDiscu" href="#discussion"><p class="linkProject"><span>THE FACTORY / <strong>PHP</strong></span></p></a>
                  </div>

                  <div class="nextRightSecond">
                    <img src="images/carousel/blogout.png" alt="page d'accueil projet Emma Laprevote php blog, développement web">
                    <a id="modalBlog" href="#blogout"><p class="linkProject"><span>BLOGOUT / <strong>PHP</strong></span></p></a>
                  </div>

                  <div class="hideRight">
                    <img src="images/carousel/boutique.png" alt="page d'accueil projet Emma Laprevote php boutique en ligne, développement web">
                    <a id="modalShop" href="#jungle"><p class="linkProject"><span>JUNGLE GARDENER / <strong>PHP</strong></span></p></a>
                  </div>
                </div>
        </section>
        <div id="modalProject" class="modal"></div>
        <section id="contactMe">
            <div id="msg_contact">
                <div>
                <h1>contact me.</h1>
                <h2><i class="material-icons left">search</i>recherche<span>alternance</span>.</h2>
                <p>Je suis actuellement en <strong>recherche d'alternance</strong> pour l'année 2021/2022 pour un poste
                en tant que <strong>développeuse web full-stack</strong>.<br><br>
                Mes compétences actuelles étant <strong>PHP, MYSQL et JAVASCRIPT</strong>,
                je suis prête à me former sur d'autres technologies, avec <strong>enthousiasme et motivation</strong>, selon le besoin.<br>
                <br>
                N'hésitez pas à me contacter pour plus d'informations, discuter, boire un café ou tout autres demandes.</p>
                </div>
            </div>
            <div id="formContact">
              <form id="formContactEmka" method="post">
                <div class="row">
                    <div class="input-field col s6">
                        <label for="nom">Votre Nom:</label>
                        <input type="text" name="nom" id="nom" placeholder="Votre nom de famille" required>
                    </div>
                    <div class="input-field col s6">
                        <label for="prenom">Votre prénom:</label>
                        <input type="text" name="prenom" id="prenom" placeholder="Votre prénom" required>
                    </div>
                    </div>
                    <div class="row">
                       <div id="mailDiv" class="input-field col s12">
                            <label for="email">Votre e-mail:</label>
                            <input type="email" name="email" id="email" placeholder="Votre adresse mail" required>
                       </div>
                    </div>
                    <div class="row">
                        <div id="objetDiv" class="input-field col s12">
                            <label for="object">Objet:</label>
                            <input type="text" name="object" id="object" placeholder="Objet du message" required>
                        </div>
                    </div>
                    <div class="row">
                        <div id="msgDiv" class="input-field col s12">
                            <label for="objet">votre message:</label><br>
                              <textarea id="message" name="message" placeholder="Votre message" required></textarea>
                        </div>
                    </div>
                    <div class="row">
                        <div id="buttonDiv" class="input-field col s12">
                            <button id="myButton" class="btn waves-effect transparent black-text" type="submit" name="mailform">ENVOYER
                                <i class="material-icons right">send</i>
                              </button>
                        </div>
                    </div>
                    <span class="error" id="errorForm"></span>
                </form>
            </div>
        </section>

        <footer id="footerEmka">
            <div class="footer__bg"></div>
                <section id="sectionFooter">
                    <div id="logoFooter">
                        <img src="images/logoemka.png" alt="identité visuelle portrait minimaliste de Emma Laprevote, dévellopeuse web, Marseille" id="logoF">

                        <div id="contactEmma">
                            <p id="nameEmma">EMMA<br><span id="lastName">LAPREVOTE</span></p>
                            <p>Développeuse web <strong>full-stack.</strong></p>
                            <p>laprevote.emma@gmail.com</p>
                            <div id="linkSocial">
                                <a href="https://www.linkedin.com/in/emkalaprevote/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                <a href="https://github.com/emma-laprevote" target="_blank"><i class="fab fa-github-alt"></i></a>
                                <a href="https://twitter.com/ELaprevote" target="_blank"><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                        <a id="backTop" href="#navEmma"><i class="material-icons">expand_less</i></a>
                    </div>
                </section>
        </footer>

</main>
</div>
<script type="text/javascript" src="js/accueil.js"></script>
<script type="text/javascript" src="js/responsive-accueil.js"></script>
<script type="text/javascript" src="js/modals.js"></script>
<script type="text/javascript" src="js/contact.js"></script>
<script type="text/javascript" src="js/materialize.min.js"></script>
</body>
</html>
