$(document).ready(function(){

  var $boxes = $("td");
  var wincombo = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]


  function playX () {
    $boxes.on("click", function createX (){
      $(this).addClass("XBox").text("X");
    });
  }

  function playO () {
    $boxes.on("click", function createO (){
      $(this).addClass("OBox").text("O");
    });
  }



});