export class BigBenService {

  private gethour(): String {
    return new Date().toLocaleString();
  }

  generateHour(delay: number, callback) {
    setInterval(() => callback(this.gethour()), delay);
  }
}