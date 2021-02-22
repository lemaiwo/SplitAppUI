/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"bewl./splitappui/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
