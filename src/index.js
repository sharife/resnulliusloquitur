// JS Goes here - ES6 supported

import "./css/main.css";

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
        console.log("intro");
    }
    else if(isScrolledIntoView($('#one')))
    {
        console.log("one");
    }
    else if(isScrolledIntoView($('#two')))
    {
        console.log("two");
        $("body").css("background-color","darkred");
    }
    else if(isScrolledIntoView($('#three')))
    {
        console.log("three");
    }    
});


var tStart = $('#intro').scrollTop() // Start transition from top
  , tEnd = $("body").height()   // End at 
  , cStart = [0, 0, 0]
  , cEnd = [240, 240, 240]
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


