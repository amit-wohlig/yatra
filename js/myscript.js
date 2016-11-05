$(document).ready(function() {
    $('.grid').masonry({
        itemSelector: '.grid-item',
        isFitWidth: true
    });


    //For the height of hotels
    $(".hotel-card-list").height($(window).height() - 170);
    // For the height of Tours
    $(".tour-card-container").height($(window).height()-119);
    // For the height of Tours Detailed
    $(".tour-detailed-container").height($(window).height()-119);

    // tour detail descp scroll part
    if($('.scroll-tour-descp').height() >= 305) {
      $('.scroll-tour-descp').css('padding-right', '15px');
    }
    // tour detail descp scroll part end

});
// facebook widget
setTimeout(function() {
    // <div id="fb-root"></div>
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.7&appId=199489793739917";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}, 100);
// facebook widget end
// twitter widget
setTimeout(function() {
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
}, 100);
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
$(document).ready(function() {
    $(".scrollDown").click(function() {
        $('html,body').animate({
            //  scrollTop:$(this).parent().next().offset().top
            scrollTop: $(".second").offset().top
        }, 'slow');

    });
});
// scroll down end

$(document).ready(function() {
    $(".bookHotel").click(function() {
        console.log("toggle");
        $(".person-stay").toggle();
    });
});

// auto height

$(document).ready(function() {
    getheight = $(window).innerHeight() - 60;
    $(".windowHeight").css('height', getheight);
});

// tabs
$(document).ready(function() {
    $(function() {
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
$(document).ready(function() {
    // flip card
    $(".view-card-detail").click(function() {
        if ($(".hotel-flipper-holder").hasClass("flip-card")) {
            $(".hotel-flipper-holder").removeClass("flip-card");
        } else {
            $(".hotel-flipper-holder").addClass("flip-card");
        }
    });

    // show filter
    $(".getfilter").click(function() {
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
    // distance slider
    $("#distanceSlider").slider({
        range: true,
        min: 0,
        max: 12000,
        values: [100, 10000],
        animate: 'slow',
        create: function() {
            $('#minDistance').appendTo($('#distanceSlider span').get(0));
            $('#maxDistance').appendTo($('#distanceSlider span').get(1));
        },
        slide: function(event, ui) {
            $(ui.handle).find("#minDistance").html(ui.value + ' m');
            $(ui.handle).find("#maxDistance").html(ui.value + ' m');
        }
    });
    // only initially needed
    $('#minDistance').html($('#distanceSlider').slider('values', 0) + ' m').position({
        my: 'center top',
        at: 'center bottom',
        of: $('#distanceSlider span:eq(0)'),
        offset: "0, 0"
    });

    $('#maxDistance').html($('#distanceSlider').slider('values', 1) + ' m').position({
        my: 'center top',
        at: 'center bottom',
        of: $('#distanceSlider span:eq(1)'),
        offset: "0, 0"
    });
    $("#distanceSlider").draggable();
    // distance slider
    // distance slider mobile
    $("#distanceSliderMob").slider({
        range: true,
        min: 0,
        max: 12000,
        values: [100, 10000],
        animate: 'slow',
        create: function() {
            $('#minDistanceMob').appendTo($('#distanceSliderMob span').get(0));
            $('#maxDistanceMob').appendTo($('#distanceSliderMob span').get(1));
        },
        slide: function(event, ui) {
            $(ui.handle).find("#minDistanceMob").html(ui.value + ' m');
            $(ui.handle).find("#maxDistanceMob").html(ui.value + ' m');
        }
    });
    // only initially needed
    $('#minDistanceMob').html($('#distanceSliderMob').slider('values', 0) + ' m').position({
        my: 'center top',
        at: 'center bottom',
        of: $('#distanceSliderMob span:eq(0)'),
        offset: "0, 0"
    });

    $('#maxDistanceMob').html($('#distanceSliderMob').slider('values', 1) + ' m').position({
        my: 'center top',
        at: 'center bottom',
        of: $('#distanceSliderMob span:eq(1)'),
        offset: "0, 0"
    });
    // distance slider mobile end
    // range slider end

    // search view, filter and map view
    $("#search-click").click(function() {
        $(".search-mobile").slideToggle();
        $("#search-click").toggleClass("view-caret");
        // hide div
        $(".filter-main-sec").hide();
        $("#mapBooking").hide();
        // removing class
        $("#filter-click").removeClass("view-caret");
        $("#map-click").removeClass("view-caret");
    });

    $("#filter-click").click(function() {
        $(".filter-main-sec").slideToggle();
        $("#filter-click").toggleClass("view-caret");
        // hide div
        $(".search-mobile").hide();
        $("#mapBooking").hide();
        // removing class
        $("#search-click").removeClass("view-caret");
        $("#map-click").removeClass("view-caret");
    });

    $("#map-click").click(function() {
        $("#mapBooking").slideToggle();
        $("#map-click").toggleClass("view-caret");
        // hide div
        $(".search-mobile").hide();
        $(".filter-main-sec").hide();
        // removing class
        $("#search-click").removeClass("view-caret");
        $("#filter-click").removeClass("view-caret");
        setTimeout(function() {
            initMap();
        }, 100);
    });
    // search view, filter and map view
    // vacation search bar
    $("#vacation-search-click").click(function() {
        $(".search-mobile").slideToggle();
        $("#vacation-search-click").toggleClass("view-caret");
        // hide div
        $(".filter-main-sec").hide();
        $("#mapBooking").hide();
        // removing class
        $("#vacation-filter-click").removeClass("view-caret");
        $("#vacation-map-click").removeClass("view-caret");
    });

    $("#vacation-filter-click").click(function() {
        $(".filter-main-sec").slideToggle();
        $("#vacation-filter-click").toggleClass("view-caret");
        // hide div
        $(".search-mobile").hide();
        $("#mapBooking").hide();
        // removing class
        $("#vacation-search-click").removeClass("view-caret");
        $("#vacation-map-click").removeClass("view-caret");
    });

    $("#vacation-map-click").click(function() {
        $("#mapBooking").slideToggle();
        $("#vacation-map-click").toggleClass("view-caret");
        // hide div
        $(".search-mobile").hide();
        $(".filter-main-sec").hide();
        // removing class
        $("#vacation-search-click").removeClass("view-caret");
        $("#vacation-filter-click").removeClass("view-caret");
        setTimeout(function() {
            initMap();
        }, 100);
    });
    // vacation search bar end

    // google map api
    function initMap() {
        var myLatLng = {
            lat: 18.9704296,
            lng: 72.8145482
        };

        var map = new google.maps.Map(document.getElementById('mapBooking'), {
            zoom: 12,
            center: myLatLng,
            disableDefaultUI: true
        });

        var largerMarker = "img/large-marker.png"
        var imageMarker = "img/marker.png";
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: imageMarker
        });
        var contentString = '<div class="hotel-map-view">' +
            '<h4 id="firstHeading" class="hotel-name-map">Central Park Hotel London</h4>' +
            '<div id="bodyContent">' +
            '<p class="rating-map-view"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i></p>' +
            '<span class="hotel-price-map">INR 21,0999</span>'
        '</div>' +
        '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 200,
            pixelOffset: new google.maps.Size(110, 80)
        });

        // map editing
        google.maps.event.addListener(infowindow, 'domready', function() {

            var iwOuter = $('.gm-style-iw');
            var iwBackground = iwOuter.prev();

            iwOuter.css({
                'font-family': 'AvenirLTStd-Roman'
            })

            // Remove the background shadow DIV
            iwBackground.children(':nth-child(2)').css({
                'display': 'none'
            });

            // Remove the white background DIV
            iwBackground.children(':nth-child(4)').css({
                'display': 'none'
            });

            // Remove the background shadow DIV
            iwBackground.children(':nth-child(2)').css({
                'display': 'none'
            });
            // Moves the shadow of the arrow 76px to the left margin
            iwBackground.children(':nth-child(1)').attr('style', function(i, s) {
                return s + 'display: none !important;'
            });

            // Moves the arrow 76px to the left margin
            iwBackground.children(':nth-child(3)').attr('style', function(i, s) {
                return s + 'display: none !important;'
            });
            // Is this div that groups the close button elements.
            var iwCloseBtn = iwOuter.next();

            // Apply the desired effect to the close button
            iwCloseBtn.css({
                opacity: '0', // by default the close button has an opacity of 0.7
            });

            // The API automatically applies 0.7 opacity to the button after the mouseout event.
            // This function reverses this event to the desired value.
            iwCloseBtn.mouseout(function() {
                $(this).css({
                    opacity: '1'
                });
            });

        });
        // map editing end
        marker.addListener('mouseover', function() {
            infowindow.open(map, marker);
        });
        marker.addListener('mouseout', function() {
            infowindow.close();
        });
        var smallMarker = "img/small-marker.png";
        var markersmall = new google.maps.Marker({
            position: {
                lat: 18.9623513,
                lng: 72.8183134
            },
            map: map,
            icon: smallMarker
        });
        var markersmall1 = new google.maps.Marker({
            position: {
                lat: 18.9255728,
                lng: 72.8242221
            },
            map: map,
            icon: smallMarker
        });
        var markersmall2 = new google.maps.Marker({
            position: {
                lat: 19.0270694,
                lng: 72.838101288
            },
            map: map,
            icon: smallMarker
        });
    }
    setTimeout(function() {
        initMap();
    }, 100);

    // google map api end


    // tour search
    $("#tourSearch").tokenInput([
                {id: 7, name: "Ruby"},
                {id: 11, name: "Python"},
                {id: 13, name: "JavaScript"},
                {id: 17, name: "ActionScript"},
                {id: 19, name: "Scheme"},
                {id: 23, name: "Lisp"},
                {id: 29, name: "C#"},
                {id: 31, name: "Fortran"},
                {id: 37, name: "Visual Basic"},
                {id: 41, name: "C"},
                {id: 43, name: "C++"},
                {id: 47, name: "Java"}
            ],{
              placeholder: "Json"
            });
    $("#tourType").tokenInput();
    // tour search end
});
