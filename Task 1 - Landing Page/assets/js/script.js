// Mobile menu open
$('.menu-open').on("click", function () {
    $('.mobile-menu').toggle('slow');
})
// if window width greater than 992px , hides the mobile menu
$(window).resize(function () {
    if ($(this).width() > 992) {
        $(".mobile-menu").css('display', 'none'); 
    }
});