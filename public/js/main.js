require(["jquery", "vendor/picturefill", "vendor/fontfaceobserver", "smoothscroll"], function($, picturefill, fontfaceobserver, smoothscroll) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".

    console.log(picturefill);

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
/*
    if( window.document.documentElement.className.indexOf( "fonts-loaded" ) > -1 ){
        return;
    }
    var fontA = new w.FontFaceObserver( "Source Sans Pro", {
        weight: 300
    });
    var fontB = new w.FontFaceObserver( "Source Sans Pro", {
        weight: 600
    });
    var fontC = new w.FontFaceObserver( "Source Sans Pro", {
        weight: 300,
        style: "italic"
    });
    window.Promise
    .all([fontA.check(), fontB.check(), fontC.check()])
    .then(function(){
        w.document.documentElement.className += " fonts-loaded";
    });*/
});