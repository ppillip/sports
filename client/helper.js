Handlebars.registerHelper('isPopup', function (obj) {
	return Session.get("isPopup");
});

// 해당 화면에서 해당 소스를 관리하도록 각 template에서 관리하도록 수정.
//Handlebars.registerHelper('현재화면이름', function (obj) {
//	return (typeof obj === "undefined") ? Session.get("현재화면이름") : Session.get("현재화면이름") === obj;
//});