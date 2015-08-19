require(["jquery", "vendor/picturefill", "vendor/fontfaceobserver", "smoothscroll"], function($, picturefill, fontfaceobserver, smoothscroll) {
    
    // Email registration form

    var emailForm = $('#email-submission');

    emailForm.on('submit', function (e) {
        e.preventDefault();

        $.ajax({
            url: this.action,
            method: "GET",
            data: emailForm.serialize(),
            cache: false,
            dataType: 'json',
        }).done(function(response) {
            emailForm.addClass('success');
        }).error(function (response) {
            console.log(response);
        });
    });

    if( window.document.documentElement.className.indexOf( "fonts-loaded" ) > -1 ){
        return;
    }
    var fontA = new window.FontFaceObserver( "Neutratext Book Italic");
    var fontB = new window.FontFaceObserver( "Neutratext Bold");
    var fontC = new window.FontFaceObserver( "Neutra Display Titling");
    var fontD = new window.FontFaceObserver( "Neutraface Condensed Titling");

    window.Promise
    .all([fontA.check(), fontB.check(), fontC.check(), fontD.check()])
    .then(function(){
        window.document.documentElement.className += " fonts-loaded";
    });
});