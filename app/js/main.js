$(document).ready(function() {
	/* fullpage init */
	$('#fullpage').fullpage({
		//Navigation
		anchors:['weather', 'competition', 'trends'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Weather', 'Competition', 'Trends'],

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

/* Chart */
Chart.defaults.global.defaultColor = "#fcfcfc";
Chart.defaults.global.defaultFontColor = "#fcfcfc";
Chart.defaults.global.defaultFontFamily = "Didact Gothic, sans-serif";
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.scale.gridLines.display = false;
Chart.defaults.scale.gridLines.zeroLineColor = "#fff";
Chart.defaults.scale.gridLines.color = "#fff";
Chart.defaults.scale.ticks.beginAtZero = true;
Chart.defaults.scale.ticks.fontColor = "#fff";
Chart.defaults.scale.ticks.color = "#fff";

var ctx = document.getElementById('sunChart').getContext('2d');
var sunChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Sunny days',
      data: [22, 23, 20, 24, 26, 28, 30, 30, 27, 26, 23, 24],
      backgroundColor: "rgba(253,231,76,0.8)",
		borderColor: "#fcfcfc"
    }],
    options : [{
    	showLines: false
    }
    ]
  }
});
