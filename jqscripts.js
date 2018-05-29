var vsauce = new Audio();
vsauce.src = "sounds/vsauce.mp3";
function help() {
    target_offset = $("#part0").offset(),
    target_top = target_offset.top;
    $('html, body').animate({
        scrollTop: target_top
    }, 600);
}

function help1() {
    target_offset = $("#part3").offset(),
    target_top = target_offset.top;
    $('html, body').animate({
        scrollTop: target_top
    }, 600);
    vsoss();
}

function help2() {
    target_offset = $("#part4").offset(),
    target_top = target_offset.top;
    $('html, body').animate({
        scrollTop: target_top
    }, 600);
}

function help3() {
    target_offset = $("#part5").offset(),
    target_top = target_offset.top;
    $('html, body').animate({
        scrollTop: target_top
    }, 600);
}

function help4() {
    target_offset = $("#part6").offset(),
    target_top = target_offset.top;
    $('html, body').animate({
        scrollTop: target_top
    }, 600);
}

function help5() {
    target_offset = $("#start").offset(),
    target_top = target_offset.top;
    $('html, body').animate({
        scrollTop: target_top
    }, 600);
}



function vsoss() {
	$("#volumeThing").show();
	vsauce.play();
	vsauce.volume = 0.1;
	setTimeout(function() {
		$("#volumeThing").hide();
		$("#muteThing").hide();
	}, 93000);
}

function mute() {
	if(!vsauce.muted) {
		vsauce.muted = true;
	}
	$("#volumeThing").hide();
	$("#muteThing").show();
}

function unmute() {
	if(vsauce.muted) {
		vsauce.muted = false;
	}
	$("#volumeThing").show();
	$("#muteThing").hide();
}

$(document).ready(function() {
	$(".whiteFade").fadeOut(1000);
	$("#volumeThing").hide();
	$("#muteThing").hide();
    $("#wText").hide().delay(1000).fadeIn(1500);
    $("#xText").hide().delay(2500).fadeIn(1500);
    $("#yText").hide().delay(5000).fadeIn(500);
});
