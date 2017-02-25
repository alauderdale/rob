$(document).ready(function(){

// init Masonry
var $grid = $('.grid').masonry({
      // set itemSelector so .grid-sizer is not used in layout
      itemSelector: '.grid-item',
      // use element for option
      columnWidth: '.grid-sizer',
      percentPosition: true
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});




	 //fancybox
	$('.fancybox').fancybox({
        padding: 0
    });
	
	$('.fb-video').fancybox({
        padding: 0,
        helpers: {
            media: {}
        }
   });

	$('.tooltip-up').tooltip({html:true});

	$( "#js-menu-button-open,#js-menu-button-close" ).click(function() {
        $( ".main-nav-container" ).toggleClass( "fixed-nav" );
        $( ".menu-drop" ).toggleClass( "menu-show" );
        $( "html" ).toggleClass( "nav-open" );
    });


    ///all the animations!

    // $('.slideinleftonload').viewportChecker({
    // classToAdd: 'fadeIn', // Class to add to the elements when they are visible,
    // classToAddForFullView: 'full-visible', // Class to add when an item is completely visible in the viewport
    // classToRemove: 'invisible', // Class to remove before adding 'classToAdd' to the elements
    // removeClassAfterAnimation: false, // Remove added classes after animation has finished
    // offset: [100 OR 10%], // The offset of the elements (let them appear earlier or later). This can also be percentage based by adding a '%' at the end
    // invertBottomOffset: true, // Add the offset as a negative number to the element's bottom
    // repeat: false, // Add the possibility to remove the class if the elements are not visible
    // callbackFunction: function(elem, action){}, // Callback to do after a class was added to an element. Action will return "add" or "remove", depending if the class was added or removed
    // scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
    // });


    $('.slideinRightonload').viewportChecker({
        classToAdd: 'fadeInRight',
        offset: 50
    });

    $('.slideinLeftonload').viewportChecker({
        classToAdd: 'fadeInLeft',
        offset: 50
    });


    $('.fadeInOnload').viewportChecker({
        classToAdd: 'fadeIn'
    });

    //main nav
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            $(".global-nav").addClass("dark-header");
        } else {
            $(".global-nav").removeClass("dark-header");
        }
    });
    



});
