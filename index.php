<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title>Is it sunny in Marbella?</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<link href="https://fonts.googleapis.com/css?family=Didact+Gothic|Montserrat|Open+Sans" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="dist/css/styles.css">
	</head>
	<body>
		<!--[if lt IE 8]>
			<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
		<![endif]-->

		<div id="fullpage">
			<!-- First slide -->
			<div class="section" id="section1">
				<div class="container">
						<div class="row">
							<div class="col-md-8 col-md-offset-2">
								<h1>Is it sunny in Marbella?</h1>
									<div id="weatherCondition">
										<div id="sunnyYes">Yes!</div>
										<i class="wi wi-day-sunny"></i>
									</div>
								<h2>There have been <span id="sunnyCount">278</span> sunny days so far</h2>
							</div>
						</div>
				</div>
				<div id="enter-competition">
					<a href="#competition" title="Enter competition">Enter our competition!</a>
				</div>
			</div>
			<!-- Second slide -->
			<div class="section" id="section2">
				<div class="container">
					<div class="row">
						<div class="col-md-6 col-md-offset-3">
						<h2>Enter to win!</h2>
							<form id="competition-form" autocomplete="off">
								<div class="form-group">
									<label for="name">Name</label>
									<input type="text" id="name" class="form-control" placeholder="Your name">
								</div>
								<div class="form-group">
									<label for="emailAddress">Email address</label>
									<input type="email" class="form-control" id="emailAddress" placeholder="Email">
								</div>
								<div class="form-group">
									<label for="sunnyDays">Sunny days this year?</label>
									<input type="number" class="form-control" id="sunnyDays" placeholder="How many sunny days this year?">
								</div>
								<div class="form-group">
									<label for="nationality">Nationality</label>
									<select class="form-control bfh-countries" data-country="ES" id="nationality" name="nationality"></select>
								</div>
								<button type="submit" class="btn btn-default">Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- Third slide -->
			<div class="section" id="section3">
				<div class="container">
						<div class="row">
							<div class="col-md-6 col-md-offset-3">
								  <h2>Trends</h2>
								  <canvas id="sunChart" width="600" height="600"></canvas>
							</div>
						</div>
				</div>
			</div>
		</div>

		<footer>
		<p>&copy; <?php echo date('Y'); ?> <a href="http://marbellainstyle.com/" title="Marbella in-Style">Marbella in-Style</a> - design by <a href="https://mabujo.com/" title="mabujo">mabujo</a></p>
		</footer>

		<script src="dist/js/app.js"></script>

	</body>
</html>
