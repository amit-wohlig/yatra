$(document).ready(function(){
  $('.grid').masonry({
    itemSelector: '.grid-item',
    isFitWidth: true
  });


  //For the height of hotels
  $(".hotel-card-list").height($(window).height() - 170);
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
  $(".bookHotel").click(function(){
    console.log("toggle");
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
  // accordion
  $("#accordion-hotel").accordion({
    collapsible: true,
    heightStyle: "content"
  });
  // accordion end
  // date picker
  $(".datePicker").datepicker({
    numberOfMonths: 2
  })
  // date picker end
});

// });


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
    $(".filter-main-sec").slideToggle(500);
  });
// show filter end
// show slider photo
// setTimeout(function(){
// },100);
$(".bxslider").bxSlider({
  slideWidth: 300,
  minSlides: 2,
  maxSlides: 3,
  responsive: true,
  pager: false,
  slideMargin: 10,
});

// show slider photo end
// range slider
$("#rangeSlider").slider({
    range: true,
    min: 0,
    max: 1000,
    values: [100, 900],
    animate: 'slow',
    create: function() {
    $('#minSlide').appendTo($('#rangeSlider span').get(0));
    $('#maxSlide').appendTo($('#rangeSlider span').get(1));
},
    slide: function(event, ui) {
      $(ui.handle).find("#minSlide").html('INR ' + ui.value);
      $(ui.handle).find("#maxSlide").html('INR ' + ui.value);
    }
});

// only initially needed
$('#minSlide').html('INR ' + $('#rangeSlider').slider('values', 0)).position({
    my: 'center top',
    at: 'center bottom',
    of: $('#rangeSlider span:eq(0)'),
    offset: "0, 0"
});

$('#maxSlide').html('INR ' + $('#rangeSlider').slider('values', 1)).position({
    my: 'center top',
    at: 'center bottom',
    of: $('#rangeSlider span:eq(1)'),
    offset: "0, 0"
});
// mobile slider
$("#rangeSliderMob").slider({
    range: true,
    min: 0,
    max: 1000,
    values: [100, 900],
    animate: 'slow',
    create: function() {
    $('#minMob').appendTo($('#rangeSliderMob span').get(0));
    $('#maxMob').appendTo($('#rangeSliderMob span').get(1));
},
    slide: function(event, ui) {
      $(ui.handle).find("#minMob").html('INR ' + ui.value);
      $(ui.handle).find("#maxMob").html('INR ' + ui.value);
    }
});
$("#rangeSliderMob").draggable();
// mobile slider end
// only initially needed
$('#minMob').html('INR ' + $('#rangeSliderMob').slider('values', 0)).position({
    my: 'center top',
    at: 'center bottom',
    of: $('#rangeSliderMob span:eq(0)'),
    offset: "0, 0"
});

$('#maxMob').html('INR ' + $('#rangeSliderMob').slider('values', 1)).position({
    my: 'center top',
    at: 'center bottom',
    of: $('#rangeSliderMob span:eq(1)'),
    offset: "0, 0"
});
// range slider end

// google map api
function initMap() {
  console.log("mapBooking-check");
  var myLatLng = {lat: 18.9704296, lng: 72.8145482};

  var map = new google.maps.Map(document.getElementById('mapBooking'), {
    zoom: 12,
    center: myLatLng,
    disableDefaultUI: true
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}
setTimeout(function(){
  initMap();
},100);

// google map api end\
// search view, filter and map view
$("#search-click").click(function(){
  $(".search-mobile").slideToggle();
  $("#search-click").toggleClass("view-caret");
  // hide div
  $(".filter-main-sec").hide();
  $("#mapBooking").hide();
  // removing class
  $("#filter-click").removeClass("view-caret");
  $("#map-click").removeClass("view-caret");
});

$("#filter-click").click(function(){
  $(".filter-main-sec").slideToggle();
  $("#filter-click").toggleClass("view-caret");
  // hide div
  $(".search-mobile").hide();
  $("#mapBooking").hide();
  // removing class
  $("#search-click").removeClass("view-caret");
  $("#map-click").removeClass("view-caret");
});

$("#map-click").click(function(){
  $("#mapBooking").slideToggle();
  $("#map-click").toggleClass("view-caret");
  // hide div
  $(".search-mobile").hide();
  $(".filter-main-sec").hide();
  // removing class
  $("#search-click").removeClass("view-caret");
  $("#filter-click").removeClass("view-caret");
  setTimeout(function(){
    initMap();
  },100);
});
// search view, filter and map view
// like view
// like view end
});
