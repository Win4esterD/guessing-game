class GuessingGame {
    constructor() {}
  
    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.arr = [];
        for (let i = this.min; i <= this.max; i++){
          this.arr.push(i);
        }
    }
  
    guess() {
        return this.arr[Math.round((this.arr.length-1) / 2)];
    }
  
    lower() {
        this.max = this.guess();
        this.arr = [];
        for (let i = this.min; i <= this.max; i++){
          this.arr.push(i);
        }
    }
  
    greater() {
        this.min = this.guess();
        this.arr = [];
        for (let i = this.min; i <= this.max; i++){
          this.arr.push(i);
        }
    }
  }

module.exports = GuessingGame;
