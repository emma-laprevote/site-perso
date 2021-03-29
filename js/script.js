function changeImg() {
    $('#changeImg').slideToggle(3000);
    setTimeout("changeImg()", 8000)
}

window.onload = function(){
    changeImg();
}

$('#enterSite').click(function (){
    $('html').css({
        backgroundColor: 'white'
    });

    barba.init ({
        transitions: [{
            name: 'opacity-transition' , Leave
                (data) { return gsap.to (data.current.container, {         opacity: 0       });     },     enter (data) { return gsap. from (data.next.container, {         opacity: 0       });     }   }] });

});






