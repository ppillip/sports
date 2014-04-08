Handlebars.registerHelper('isPopup', function (obj) {
	return Session.get("isPopup");
});

Handlebars.registerHelper('현재화면이름', function (obj) {
	cl("log");
	cl(obj);
	cl(Session.get("현재화면이름"));
	cl(Session.get("현재화면이름") === obj);
	return (obj === null) ? Session.get("현재화면이름") : Session.get("현재화면이름") === obj;
});