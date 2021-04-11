// SCRIPT RESPONSIVE JQUERIES
if (window.matchMedia("(min-width:280px)").matches && window.matchMedia("(max-width:900px)").matches) {

    $('.page-transition__red').remove();
    $('.page-transition__black').remove();
    $('.transition__logo').remove();

    $('#siteComplet').show();

    $(document).ready(function(){
        $('.sidenav').sidenav();
    });

    $('#typoLogoMenu').css("padding", "0");
    $('#typoLogoMenu').css("width", "20%");
    $('#typoLogoMenu').css({
        marginLeft: "30%",
        paddingTop: "2em"
    })
    $('#presentEmma').css("width", "70%")
    $('#presentEmma').css("margin", "12em 0 0 3em");
    $('#nameIdentity').css({
        fontSize: "2.5em"
    })
    $('#definitionDev').css({
        width: "100%",
        fontSize: "1em"
    })

    $('#softskills').css({
        width: "50%",
        fontSize: "1.1em",
        marginBottom: "2em"
    })

    $('#aboutMe').css("width", "100%")
    $('#statutEmma').remove()
    $('#presentation').css("height", "40%")

    $('#columnInfos').css("marginLeft", "-19%")
    $('#aboutMe p').css("width", "95%")
    $('#aboutMe p').css("padding", "0")
    $('#aboutMe h5').css({
        fontSize: "1.4em"
    })

    $('#rowTitle').css({
        marginTop: "1em"
    })

    //icones hardskill

    $('#hardSkill').empty()
    $('#hardSkill').append(getHardskill ())
    $('.rowImg').css({
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: "2em"
    })

    $('.rowImg img').css({
        marginRight: "5%"
    })

    $('#html').css("width", "14%")
    $('#html').css({
        height: "3.5em"
    })
    $('#css').css("width", "14%")
    $('#css').css({
        height: "3.5em"
    })
    $('#composer').css("width", "14%")
    $('#js').css("width", "15%")
    $('#adobe').css({
        height: "3.5em"
    })

    $('#adobe').css("width", "19%")
    $('#adobe').css({
        height: "3.5em"
    })
    $('#jQuery').css("width", "20%")
    $('#git').css("width", "19%")
    $('#git').css("height", "2.5em")
    $('.iconesTech').css("width", "20%")
    $('.iconesTech').css("height", "2.5em")

    //SECTION PROJET
    $('#titleSection').css("width", "90%")
    $('#titleSection').css("margin", "3em 0 0 1.5em")

    $('#carousel').empty()
    $('#carousel').append(getProject ())

    $('#project').css("height", "65rem")
    $('#carousel').css("transform", "none")
    $('#carousel').css("marginTop", "3em")
    $('#carousel').css("top", "0")
    $('#carousel').css({
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        paddingLeft: "5%"
    })

    $('#carousel div').css("transition", "none")
    $('#carousel div').css("width", "50%")
    $('#carousel').css("height", "700px")
    $('#carousel div').css({
        position: "relative"
    })

    $('#carousel img').css("width", "90%")
    $('#carousel img').css("transition", "none")
    $('.linkProject').css({
        fontSize: "12px"
    })

    $('#msg_contact div').css("paddingTop", "2em")
    $('#logoF').css("width", "30%")

    if(window.matchMedia("(min-width:280px)").matches && window.matchMedia("(max-width:500px)").matches){

        $('.page-transition__red').remove();
        $('.page-transition__black').remove();
        $('.transition__logo').remove();

        $('#siteComplet').show();

        $('#presentEmma').css("margin", "6em 0 0 3em");
        $('#typoLogoMenu').css({
            marginLeft: "24%",
            paddingTop: "2em"
        })
        $('#project').css("height", "90rem")
        $('#carousel').removeAttr("style");
        $('#carousel').css({
            paddingLeft: "15%",
            height: "1150px",
            paddingTop: "4em"
        })

        $('#carousel div').css("width", "90%")
        $('#carousel img').css("width", "90%")

        $('#contactMe').css("flexDirection", "column")
        $('#contactMe').css("height", "63rem")

        $('#msg_contact').css("width", "100%")
        $('#formContact').css("width", "100%")
        $('#formContactEmka').css("marginTop", "2em")
        $('#formContactEmka').css({margin: "0 auto"})
        $('#msg_contact div').css("paddingTop", "0")

        $('#backTop').css("marginLeft", "2em")
        $('#logoF').remove()

    }

} else if (window.matchMedia("(min-width:900px)").matches && window.matchMedia("(max-width:1000px)").matches) {

    /*Animation chargement de la page à l'aide de la libraire GSAP*/
    const logo = document.querySelector('.transition__logo');
    const frameBlack = document.querySelector('.page-transition__black');
    const frameRed = document.querySelector('.page-transition__red');

    let tltransition = new TimelineMax({paused:true})
        .fromTo(frameRed, 2.2, {scaleX: 0},{scaleX: 1, transformOrigin:'left', ease: Power4.easeInOut})
        .fromTo(frameBlack, 2.2, {scaleX: 0},{scaleX: 1, transformOrigin:'left', ease: Power4.easeInOut}, "-=1.85")
        .fromTo(logo, 1.6, {xPercent: -100, autoAlpha:0 },{xPercent: 0, autoAlpha:1, ease: Power4.easeInOut},"-=1.8")
        .addPause() // When we play the Timeline .. this will make it pause until we are ready to continue
        .set(frameRed, {scaleX:0})
        .to(frameBlack, 2.2, {scaleX: 0, transformOrigin:'right', ease: Power4.easeInOut})
        .to(logo, .2, {autoAlpha:0 },'-=1.2')

    $('#siteComplet').hide();

    window.addEventListener('load', function(){
        tltransition.play(0);

        window.onload = function() {
            var waitForPaused = setInterval( function(){
                if( tltransition.paused() && tltransition.progress() > 0 ){
                    clearInterval(waitForPaused);
                    tltransition.play();
                    setInterval(function(){$('#siteComplet').fadeIn(3000);}, 1000)
                }
            }, 100 );

        };
    })

    $('#columnInfos').css("marginTop", "-3%")
    $('#titleSection').css("width", "40%")
    $('#titleSection').css("margin", "3em 0 2em 3em")

    $('#modalProject').css("width", "95%")
    $('.descriptionProject').css("marginTop", "2em")

} else if (window.matchMedia("(min-width:1600px)").matches) {

    /*Animation chargement de la page à l'aide de la libraire GSAP*/
    const logo = document.querySelector('.transition__logo');
    const frameBlack = document.querySelector('.page-transition__black');
    const frameRed = document.querySelector('.page-transition__red');

    let tltransition = new TimelineMax({paused:true})
        .fromTo(frameRed, 2.2, {scaleX: 0},{scaleX: 1, transformOrigin:'left', ease: Power4.easeInOut})
        .fromTo(frameBlack, 2.2, {scaleX: 0},{scaleX: 1, transformOrigin:'left', ease: Power4.easeInOut}, "-=1.85")
        .fromTo(logo, 1.6, {xPercent: -100, autoAlpha:0 },{xPercent: 0, autoAlpha:1, ease: Power4.easeInOut},"-=1.8")
        .addPause() // When we play the Timeline .. this will make it pause until we are ready to continue
        .set(frameRed, {scaleX:0})
        .to(frameBlack, 2.2, {scaleX: 0, transformOrigin:'right', ease: Power4.easeInOut})
        .to(logo, .2, {autoAlpha:0 },'-=1.2')

    $('#siteComplet').hide();

    window.addEventListener('load', function(){
        tltransition.play(0);

        window.onload = function() {
            var waitForPaused = setInterval( function(){
                if( tltransition.paused() && tltransition.progress() > 0 ){
                    clearInterval(waitForPaused);
                    tltransition.play();
                    setInterval(function(){$('#siteComplet').fadeIn(3000);}, 1000)
                }
            }, 100 );

        };
    })

    $('#modalProject').css("width", "90%")
    $('.modal__bg').css("height", "47%")
    $('#bg').css("width", "50%")
    $('.des').css("padding", "2.5em 0 0 1.4em")
    $('.descriptionProject p').css({
        width: "70%"
    })

    $('.descriptionProject3 p').css({
        width: "60%"
    })

    $('.descriptionProject2 p').css({
        width: "60%"
    })

    $('#bg2').css("width", "50%")
    $('#aboutMe p').css("width", "75%")
    $('#statutEmma').css("width", "15%")
    $('#columnInfos').css("marginTop", "-1%")
}



function getHardskill () {
    let html = "";
    html += '<div class="rowImg">'
    html += '<img id="html" src="images/icones/html.png" alt="Icone language HTML5, utilisé dans le dévellopement web et par Emma Laprevote">'
    html += '<img id="css" src="images/icones/css.png" alt="Icone language CSS3, utilisé dans le dévellopement web et par Emma Laprevote">'
    html += '<img class="iconesTech" src="images/icones/php.png" alt="Icone du language de programmation PHP, utilisé dans le dévellopement web et par Emma Laprevote">'
    html += '<img class="iconesTech" src="images/icones/sql.png" alt="Icone du language MYSQL, utilisé dans le dévellopement web et par Emma Laprevote">'
    html += '</div>'
    html += '<div class="rowImg">'
    html += '<img id="adobe" src="images/icones/adobe.png" alt="Icone ADOBE, utilisé dans le dévellopement web et par Emma LaprevoteE">'
    html += '<img id="git" src="images/icones/git.png" alt="Icone GIT, utilisé dans le dévellopement web, et par Emma Laprevote">'
    html += '<img id="js" src="images/icones/js.png" alt="Icone language de programmation JAVASCRIPT, utilisé dans le dévellopement web et par Emma Laprevote">'
    html += '<img id="jQuery" src="images/icones/jquery.png" alt="Icone de la librairie JQUERY, utilisé dans le dévellopement web et par Emma Laprevote">'
    html += '</div>'

    return html;
}

function getProject () {
    let html = "";

    html += '<div class="resProject">'
    html += '<img src="images/carousel/ide.png" alt="page d\'accueil projet Emma Laprevote html ide favoris, développement web"><a href="https://github.com/emma-laprevote/ide"><p class="linkProject"><span>IDE FAVORIS / <strong>HTML5 / CSS3</strong></span></p></a>'
    html += '</div>'
    html += '<div class="resProject">'
    html += '<img src="images/carousel/appfav.png" alt="page d\'accueil projet Emma Laprevote html application favorite, développement web"><a href="https://github.com/emma-laprevote/app-favorites"><p class="linkProject"><span>APPLICATION FAVORITES / <strong>HTML5 / CSS3</strong></span></p></a>'
    html += '</div>'
    html += '<div class="resProject">'
    html += '<img src="images/carousel/slash.png" alt="page d\'accueil projet Emma Laprevote php module-connexion, développement web"><a href="https://github.com/emma-laprevote/module-connexion"><p class="linkProject"><span>SLASH MAGAZINE / <strong>PHP</strong></span></p></a>'
    html += '</div>'
    html += '<div class="resProject">'
    html += '<img src="images/carousel/livreor.png" alt="page d\'accueil projet Emma Laprevote php livre d\'or, développement web"><a href="https://github.com/emma-laprevote/livre-or"><p class="linkProject"><span>NOISE POLLUTION / <strong>PHP</strong></span></p></a>'
    html += '</div>'
    html += '<div class="resProject">'
    html += '<img src="images/carousel/discussion.png" alt="page d\'accueil projet Emma Laprevote php discussion, développement web"><a href="https://github.com/emma-laprevote/discussion"><p class="linkProject"><span>THE FACTORY / <strong>PHP</strong></span></p></a>'
    html += '</div>'
    html += '<div class="resProject">'
    html += '<img src="images/carousel/blogout.png" alt="page d\'accueil projet Emma Laprevote php blog, développement web"><a href="https://github.com/emma-laprevote/blog"><p class="linkProject"><span>BLOGOUT / <strong>PHP</strong></span></p></a>'
    html += '</div>'
    html += '<div class="resProject">'
    html += '<img src="images/carousel/boutique.png" alt="page d\'accueil projet Emma Laprevote php boutique en ligne, développement web"><a href="https://github.com/emma-laprevote/boutique"><p class="linkProject"><span>JUNGLE GARDENER / <strong>PHP</strong></span>'
    html += '</div>'

    return html;
}