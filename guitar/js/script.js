AOS.init();
$(document).ready(function(){
    
    var activeClass = 'slick-active',
        ariaAttribute = 'aria-hidden';
    $( '.custom_inner' )
    .on( 'init', function() {
        $( '.slick-dots li:first-of-type' ).addClass( activeClass ).attr( ariaAttribute, false );
    } )
    .on( 'afterChange', function( event, slick, currentSlide ) {
        var $dots = $( '.slick-dots' );
        $( 'li', $dots ).attr( ariaAttribute, true );
        $dots.each( function() {
            $( 'li', $( this ) ).eq( currentSlide ).addClass( activeClass ).attr( ariaAttribute, false );
        } );
    } );
    $('.custom_inner').slick({
        
        dots: true,
        appendDots: '.custom_inner_wrapper_text_descr',
        arrows: false,
        infinite: true,
        speed: 700,
        cssEase: 'linear'
      });
      

    
});