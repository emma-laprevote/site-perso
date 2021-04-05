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
      </div>
</header>

<main id="main_site">
    <article id="presentation">
    <div id="sectionAboutMe"></div>
        <div id="pictureEmma"></div>

        <div id="columnInfos">
            <a id="linkAboutMe" href="#"><img id="titleAboutMe" src="../images/aboutme.PNG" alt="Titre de la section de présenation"></a>
            <div id="aboutMe">
                <div id="linearAboutMe">
                <h5>EMMA <span id="lastName">Laprevote / 28 ANS / AIX-MARSEILLE</span></h5>
                <p>Ce n'est pas toujours évident de se présenter en quelques lignes, surtout quand votre parcours est assez atypique.
                Le mien commence dans <strong>la communication graphique</strong>, avec l'obtention d'un CAP et d'un BAC PRO en <strong>artisanat et metiers d'art en communication graphique</strong>.
                Des années merveilleuses qui m'ont permises de développer ma curiosité et mon sens critique pour les <strong>arts visuels</strong> mais aussi de découvrir différents domaines
                comme le <strong>webdesign</strong> et le <strong>développement web</strong>. <br><br>
                Mon parcours prends au final des chemins opposés, afin d'explorer d'autres horizons, d'autres passions.
                Mais c'est en 2019 que je décide de rejoindre le monde du <strong>numérique</strong> afin d'associer mes compétences en tant
                 que <strong>graphiste</strong>, avec celles en tant que <strong>Développeuse full-stack</strong> au sein de l'école <strong>La PLateforme_</strong> basée à Marseille. </p>
                 </div>
            </div>

            <a id="linkHardSkill" href="#"><img id="titleHardSkills" src="../images/hardskill.PNG" alt="Titre de la section des compétences techniques"></a>
            <div id="hardSkill">
                <div id="iconsRow">
                <img id="html" class="iconesTech" src="../images/icones/html.png" alt="Icone HTML5">
                <img id="css" class="iconesTech" src="../images/icones/css.png" alt="Icone CSS3">
                <img class="iconesTech" src="../images/icones/php.png" alt="Icone PHP">
                <img class="iconesTech" src="../images/icones/sql.png" alt="Icone MYSQL">
                <img id="composer" class="iconesTech" src="../images/icones/composer.png" alt="Icone COMPOSER">
                <img id="js" class="iconesTech" src="../images/icones/js.png" alt="Icone JAVASCRIPT">
                <img class="iconesTech" src="../images/icones/jquery.png" alt="Icone JQUERY">
                <img class="iconesTech" src="../images/icones/ubuntu.png" alt="Icone UBUNTU">
                </div>
            </div>
        </div>
        </article>

        <section id="project">
            <div class="project__bg"></div>

            <div id="carousel">
                   <div class="hideLeft">
                    <img src="../images/carousel/ide.png" alt="page d'accueil projet html ide favoris">
                  </div>

                  <div class="prevLeftSecond">
                    <img src="../images/carousel/appfav.png" alt="page d'accueil projet html application favorite">
                  </div>

                  <div class="prev">
                    <img src="../images/carousel/slash.png" alt="page d'accueil projet php module-connexion">
                  </div>

                  <div class="selected">
                     <a id="modalSelected" href="#livreOr"><img src="../images/carousel/livreor.png" alt="page d'accueil projet php livre d'or"></a>
                  </div>

                  <div class="next">
                    <img src="../images/carousel/discussion.png" alt="page d'accueil projet php discussion">
                  </div>

                  <div class="nextRightSecond">
                    <img src="../images/carousel/blogout.png" alt="page d'accueil projet php blog">
                  </div>

                  <div class="hideRight">
                    <img src="../images/carousel/boutique.png" alt="page d'accueil projet php boutique en ligne">
                  </div>

                </div>

        </section>

        <!-- Modal Structure selected -->
             <div id="livreOr" class="modal">
                <div class="modal__bg"></div>
                    <div class="modal-footer">
                         <a href="#!" class="modal-close waves-effect waves-green btn-flat"><i class="material-icons white-text">clear</i></a>
                    </div>
                 <div class="modal-content">
                    <!--<div id="bandeau_vertical" class="bandeau_vertical" style=""></div>-->
                    <div id="bg">
                       <img id="tab1" src="../images/imagesite/livreor.png"/>
                       <img id="tab2" src="../images/imagesite/livreor2.png"/>
                       <img id="tab3" src="../images/imagesite/livreor3.png"/>
                       <img id="tab4" src="../images/imagesite/livreor4.png"/>
                    </div>

                    <div class="contentColumn">
                    <div id="titleProject">
                        <h2>#LIVRE D'OR</h2>
                        <p><b>NOISE POLLUTION</b> / PROJET <strong>PHP</strong> / 2019 / GITHUB</p>
                    </div>
                    <div class="descriptionProject">
                        <h4 class="des">Description du projet</h4>
                        <p>Le projet était de créer un livre d’or permettant aux utilisateurs de laisser
                           leurs avis sur le site.<br>
                           Dans un premier temps, je devais créer une base de donnée à l'aide <b>phpMyAdmin</b> et ensuite
                           créer plusieurs pages avec l'ajout de fonctionnalitées selon si l'utilisateur était connecté ou pas, comme l'ajout de commentaire
                           pour un utilisateur connecté.
                        </p>
                        <h4 class="compet">Compétences / acquis</h4>
                        <p><b>STRUCTURATION ET FACTORISATION DU CODE</b><br>
                        PARTITIONNEMENT DES FICHIERS<br>
                        DECOUVERTE DU FRAMEWORK <strong>MATERIALIZE</strong><br>
                        CREATION FICHIER TEMPLATE.</p>
                    </div>
                    </div>
                 </div>
             </div>
</main>

<script type="text/javascript" src="../js/accueil.js"></script>
<?php
$pageContent = ob_get_clean();
require_once('template.php');
