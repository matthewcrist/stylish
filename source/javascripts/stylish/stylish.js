$(document).ready(function () {
	$('.stylish-toggle').on('touchend click', function (ev) {
		ev.preventDefault()
		ev.stopPropagation()
		
		$('.stylish-container').toggleClass('stylish-active')
	})

	// Check for the hide flag, this will hide Stylish
	var hide = location.href.match(/(\?|&)show($|&|=)/)
	
	if (hide) {
		$('body').addClass('stylish-show')

		$('a').on('click', function (ev) {
			ev.preventDefault()

			window.location.href = this.getAttribute('href') + '?show'
		})
	}
 
	// Make the code prettier
	prettyPrint()
})