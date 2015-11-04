require(["require", "jquery", "vendor/fontfaceobserver", "smoothscroll", "vendor/js.cookie"], function(require, $, fontfaceobserver, smoothscroll, cookie) {

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
        });
    });


    // Conditional font loading

    if(!window.document.documentElement.className.indexOf( "fonts-loaded" ) > -1 ){
        var fontA = new window.FontFaceObserver( "Neutratext Book Italic"),
            fontB = new window.FontFaceObserver( "Neutratext Bold"),
            fontC = new window.FontFaceObserver( "Neutra Display Titling"),
            fontD = new window.FontFaceObserver( "Neutraface Condensed Titling");

        window.Promise
        .all([fontA.check(), fontB.check(), fontC.check(), fontD.check()])
        .then(function(){
            window.document.documentElement.className += " fonts-loaded";
            cookie.set('fonts-loaded', 'true');
        });
    }


    // Flickr
    var mq = window.matchMedia,
        $win = $(window),
        checkSize = function (e) {
            var data = e ? e.data : false;
            if (mq("(min-width: 768px)").matches) {
                require(['//embedr.flickr.com/assets/client-code.js']);
                if (data && data.disableWindowEvent) {
                    $win.off('resize', checkSize);
                }
                return true;
            } else {
                return false;
            }
        };

    if (mq) {
        checkSize() || $win.on('resize', {'disableWindowEvent': true}, checkSize);
    }


    // Hide/show travel ideas
    var $destinationsWrap = $('.destinations'),
        $destinationTrigger = $('._reveal-travel');

    $destinationTrigger.on('click', function () {
        $destinationsWrap.removeClass('closed');
        $destinationTrigger.hide();
    });
});