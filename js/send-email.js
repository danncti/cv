$(document).ready(function () {


    $('#form-send-button').click(function () {
        console.log("... '#form-send-button'");
        sendEmail($);
    });

    function sendEmail($) {
        var form_data = $('form').serialize();
        $.ajax({
            url: 'https://webox.ie/cv/copy/send-email/cv-email-send.php',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            type: "POST", /* or type:"GET" or type:"PUT" */
            dataType: "json",
            data: form_data,
            success: function (result) {
                console.log(result);
            },
            error: function () {
                console.log("error");
            }
        });

    }
});
