// var colorArray = ["red", "green", "blue", "orange", "yellow", "gray", "brown", "pink", "blue", "orange"];

var imageArray = [
 "http://samidrivingcom.webstarts.com/uploads/Blue_square.jpg",
 "http://images.wildtangent.com/pressyourluck2010edition/big_icon.png",  "http://vignette4.wikia.nocookie.net/gameshows/images/f/f7/Whammy.gif/revision/latest?cb=20140224050705",
  "http://i.imgur.com/58osW.jpg",
 "https://pbs.twimg.com/profile_images/378800000442759461/b483cdd049f470928e7b20051f95b8cc_400x400.jpeg",
 "https://www.wpclipart.com/blanks/buttons/glossy_buttons/glossy_button_blank_yellow_square.png",
  "http://keithsoares.com/wp-content/uploads/2015/08/green_square.jpg",
  "http://samidrivingcom.webstarts.com/uploads/Blue_square.jpg",
 "http://images.wildtangent.com/pressyourluck2010edition/big_icon.png",  "http://vignette4.wikia.nocookie.net/gameshows/images/f/f7/Whammy.gif/revision/latest?cb=20140224050705"  
]

// var backgroundImgArray = ["-466", "-933", "-1395", "-2775", "-466", "-933", "-1395", "-2775", "-466", "-933"];

var index = Math.random()
// console.log(index);

function blink(){
  var $rows = $('.cel');
  var chosenCel = $rows[Math.floor(Math.random()*$rows.length)];
  console.log($(chosenCel));
  $(chosenCel).addClass('black');
  
 $('.cel').each(function(){
    // console.log($(this));
   //   $(this).css("background-color", '#' + Math.random().toString(16).slice(2, 8));
   // });
   
       $(this).css("background-image", "url(" + imageArray[Math.floor(Math.random()*10)] + ")" );
  });
  
  // $('.cel').each(function(){
  //   $(this).css("background-position", "-466px 0px")
  // });
  
};

input = document.getElementById("input");
function start() {
    add = setInterval(blink,500);
}start();

// setInterval(blink, 500);