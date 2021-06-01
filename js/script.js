
$('.toggle').click(function(){

    $(this).next().toggle();
  
  })
  $('.menu__item').on('click', function () {
                  $(this).toggleClass('rotate')
            
 
  });
  
  function header(){
	   if( window.scrollY > 60 ) {
              
			$('.header').addClass('fixed');
			$('.bt-hide').css({'display':'none'});
			$('.language').css({'display':'none'});
			$('.btn__free').css({'display':'block'});


              
            } else{
				$('.header').removeClass('fixed')
				$('.bt-hide').css({'display':'block'});
				$('.language').css({'display':'block'});
				$('.btn__free').css({'display':'none'});


			}
  }


 window.addEventListener('scroll',header);

 var mySwiper = new Swiper ('.slider-main', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:false,
    parallax: true,
      slidesPerView: 3,
      spaceBetween: 0,
      pagination: {
        el: ".rv-page",
        clickable: true,
      },
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
      breakpoints: {
        // when window width is <= 499px
        310: {
            slidesPerView: 1,
          
        },
        // when window width is <= 999px
        999: {
            slidesPerView: 2,
        }
    }
  });
  $('#showNavigationLink').click(function(){

    $('.mobile-container').css({'display':"block"});

  })
  $('.close').click(function(){

    $('.mobile-container').css({'display':"none"});

  })
  $('.accordion-link ').click(function(){

    $(this).next('.footer__navigation').slideToggle( "1000", function() {
        
    });
    
  })

  $('.btn-open-modal').on('click', function() {
    var target = $(this).data('target');
    $(target).addClass('in');
  });


  $('.modal').on('click', function(e) {
    //Check whether click on modal-content    
    if (e.target !== this)      
      return;

    $(this).removeClass('in');
  });
//sign in
  $('.sign').on('click', function() {
    var target = $(this).data('target');
    $(target).addClass('in');
  });
  $('.modal-2').on('click', function(e) {
    //Check whether click on modal-content    
    if (e.target !== this)      
      return;

    $(this).removeClass('in2');

  });



  $('.signup').on('click', function() {
    var target = $(this).data('target');
    $(target).addClass('in');
  });


  $('.modal-3').on('click', function(e) {
    //Check whether click on modal-content    
    if (e.target !== this)      
      return;

    $(this).removeClass('in3');

  });
  
$('.tab-link').click(function(){
    $('.tab-link ').removeClass('active-tab ') ;
   $(this).addClass('active-tab');

  
})
$('#program').click(function(){
	$('#tab-1').hide();
	
	$('#tab-2').show();
	
});
$('#cloud').click(function(){
	$('#tab-2').hide();
		$('#tab-1').show();

})
$('.ct').click(function(){
  $(this).children('.box-cats').toggle();
});
$("#slider-range").slider({
  range: true, 
  min: 0,
  max: 5,
  step: 1,
  slide: function( event, ui ) {
    $( "#min-price").html(ui.values[0]);
    
    suffix = '';
    if (ui.values[ 1 ] == $( "#max-price").data('max') ){
       suffix = '+';
    }
    $( "#max-price").html(ui.values[1] + suffix);         
  },
  create: function(event, ui){
      $(this).slider('values', 0, 3);
      $(this).slider('values', 3, 5);

  }
})

