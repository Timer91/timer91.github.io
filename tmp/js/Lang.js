function Lang() {
	var btn  = document.getElementById("lang-btn");
	var lang = document.getElementById("lang-flag");
	fillLang();

	function fillLang(){
		$(lang).empty();
		$(lang).append('<img src="' + (document.body.lang === "en" ? "img/french.png" : "img/english.png") + '"/>');
	}
	function click() {
		document.body.lang = (document.body.lang === "en" ? "fr" : "en");
		fillLang();
		$(lang).animate({ opacity:'1'}, 200, function(){ $(this).animate({opacity:'0'}, 150)});
	}
	btn.onclick = click;
};