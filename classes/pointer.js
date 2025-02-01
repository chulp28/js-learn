export class Pointer {
	constructor(diameter, colorDefault, colorDown) {
		this.colorDefault = colorDefault; this.colorDown = colorDown;
		this.radius = diameter / 2; this.elem = document.createElement('div')
		this.elem.style.width = diameter + 'px'; this.elem.style.height = diameter + 'px';
		this.elem.style.backgroundColor = colorDefault; this.elem.style.borderRadius = '1000px';
		this.elem.style.position = 'fixed'; this.elem.id = 'pointer';
		document.body.append(this.elem)
	}
	move(event) {
		this.elem.style.left = event.clientX - this.radius + 'px';
		this.elem.style.top = event.clientY - this.radius + 'px';
	}
	down() {
		this.elem.style.backgroundColor = this.colorDown
	}
	up() {
		this.elem.style.backgroundColor = this.colorDefault
	}
}