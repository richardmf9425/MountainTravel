var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName('mySlides');
	var dots = document.getElementsByClassName('dot');
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}
	slides[slideIndex - 1].style.display = 'block';


	dots[slideIndex - 1].className += ' active';
}

mapboxgl.accessToken =
	'pk.eyJ1IjoicmljaGFyZG1mOTQyNSIsImEiOiJjanF2aGRnOTcwdmNjNDlsbjVoczVlbDFzIn0.fwkubXwazbO0lELP4vGD2Q';
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v9',
	center: [-82.359122, 29.616042],
	zoom: 12
});

var marker = new mapboxgl.Marker().setLngLat([-82.359122, 29.616042]).addTo(map);

// This is the js for the destination animations!!!
// This is a test!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const panels = document.querySelectorAll('.panel');

function toggleOpen() {
	this.classList.toggle('open');
}

function toggleActive(e) {
	if (e.propertyName.includes('flex')) {
		this.classList.toggle('open-active');
	}
}

panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
panels.forEach((panel) => panel.addEventListener('transitionend', toggleActive));

//Trying out code for navbar to get backgorund color
window.onscroll = () => {
	const nav = document.querySelector('#nav-bar');
	if (this.scrollY <= 10) nav.classList.remove('scroll');
	else nav.classList.add('scroll');
};

// code for translation
// document.getElementById("spanish")
// 	.addEventListener("click", function () {

// 		document.getElementById("visible").hidden = true;
// 		document.getElementById("hidden").hidden = false;

// 	}, false);


// Responsive Navbar

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");
let navLinks = document.querySelectorAll(".nav-links");

function linkToggle() {
	mainNav.classList.toggle("active");

};

navLinks.forEach((link) => link.addEventListener('click', linkToggle));

navBarToggle.addEventListener("click", function () {
	mainNav.classList.toggle("active");

});