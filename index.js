var currentNumberOfLvl = 0;
var gr = 0;
var re = 1;
var ye = 2;
var bl = 3;
var grmp = new Audio("sounds/green.mp3");
var remp = new Audio("sounds/red.mp3");
var yemp = new Audio("sounds/yellow.mp3");
var blmp = new Audio("sounds/blue.mp3");
var plyerArray = [];
var gameArray =[];

//var grmp =a new Audio("sounds/green.mp3");
//grmp.play();
starting();
$(document).ready(function(){
  // Додаємо обробник події кліку на всі кнопки
  $(".bllk").on('click', function(event){
      // Отримуємо id кнопки, яка була натиснута
      dltAllarr();
      animt();
      capibara();
  });
});

      function playingg (){
      if (plyerArray.length === gameArray.length && plyerArray.length > 0 && gameArray.length > 0){
        setTimeout( function() {
          animt();
         }, 1000);
        }
      }
$(document).ready(function(){
  // Додаємо обробник події кліку на всі кнопки
  $(".btn").on('click', function(event){
      // Отримуємо id кнопки, яка була натиснута
      var buttonId = $(this).attr("id");
      plyerArray.push(buttonId);
  });
});

$(document).ready(function(){
  // Додаємо обробник події кліку на всі кнопки
  $(".btn").on('click', playingg);
});
$(document).ready(function(){
  // Додаємо обробник події кліку на всі кнопки
  $(".btn").on('click', bacabaca);
});


$(document).ready(function(){
  // Вибираємо всі div з класом ".btn" і додаємо обробник події для кліку на них
  $(".btn").on('click', function(){
      var $this = $(this);
      $(this).addClass("pressed");
      setTimeout( function() {
        $this.removeClass("pressed");
     }, 110);

  });
});

function starting(){
  
  $(document).on('keydown', function(event){
      if (event.key === 'a' || event.key === 'ф') { // Перевіряємо, чи натиснута саме клавіша "a" 
          $('#level-title').text('Level '); // Змінюємо текст у теґу h1
          animt();
          capibara();
          
         
      }
  })
};


  
  $(document).on('keydown', function(event){
      if (event.key === 'r' || event.key === 'к') { // Перевіряємо, чи натиснута саме клавіша "a" 
           // Змінюємо текст у теґу h1

          dltAllarr();
          animt();
          currentNumberOfLvl = 1;
          $('#level-title').text('Level ' + currentNumberOfLvl);
      }
  });



function dltarr(){
  plyerArray.length = 0;
}
function dltAllarr(){
  gameArray.length = 0;
  plyerArray.length = 0;
}

var heading = $("#level-title");
function animt(){
  currentNumberOfLvl++;
  $("#level-title").text("Level " + currentNumberOfLvl);
  capipuci();
  bacabaca();
  plyerArray.splice(0, plyerArray.length);
  var rand = Math.floor(Math.random() * 4);
  if( rand === gr) {
    var grmp = new Audio("sounds/green.mp3");
    grmp.play();
    gameArray.push("0");
    var gre = $(".green");
    gre.addClass("pressed");
    setTimeout( function() {
      gre.removeClass("pressed");
   }, 150);
  }
  else if( rand === re) {
    var remp = new Audio("sounds/red.mp3");
    remp.play();
    gameArray.push("1");
    var red = $(".red");
    red.addClass("pressed");
    setTimeout( function() {
      red.removeClass("pressed");
   }, 150);
  }
  else  if( rand === ye) {
    var yemp = new Audio("sounds/yellow.mp3");
    yemp.play();
    gameArray.push("2");
    var yel = $(".yellow");
    yel.addClass("pressed");
    setTimeout( function() {
      yel.removeClass("pressed");
   }, 150);
  }
  else  if( rand === bl) {
    var blmp = new Audio("sounds/blue.mp3");
    blmp.play();
    gameArray.push("3");
    var blu = $(".blue");
    blu.addClass("pressed");
    setTimeout( function() {
      blu.removeClass("pressed");
   }, 150);
  }
}
function capipuci(){
  if(plyerArray.length > gameArray.length){
    bacabaca();
  }
}

function capibara(){
  if(plyerArray.length === gameArray.length && gameArray.length > 0 && plyerArray.length > 0){
    bacabaca();
  }
}
function bacabaca (){
  for (var i = 0; i < plyerArray.length; i++) {
    if (plyerArray[i] !== gameArray[i]) {
      $("#level-title").html("Game Over, Press <button class='bllk'>R</button> to Restart");
      $(".bllk").on('click', function(event){
        // Отримуємо id кнопки, яка була натиснута
          dltAllarr();
          animt();
          currentNumberOfLvl = 1;
          $('#level-title').text('Level ' + currentNumberOfLvl);
    });
      //var replacingText =  $("#level-title").text();
      //replacingText = replacingText.replace("R", "<button class='bllk'>R</button>");
      //$("#level-title").html(replacingText);

      var err = new Audio("sounds/wrong.mp3");
      err.play();
      var bckgrnd = $("body");
      bckgrnd.addClass("game-over");
      setTimeout( function() {
        bckgrnd.removeClass("game-over");
     }, 250);
      // Якщо знайдено різні елементи на відповідних позиціях, то масиви неоднакові
    }
}
}
/*
function arraysEq (){
  if (plyerArray.length === gameArray.length){
    var err = new Audio("sounds/wrong.mp3");
    err.play();
    var bckgrnd = $("body");
    bckgrnd.addClass("game-over");
    setTimeout( function() {
      bckgrnd.removeClass("game-over");
   }, 250);
  }
}
*/

$("#0").on('click', function() {
  grmp.play();
});

$("#1").on('click', function() {
  remp.play();
});

$("#2").on('click', function() {
  yemp.play();
});

$("#3").on('click', function() { 
  blmp.play();
});
