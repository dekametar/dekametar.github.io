
$('.content_main').click(function() {
    $('.current').removeClass('current').hide()
        .next().show().addClass('current');
});

