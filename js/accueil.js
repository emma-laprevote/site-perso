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

/*$('#prev').click(function() {
    moveToSelected('prev');
});

$('#next').click(function() {
    moveToSelected('next');
});*/


