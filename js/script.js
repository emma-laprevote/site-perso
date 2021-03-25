
/*function changeImg() {
    $('#containerImg').hover(function (e) {
        var $container = $(this),
            top = e.type === 'mouseenter' ? -$container.height() : 0;
        $container.find('#columnImg').stop(true).animate({
            top: top
        })
    })

    setTimeout("changeImg()", 1000)
}

window.onload = function(){
    changeImg();
}*/

function changeImg() {
    $('#changeImg').slideToggle(3000);
    setTimeout("changeImg()", 8000)
}

window.onload = function(){
    changeImg();
}

