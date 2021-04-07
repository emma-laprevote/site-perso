$(document).ready(function(){
    $('.sidenav').sidenav();
});

// SECTION ABOUT ME/HARDSKILLS

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

$(function() {

    $("a[href*='#']:not([href='#'])").click(function(e) {
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










