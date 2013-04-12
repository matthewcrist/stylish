$(document).ready(function () {
	$('.stylish-toggle').on('touchend click', function (ev) {
		ev.preventDefault()
		ev.stopPropagation()
		
		$('.stylish-container').toggleClass('stylish-active')
	})

	// Make the code prettier
	prettyPrint()
})