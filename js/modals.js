//TRAITEMENT DES DIFFERENTES MODALS

//Fonction défilement d'image dans la modal.
function slideDiv () {
    let div = $('#bg')

    let scroller = setInterval(function(){
        let pos = div.scrollTop();
        div.scrollTop(pos + 2);

    }, 60)

    div.mouseleave(function (){
        clearInterval(scroller);
    })
}

//Traitement des modals pour chaque projets
$('#modalLivre').click(function (e) {
    e.preventDefault();

    $.ajax({
        url: "../pages/modals/modals.php",
        type: "get",
        dataType: "html",

        success: function (data) {

            $('#modalProject').append(data);
            $('#modalProject').modal();
            $('#modalProject').modal('open');

            $('#bg').mouseenter(function () {
                slideDiv();
            })

            $('#closeModal').click(function(){
                $('#modalProject').empty();
                $(document).load();
            })

        }
    })
});

$('#modalSlash').click(function (e) {
    e.preventDefault();

    $.ajax({
        url: "../pages/modals/modal-slash.php",
        type: "get",
        dataType: "html",

        success: function (slash) {

            $('#modalProject').append(slash);
            $('#modalProject').modal();
            $('#modalProject').modal('open');

            $('#bg').mouseenter(function () {
                slideDiv();
            })

            $('#closeModal').click(function(){
                $('#modalProject').empty();
                $(document).load();
            })

        }
    })
});

$('#modalApp').click(function (e) {
    e.preventDefault();

    $.ajax({
        url: "../pages/modals/modal-app.php",
        type: "get",
        dataType: "html",

        success: function (app) {

            $('#modalProject').append(app);
            $('#modalProject').modal();
            $('#modalProject').modal('open');

            $('#bg').mouseenter(function () {
                slideDiv();
            })

            $('#closeModal').click(function(){
                $('#modalProject').empty();
                $(document).load();
            })

        }
    })
});

$('#modalIde').click(function (e) {
    e.preventDefault();

    $.ajax({
        url: "../pages/modals/modal-ide.php",
        type: "get",
        dataType: "html",

        success: function (ide) {

            $('#modalProject').append(ide);
            $('#modalProject').modal();
            $('#modalProject').modal('open');

            $('#bg').mouseenter(function () {
                slideDiv();
            })

            $('#closeModal').click(function(){
                $('#modalProject').empty();
                $(document).load();
            })
        }
    })
});

$('#modalDiscu').click(function (e) {
    e.preventDefault();

    $.ajax({
        url: "../pages/modals/modal-discussion.php",
        type: "get",
        dataType: "html",

        success: function (discu) {

            $('#modalProject').append(discu);
            $('#modalProject').modal();
            $('#modalProject').modal('open');

            $('#bg').mouseenter(function () {
                slideDiv();
            })

            $('#closeModal').click(function(){
                $('#modalProject').empty();
                $(document).load();
            })
        }
    })
});

$('#modalBlog').click(function (e) {
    e.preventDefault();

    $.ajax({
        url: "../pages/modals/modal-blog.php",
        type: "get",
        dataType: "html",

        success: function (blog) {

            $('#modalProject').append(blog);
            $('#modalProject').modal();
            $('#modalProject').modal('open');

            $('#bg').mouseenter(function () {
                slideDiv();
            })

            $('#closeModal').click(function(){
                $('#modalProject').empty();
                $(document).load();
            })
        }
    })
});

$('#modalShop').click(function (e) {
    e.preventDefault();

    $.ajax({
        url: "../pages/modals/modal-shop.php",
        type: "get",
        dataType: "html",

        success: function (shop) {

            $('#modalProject').append(shop);
            $('#modalProject').modal();
            $('#modalProject').modal('open');

            $('#bg').mouseenter(function () {
                slideDiv();
            })

            $('#closeModal').click(function(){
                $('#modalProject').empty();
                $(document).load();
            })
        }
    })
});

