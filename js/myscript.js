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
    // $(".hotel-flipper-holder").removeClass("flip-card");
  })
  // flip card end
  // show filter

  // $(".filter-main-sec").hide();
  // $(".showfilter").click(function(){
  //   $(".filter-main-sec").show("slow");
  // });
  // $(".closefilter").click(function(){
  //   console.log("hide");
  //   $(".filter-main-sec").hide("slow");
  // })

  $(".getfilter").click(function(){
    console.log("has class");
    if($(".filter-main-sec").hasClass("view-more-filter")){
      $(".filter-main-sec").removeClass("view-more-filter");
      console.log("remove");
    }else {
      console.log("add");
      $(".filter-main-sec").addClass("view-more-filter");
    }
  })
  // show filter end
})
