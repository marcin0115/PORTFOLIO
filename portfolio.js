
$(document).on('scroll', function() {
    const windowHeight = $(window).height(); 
    const scrollValue = $(this).scrollTop();

    // Section ABOUT:
    //Art 1:
    const $art1 = $('.art1');
    const art1FromTop = $art1.offset().top;
    const art1Height = $art1.outerHeight();
    
    //Art 2:
    const $art2 = $('.art2');
    const art2FromTop = $art2.offset().top;
    const art2Height = $art2.outerHeight();
   

    // warunki::
    if(scrollValue > art1FromTop + art1Height/4 - windowHeight) {
        $('.art1').addClass('active');
    }
    if(scrollValue > art2FromTop + art2Height/4 - windowHeight) {
        $('.art2').addClass('active');
    }

    // Section SKILLS:
    const $art4 = $('.art4');
    const art4FromTop = $art4.offset().top;
    const art4Height = $art4.outerHeight();
    
    if(scrollValue > art4FromTop + art4Height/4 - windowHeight) {
        $('.art4').addClass('active');
    }

    // Section PROJECTS:
    const $art5 = $('.art5');
    const art5FromTop = $art5.offset().top;
    const art5Height = $art5.outerHeight();
    
    if(scrollValue > art5FromTop + art5Height/4 - windowHeight) {
        $('.art5').addClass('active');
    }

    // Remove class active
    if(scrollValue < 100) {
        $('article').removeClass('active');
    }
})

