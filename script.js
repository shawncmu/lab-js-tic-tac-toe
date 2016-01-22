$(document).ready(function(){

  var $boxes = $("td");
  var wincombo = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
  var counter = 1;
  var Xarray = [];
  var Oarray = [];

  function playXorO () {
    $boxes.on("click", function createCell (){
      if (counter === 1) {
        $(this).addClass("XBox").text("X");
        counter = 2;
        var $position = $(this).data("num");
        Xarray.push($position);
        checkWinner();
      } else {
        $(this).addClass("OBox").text("O");
        counter = 1;
        var $position2 = $(this).data("num");
        Oarray.push($position2);
        checkWinner();
      }
    });
  }
  function clear() {
    $("#reset").on("click", function clearAll (){
      $boxes.removeClass().text("");
    });
  }

  function checkWinner() {
    Xarray.sort(function compareNumbers(a, b) {
      return a - b;
    });
    console.log (Xarray);
    Oarray.sort(function compareNumbers(a, b) {
      return a - b;
    });
    for (var x=0;x<9;x++){
      if (wincombo[x] == Xarray) {console.log("X is the winner");};
      if (wincombo[x] == Oarray) {console.log("O is the winner");};
    }

  }

clear();
playXorO();

});