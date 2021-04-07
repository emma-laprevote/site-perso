<?php
$pageTitle = 'EMMA LAPREVOTE';
ob_start();
$path = "../";
?>


<!-- HEADER OBLIQUE + NAVBAR + IDENTITE + DEFINITION DU METIER DE DEVELOPPEUR WEB FULL STACK -->
<header data-barba="container" data-barba-namespace="accueil">
    <div class="header__bg"></div>
      <nav id="navEmma">
        <div class="nav-wrapper">
           <img id="typoLogoMenu" src="../images/typoemka.png" alt="logo Emma Laprevote">
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
        <h2 id="nameIdentity">EMMA <span id="lastName">LAPREVOTE</span></h2>
        <h6 id="definitionDev"><span>Développeur(se) full-stack</span> / dev.lɔ.pœʁ / masculin / feminin</h6>
        <p>Un <strong>développeur full stack</strong>, appelé aussi "développeur à tout faire", est un codeur capable de réaliser la programmation
        d’un site ou d'une application web à la fois en <strong>front-end</strong> et <strong>back-end</strong>. Il dispose ainsi de compétences variées lui
        permettant de travailler sur chaque étape d'un projet de création allant du développement à la production.</p>
        <button class="waves-effect white black-text btn" type="submit" onclick="window.open('../pdf/laprevote emma.pdf')"><i class="material-icons black-text left">add</i>Télécharger mon cv</button>
      </div>
</header>

<main id="main_site" data-barba="container" data-barba-namespace="accueil">
    <article id="presentation">
    <div id="sectionAboutMe"></div>
        <div id="pictureEmma"></div>

        <div id="columnInfos">
                <div id="rowTitle">
                    <div id="tabCaseAbout"><a id="linkAboutMe" href="#aboutMe"><p id="typoAboutMe">about me</p></a></div>
                    <div id="tabCaseHard"><a id="linkHardSkill" href="#hardSkill"><p id="typoHardSkills">hardskills</p></a></div>
                </div>

           <div id="rowBlock">
            <div id="aboutMe">
                <h5>EMMA <span id="lastName">Laprevote / AIX-MARSEILLE</span> / <a href="https://www.linkedin.com/in/emkalaprevote/" target="_blank"><i class="fab fa-linkedin-in"></i></a><a href="https://github.com/emma-laprevote" target="_blank"><i class="fab fa-github-alt"></i></a><a href="https://twitter.com/ELaprevote" target="_blank"><i class="fab fa-twitter"></i></a></h5>

                <p>En pleine reconversion professionnelle dans le numérique au sein de la <strong>Coding
                   School à La Plateforme_</strong>, afin de fusionner mes compétences
                   en <strong>communication graphique</strong> avec celles acquises tout au long de ma formation, dans le <strong>développement web</strong>
                </p>

                   <div id="soft">
                        <p id="softskills" class="text-flow"><span class="softNormal">attentive<span class="contrast">rigoureuse</span></span><span class="softS">passionnée</span> <span class="softS">motivée</span><span class="softNormal">dynamique</span><span class="softS">autodidacte</span>_</p>
                   </div>
            </div>

            <div id="hardSkill">
                <div class="rowColumn">
                    <img id="html" src="../images/icones/html.png" alt="Icone HTML5">
                    <img id="css" src="../images/icones/css.png" alt="Icone CSS3">
                    <img class="iconesTech" src="../images/icones/php.png" alt="Icone PHP">
                    <img class="iconesTech" src="../images/icones/sql.png" alt="Icone MYSQL">
                    <img id="git" src="../images/icones/git.png" alt="Icone GIT">
                </div>
                <div class="rowColumn">
                    <img id="composer" src="../images/icones/composer.png" alt="Icone COMPOSER">
                    <img id="js" src="../images/icones/js.png" alt="Icone JAVASCRIPT">
                    <img id="jQuery" src="../images/icones/jquery.png" alt="Icone JQUERY">
                    <img id="ubuntu" src="../images/icones/ubuntu.png" alt="Icone UBUNTU">
                    <img id="adobe" src="../images/icones/adobe.png" alt="Icone ADOBE">
                </div>
            </div>
         </div>
        </article>

        <section id="project">
            <div class="project__bg"></div>
                <div id="titleSection">
                    <h4>projets</h4>
                    <p>Une petite selection de quelques projets réaliser depuis le début de l'année jusqu'à maintenant.
                    Vous pouvez retrouvez la totalité des projets sur mon Github.</p>
                </div>
            <div id="carousel">
                   <div class="hideLeft">
                    <img src="../images/carousel/ide.png" alt="page d'accueil projet html ide favoris">
                    <a id="modalIde" href="#ide"><p class="linkProject"><span>IDE FAVORIS / <strong>HTML5 / CSS3</strong></span></p></a>
                  </div>

                  <div class="prevLeftSecond">
                    <img src="../images/carousel/appfav.png" alt="page d'accueil projet html application favorite">
                    <a id="modalApp" href="#appfav"><p class="linkProject"><span>APPLICATION FAVORITES / <strong>HTML5 / CSS3</strong></span></p></a>
                  </div>

                  <div class="prev">
                    <img src="../images/carousel/slash.png" alt="page d'accueil projet php module-connexion">
                    <a id="modalSlash" href="#slash"><p class="linkProject"><span>SLASH MAGAZINE / <strong>PHP</strong></span></p></a>
                  </div>

                  <div class="selected">
                     <img src="../images/carousel/livreor.png" alt="page d'accueil projet php livre d'or">
                     <a id="modalLivre" href="#modalProject"><p class="linkProject"><span>NOISE POLLUTION / <strong>PHP</strong></span></p></a>
                  </div>

                  <div class="next">
                    <img src="../images/carousel/discussion.png" alt="page d'accueil projet php discussion">
                    <a id="modalDiscu" href="#discussion"><p class="linkProject"><span>THE FACTORY / <strong>PHP</strong></span></p></a>
                  </div>

                  <div class="nextRightSecond">
                    <img src="../images/carousel/blogout.png" alt="page d'accueil projet php blog">
                    <a id="modalBlog" href="#blogout"><p class="linkProject"><span>BLOGOUT / <strong>PHP</strong></span></p></a>
                  </div>

                  <div class="hideRight">
                    <img src="../images/carousel/boutique.png" alt="page d'accueil projet php boutique en ligne">
                    <a id="modalShop" href="#jungle"><p class="linkProject"><span>JUNGLE GARDENER / <strong>PHP</strong></span></p></a>
                  </div>
                </div>
        </section>
        <div id="modalProject" class="modal"></div>
        <section id="contactMe">
            <div id="msg_contact">
                <div>
                <h4>contact me.</h4>
                <h6><i class="material-icons left">search</i>recherche<span>alternance</span>.</h6>
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
                        <img src="../images/logoemka.png" alt="logo Emma Laprevote" id="logoF">

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

<script type="text/javascript" src="../js/accueil.js"></script>
<script type="text/javascript" src="../js/modals.js"></script>
<script type="text/javascript" src="../js/contact.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></script>
<script src="https://unpkg.com/@barba/core"></script>

<?php
$pageContent = ob_get_clean();
require_once('template.php');
