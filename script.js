$(document).ready(function(){

$(".search").click(function() {
  $( ".diss" ).hide( "fast", function() {
    $(".searching").show("fast");
  });
});

 $(".form-control").on("click", function(){

   $(".center").animate({
     padding: '2% 0%'
   },500);
 });

 $("input").keypress(function (e) {
 var key = e.which;
 if(key == 13){
//  $("button").on("click", function(){
   $("#searchContent").show("fast");
    $(".contentBox").hide();
    var search = $("input").val();
    var content = "https://en.wikipedia.org/w/api.php?action=opensearch&redirects=resolve&search=" + search + "&callback=?";

  $.getJSON(content, function(data){

   for(i=0; i < data[1].length; i++){
     $(".content").append("<a class='link' href='" + data[3][i] + "' target='_blank'><li class='contentBox content" + i + "'>" + "<h1>" + data[1][i] + "</h1></li></a>");
   }
    for(j=0; j < data[1].length; j++){
       $(".content" + j).append("<p>" + data[2][j] + "</p>");
    }
    });
//  });
 }
  });

  $(".go").click(function(){
    $("input").val("");
    $("#searchContent").hide("fast");
    $(".searching").hide("fast");
    $( ".diss" ).show( "fast");
    $(".center").animate({
     padding: '30% 0%'
   },500);
  });

});
