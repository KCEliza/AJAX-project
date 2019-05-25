$(document).ready(function() {
    var topics = ["Lilo & Stitch", "Trolls", "Shrek", "Tangled", "Frozen"];

    
  function display(){
    var topic = $(this).attr("data-topic");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    topic + "&api_key=ySd06897o3P1SJ9vxaLu3SP2edELyKXx";
  };

$.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(response){
    var results = response.data;

for(var i = 0; i < 10; i++){
    var gifsDiv = $("<div>");
    var rate = results[i].rate;
    var para = $("<p>").text("Rating: " + rate);
    var image = $("<img>");
    image.attr("src")
    image.addClass("gif");
    image.attr("data-state", "data-still");
    image.attr("data-animate", results[i].images.fixed_height.url);
    image.attr("data-still", results[i].images.fixed_height_still.url);
    image.attr("src", results[i].images.fixed_height_still.url);
    gisfDiv.prepend(para);
      gifsDiv.prepend(image);
      $("#giphy-view").prepend(gifsDiv);
}

});
});
