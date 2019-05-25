$(document).ready(function() {
    var topics = ["Lilo & Stitch", "Trolls", "Shrek", "Tangled", "Frozen"];

    
  function display(){
    $("#giphy-view").empty();
    var topic = $(this).attr("data-topic");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    topic + "&api_key=TSUNPTa6z2tklGuh4PZEaPMuEogApupk&=10";
  

$.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(response){
      console.log(response);
      //need to go inside the object
      //to get to the ratings
      //can't figure out how to do it.
    var results = response.data;

for(var i = 0; i < 10; i++){
    var gifsDiv = $("<div>");
    var rate = results[i].rating;
    var para = $("<p>").text("Rating: " + rate);
    var image = $("<img>");
    image.attr("src")
    image.addClass("gif");
    image.attr("data-state", "data-still");
    image.attr("data-animate", results[i].images.fixed_height.url);
    image.attr("data-still", results[i].images.fixed_height_still.url);
    image.attr("src", results[i].images.fixed_height_still.url);
    gifsDiv.prepend(para);
      gifsDiv.prepend(image);
      $("#giphy-view").prepend(gifsDiv);
}

$(".gif").on("click", function(){
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
})
})
};
function renderButtons(){
    $("#buttons-view").empty();
    for(var j = 0; j < topics.length; j++){
        var topicBtn = $("<button>");
        topicBtn.addClass("topic");
        topicBtn.attr("data-topic", topics[j]);
        topicBtn.text(topics[j]);
        $("#buttons-view").append(topicBtn);
    }
}
renderButtons();

$("#add-giphy").on("click", function(event){
    event.preventDefault();
    var topic = $("#giphy-input").val().trim();
    topics.push(topic);
    renderButtons();
    $("#giphy-input").val("");
})
$(document).on("click", ".topic", display);

renderButtons();
});
