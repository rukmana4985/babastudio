$(document).ready(function () {
    $(".button-collapse").sideNav();
    $('.stars li').on('click', function() {
        var el = $(this);
        el.addClass('active').siblings().removeClass('active');
        $('#rating').val( el.attr('title') ); // save value
    });
})