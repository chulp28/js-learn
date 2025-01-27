export class ExtendedClock extends Clock {
	constructor({template}, tickrate) {
		super({template}, tickrate)
	}
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), tickrate);
  }
}