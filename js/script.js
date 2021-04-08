$('header').hide();

function changeImg() {
    $('#changeImg').slideToggle(3000);
    setTimeout("changeImg()", 8000)
}

/*window.onload = function(){
    changeImg();
}*/

// SCRIPT PAGE TRANSITION BARBA / GSAP
const wipe = document.querySelector('.wipe-transition');

let TLAnim = new TimelineMax();

function delay(n) {
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n)
    })
}

barba.init({

    sync: true,

    transitions: [
        {
            async leave(){

                const done = this.async();

                TLAnim.to(wipe, {left: '0%', ease: "power2.out", duration: 0.5});

                await delay(1000);
                done();

            },
            enter(){

                 TLAnim
                    .to(wipe, {left: '100%', ease:"power2.in", duration: 0.5})
                    .set(wipe, {left: '-100%'})

                 $('header').show();
                 location.reload(true);
            }
        }
    ]

})

// SCRIPT JQUERIES RESPONSIVE


    if(window.matchMedia("(min-width:280px)").matches && window.matchMedia("(max-width:1024px)").matches){

        $('#welcomeHome').css("flexDirection", "column");
        $('#containerImg').css("height", "30em");

        $('#logoEmka').css("borderRight", "none");
        $('#logoEmka').css("width", "80%");
        $('#logoEmka').css({
            margin: "0 auto",
            marginTop: "-10em",
        });

        $('#portraitEmka').css("marginLeft", "25%");

        $('#changeImg').removeClass().addClass("imgChangeResponse");
        $('#typoLogoEmka').css("width", "55%");
        $('#typoLogoEmka').css({
            margin: "0 auto"
        });

        $('#upImg').empty();
        $('#upImg').append(buttonEnter ());

        $('#upImg').removeClass().addClass("upImageResponse");
        $('#imgEnter').remove().addClass("imgEnterResponse");



    }

    function buttonEnter () {
        let html = "";
        html += "<a id=\"enterSite\" href=\"./accueil.php\"><img id=\"imgEnter\" src=\"../images/bulleEnterResponsive.png\"></a>";

        return html;
    }








