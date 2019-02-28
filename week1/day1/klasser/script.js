class Counter {
  constructor(value) {
    this.backup = value;
    this.value = value;
  }

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }

  reset() {
    this.value = this.backup;
  }

  getCurrentValue() {
    return this.value;
  }
}

let value = new Counter(57);

let body = document.body;

let show = document.createElement("h1");
show.textContent = value.getCurrentValue();
body.appendChild(show);

let decrement = document.createElement("button");
decrement.textContent = "-1";
decrement.addEventListener("click", function() {
  value.decrement();
  show.textContent = value.getCurrentValue();
});
body.appendChild(decrement);

let reset = document.createElement("button");
reset.textContent = "Reset";
reset.addEventListener("click", function() {
  value.reset();
  show.textContent = value.getCurrentValue();
});
body.appendChild(reset);

let increment = document.createElement("button");
increment.textContent = "+1";
increment.addEventListener("click", function() {
  value.increment();
  show.textContent = value.getCurrentValue();
});
body.appendChild(increment);