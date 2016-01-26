var Portefolio = {};

$(function() {
	Portefolio.Menu = new Menu();
	Portefolio.Lang = new Lang();

	/*
		- mousedown
		- pos.act souris
		- mouvement souris par rapport a pos.act
		- slide de #chapter avec la pos
	*/

	var width = $("#life").width();
	var parentWidth = $('#timeline').offsetParent().width();
	var percent = 100*parentWidth / width;
	console.log(width);
	console.log(parentWidth);
	console.log(percent);

	$("#chapters").mousedown(function(event){
		var pos = { act: { x:event.pageX, y:event.pageY } };
		$(this).mousemove(function(event){
			pos.move = { x:event.pageX, y:event.pageY }
			pos.left = parseInt($(this).css("left").slice(0, -2));
			pos.right = parseInt($(this).css("width").slice(0, -2));
			console.log($(this).width());
			if ((($(this).width() - pos.left) >= $("#life").width()) && pos.move.x < pos.act.x)
				pos.left -= 100;
			else if (pos.left < 0 && pos.move.x > pos.act.x)
				pos.left += 100;
			$(this).css({"left":pos.left});
		});
	});
	$("#chapters").mouseup(function(){ $(this).unbind("mousemove"); });
});