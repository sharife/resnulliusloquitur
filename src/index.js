// JS Goes here - ES6 supported

import "./css/main.scss";

var n = 0;
var p = 0;



$(function(){  // $(document).ready shorthand
  $('.fade-1').delay(10).animate({'opacity':'1'},1000);
  $('.fade-2').delay(1500).animate({'opacity':'1'},1500);
  $('.fade-3').delay(3000).animate({'opacity':'1'},700);
  $('.fade-4').delay(3500).animate({'opacity':'1'},1000);
  $('.fade-5').delay(4000).animate({'opacity':'1'},1000);
});





$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + ($(this).outerHeight() * .5);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},350);
            }
        });
    });
});


function displayNext(e) {
    var target = e;
    disableScroll();
    $('#next-screen').fadeToggle();
    document.getElementById("continue").href = target;
}

var lastScrollTop = 0;
var scrollDir = "down";

$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
       scrollDir = "down";
   } else {
      // upscroll code
      scrollDir = "up";
   }
   lastScrollTop = st;
});


function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}


$(window).scroll(function() {    
    if(isScrolledIntoView($('#intro')))
    {
        if (n == 0) {
            n++;
            oneBg.stop();
            introBg.play();
            introBg.fade(0, 0.3, 1000);
            console.log("intro");
            //$("body").animate({backgroundColor:'black'}, 300);
        }
        
    }
    else if(isScrolledIntoView($('#one')))
    {
        if (n > 0) {
            n = 0;
            twoBg.stop();
            introBg.stop();
            oneBg.play();
            oneBg.fade(0, 0.3, 1000);
            console.log("one");
            //$("body").animate({backgroundColor:'#003366'}, 300);
        }
    }
    else if(isScrolledIntoView($('#two')))
    {
        if (n == 0) {
            n++;
            oneBg.stop();
            twoBg.play();
            twoBg.fade(0, 0.3, 1000);
            console.log("two");
           //$("body").animate({backgroundColor:'#A01515'}, 300);
        }
    }
    else if(isScrolledIntoView($('#three')))
    {
        if (n > 0) {
            n = 0;
            twoBg.stop();
            fourBg.stop();
            threeBg.play();
            threeBg.fade(0, 0.3, 1000);
            console.log("three");
            //$("body").animate({backgroundColor:'white'}, 300);
        }
    } 
    else if(isScrolledIntoView($('#four')))
    {
        if (n == 0) {
            n++;
            threeBg.stop();
            fiveBg.stop();
            fourBg.play();
            fourBg.fade(0, 0.3, 1000);
            console.log("four");
            //$("body").animate({backgroundColor:'white'}, 300);
        }
    } 
    else if(isScrolledIntoView($('#five')))
    {
        if (n > 0) {
            n = 0;
            fourBg.stop();
            sixBg.stop();
            fiveBg.play();
            fiveBg.fade(0, 0.3, 1000);
            console.log("five");
            //$("body").animate({backgroundColor:'white'}, 300);
        }
    } 
    else if(isScrolledIntoView($('#six')))
    {
        if (n == 0) {
            n++;
            sevenBg.stop();
            fiveBg.stop();
            sixBg.play();
            sixBg.fade(0, 0.3, 1000);
            console.log("six");
            //$("body").animate({backgroundColor:'white'}, 300);
        }
    } 
    else if(isScrolledIntoView($('#seven')))
    {
        if (n > 0) {
            n = 0;
            sixBg.stop();
            sevenBg.play();
            sevenBg.fade(0, 0.3, 1000);
            console.log("seven");
            //$("body").animate({backgroundColor:'white'}, 300);
        }
    } 

    // if (scrollDir == "down") {
    //     if(isScrolledIntoView($('#intro-end'))) {
    //         if (p == 0) {
    //             p++;
    //             displayNext("#one");
    //         }
    //     } else if(isScrolledIntoView($('#one-end'))) {
    //         if (p > 0) {
    //             p = 0;
    //             displayNext("#two");
    //         }
    //     }
    // }
});

// background color
var tStart = $('#intro').scrollTop() // Start transition from top
  , tEnd = $("body").height()   // End at 
  , cStart = [0, 0, 0]
  , cEnd = [220, 220, 220]
  , cDiff = [cEnd[0] - cStart[0], cEnd[1] - cStart[1], cEnd[1] - cStart[0]];

$(document).ready(function(){
  $("body").css('background-color', "black");
  $("body").css('color', "white");
    $(document).scroll(function() {
        var p = ($(this).scrollTop() - tStart) / (tEnd - tStart); // % of transition
        p = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
        var cBg = [Math.round(cStart[0] + cDiff[0] * p), Math.round(cStart[1] + cDiff[1] * p), Math.round(cStart[2] + cDiff[2] * p)];
        $("body").css('background-color', 'rgb(' + cBg.join(',') +')');
    });
});


// text color
var ttStart = $('#intro').scrollTop() // Start transition from top
  , ttEnd = $("body").height()   // End at 
  , tcStart = [255, 255, 255]  // White
  , tcEnd = [0, 0, 0]   // Black
  , tcDiff = [tcEnd[0] - tcStart[0], tcEnd[1] - tcStart[1], tcEnd[1] - tcStart[0]];

$(document).ready(function(){
    $(document).scroll(function() {
        var p = ($(this).scrollTop() - ttStart) / (ttEnd - ttStart); // % of transition
        p = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
        var cBg = [Math.round(tcStart[0] + tcDiff[0] * p), Math.round(tcStart[1] + tcDiff[1] * p), Math.round(tcStart[2] + tcDiff[2] * p)];
        $("body").css('color', 'rgb(' + cBg.join(',') +')');
    });
});





$(function () {
    disableScroll();
  $(".random p").each(function (i, elt) {
    var vw = $( window ).width() - 100;
    var w = $( this ).width();
    var wp = (Math.random() * (w/2));
    // while (wp < 0) {
    //   wp = (Math.random() * w)-10;
    // }
    var k = 0;
    while ((wp+w) > vw && k < 100) {
       wp = (Math.random() * (w/2));
       k++;
    }
    $(elt).css({
      left: wp,
      top: Math.random() * 50,
      width: w - wp
    });
  });
});
