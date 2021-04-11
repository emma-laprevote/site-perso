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

window.onload = function () {
    $('#siteComplet').hide();
    tltransition.play(0);
}

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













