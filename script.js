var colorArray = [
  {value: 470,   text: "470",    free_spin: 0, img: "luck_board_low_res.jpg", pos: "-13px -18px"},
  {value: 750,   text: "750",    free_spin: 0, img: "luck_board_low_res.jpg", pos: "-13px -132px"},
  {value: 1000,  text: "1000",   free_spin: 1, img: "luck_board_low_res.jpg", pos: "-582px -136px"},
  {value: 1000,  text: "1000",   free_spin: 0, img: "luck_board_low_res.jpg", pos: "-469px -136px"},
  {value: 1200,  text: "1200",   free_spin: 0, img: "luck_board_low_res.jpg", pos: "-13px -252px"},
  {value: 1500,  text: "1500",   free_spin: 1, img: "luck_board_low_res.jpg", pos: "-468px -251px"},
  {value: 1750,  text: "1750",   free_spin: 0, img: "luck_board_low_res.jpg", pos: "-13px -372px"},
  {value: 2000,  text: "2000",   free_spin: 1, img: "luck_board_low_res.jpg", pos: "-468px -374px"},
  // {value: 2500,  text: "2500",   free_spin: 1, img: "luck_board_low_res.jpg", pos: "-113px -492px"},
  {value: 2750,  text: "2750",   free_spin: 0, img: "luck_board_low_res.jpg", pos: "-126px -492px"},
  {value: 3000,  text: "3000",   free_spin: 0, img: "luck_board_low_res.jpg", pos: "-239px -492px"},
  {value: 3500,  text: "3500",   free_spin: 0, img: "luck_board_low_res.jpg", pos: "-470px -492px"},
  {value: 4000,  text: "4000",   free_spin: 1, img: "luck_board_low_res.jpg", pos: "-582px -492px"},
  {value: -1,    text: "WHAMMY", free_spin: 0, img: "whammy2.png"},
  {value: -1,    text: "WHAMMY", free_spin: 0, img: "whammy2.png"},
  {value: -1,    text: "WHAMMY", free_spin: 0, img: "whammy2.png"},
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
               .css('background-position', arraySelection.pos)
               .css('background-size', "800px 600px")
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

function start(event) {
  event.stopPropagation();
  $(chosenCel).removeClass('flash');
  clearTimeout(flash);
  add = setInterval(blink,500);
}

function stop(event){
  event.stopPropagation();
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
