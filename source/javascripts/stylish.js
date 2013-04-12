$(document).ready(function () {
	$('.stylish-toggle').on('click', function () {
		$('.stylish-container').toggleClass('stylish-active')
	})

	// Make the code prettier
	prettyPrint()
})