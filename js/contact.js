$('#myButton').click(function (e){
    e.preventDefault();

    $.ajax({
        url: "../app/Mail.php",
        type: "post",
        data: {
            nom: $('input[name=nom]').val(),
            prenom: $('input[name=prenom]').val(),
            email: $('input[name=email]').val(),
            object: $('input[name=object]').val(),
            message: $('#message').val(),
        },
        dataType: 'text',

        success: function (dataContact) {
            console.log(dataContact)

            if(dataContact === 'wrong')
            {
                $('#errorForm').html("<p>* Veuillez remplir tous les champs du formulaire.</p>");
            }
            else if(dataContact === 'succes'){
                $('#formContact').hide();
                $('#formContact').after(getSuccess());
            }
        }

    })
})


function getSuccess () {
    let html = "";
    html += '<div id="success">'
    html += '<p>votre message à bien été envoyé.</p>'
    html += '</div>'
    return html;
}