/* change active link header */

const headerLinks = document.querySelectorAll(".header .navbar-nav .nav-link");
headerLinks.forEach(link => {
	link.addEventListener('click', () => {
		headerLinks.forEach(val => val.classList.remove("active"));
		link.classList.add("active");
		checkWidthToggleClassToggler();
	})
})
window.addEventListener('resize', checkWidthToggleClassToggler)
window.addEventListener('load', checkWidthToggleClassToggler)
function checkWidthToggleClassToggler () {
	if(window.innerWidth < 992) {
		headerLinks.forEach(link => {
			link.closest(".navbar-collapse").classList.remove("show");
			const button = link.closest(".container-fluid").querySelector(".navbar-toggler");
			button.setAttribute("aria-expanded", "false");
			button.classList.add("collapsed");
		})
	}
}

