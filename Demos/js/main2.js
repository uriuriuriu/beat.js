$(function () {
	'use strict';
	// msg html template
	var _msgTemplate = $("#msg_template").text();
	var _createMsg = _.template(_msgTemplate);
	function getMsgHtml(img, msg) {
	  return _createMsg({"img": img, "msg":msg});
	}

	// main
	var k = 0;
	var beat = new beatJs({bpm:120,repeat:true});
	var imgURL = "http://lorempixel.com/80/80/people/";
	beat.push(function(){
	  $("#box").prepend(getMsgHtml(imgURL,"one  "+k++));
	});
	beat.push(function(){
	  $("#box").prepend(getMsgHtml(imgURL,"two  "+k++));
	});
	beat.push(function(){
	  $("#box").prepend(getMsgHtml(imgURL,"three  "+k++));
	});
	beat.push(function(){
	  $("#box").prepend(getMsgHtml(imgURL,"knock! "+k++));
	});
	beat.push(function(){
	  $("#box").prepend(getMsgHtml(imgURL,"knock! "+k++));
	});	beat.run();
	$("li").click(function(){
	  if(beat.isRun){
	    beat.stop();
	  }else{
	    beat.run();
	  }
	});
});
