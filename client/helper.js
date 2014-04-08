Handlebars.registerHelper('isPopup', function (obj) {
	return Session.get("isPopup");
});

Handlebars.registerHelper('현재화면이름', function (obj) {
	return (typeof obj === "undefined") ? Session.get("현재화면이름") : Session.get("현재화면이름") === obj;
});