class Clock {
	currentTime = [0,0,0]
	update() {
		let now = new Date()
		this.currentTime = [now.getHours(), now.getMinutes(), now.getSeconds()]
	}
}


let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

let clock = new Clock

updateHTML()
let clockTimer = setInterval(() => updateHTML(), 1000)


function updateHTML() {
	clock.update()
	hours.textContent = clock.currentTime[0]
	minutes.textContent = clock.currentTime[1]
	seconds.textContent = clock.currentTime[2]
}