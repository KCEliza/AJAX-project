$(document).ready(function() {
    var topics = ["Lilo & Stitch", "Trolls", "Shrek", "Tangled", "Frozen"];

    
  function display(){
    var topic = $(this).attr("data-topic");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    topic + "&api_key=ySd06897o3P1SJ9vxaLu3SP2edELyKXx";
  }
});