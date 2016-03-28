var colorArray = [
  {color: "red", value: 1000, text: "$1000", free_spin: 0},
  {color: "green", value: 750, text: "$750 + FREE SPIN", free_spin: 1},
  {color: "yellow", value: 500, text: "$500", free_spin: 0},
  {color: "blue", value: 1500, text: "$1500", free_spin: 0 },
  {color: "orange", value: 2000, text: "$2000", free_spin: 0},
  {color: "DarkOrange", value: 0, text: "WHAMMY", free_spin: 0},
  {color: "Aqua", value: 0, text: "CRUISE", free_spin: 0}
];


// "red", "green", "blue", "orange", "yellow"];



var index = Math.random()
console.log(colorArray[Math.floor(Math.random()*colorArray.length)]);

function blink(){
  $('.cel').removeClass('red');
  var $rows = $('.cel');
  var chosenCel = $rows[Math.floor(Math.random()*$rows.length)];
  console.log($(chosenCel));

  $(chosenCel).addClass('red');
  
  $('.cel').each(function(){
    var arraySelection = colorArray[Math.floor(Math.random()*colorArray.length)];
     $(this).css("background-color", arraySelection.color)
            .html("<p style='margin-top:2em;font-size:0.8em'>" + arraySelection.text + "</p>")

   });
};

//buttons
var input = document.getElementById("input");

function start() {
  add = setInterval(blink,500);
}

// start();


// function blink(){
//   var $rows = $('.cel');
//   var chosenCel = $rows[Math.floor(Math.random()*$rows.length)];
//   console.log($(chosenCel));
//   $(chosenCel).addClass('black');
  
//  $('.cel').each(function(){
//     // console.log($(this));
//    //   $(this).css("background-color", '#' + Math.random().toString(16).slice(2, 8));
//    // });
   
//        $(this).css("background-image", "url(" + imageArray[Math.floor(Math.random()*10)] + ")" );
//   });
  
//   // $('.cel').each(function(){
//   //   $(this).css("background-position", "-466px 0px")
//   // });
  
// };

// var imageArray = [
//  "http://samidrivingcom.webstarts.com/uploads/Blue_square.jpg",
//  "http://images.wildtangent.com/pressyourluck2010edition/big_icon.png",  "http://vignette4.wikia.nocookie.net/gameshows/images/f/f7/Whammy.gif/revision/latest?cb=20140224050705",
//   "http://i.imgur.com/58osW.jpg",
//  "https://pbs.twimg.com/profile_images/378800000442759461/b483cdd049f470928e7b20051f95b8cc_400x400.jpeg",
//  "https://www.wpclipart.com/blanks/buttons/glossy_buttons/glossy_button_blank_yellow_square.png",
//   "http://keithsoares.com/wp-content/uploads/2015/08/green_square.jpg",
//   "http://samidrivingcom.webstarts.com/uploads/Blue_square.jpg",
//  "http://images.wildtangent.com/pressyourluck2010edition/big_icon.png",  "http://vignette4.wikia.nocookie.net/gameshows/images/f/f7/Whammy.gif/revision/latest?cb=20140224050705"  
// ]

// // var backgroundImgArray = ["-466", "-933", "-1395", "-2775", "-466", "-933", "-1395", "-2775", "-466", "-933"];
