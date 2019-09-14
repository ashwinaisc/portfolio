$("#button").on('click',function() {
    $('html, body').animate({
        'scrollTop' : $("#dynamictabstrp").position().top
    });
});