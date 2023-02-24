
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

const moreInfoBlock = document.querySelector("#moreinfo");
const Visible = function(target) {
	let targetPosition = {
		top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
	},
	windowPosition = {
		top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
	};

	link = document.querySelector(`.nav-link[href="#${target.id}"]`);
	if (targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom && targetPosition.right > windowPosition.left && targetPosition.left < windowPosition.right) {
		link.classList.add("active");
	} else {
		link.classList.remove("active");
	}

}

window.addEventListener('scroll', function() {
	Visible (moreInfoBlock);
 });
 
 // А также запустим функцию сразу. А то вдруг, элемент изначально видно
 Visible (moreInfoBlock);


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