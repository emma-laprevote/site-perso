<?php
$pageTitle = 'ACCUEIL';
ob_start();
?>

<header>
    <div class="header__bg"></div>
      <nav id="navEmma">
        <div class="nav-wrapper">
           <a href="#!" class="brand-logo"><img id="typoLogoMenu" src="../images/typoemka.png" alt="logo Emma Laprevote"</a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul id="navBar" class="right hide-on-med-and-down">
            <li><a href="#"><span class="link">ABOUT ME</span></a></li>
            <li><a href="#"><span class="link">PROJETS</span></a></li>
            <li><a href="#"><span class="link">CONTACT</span></a></li>
        </div>
      </nav>
      <ul class="sidenav" id="mobile-demo">
         <li><a href="#">ABOUT ME</a></li>
         <li><a href="#">PROJETS</a></li>
         <li><a href="#">CONTACT</a></li>
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

<main id="main_site">
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
                <h5>EMMA <span id="lastName">Laprevote / AIX-MARSEILLE</span> / <i class="fab fa-linkedin-in"></i><i class="fab fa-github-alt"></i><i class="fab fa-twitter"></i></h5>

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
</main>

<script type="text/javascript" src="../js/accueil.js"></script>
<script type="text/javascript" src="../js/modals.js"></script>
<?php
$pageContent = ob_get_clean();
require_once('template.php');
