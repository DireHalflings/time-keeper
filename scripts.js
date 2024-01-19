const body = document.querySelector("body");
const clockContainer = document.querySelector(".clock-container");

const clock = document.createElement("div");
clock.className = "clock";
clockContainer.append(clock);

const clockCenter = document.createElement("div");
clockCenter.className = "clock-center";
clock.append(clockCenter);

const hands = ["second-hand", "minute-hand", "hour-hand"];

const createHands = (handName) => {
  const hand = document.createElement("div");
  hand.className = `hand ${handName}`;
  clock.append(hand);
}

for (let i = 0; i < hands.length; i++) {
  createHands(hands[i]);
}

// const nums = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const nums = [12, "|", "|", 3, "|", "|", 6, "|", "|", 9, "|", "|"];
// const nums = ["XII", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI"];
// const nums = ["XII", "I", "II", "III", "IIII", "V", "VI", "VII", "VIII", "IX", "X", "XI"];

for (let i = 0; i < nums.length; i++) {
  const num = document.createElement("div");
  num.innerText = nums[i];
  num.className = `number number${i}`;
  const degrees = (360/nums.length) * i;
  num.style.rotate = `${degrees}deg`;
  clock.appendChild(num);
}

const setRotation = (element, rotation) => {
  element.style.setProperty('--rotation', rotation * 360);
};

const setClock = () => {
  const now = new Date();
  const times = [];

  times.push(now.getSeconds() / 60);
  times.push((times[0] + now.getMinutes()) / 60);
  times.push((times[1] + now.getHours()) / 12);

  for (let i = 0; i < hands.length; i++) {
    const ele = document.querySelector(`.${hands[i]}`);
    setRotation(ele, times[i]);
  }
};

const setAmPm = () => {
  const now = new Date();
  console.log(now);
  const ele = document.querySelector('.am-pm');
  console.log(ele);
  ele.innerText="AM"
}

setInterval(setClock, 1000);
setAmPm();
setClock();