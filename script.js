// Handle mobile menu toggling for smaller viewports.
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
	navToggle.addEventListener('click', () => {
		siteNav.classList.toggle('open');
	});

	siteNav.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => siteNav.classList.remove('open'));
	});
}

// Set footer year automatically.
const yearElement = document.getElementById('year');
if (yearElement) {
	yearElement.textContent = new Date().getFullYear().toString();
}

// Reveal sections on scroll for a polished loading effect.
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.unobserve(entry.target);
			}
		});
	},
	{ threshold: 0.15 }
);

revealElements.forEach((element) => revealObserver.observe(element));
