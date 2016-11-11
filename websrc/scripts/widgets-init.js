/* Prevent default on # hrefs */

$(function () {
	'use strict';
	$('a[href="#"]').click(function (event) {
		event.preventDefault();
	});
});

/* To do check toggle */

$(function () {
	'use strict';
	$('.todo-box li input').on('click', function () {
		$(this).parent().toggleClass('todo-done');
	});
});

/* Horizontal timeline */

$(function () {
	'use strict';
	var overallWidth = 0;

	$('.timeline-scroll .tl-row').each(function (index, elem) {
		var $elem = $(elem);
		overallWidth += $elem.outerWidth() + parseInt($elem.css('margin-left'), 10) + parseInt($elem.css('margin-right'), 10);
	});

	$('.timeline-horizontal', this).width(overallWidth);
});

/* Input switch alternate */

$(function () {
	'use strict';
	$('.input-switch-alt').simpleCheckbox();
});

/* Slim scrollbar */

$(function () {
	'use strict';
	$('.scrollable-slim').slimScroll({
		color: '#8da0aa',
		size: '10px',
		alwaysVisible: true
	});
});

$(function () {
	'use strict';
	$('.scrollable-slim-sidebar').slimScroll({
		color: '#8da0aa',
		size: '10px',
		height: '100%',
		alwaysVisible: true
	});
});

$(function () {
	'use strict';
	$('.scrollable-slim-box').slimScroll({
		color: '#8da0aa',
		size: '6px',
		alwaysVisible: false
	});
});

/* Loading buttons */

$(function () {
	'use strict';
	$('.loading-button').click(function () {
		var btn = $(this);
		btn.button('loading');
	});
});

/* Tooltips */

$(function () {
	'use strict';
	$('[data-toggle="tooltip"]').tooltip({
		container: 'body'
	});
});

/* Close response message */

$(function () {
	'use strict';
	$('.alert-close-btn').click(function () {
		$(this).parent().addClass('animated fadeOutDown');
	});
});

/* Popovers */

$(function () {
	'use strict';
	$('.popover-button').popover({
		container: 'body',
		html: true,
		animation: true,
		content: function () {
			var dataID = $(this).attr('data-id');
			return $(dataID).html();
		}
	}).click(function (evt) {
		evt.preventDefault();
	});
});

$(document).ready(function () {
	$.material.init();
});

$(function () {
	'use strict';
	$('.popover-button-default').popover({
		container: 'body',
		html: true,
		animation: true
	}).click(function (evt) {
		evt.preventDefault();
	});
});

/* Color schemes */

var mUIColors = {
	'default': '#3498db',
	'gray': '#d6dde2',
	'primary': '#00bca4',
	'success': '#2ecc71',
	'warning': '#e67e22',
	'danger': '#e74c3c',
	'info': '#3498db'
};

window.getUIColor = function (name) {
	if (mUIColors[name]) {
		return mUIColors[name];
	} else {
		return mUIColors['default'];
	}
};

/* Screenfull */

/* global screenfull */
if (document.getElementById('fullscreen-btn')) {
	document.getElementById('fullscreen-btn').addEventListener('click', function () {
		if (screenfull.enabled) {
			screenfull.request();
		}
	});
}
