// Поле боя
const table = document.createElement("table");
table.classList.add("battlefield-table");

for (let y = 0; y < 10; y++) {
  const tr = document.createElement("tr");
  tr.dataset.y = y + 1;

  for (let x = 0; x < 10; x++) {
    const td = document.createElement("td");
    td.classList.add("field-td");
    td.dataset.x = x + 1;
    td.dataset.y = y + 1;

    tr.append(td);
  }

  table.append(tr);
}

// const td = document.querySelectorAll('td')

// Матрица боя

const btnStartBattle = document.querySelector('.btn');
const battlefieldTable = document.querySelector('.battlefield-table');

const matrixBattleField = [];

function startBattleMatrix() {
  for (let i = 0; i < 10; i++) {
    matrixBattleField[i] = new Array;
    for (let j = 0; j < 10; j++) {
      matrixBattleField[i][j] = 1
    }
  }
  console.log(matrixBattleField);
}

btnStartBattle.addEventListener('click', startBattleMatrix);
/*! ---  !*/

const ships = document.querySelectorAll('.ship');
const userField = document.querySelector('.user-field');
const hangarShips = document.querySelector('.hangar-ships');

let shipDrag; //@перетягиваемый корабль

function startDragShip(event) {
  shipDrag = event.target;
  setTimeout(() => {
    shipDrag.classList.add('drag');
  }, 0);
  if (shipDrag.closest(".work") && shipDrag.classList.contains('reverce') && shipDrag.classList.contains('four-deck')) {
    let cellShipRelocation = shipDrag.closest(".work");
    cellShipRelocation.classList.remove('work');

    let cellRelocationCoordinates = +cellShipRelocation.dataset.x;
    let nexCell = cellShipRelocation.nextSibling;

    for (let i = cellRelocationCoordinates; i < cellRelocationCoordinates + 3; i++) {
      nexCell.classList.remove('work');
      nexCell = nexCell.nextSibling;
    }

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

function dropShip(event) {
  userField.classList.remove('hover-user-field');
  //console.log(event.target);
  let cellDropShip = event.target;
  cellDropShip.classList.remove('hover-field-td');

  if (shipDrag.classList.contains('reverce') && shipDrag.classList.contains('four-deck')) {
    cellDropShip.classList.add('work')

    let a = +prevTd.dataset.x;
    let nexCell = cellDropShip.nextSibling;

    for (let i = a; i < a + 3; i++) {
      nexCell.classList.add('work');
      nexCell = nexCell.nextSibling;
    }
  }

  event.target.append(shipDrag);
}

ships.forEach(ship => {
  ship.addEventListener('dragstart', startDragShip);
  ship.addEventListener('dragend', endDragShip);
})

ships.forEach(ship => {
  ship.addEventListener('dblclick', () => {
    if (ship.classList.contains('four-deck')) {
      ship.classList.toggle('reverce-four-deck', 'reverce');
      ship.classList.toggle('reverce');
    }
    if (ship.classList.contains('three-deck')) {
      ship.classList.toggle('reverce-three-deck');
      ship.classList.toggle('reverce');
    }
    if (ship.classList.contains('two-deck')) {
      ship.classList.toggle('reverce-two-deck');
      ship.classList.toggle('reverce');
    }
  })
})

userField.addEventListener('dragenter', shipOverField);
userField.addEventListener('dragover', dropAllowed);
userField.addEventListener('drop', dropShip);

userField.append(table);
