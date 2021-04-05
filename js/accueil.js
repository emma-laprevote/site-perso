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

// MODAL

$('#modalSelected').click(function(){
    $('#livreOr').modal();
    $('#livreOr').modal('open');
});

//DEFILEMENT VERTICAL IMAGE PROJET MODAL

/*function defilImgVrt(el,srcs,pas,tps) {
    if(typeof el=="string") { el = document.getElementById(el); }
    var tps = tps || 50;
    var pas = pas || 1;
    var imgs = [];
    var offset = 0;
    for(var i=0,l=srcs.length;i<l;i++) {
        var img = new Image();
        img.src = srcs[i];
        imgs.push(img);
        img.style.width= "80%";
        img.style.position = "absolute";
        img.style.top = "30em";
        el.appendChild(img);
        offset += img.offsetHeight;
    }
    var first = 0;
    var last = imgs.length-1;

    (function d() {
        for(var i=0,l=imgs.length;i<l;i++) {
            var top = parseInt(imgs[i].style.top,10);
            imgs[i].style.top = (top-pas)+"em";
            if(i==first && (top-pas+imgs[i].offsetHeight)<0) {
                imgs[i].style.top = (parseInt(imgs[last].style.top,10)+imgs[last].offsetHeight-(i==0?pas:0))+"em";
                last = first++;
                if(first>imgs.length-1) { first = 0; }
            }
        }
        setTimeout(d,tps);
    })();
}

window.onload = function() {
    defilImgVrt('bandeau_vertical',[
        "../images/imagesite/livreor.png",
        "../images/imagesite/livreor2.png",
        "../images/imagesite/livreor3.png",
        "../images/imagesite/livreor4.png"
    ])
};*/

/*var stream_tab = {

    nbSlide : 0,
    nbCurrent : 1,
    elemCurrent : null,
    elem : null,
    timer : null,

    init : function(elem){
        this.nbSlide = elem.find("img").length;

        // Initiation du stream_tab
        this.elem=elem;
        elem.find("img").hide();
        elem.find("img:first").show();
        this.elemCurrent = elem.find("img:first");

        // Timer
        this.timer = window.setInterval("stream_tab.next()",2000);
    },

    gotoSlide : function(num){
        if(num==this.nbCurrent){return false;}
        $('#tab'+(num-1)).fadeOut();
        this.elem.find("#tab"+num).fadeIn();
        this.nbCurrent = num;
        this.elemCurrent = this.elem.find("#pad"+num);
    },

    next : function(){
        var num = this.nbCurrent+1;
        if(num > this.nbSlide){
            num = 1;
        }
        this.gotoSlide(num);
    },

}*/

/*$(function(){
    stream_tab.init($("#bg"));
});*/

var div = $('#bg');
setInterval(function(){
    var pos = div.scrollTop();
    div.scrollTop(pos + 2);

    if($(this).scrollTop() + $(this).innerHeight() >= this.scrollHeight) {
        clearInterval(scroller);
    }

}, 60)







