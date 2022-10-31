
var sr = ScrollReveal()
sr.reveal('.row', {
	delay: 100,
	reset: true,
	duration: 3000
});



var imagenes = []
imagenes[0] = "files/slider1.jpg"
imagenes[1] = "files/slider2.jpg"
imagenes[2] = "files/slider3.jpg"

var index = 0

function next() {
	if (index < 2) {
		index = index + 1
		var slider = document.getElementById("imagenSlider")
		slider.src = imagenes[index]
	} else {
		index = 0
		var slider = document.getElementById("imagenSlider")
		slider.src = imagenes[index]
	}
}

function prev() {
	if (index > 0) {
		index = index - 1
		var slider = document.getElementById("imagenSlider")
		slider.src = imagenes[index]
	} else {
		index = 2
		var slider = document.getElementById("imagenSlider")
		slider.src = imagenes[index]
	}
}