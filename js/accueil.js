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

//SECTION STICKY HEADER
/*$(window).scroll(function () {
        let w = $(window).scrollTop();
        if (w > 500) {
           $('.header__bg').hide();
           $('#presentEmma').hide();

           $('#navEmma').css({
               backgroundColor: 'black',
               position: 'fixed',
               top: '0',
               overflow: 'hidden',
               opacity: '80%'
           })

            $('#typoLogoMenu').css({
                padding: '0.7em 0 0 2em',
                width: '11%'
            })
        }else {
            $('.header__bg').show();
            $('#presentEmma').show();

            $('#navEmma').removeAttr("style");
            $('#typoLogoMenu').removeAttr("style");
        }
});*/

$(document).ready(function(){
    $('ul.tabs').tabs({
        swipeable : true,
        responsiveThreshold : 1920
    });
});


