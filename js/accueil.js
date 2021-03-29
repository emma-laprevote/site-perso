$(document).ready(function(){
    $('.sidenav').sidenav();
});

// SECTION ABOUT ME/HARDSKILLS
$('#iconsRow').hide();
$('#linkHardSkill').click(function (e){
    e.preventDefault();
    $('#linearAboutMe').toggle(1000, "linear", function (){
        $('#iconsRow').fadeTo(1000, 0.9);
    })
})

$('#linkAboutMe').click(function (e){
    e.preventDefault();
    $('#iconsRow').fadeToggle(1000, "linear", function (){
        $('#linearAboutMe').toggle(1000, "linear");
    });
})

//SECTION STICKY HEADER
$(window).scroll(function () {
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
});


