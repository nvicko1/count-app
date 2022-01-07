'use strict';

// document.getElementById('count-el').innerText = 5;

// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch;

// console.log(count);

// const myAge = 25;
// console.log(myAge);

// let myAge = 25;
// const humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// let bonusPoints = 50;

// bonusPoints = bonusPoints + 50;
// bonusPoints = bonusPoints - 75;
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

const btn = document.querySelector('#increment-btn');
const countEl = document.querySelector('#count-el');
// let people = 0;
const refreshbtn = document.querySelector('#refresh-btn');
const saveBtn = document.querySelector('#save-btn');
const savedPeopleEl = document.querySelector('#save-el');
const allPeopleSaved = document.querySelector('#allpeople-el');
const peoplePeople = document.querySelector('#people-btn');
const historyEl = document.querySelector('#history-el');
const restartBtn = document.querySelector('#restart-btn');

let count = 0;
let savedPeople = 0;

const increment = function () {
  count += 1;

  countEl.innerHTML = `${count}`;
};

btn.addEventListener('click', increment);

const refresh = function () {
  count = 0;
  countEl.innerHTML = `${count}`;
  // savedPeople = 0;
  // savedPeopleEl.innerHTML = `${savedPeople}`;
  // allPeople();
  // save();
};

refreshbtn.addEventListener('click', refresh);
const save = function () {
  savedPeopleEl.innerHTML = `${savedPeople + (count - savedPeople)}`;
};
const allPeople = function () {
  //   savedPeople = count + savedPeople;
  allPeopleSaved.innerHTML = `${(savedPeople = count + savedPeople)}`;
  console.log(allPeopleSaved);
  refresh();
  save();

  if (historyEl.innerHTML.length < 30) {
    historyEl.innerHTML = `${historyEl.innerHTML} ${savedPeople},`;
  } else {
    historyEl.innerHTML = `History: ${historyEl.innerHTML.slice(8, 9)}`;
  }
};

// console.log(historyEl.innerHTML.length);

saveBtn.addEventListener('click', save);

peoplePeople.addEventListener('click', allPeople);

// const username = 'per';
// const message = 'you have tree new nortification';
// console.log(message + ' ' + username);

// const messageToUser = message + ' ' + username;
// console.log(messageToUser);

const refreshAll = function () {
  refresh();
  savedPeople = 0;
  historyEl.innerHTML = `History:`;
  allPeopleSaved.innerHTML = 0;
  savedPeopleEl.innerHTML = 0;
};

restartBtn.addEventListener('click', refreshAll);
