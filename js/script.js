
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
new Swiper ('.banner-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:false,
    parallax: true,

      navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,

      },
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

$('#ready').click(function(){

  $('.strategy-container').hide();
  $('.ready-container').show();
  $('.pro-trade-cont').hide()
})
$('#strategy').click(function(){

  $('.strategy-container').show();
  $('.ready-container').hide();
  $('.pro-trade-cont').hide()
})
$('#pro-tr').click(function(){

  $('.strategy-container').hide();
  $('.ready-container').hide();
  $('.pro-trade-cont').show()
})

$('#strategy-prof').click(function(){
  $('.optimze-col-1').hide();
  $('.optimze-col-2').show();
})

$('#ready-made').click(function(){
  $('.optimze-col-1').show();
  $('.optimze-col-2').hide();
})

$('#ai').click(function(){
  $('.manulasMode').hide();
  $('.ai_conts').show();
})

$('#manual').click(function(){
  $('.manulasMode').show();
  $('.ai_conts').hide();
})
