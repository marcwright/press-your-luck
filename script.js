$(function(){

  var colorArray = [
    {value: 470,   text: "470",    free_spin: "0", img: "luck_board_low_res.jpg", pos: "-13px -13px"},
    {value: 750,   text: "750",    free_spin: "0", img: "luck_board_low_res.jpg", pos: "-13px -132px"},
    {value: 1000,  text: "1000",   free_spin: "1", img: "luck_board_low_res.jpg", pos: "-582px -134px"},
    {value: 1000,  text: "1000",   free_spin: "1", img: "luck_board_low_res.jpg", pos: "-582px -134px"},
    {value: 1000,  text: "1000",   free_spin: "0", img: "luck_board_low_res.jpg", pos: "-469px -136px"},
    {value: 1200,  text: "1200",   free_spin: "0", img: "luck_board_low_res.jpg", pos: "-13px -252px"},
    {value: 1500,  text: "1500",   free_spin: "1", img: "luck_board_low_res.jpg", pos: "-468px -251px"},
    {value: 1500,  text: "1500",   free_spin: "1", img: "luck_board_low_res.jpg", pos: "-468px -251px"},
    {value: 1750,  text: "1750",   free_spin: "0", img: "luck_board_low_res.jpg", pos: "-13px -372px"},
    {value: 2000,  text: "2000",   free_spin: "1", img: "luck_board_low_res.jpg", pos: "-468px -374px"},
    {value: 2000,  text: "2000",   free_spin: "1", img: "luck_board_low_res.jpg", pos: "-468px -374px"},
    // {value: 2500,  text: "2500",   free_spin: "1", img: "luck_board_low_res.jpg", pos: "-113px -492px"},
    {value: 2750,  text: "2750",   free_spin: "0", img: "luck_board_low_res.jpg", pos: "-126px -492px"},
    {value: 3000,  text: "3000",   free_spin: "0", img: "luck_board_low_res.jpg", pos: "-239px -492px"},
    {value: 3500,  text: "3500",   free_spin: "0", img: "luck_board_low_res.jpg", pos: "-470px -492px"},
    {value: 4000,  text: "4000",   free_spin: "0", img: "luck_board_low_res.jpg", pos: "-582px -492px"},
    {value: 4000,  text: "4000",   free_spin: "0", img: "luck_board_low_res.jpg", pos: "-582px -492px"},
    {value: -1,    text: "WHAMMY", free_spin: "0", img: "whammy2.png"},
    {value: -1,    text: "WHAMMY", free_spin: "0", img: "whammy2.png"},
    {value: -1,    text: "WHAMMY", free_spin: "0", img: "whammy2.png"},
    {value: -1,    text: "WHAMMY", free_spin: "0", img: "whammy2.png"},
    {value: -1,    text: "WHAMMY", free_spin: "0", img: "whammy2.png"},
    {value: -1,    text: "WHAMMY", free_spin: "0", img: "whammy2.png"},
    {value: -1,    text: "WHAMMY", free_spin: "0", img: "whammy2.png"},
    {value: -1,    text: "WHAMMY", free_spin: "0", img: "whammy2.png"},
    {value: -1,    text: "WHAMMY", free_spin: "0", img: "whammy2.png"},
    {value: -1,    text: "WHAMMY", free_spin: "0", img: "whammy2.png"},
    {value: -1,    text: "WHAMMY", free_spin: "0", img: "whammy2.png"},
  ];

  //buttons
  var input = document.getElementById("input");
  var score = 0;
  var spins = 2;
  var arraySelection;
  var $rows = [];
  var chosenCel;
  var whammyCount = 0;

  // console.log(colorArray[Math.floor(Math.random()*colorArray.length)]);

  function blink(){
    $rows = $('.cel');
    $rows.removeClass('flash').removeAttr("style").html("");

    $rows.each(function(){
      arraySelection = colorArray[Math.floor(Math.random()*colorArray.length)];
      // console.log(arraySelection);

        if (arraySelection.value == -1) {
          $(this).css("background-image", "url(img/" + arraySelection.img + ")")
            .attr('value', arraySelection.value)
            .attr('free_spin', arraySelection.free_spin);
        } else {
          $(this).css("background-image", "url(img/" + arraySelection.img + ")")
            .css('background-position', arraySelection.pos)
            .css('background-size', "800px 600px")
            .attr('value', arraySelection.value)
            .attr('free_spin', arraySelection.free_spin);
        }
     });

    chosenCel = $rows[Math.floor(Math.random()*$rows.length)];
    $(chosenCel).addClass('flash');  
    console.log($(chosenCel));
  };


  function start() {
    // event.stopPropagation();
    $(chosenCel).removeClass('flash');
    clearTimeout(flash);
    add = setInterval(blink,500);
    $('#spins').html('<p>Spins: ' + spins + '</p>');
  }

  function checkFreeSpin(){
    clickedCel = chosenCel.attributes.value.value;

    if (clickedCel == -1){
      score = 0;
      spins -= 1;
      addWhammys();    
    } else if (chosenCel.attributes.free_spin.value == 1) {
      score += parseInt(clickedCel);
      spins += 1;
      // console.log(chosenCel.attributes.value.data-free-spin);
    } else {
      score += parseInt(clickedCel);
    };  
  }

  function addWhammys(){
    $('.whammyPic').eq(whammyCount).css('background-image', "url(img/whammy2.png)");
    
    if (whammyCount == 2){
      $('#celMiddle').html("<p>GAME OVER. CLICK BELOW To RESTART</p>");
      console.log("line 99 game over! whammy count: " + whammyCount);
      $('#start').text('RESTART').on('click', reset());
    } else {
      whammyCount++; 
      console.log("line 101 whamy count: " + whammyCount);
    }
  }

  function stop(){
    // event.stopPropagation();
    clearInterval(add);
    checkFreeSpin();  

    $('#score').text("$ " + score);
    flash(chosenCel, 5, 100);
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

  function reset(){
    score = 0;
    spins = 2;
    $rows = [];
    whammyCount = 0;
  }


  $('#target').on('click',function(){
    if($(this).attr('data-click-state') == 1) {
      $(this).attr('data-click-state', 0)
      stop(event);
    } else {
      $(this).attr('data-click-state', 1)
      start(event);
    }    
  });

});
