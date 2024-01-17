// Sidebar Mobile Menu

$('.mobileIcon, .mobileMenuBtn').click(function(){
	$('.mobileMenus, .user-area .innerarea .sidebar, .mobileMenuBtn').toggleClass('show');
});


// Mouse Scroll Sticky Header

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       $('.header').css("top","-80px");
       $('.header').addClass('active');
   } else {
      $('.header').css("top","0px");
   }
   lastScrollTop = st;
});

$('.verticalNav').hide();
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
  	
    if (scroll <= 10) {
		$('.header').removeClass('active');
		$('.verticalNav').hide();
    } else {
		$('.header').addClass('active');
		$('.verticalNav').show();
    }
});


// Vertical Navigation

$(".navigation ul li a").click(function () {
    $(".navigation ul li a").removeClass("active");
    // $(".tab").addClass("active"); // instead of this do the below 
    $(this).addClass("active");   
});


// Search Close Popup

$('.mobileSearch').click(function(){
	$('.searchPopup').show();
});
$('.close').click(function(){
	$('.searchPopup').hide();
});





// Date Picker

$(function(){
  $('#datepicker').datepicker();
});


// Why Us

$('.whyBlocks').owlCarousel({
	loop:true,
	margin:30,
	nav:true,
	dots: false,
	autoplay:true,
	navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
	responsive:{
	    0:{
	      items:1
	    },
	    576:{
	      items:1
	    },
	    768:{
	      items:2
	    },
	    992:{
	      items:3
	    },
	    1200:{
	      items:3
	    }
	}
});


// Blogs

$('.homeBlogs').owlCarousel({
	loop:false,
	margin:30,
	nav:true,
	dots: false,
	autoplay:true,
	navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
	responsive:{
	    0:{
	      items:1
	    },
	    576:{
	      items:2
	    },
	    768:{
	      items:2
	    },
	    992:{
	      items:3
	    },
	    1200:{
	      items:3
	    }
	}
});


// Our Team

$('.teamSlides').owlCarousel({
	loop:true,
	margin:30,
	nav:true,
	dots: false,
	autoplay:true,
	navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
	responsive:{
	    0:{
	      items:1
	    },
	    576:{
	      items:2
	    },
	    768:{
	      items:2
	    },
	    992:{
	      items:2
	    },
	    1200:{
	      items:3
	    }
	}
});



$(document).ready(function(){
    $(".form-wrapper button.btn").click(function(){
      var button = $(this);
      var currentSection = button.parents(".section");
      var currentSectionIndex = currentSection.index();
      var headerSection = $('.steps li').eq(currentSectionIndex);
      currentSection.removeClass("is-active").next().addClass("is-active");
      headerSection.removeClass("is-active").next().addClass("is-active");

      $(".form-wrapper").submit(function(e) {
        e.preventDefault();
      });

      if(currentSectionIndex === 2){
        $(document).find(".form-wrapper .section").first().addClass("is-active");
        $(document).find(".steps li").first().addClass("is-active");
      }
    });
});



$('.mobileBar .hidebar').click(function(){
	$('.adminsidebar, .adminContent').addClass('active');
});
$('.mobileBar .showbar').click(function(){
	$('.adminsidebar, .adminContent').removeClass('active');
});