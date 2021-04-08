$('header').hide();

function changeImg() {
    $('#changeImg').slideToggle(3000);
    setTimeout("changeImg()", 8000)
}


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

    if (window.matchMedia("(min-width:280px)").matches && window.matchMedia("(max-width:900px)").matches) {

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
        $('#upImg').append(buttonEnter());

        $('#imgEnterRes').css({
            width: "34%",
            marginLeft: "22%",
            paddingTop: "2em"
        })

        $('.divEnter').css({
            width: "70%",
            margin: "0 auto",
            height: "5em"
        })

    } else if (window.matchMedia("(min-width:1000px)").matches && window.matchMedia("(max-width:1500px)").matches) {
        window.onload = function () {
            changeImg();
        }

        $('#typoDevEmma').css({
            width: "80%"
        })
        $('#imgEnter').css('width', '10%')
        $('#portraitEmka').css('marginLeft', '20%')
        $('#portraitEmka').css("width", "60%")
        $('#portraitEmka').css({
            paddingTop: "0.5em"
        })

    } else if (window.matchMedia("(min-width:1500px)").matches) {
        window.onload = function () {
            changeImg();
        }

        $('#typoDevEmma').css({
            width: "70%"
        })
        $('.divEnter').css("width", "61%")
        $('#typoLogoEmka').css("width", "25%")
    }

    function buttonEnter () {
        let html = "";
        html += "<div class='divEnter'><a id=\"enterSite\" href=\"./accueil.php\"><img id=\"imgEnterRes\" src=\"../images/bulleEnterResponsive.png\"></a></div>";

        return html;
    }








