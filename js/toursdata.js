var tourListing = [
  {
    tourName : "Warner Bros. Studio Tour London",
    tourReview: "1065",
    tourDescp: "Hello this is descprition just to check the loop is working or not",
    tourCost : "74.28"
  },
  {
    tourName : "Warner Bros. Studio Tour London",
    tourReview: "1065",
    tourDescp: "Hello this is descprition just to check the loop is working or not",
    tourCost : "74.28"
  },
  {
    tourName : "Warner Bros. Studio Tour London",
    tourReview: "1065",
    tourDescp: "Hello this is descprition just to check the loop is working or not",
    tourCost : "74.28"
  },
  {
    tourName : "Warner Bros. Studio Tour London",
    tourReview: "1065",
    tourDescp: "Hello this is descprition just to check the loop is working or not",
    tourCost : "74.28"
  },
];
$.each(tourListing, function(index, value){
  console.log(index + ":" + tourListing[index]);
});
