const ships = document.querySelectorAll('.ship');
const userField = document.querySelector('.user-field');
const hangarShips = document.querySelector('.hangar-ships');

const matrixBattleField = [];

let shipDrag;

function getDragstartShip(event) {
  shipDrag = event.target;
  setTimeout(() => {
    shipDrag.classList.add('drag');
  }, 0);
}

function getDragendShip(event) {
  event.target.classList.remove('drag');
}

function shipOverField(event) {
  userField.classList.add('hover-user-field');
  if (event.target.dataset.x) {
    event.target.classList.add('hover-field-td');
  }

  // console.log('event');
}

function dropAllowed(event) {
  event.preventDefault();
}

function dropShip(event) {
  userField.classList.remove('hover-user-field');
  // console.log(event.target);
  //console.log('$$$$$', event.target.dataset.x, event.target.dataset.y);

  /***заготовка для соприкасается ли каоабль с другим уже стоящим****/
  // if (+event.target.dataset.x === 4, +event.target.dataset.y === 4) {
  //   console.log('сработало');
  //   hangarShips.append(shipDrag)
  // }
  /***заготовка для как расположен карабль при сбросе, горизонтально или вертикальео****/
  // if (shipDrag.classList.contains('reverce')) {
  //   console.log(1);
  // }
  // if (!shipDrag.classList.contains('reverce')) {
  //   console.log(2);
  // }

  event.target.append(shipDrag);

}

ships.forEach(ship => {
  ship.addEventListener('dragstart', getDragstartShip);
  ship.addEventListener('dragend', getDragendShip);
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


// Матрица и поле боя
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

userField.append(table);
