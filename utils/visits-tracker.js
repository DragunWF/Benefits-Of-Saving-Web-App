class VisitTracker {
  static #visits = 0;

  static getVisits() {
    const timesWord = this.#visits > 1 ? "times" : "time";
    const visitCount = this.#visits
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${visitCount} ${timesWord}`;
  }

  static incrementVisits() {
    this.#visits++;
  }
}

export default VisitTracker;
