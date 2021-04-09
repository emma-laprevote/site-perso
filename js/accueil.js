
//Page accueil inital:
$('#hardSkill').hide();
$('#typoAboutMe').css({
    borderBottom: '1px solid black',
    opacity: '80%'
})

//Evenement du le lien Hardskill:
$('#linkHardSkill').click(function (e){
    e.preventDefault();

    $('#typoAboutMe').removeAttr("style");
    $('#typoAboutMe').css({
        'font-family': '"Arial Black", sans-serif, sans-serif',
        'font-size': '1.6em'
    })
    $('#typoHardSkills').css({
        borderBottom: '1px solid black',
        'font-family': 'Arial, sans-serif',
        'font-size': '1.66em',
        opacity: '80%'
    })

    $('#aboutMe').toggle(1000, "linear", function (){
        $('#hardSkill').fadeTo(1000, 0.9);
    })
})

$('#linkAboutMe').click(function (e){
    e.preventDefault();

    $('#typoHardSkills').removeAttr("style");
    $('#typoAboutMe').css({
        borderBottom: '1px solid black',
        'font-family': 'Arial, sans-serif',
        'font-size': '1.66em',
        opacity: '80%'
    })
    $('#hardSkill').fadeToggle(1000, "linear", function (){
        $('#aboutMe').toggle(1000, "linear");
    });
})


$(document).ready(function(){
    $('ul.tabs').tabs({
        swipeable : true,
        responsiveThreshold : 1920
    });
});

// Système carousel js
function moveToSelected(element) {

    if (element == "next") {
        var selected = $(".selected").next();
    } else if (element == "prev") {
        var selected = $(".selected").prev();
    } else {
        var selected = element;
    }

    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();

    $(selected).removeClass().addClass("selected");

    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");

    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");

    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
            moveToSelected('prev');
            break;

        case 39: // right
            moveToSelected('next');
            break;

        default: return;
    }
    e.preventDefault();
});

$('#carousel div').click(function() {
    moveToSelected($(this));
});

//SCROLL SMOOTH POUR CERTAINES ANCRES
$(function() {

    $("a[href*='#presentation']:not([href='#'])").click(function(e) {
        e.preventDefault();
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
            }
        }
    });
});

$(function() {

    $("a[href*='#project']:not([href='#'])").click(function(e) {
        e.preventDefault();
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
            }
        }
    });
});

$(function() {

    $("a[href*='#contactMe']:not([href='#'])").click(function(e) {
        e.preventDefault();
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
            }
        }
    });
});

$(function() {

    $("a[href*='#navEmma']:not([href='#'])").click(function(e) {
        e.preventDefault();
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
            }
        }
    });
});

// SCRIPT RESPONSIVE JQUERIES
if (window.matchMedia("(min-width:280px)").matches && window.matchMedia("(max-width:900px)").matches) {

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
        fontSize: "1.2em",
        marginBottom: "2em"
    })

    $('#aboutMe').css("width", "100%")
    $('#statutEmma').remove()
    $('#presentation').css("height", "40%")

    $('#columnInfos').css("marginLeft", "1.5em")
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
    $('#css').css("width", "14%")
    $('#composer').css("width", "14%")
    $('#js').css("width", "15%")

    $('#adobe').css("width", "19%")
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

    }

} else if (window.matchMedia("(min-width:900px)").matches && window.matchMedia("(max-width:1000px)").matches) {
    $('#columnInfos').css("marginTop", "-3%")
    $('#titleSection').css("width", "40%")
    $('#titleSection').css("margin", "3em 0 2em 3em")

    $('#modalProject').css("width", "95%")
    $('.descriptionProject').css("marginTop", "2em")

} else if (window.matchMedia("(min-width:1600px)").matches) {
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
    html += '<img id="html" src="../images/icones/html.png" alt="Icone HTML5">'
    html += '<img id="css" src="../images/icones/css.png" alt="Icone CSS3">'
    html += '<img class="iconesTech" src="../images/icones/php.png" alt="Icone PHP">'
    html += '<img class="iconesTech" src="../images/icones/sql.png" alt="Icone MYSQL">'
    html += '</div>'
    html += '<div class="rowImg">'
    html += '<img id="adobe" src="../images/icones/adobe.png" alt="Icone ADOBE">'
    html += '<img id="git" src="../images/icones/git.png" alt="Icone GIT">'
    html += '<img id="js" src="../images/icones/js.png" alt="Icone JAVASCRIPT">'
    html += '<img id="jQuery" src="../images/icones/jquery.png" alt="Icone JQUERY">'
    html += '</div>'

    return html;
}

function getProject () {
    let html = "";

    html += '<div class="resProject">'
    html += '<img src="../images/carousel/ide.png" alt="page d\'accueil projet html ide favoris"><a href="https://github.com/emma-laprevote/ide"><p class="linkProject"><span>IDE FAVORIS / <strong>HTML5 / CSS3</strong></span></p></a>'
    html += '</div>'
    html += '<div class="resProject">'
    html += '<img src="../images/carousel/appfav.png" alt="page d\'accueil projet html application favorite"><a href="https://github.com/emma-laprevote/app-favorites"><p class="linkProject"><span>APPLICATION FAVORITES / <strong>HTML5 / CSS3</strong></span></p></a>'
    html += '</div>'
    html += '<div class="resProject">'
    html += '<img src="../images/carousel/slash.png" alt="page d\'accueil projet php module-connexion"><a href="https://github.com/emma-laprevote/module-connexion"><p class="linkProject"><span>SLASH MAGAZINE / <strong>PHP</strong></span></p></a>'
    html += '</div>'
    html += '<div class="resProject">'
    html += '<img src="../images/carousel/livreor.png" alt="page d\'accueil projet php livre d\'or"><a href="https://github.com/emma-laprevote/livre-or"><p class="linkProject"><span>NOISE POLLUTION / <strong>PHP</strong></span></p></a>'
    html += '</div>'
    html += '<div class="resProject">'
    html += '<img src="../images/carousel/discussion.png" alt="page d\'accueil projet php discussion"><a href="https://github.com/emma-laprevote/discussion"><p class="linkProject"><span>THE FACTORY / <strong>PHP</strong></span></p></a>'
    html += '</div>'
    html += '<div class="resProject">'
    html += '<img src="../images/carousel/blogout.png" alt="page d\'accueil projet php blog"><a href="https://github.com/emma-laprevote/blog"><p class="linkProject"><span>BLOGOUT / <strong>PHP</strong></span></p></a>'
    html += '</div>'
    html += '<div class="resProject">'
    html += '<img src="../images/carousel/boutique.png" alt="page d\'accueil projet php boutique en ligne"><a href="https://github.com/emma-laprevote/boutique"><p class="linkProject"><span>JUNGLE GARDENER / <strong>PHP</strong></span>'
    html += '</div>'

    return html;
}












