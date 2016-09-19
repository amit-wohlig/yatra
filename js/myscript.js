$(document).ready(function(){
  $('.grid').masonry({
    itemSelector: '.grid-item',
    isFitWidth: true
  });


  //For the height of hotels
  $(".hotel-card-list").height($(window).height() - 180);
});
// facebook widget
setTimeout(function(){
  // <div id="fb-root"></div>
  console.log("facebook");
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.7&appId=199489793739917";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
},100);
// facebook widget end
// twitter widget
setTimeout(function(){
  console.log("twitter");
  ! function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
      js = d.createElement(s);
      js.id = id;
      js.src = p + "://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);
    }
  }(document, "script", "twitter-wjs");
},100);
// twitter widget end

// add class on popup
// $(document).ready(function(){
//   $(".view-popup").click(function(){
//     console.log("amit");
//     $(".blog-main").addClass("blur-bg");
//   });
// });


// add class on popup end

// scroll down
$(document).ready(function(){
  $(".scrollDown").click(function() {
         $('html,body').animate({
          //  scrollTop:$(this).parent().next().offset().top
           scrollTop: $(".second").offset().top
         }, 'slow');

  });
});
// scroll down end

$(document).ready(function(){
  $(".person-stay").toggle();
  $(".bookHotel").click(function(){
    $(".person-stay").toggle();
  });
});

// auto height

$(document).ready(function(){
  getheight = $(window).innerHeight() - 60;
  $(".windowHeight").css('height',getheight);
});

// tabs
$(document).ready(function(){
  $(function(){
    console.log("tabs");
    $(".detail-tab").tabs();
  })
});

// flip card
$(document).ready(function(){
  // flip card
  $(".view-card-detail").click(function(){
    if($(".hotel-flipper-holder").hasClass("flip-card")) {
      $(".hotel-flipper-holder").removeClass("flip-card");
    }else {
      $(".hotel-flipper-holder").addClass("flip-card");
    }
  });

// show filter
  $(".getfilter").click(function(){
    $(".filter-main-sec").slideToggle("fast");
  })
// show filter end
// show slider photo
  $("#flexslider").flexslider({
    animation: "slide",
    itemWidth: "210",
    itemMargin: "5"       
  })
// show slider photo end
// range slider
$("#rangeSlider").slider({
    range: true,
    min: 0,
    max: 1000,
    values: [100, 900],
    animate: 'slow',
    create: function() {
    $('#min').appendTo($('#rangeSlider span').get(0));
    $('#max').appendTo($('#rangeSlider span').get(1));
},
    slide: function(event, ui) {
      $(ui.handle).find("#min").html('INR ' + ui.value);
      $(ui.handle).find("#max").html('INR ' + ui.value);
    }
});

// only initially needed
$('#min').html('INR ' + $('#rangeSlider').slider('values', 0)).position({
    my: 'center top',
    at: 'center bottom',
    of: $('#rangeSlider span:eq(0)'),
    offset: "0, 0"
});

$('#max').html('INR ' + $('#rangeSlider').slider('values', 1)).position({
    my: 'center top',
    at: 'center bottom',
    of: $('#rangeSlider span:eq(1)'),
    offset: "0, 0"
});
// range slider end
});
