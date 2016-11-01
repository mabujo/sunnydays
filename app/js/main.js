$(document).ready(function() {
	/* fullpage init */
	$('#fullpage').fullpage({
		//Navigation
		anchors:['weather', 'enter', 'trends'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Weather', 'Enter', 'Trends'],

		//Accessibility
		keyboardScrolling: true,
		verticalCentered: false
		//sectionsColor : ['#ccc', '#fff'],
	});
});

/* form submit */
$(document).on('submit', 'form', function(event) {
	event.preventDefault();
	var formData = $(this).serialize();
	console.log(formData);
});
