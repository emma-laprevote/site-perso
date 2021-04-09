<?php
$pageTitle = 'EMMA LAPREVOTE';
ob_start();
$path = "";
?>

<div class="wipe-transition"></div>

<header data-barba="container" data-barba-namespace="home"></header>

<main id="main_site" data-barba="container" data-barba-namespace="home">

<section id="welcomeHome">
    <div id="logoEmka">
        <img id="portraitEmka" src="images/logoemka.png" alt="identité visuelle portrait minimaliste de Emma Laprevote, dévellopeuse web, Marseille">
    </div>
    <div id="containerImg">
    <div id="columnImg">
        <div class="contentImg" id="changeImg">
            <img src="images/typoemka.png"  id="typoLogoEmka" alt="identité visuelle typographique de Emma Laprevote, dévellopeuse Marseille">
        </div>
        <div class="contentImg" id="upImg">
            <div class="divDev">
                <img src="images/typoDev.png"  id="typoDevEmma" alt="typographie développeuse web pour Emma Laprevote, développeuse web, Marseille">
            </div>
            <div class="divEnter">
                <a id="enterSite" href="pages/accueil.php"><img id="imgEnter" src="images/bulleEnterResponsive.png" alt="button entrer pixilisé pour entrer sur la page de Emma Laprevote, développeuse web, Marseille"></a>
            </div>
        </div>
    </div>
    </div>
</section>

</main>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></script>
<script src="https://unpkg.com/@barba/core"></script>
<script type="text/javascript" src="js/script.js"></script>
<?php
$pageContent = ob_get_clean();
require_once('pages/template.php');