window.addEventListener('load', animation)

function animation() {
	const TL = gsap.timeline({
		repeat: -1,
		defaults: { duration: 0.75, stagger: 0.75 },
	})
	TL.from('.vertical-slider p', {
		y: 100,
		autoAlpha: 0,
	}).to('.vertical-slider p', { y: -100, autoAlpha: 0 }, 0.75)
}
