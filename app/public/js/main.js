require(["jquery", "vendor/fontfaceobserver", "smoothscroll"], function($, fontfaceobserver) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".

    console.log("How dare you look here!");

    var emailForm = $('#email-submission');

    console.log(emailForm[0].action);

    emailForm.on('submit', function (e) {
        e.preventDefault();

        $.ajax({
          url: this.action,
          method: "POST",
          data: emailForm.serialize()
        }).done(function(response) {
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