//custom functions

const selectElementByClass = className => {
	return document.querySelector(`.${className}`);
};

const scrollToReveal = (
	items,
	animation,
	delay = 0,
	options = {
		root: null,
		rootMargin: '0px',
		threshold: 0.3,
	}
) => {
	const handleReveal = (entries, animationObserver) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const revealItem = entry.target;
				if (delay) {
					setTimeout(() => revealItem.classList.add(animation), delay);
				} else {
					revealItem.classList.add(animation);
				}
				animationObserver.unobserve(revealItem);
			}
		});
	};
	const animationObserver = new IntersectionObserver(handleReveal, options);
	items.forEach(item => animationObserver.observe(item));
};

//code

const navItems = {
	home: selectElementByClass('home-nav-item'),
	about: selectElementByClass('about-nav-item'),
	projects: selectElementByClass('projects-nav-item'),
	contact: selectElementByClass('contact-nav-item'),
};

const sections = [
	document.querySelector('#home'),
	document.querySelector('#about'),
	document.querySelector('#projects'),
	document.querySelector('#contact'),
];

const options = {
	root: null,
	rootMargin: '0px',
	threshold: 0.5,
};

const handleIntersect = entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const navItem = navItems[entry.target.id];
			navItem.classList.add('active');
			const hash = '#' + entry.target.id;
			history.pushState({}, window.title, hash);
			Object.values(navItems).forEach(item => {
				if (item != navItem) {
					item.classList.remove('active');
				}
			});
		}
	});
};

const observer = new IntersectionObserver(handleIntersect, options);
sections.forEach(section => observer.observe(section));

scrollToReveal(document.querySelectorAll('.skill-title h2'), 'reveal', 200);
scrollToReveal(document.querySelectorAll('.projects-content'), 'reveal', 200);

const contactForm = document.querySelector('.contact-form');
const nameInput = document.querySelector('.input-name');
const emailInput = document.querySelector('.input-email');
const messageInput = document.querySelector('.contact-textarea');

contactForm.addEventListener('submit', e => {
	e.preventDefault();
	if (nameInput.value && emailInput.value && messageInput.value) {
		location.href =
			'mailto:' +
			'miroiugabriel1231@gmail.com' +
			'?cc=' +
			nameInput.value +
			'&subject=' +
			'Offer' +
			'&body=' +
			messageInput.value;
		contactForm.reset();
	} else {
		alert('Please complete all fields');
	}
});
