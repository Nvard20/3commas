
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



// 숫자 3자리마다 콤마 찍기
// 숫자 3자리마다 콤마 찍기
function numberWithCommas(x) {
  if (x !== null) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

$(function() {
  //slider range init set
  $( "#slider-range" ).slider({
      range: true,
      min: 100,
      max: 1000,
      values: [ 100, 1000 ],
      slide: function( event, ui ) {
          $( "#min" ).html(numberWithCommas(ui.values[ 0 ]) );
          $( "#max" ).html(numberWithCommas(ui.values[ 1 ]) );
      }
  });

  //slider range data tooltip set
  var $handler = $("#slider-range .ui-slider-handle");

  $handler.eq(0).append("<b class='amount'><span id='min'>"+numberWithCommas($( "#slider-range" ).slider( "values", 0 )) +"</span>원</b>");
  $handler.eq(1).append("<b class='amount'><span id='max'>"+numberWithCommas($( "#slider-range" ).slider( "values", 1 )) +"</span>원</b>");

  //slider range pointer mousedown event
  $handler.on("mousedown",function(e){
      e.preventDefault();
      $(this).children(".amount").fadeIn(300);
  });

  //slider range pointer mouseup event
  $handler.on("mouseup",function(e){
      e.preventDefault();
      $(this).children(".amount").fadeOut(300);
  });
});
