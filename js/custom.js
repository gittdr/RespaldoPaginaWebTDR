
$('#modal1').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal1 iframe').attr("src", $("#modal1 iframe").attr("src"));
});

$('#modal2').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal2 iframe').attr("src", $("#modal2 iframe").attr("src"));
});

$('#modal3').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal3 iframe').attr("src", $("#modal3 iframe").attr("src"));
});

$('#modal4').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal4 iframe').attr("src", $("#modal4 iframe").attr("src"));
});

$('#modal5').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal5 iframe').attr("src", $("#modal5 iframe").attr("src"));
});

$('#modal6').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal6 iframe').attr("src", $("#modal6 iframe").attr("src"));
});

$('#modal7').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal7 iframe').attr("src", $("#modal7 iframe").attr("src"));
});

$('#modal8').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal8 iframe').attr("src", $("#modal8 iframe").attr("src"));
});

$('#modal9').on('hidden.bs.modal', function (e) {
  // do something...
  $('#modal9 iframe').attr("src", $("#modal9 iframe").attr("src"));
});




/*========== CAROUSEL ==========*/

$('.carousel').carousel({
  interval: 8000
})

/*========== CLOSE MOBILE NAV ON CLICK ==========*/

$(document).ready(function () { //when document loads completely.
    $(document).click(function (event) { //click anywhere
        var clickover = $(event.target); //get the target element where you clicked
        var _opened = $(".navbar-collapse").hasClass("show"); //check if element with 'navbar-collapse' class has a class called show. Returns true and false.
        if (_opened === true && !clickover.hasClass("navbar-toggler")) { // if _opened is true and clickover(element we clicked) doesn't have 'navbar-toggler' class
            $(".navbar-toggler").click(); //toggle the navbar; close the navbar menu in mobile.
        }
    });
});

/*========== SMOOTH SCROLLING TO LINKS ==========*/

$(document).ready(function(){ //document is loaded
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {//click on any link;anchor tag;

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") { //for e.g. website.com#home - #home
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      //console.log('hash:',hash)

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({ //animate whole html and body elements
        scrollTop: $(hash).offset().top //scroll to the element with that hash
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash; //website.com - website.com#home
        //Optional remove "window.location.hash = hash;" to prevent transparent navbar on load
      });
    } // End if
  });
});


/*========== TOP SCROLL BUTTON ==========*/

$(document).ready(function() { //when document is ready
  $(window).scroll(function() { //when webpage is scrolled
    if ($(this).scrollTop() > 500) { //if scroll from top is more than 500
      $('.top-scroll').fadeIn(); //display element with class 'top-scroll'; opacity increases
    } else { //if not
      $('.top-scroll').fadeOut(); //hide element with class 'top-scroll'; opacity decreases
    }
  });
});



/*========== MEET THE TEAM ==========*/
//theCarousel
$(document).ready(function(){ //when document is ready
  $("#team-slider").owlCarousel({ //owlCarousel settings
        items:5, //by default there are 3 slides display.
        autoplay:true, //the slides will change automatically.
        smartSpeed: 3000, // duration of change of 1 slide,
        slideSpeed:3000, //speed of changing wil be 700
        autoplayTimeout:10000,
        loop:true, //infinite loop; after the last slide, first slide starts
        autoplayHoverPause:true, //when you put mouse over Carousel, slide changing will stop
        responsive : { //responsiveness as screen size changes
            // min-width: 0px
            0 : {
                items: 1 //on devices with width 0 to 579px show 1 slide
            },
            // min-width: 579px
            650 : {
                items: 1 //on devices with width 579px to 768px show show 2 slides
            },
            // min-width: 768px
            1300 : {
                items: 1 //on devices with width 768px and above show 3 slides 
            }
        }
  }
  );
});

/*========== MEET THE TEAM ==========*/
//theCarousel
$(document).ready(function(){ //when document is ready
  $("#team-slider2").owlCarousel({ //owlCarousel settings
        items:5, //by default there are 3 slides display.
        autoplay:true, //the slides will change automatically.
        smartSpeed: 3000, // duration of change of 1 slide
        slideSpeed:3000, //speed of changing wil be 700
        autoplayTimeout:10000,
        loop:true, //infinite loop; after the last slide, first slide starts
        autoplayHoverPause:true, //when you put mouse over Carousel, slide changing will stop
        responsive : { //responsiveness as screen size changes
            // min-width: 0px
            0 : {
                items: 1 //on devices with width 0 to 579px show 1 slide
            },
            // min-width: 579px
            650 : {
                items: 1 //on devices with width 579px to 768px show show 2 slides
            },
            // min-width: 768px
            1300 : {
                items: 1 //on devices with width 768px and above show 3 slides 
            }
        }
  }
  );
});
