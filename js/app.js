const scrollSpy = new bootstrap.ScrollSpy(document.body, {
	target: '#collapseMenu'
 });

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



 // Fetch all the forms we want to apply custom Bootstrap validation styles to
 const forms = document.querySelectorAll('.needs-validation')

 // Loop over them and prevent submission
 Array.from(forms).forEach(form => {
	form.addEventListener('submit', event => {
	  if (!form.checkValidity()) {
		 event.preventDefault()
		 event.stopPropagation()
	  }

	  form.classList.add('was-validated')
	}, false)
 })

// Form validate
const tel = document.querySelector("#inputTel1");
const telMask = new Inputmask("9(999)999-99-99");
telMask.mask(tel);