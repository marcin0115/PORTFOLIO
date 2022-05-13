// NAV - sections scroll
$('nav a').on('click', function() {
    const goToSection = '#' + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    })
})


// Arrow -> show / hide
function showArrow() {
    if($(window).scrollTop() > 70) {
        $('.arrow').addClass('active');
    }
    else{
        $('.arrow').removeClass('active');
    }
}

$(window).on('scroll', showArrow);


// Arrow - scrollUp
function scrollUp() {
    $('body, html').animate({
        scrollTop: $('nav').offset().top
    },500)
}

$('.arrow').on('click', scrollUp);