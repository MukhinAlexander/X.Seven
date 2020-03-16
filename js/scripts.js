$(document).ready(function(){
    var elem = $('.container'),         
        pos = elem.offset(),            
        elem_left = pos.left,
        elem_top = pos.top,
        elem_width = elem.width(),
        elem_height = elem.height(),
        x_center,
        y_center;
 
    $('.container').mousemove(function(e){    

      x_center = ( elem_width / 2 ) - ( e.pageX - elem_left );
      y_center = ( elem_height / 2 ) - ( e.pageY - elem_top );

      $('.parallax').each(function(){
        var speed = $(this).attr('data-speed'),     
            xPos = Math.round(-1*x_center/20*speed),
            yPos = Math.round(y_center/20*speed);

        if (yPos < 0)
          yPos = -2*speed;
      
        $(this).css('transform', 'translate3d('+xPos+'px, '+yPos+'px, 0px)');
          });
      });
  });

$(document).ready(function(){
    $('#js-carousel-1').owlCarousel({
        loop: true,
        margin: 2,
        items: 3,
        responsive:{
            1200:{items: 3},
            1000:{items: 2},
            900:{items: 1},
            100:{items: 1}    
        }
    });
}); 



