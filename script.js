var colorArray = [
  {color: "BlanchedAlmond", value: 1000, text: "1000 + spin", free_spin: 1, img: "1000spin.png"},
  {color: "LightCoral", value: 2250, text: "750 + FREE SPIN", free_spin: 1, img: "2250.png"},
  {color: "LightGreen", value: 500, text: "500", free_spin: 1, img: "500spin.png"},
  {color: "PowderBlue", value: 1500, text: "1500", free_spin: 0, img: "1500.png"},
  {color: "YellowGreen", value: 4000, text: "2000", free_spin: 1, img: "4000spin.png"},
  {color: "Orange", value: -1, text: "WHAMMY", free_spin: 0, img: "whammy1.gif"},
  {color: "Aqua", value: 4000, text: "CRUISE", free_spin: 1, img: "4000spin.png"},
  {color: "blue", value: 4000, text: "750 + FREE SPIN", free_spin: 1, img: "4000spin.png"},
  {color: "green", value: 2250, text: "500", free_spin: 0, img: "2250.png"},
  {color: "yellow", value: 1500, text: "4000", free_spin: 1, img: "1500.png"},
  {color: "pink", value: 2250, text: "2250", free_spin: 0, img: "2250.png"},
];

var score = 0;
var spins = 2;
var arraySelection;
var $rows = [];
var chosenCel;
// var index = Math.random()
console.log(colorArray[Math.floor(Math.random()*colorArray.length)]);

function blink(){
  $('.cel').removeClass('flash').removeAttr("style").html("");

  $('.cel').each(function(){
    arraySelection = colorArray[Math.floor(Math.random()*colorArray.length)];
  

      if (arraySelection.value == -1) {
        $(this).css("background-image", "url(img/" + arraySelection.img + ")")
               .attr('value', arraySelection.value);
      } else {
        $(this).css("background-image", "url(img/" + arraySelection.img + ")")
               .attr('value', arraySelection.value);
        

        // $(this).css("background-color", arraySelection.color)
        //       .html("<p style='margin-top:2em;font-size:0.8em'>" + arraySelection.text + "</p>")
      }
   });

  $rows = $('.cel');

  chosenCel = $rows[Math.floor(Math.random()*$rows.length)];
  console.log($(chosenCel));

  $(chosenCel).addClass('flash');
  
};

//buttons
var input = document.getElementById("input");

function start() {
  $(chosenCel).removeClass('flash');
  clearTimeout(flash);
  add = setInterval(blink,500);
}

function stop(){
  clearInterval(add);
  flash(chosenCel, 15, 100);

  if (chosenCel.attributes.value.value == -1){
    score = 0;
    spins -= 1;
  } else {
    score += parseInt(chosenCel.attributes.value.value);
  }
  

  console.log("score: " + score + "  object text: " + chosenCel.textContent + "  spin: " + chosenCel.free_spin);
  $('#score').text("$ " + score);
}

function flash(elem, times, speed) {
    if (times > 0 || times < 0) {
        if ($(elem).hasClass("flash")) 
            $(elem).removeClass("flash");
        else
            $(elem).addClass("flash");
    }

    clearTimeout(function () {
        flash(elem, times, speed);
    });

    if (times > 0 || times < 0) {
        setTimeout(function () {
            flash(elem, times, speed);
        }, speed);
        times -= .5;
    }
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
