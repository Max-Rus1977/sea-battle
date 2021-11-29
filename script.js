// Поле боя
const userTable = document.createElement('table');
userTable.classList.add('user-table');

for (let y = 0; y < 10; y++) {
  const tr = document.createElement('tr');
  tr.dataset.y = y + 1;

  for (let x = 0; x < 10; x++) {
    const td = document.createElement('td');
    td.classList.add('field-td');
    td.dataset.x = x + 1;
    td.dataset.y = y + 1;

    tr.append(td);
  }

  userTable.append(tr);
}

const compField = document.querySelector('.comp-field');
const compTable = userTable.cloneNode(true);
compTable.classList.remove('user-table');
compTable.classList.add('comp-table');
compField.append(compTable);
/*! ---  !*/

const ships = document.querySelectorAll('.ship');
const userField = document.querySelector('.user-field');
const hangarShips = document.querySelector('.hangar-ships');

let shipDrag; //@перетягиваемый корабль

// Добавление классов коралбя
function addClassShipLocations(ship, n) {
  let dataX = +prevTd.dataset.x;
  let dataY = +prevTd.dataset.y;

  if (ship.classList.contains('reverse')) {

    if (userField.querySelector(`[data-x="${dataX - 1}"][data-y="${dataY}"]`)) {
      userField.querySelector(`[data-x="${dataX - 1}"][data-y="${dataY}"]`).classList.add('blind-spot');
    }
    if (userField.querySelector(`[data-x="${dataX + n}"][data-y="${dataY}"]`)) {
      userField.querySelector(`[data-x="${dataX + n}"][data-y="${dataY}"]`).classList.add('blind-spot');
    }
    for (let i = -1; i <= n; i++) {
      if (userField.querySelector(`[data-x="${dataX + i}"][data-y="${dataY + 1}"]`)) {
        userField.querySelector(`[data-x="${dataX + i}"][data-y="${dataY + 1}"]`).classList.add('blind-spot');
      }
      if (userField.querySelector(`[data-x="${dataX + i}"][data-y="${dataY - 1}"]`)) {
        userField.querySelector(`[data-x="${dataX + i}"][data-y="${dataY - 1}"]`).classList.add('blind-spot');
      }
    }

    //корабль
    for (let i = 0; i < n; i++) {
      userField.querySelector(`[data-x="${dataX + i}"][data-y="${dataY}"]`).classList.add('deployment-ships')
    }
  }

  if (!ship.classList.contains('reverse')) {
    if (userField.querySelector(`[data-x="${dataX}"][data-y="${dataY - 1}"]`)) {
      userField.querySelector(`[data-x="${dataX}"][data-y="${dataY - 1}"]`).classList.add('blind-spot');
    }
    if (userField.querySelector(`[data-x="${dataX}"][data-y="${dataY + n}"]`)) {
      userField.querySelector(`[data-x="${dataX}"][data-y="${dataY + n}"]`).classList.add('blind-spot');
    }

    for (let i = -1; i <= n; i++) {
      if (userField.querySelector(`[data-x="${dataX + 1}"][data-y="${dataY + i}"]`)) {
        userField.querySelector(`[data-x="${dataX + 1}"][data-y="${dataY + i}"]`).classList.add('blind-spot');
      }
      if (userField.querySelector(`[data-x="${dataX - 1}"][data-y="${dataY + i}"]`)) {
        userField.querySelector(`[data-x="${dataX - 1}"][data-y="${dataY + i}"]`).classList.add('blind-spot');
      }
    }
    //корабль
    for (let i = 0; i < n; i++) {
      userField.querySelector(`[data-x="${dataX}"][data-y="${dataY + i}"]`).classList.add('deployment-ships');
    }
  }

}
// Удаление классов коралбя
function removeClassShipLocations(ship, n) {
  let cellShipRelocation = ship.closest('.deployment-ships');
  let dataX = +cellShipRelocation.dataset.x;
  let dataY = +cellShipRelocation.dataset.y;

  if (ship.classList.contains('reverse')) {

    if (userField.querySelector(`[data-x="${dataX - 1}"][data-y="${dataY}"]`)) {
      userField.querySelector(`[data-x="${dataX - 1}"][data-y="${dataY}"]`).classList.remove('blind-spot');
    }
    if (userField.querySelector(`[data-x="${dataX + n}"][data-y="${dataY}"]`)) {
      userField.querySelector(`[data-x="${dataX + n}"][data-y="${dataY}"]`).classList.remove('blind-spot');
    }
    for (let i = -1; i <= n; i++) {
      if (userField.querySelector(`[data-x="${dataX + i}"][data-y="${dataY + 1}"]`)) {
        userField.querySelector(`[data-x="${dataX + i}"][data-y="${dataY + 1}"]`).classList.remove('blind-spot');
      }
      if (userField.querySelector(`[data-x="${dataX + i}"][data-y="${dataY - 1}"]`)) {
        userField.querySelector(`[data-x="${dataX + i}"][data-y="${dataY - 1}"]`).classList.remove('blind-spot');
      }
    }

    //корабль
    for (let i = 0; i < n; i++) {
      userField.querySelector(`[data-x="${dataX + i}"][data-y="${dataY}"]`).classList.remove('deployment-ships')
    }
  }

  if (!ship.classList.contains('reverse')) {
    if (userField.querySelector(`[data-x="${dataX}"][data-y="${dataY - 1}"]`)) {
      userField.querySelector(`[data-x="${dataX}"][data-y="${dataY - 1}"]`).classList.remove('blind-spot');
    }
    if (userField.querySelector(`[data-x="${dataX}"][data-y="${dataY + n}"]`)) {
      userField.querySelector(`[data-x="${dataX}"][data-y="${dataY + n}"]`).classList.remove('blind-spot');
    }

    for (let i = -1; i <= n; i++) {
      if (userField.querySelector(`[data-x="${dataX + 1}"][data-y="${dataY + i}"]`)) {
        userField.querySelector(`[data-x="${dataX + 1}"][data-y="${dataY + i}"]`).classList.remove('blind-spot');
      }
      if (userField.querySelector(`[data-x="${dataX - 1}"][data-y="${dataY + i}"]`)) {
        userField.querySelector(`[data-x="${dataX - 1}"][data-y="${dataY + i}"]`).classList.remove('blind-spot');
      }
    }
    //корабль
    for (let i = 0; i < n; i++) {
      userField.querySelector(`[data-x="${dataX}"][data-y="${dataY + i}"]`).classList.remove('deployment-ships');
    }
  }
}

function startDragShip(event) {
  shipDrag = event.target;
  setTimeout(() => {
    shipDrag.classList.add('drag');
  }, 0);

  if (shipDrag.closest(".deployment-ships") && shipDrag.classList.contains('four-deck')) {
    removeClassShipLocations(shipDrag, 4)
  }

  if (shipDrag.closest(".deployment-ships") && shipDrag.classList.contains('three-deck')) {
    removeClassShipLocations(shipDrag, 3)
  }

  if (shipDrag.closest(".deployment-ships") && shipDrag.classList.contains('two-deck')) {
    removeClassShipLocations(shipDrag, 2)
  }

  if (shipDrag.closest(".deployment-ships") && shipDrag.classList.contains('one-deck')) {
    removeClassShipLocations(shipDrag, 1)
  }
}

function endDragShip(event) {
  event.target.classList.remove('drag');
}

let prevTd; //@ предыдущая яйчейка 

function shipOverField(event) {
  userField.classList.add('hover-user-field');
  if (event.target.dataset.x) {
    event.target.classList.add('hover-field-td');
  }
  if (prevTd) {
    prevTd.classList.remove('hover-field-td');
  }

  prevTd = event.target; //@ смена яйчейки 
  //console.log(prevTd);
}

function dropAllowed(event) {
  event.preventDefault();
}

//@ сброс корбля
function dropShip(event) {
  userField.classList.remove('hover-user-field');
  //console.log(event.target, 'яйчейка сброса корбля');
  let cellDropShip = event.target;
  cellDropShip.classList.remove('hover-field-td');

  if (cellDropShip.classList.contains('blind-spot') || cellDropShip.classList.contains('deployment-ships')) {
    return false
  }

  if (shipDrag.classList.contains('four-deck')) {
    addClassShipLocations(shipDrag, 4);
  }

  if (shipDrag.classList.contains('three-deck')) {
    addClassShipLocations(shipDrag, 3);
  }

  if (shipDrag.classList.contains('two-deck')) {
    addClassShipLocations(shipDrag, 2);
  }

  if (shipDrag.classList.contains('one-deck')) {
    addClassShipLocations(shipDrag, 1);
  }

  event.target.append(shipDrag);

}

ships.forEach(ship => {
  ship.addEventListener('dragstart', startDragShip);
  ship.addEventListener('dragend', endDragShip);
})

/* Поворт корабля */
ships.forEach(ship => {

  ship.addEventListener('dblclick', () => {
    if (ship.classList.contains('four-deck')) {
      ship.classList.toggle('reverse-four-deck');
      ship.classList.toggle('reverse');
      //turningShipField(ship, 4);
    }
    if (ship.classList.contains('three-deck')) {
      ship.classList.toggle('reverse-three-deck');
      ship.classList.toggle('reverse');
      //turningShipField(ship, 3);
    }
    if (ship.classList.contains('two-deck')) {
      ship.classList.toggle('reverse-two-deck');
      ship.classList.toggle('reverse');
      //turningShipField(ship, 2);
    }
  })
})

userField.addEventListener('dragenter', shipOverField);
userField.addEventListener('dragover', dropAllowed);
userField.addEventListener('drop', dropShip);

userField.append(userTable);

// Рандомная растановка
const btnRandom = document.querySelector('.btn__random');
function random(field, numberDecks, horizontallyY, horizontallyX, verticallyY, verticallyX, decks) {

  let horizontallyVertically = Math.floor(Math.random() * 2);

  function randomNumbers(max) {
    return Math.floor((Math.random() * max) + 1)
  }

  if (horizontallyVertically === 0) {

    while (numberDecks > 0) {
      fourDeckDataY = randomNumbers(horizontallyY);
      fourDeckDataX = randomNumbers(horizontallyX);

      for (let i = -1; i <= decks; i++) {
        console.log(fourDeckDataX + i);
        if (field.querySelector(`[data-x="${fourDeckDataX + i}"][data-y="${fourDeckDataY - 1}"]`) && field.querySelector(`[data-x="${fourDeckDataX + i}"][data-y="${fourDeckDataY - 1}"]`).classList.contains('deployment-ships')) {
          fourDeckDataY = randomNumbers(horizontallyY);
          fourDeckDataX = randomNumbers(horizontallyX);
          i = -2;

          continue;
        }
        if (field.querySelector(`[data-x="${fourDeckDataX + i}"][data-y="${fourDeckDataY}"]`) && field.querySelector(`[data-x="${fourDeckDataX + i}"][data-y="${fourDeckDataY}"]`).classList.contains('deployment-ships')) {
          fourDeckDataY = randomNumbers(horizontallyY);
          fourDeckDataX = randomNumbers(horizontallyX);
          i = -2;

          continue;
        }
        if (field.querySelector(`[data-x="${fourDeckDataX + i}"][data-y="${fourDeckDataY + 1}"]`) && field.querySelector(`[data-x="${fourDeckDataX + i}"][data-y="${fourDeckDataY + 1}"]`).classList.contains('deployment-ships')) {
          fourDeckDataY = randomNumbers(horizontallyY);
          fourDeckDataX = randomNumbers(horizontallyX);
          i = -2;

          continue;
        }
      }

      for (let i = 0; i < decks; i++) {
        field.querySelector(`[data-x="${fourDeckDataX + i}"][data-y="${fourDeckDataY}"]`).classList.add('deployment-ships');
      }
      numberDecks--
    }
  }

  if (horizontallyVertically === 1) {

    let fourDeckDataY = randomNumbers(verticallyY);
    let fourDeckDataX = randomNumbers(verticallyX);

    while (numberDecks > 0) {

      for (let i = -1; i <= decks; i++) {
        if (field.querySelector(`[data-x="${fourDeckDataX + 1}"][data-y="${fourDeckDataY + i}"]`) && field.querySelector(`[data-x="${fourDeckDataX + 1}"][data-y="${fourDeckDataY + i}"]`).classList.contains('deployment-ships')) {
          fourDeckDataY = randomNumbers(horizontallyY);
          fourDeckDataX = randomNumbers(horizontallyX);
          i = -2;

          continue;
        }
        if (field.querySelector(`[data-x="${fourDeckDataX}"][data-y="${fourDeckDataY + i}"]`) && field.querySelector(`[data-x="${fourDeckDataX}"][data-y="${fourDeckDataY + i}"]`).classList.contains('deployment-ships')) {
          fourDeckDataY = randomNumbers(horizontallyY);
          fourDeckDataX = randomNumbers(horizontallyX);
          i = -2;

          continue;
        }
        if (field.querySelector(`[data-x="${fourDeckDataX - 1}"][data-y="${fourDeckDataY + i}"]`) && field.querySelector(`[data-x="${fourDeckDataX - 1}"][data-y="${fourDeckDataY + i}"]`).classList.contains('deployment-ships')) {
          fourDeckDataY = randomNumbers(horizontallyY);
          fourDeckDataX = randomNumbers(horizontallyX);
          i = -2;

          continue;
        }
      }
      for (let i = 0; i < decks; i++) {
        field.querySelector(`[data-x="${fourDeckDataX}"][data-y="${fourDeckDataY + i}"]`).classList.add('deployment-ships');
      }
      numberDecks--
    }
  }
}

function startRandom() {
  const userTdAll = userField.querySelectorAll('td');
  userTdAll.forEach(td => td.classList.remove('deployment-ships'));

  random(userField, 1, 10, 7, 7, 10, 4);
  random(userField, 2, 10, 8, 8, 10, 3);
  random(userField, 3, 10, 9, 9, 10, 2);
  random(userField, 4, 10, 10, 10, 10, 1);
}

function startBattle() {
  const compTdAll = compField.querySelectorAll('td');
  compTdAll.forEach(td => td.classList.remove('deployment-ships'));

  random(compField, 1, 10, 7, 7, 10, 4);
  random(compField, 2, 10, 8, 8, 10, 3);
  random(compField, 3, 10, 9, 9, 10, 2);
  random(compField, 4, 10, 10, 10, 10, 1);
}

const btnStartBattle = document.querySelector('.btn__battle');

btnRandom.addEventListener('click', startRandom);
btnStartBattle.addEventListener('click', startBattle);