$(document).ready(function(){
  $('.grid').masonry({
    itemSelector: '.grid-item',
    isFitWidth: true
  });
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
