function Menu() {
	this.prevPage = null;
	this.pages = $("section:not(#welcome)");                       		/* get all pages except the main one */
	var self = this;

	/* manage menu's tabs */
	$("#list-menu > li").click(function(){
		self.tabs(this, self);
	});

	/* open-close sidebar */
	$("div#sidebar").hover(function(){
		self.openClose();
	});
};

Menu.prototype = {
	tabs : function(elem, Menu) {
		var clickPage = Menu.pages[$(elem).index()];				/* get affected page */
		if (Menu.prevPage && Menu.prevPage !== clickPage){			/* if there is an opened page and the opened page is different than the selected page */
			$("#list-menu > li").removeClass("select-tab");			/* delete hover of all tab */
			Menu.pages.removeClass("show-page");					/* undisplay all pages */
		}
		$(elem).toggleClass("select-tab");							/* keep hover of selected tab */
		$(clickPage).toggleClass("show-page");						/* display selected page */
		Menu.prevPage = clickPage;									/* save the actual page */
	},
	openClose: function() {
		$('div#sidebar').toggleClass("sidebar-close"); 				/* resize menu   */
		$('div#menu').toggleClass("sd-menu-move");					/* left on menu  */
	}
};
