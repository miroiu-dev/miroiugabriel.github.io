const selectElementByClass = className => {
	return document.querySelector(`.${className}`);
};

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
