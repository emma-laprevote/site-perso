<?php
$pageTitle = 'EMMA LAPREVOTE';
ob_start();
$path = "";
?>

<div class="wipe-transition"></div>

<main id="main_site" data-barba="container" data-barba-namespace="home">

<section id="welcomeHome">
    <div id="logoEmka">
        <img id="portraitEmka" src="images/logoemka.png" alt="logo Emma Laprevote">
    </div>
    <div id="containerImg">
    <div id="columnImg">
        <div class="contentImg" id="changeImg">
            <img src="images/typoemka.png"  id="typoLogoEmka" alt="typographie logo Emma Laprevote">
        </div>
        <div class="contentImg" id="upImg">
            <img src="images/typoDev.png"  id="typoDevEmma" alt="typographie développeuse web">
            <a id="enterSite" href="pages/accueil.php"><img id="imgEnter" src="images/entrer.png"></a>
        </div>
    </div>
    </div>
</section>

</main>

<script type="text/javascript" src="js/script.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></script>
<?php
$pageContent = ob_get_clean();
require_once('pages/template.php');