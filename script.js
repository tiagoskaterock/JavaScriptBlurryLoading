const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

let max = 100

function blurring(){
	load++;

	if (load > max) {
		clearInterval(int)
	}

	loadText.innerText = `${load}%`
	loadText.style.opacity = scale(load, 0, max, 1, 0)
	bg.style.filter = `blur(${scale(load, 0, max, 30, 0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}