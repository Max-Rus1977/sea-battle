
// if (shipDrag.classList.contains('turning-ship-js')) {
//   let shipStyle = getComputedStyle(shipDrag);
//   shipDrag.style.width = shipStyle.height;
//   shipDrag.style.height = '30px';
//   shipDrag.classList.remove('turning-ship-js');
// }


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


// 
//console.log(a, '####');

//console.log(table.querySelector('data-x = [+a + +1}]'))

// console.log('start', 'Y:', fourDeckDataY, '/', 'X:', fourDeckDataX);
// console.log('Y:', fourDeckDataY, '/', 'X:', fourDeckDataX + i, 'in if');
// console.log(userField.querySelector(`[data-x="${fourDeckDataX + i}"][data-y="${fourDeckDataY}"]`), '&&&&');
// console.log('i:', i);
// console.log('Y:', fourDeckDataY, '/', 'X:', fourDeckDataX, 'переписвоение');
// console.log('i =', i);
// console.log(userField.querySelector(`[data-x="${fourDeckDataX + i}"][data-y="${fourDeckDataY}"]`), '!!!');
// console.log('прошёл, добавляем класс');

// Матрица боя
//const btnStartBattle = document.querySelector('.btn__battle');
// const battlefieldTable = document.querySelector('.battlefield-table');

// const matrixBattleField = [];

// function startBattleMatrix() {
//   for (let i = 0; i < 10; i++) {
//     matrixBattleField[i] = new Array;
//     for (let j = 0; j < 10; j++) {
//       matrixBattleField[i][j] = 1
//     }
//   }
//   console.log(matrixBattleField);
// }
// for (let i = 0; i < 4; i++) {
//   console.log(i * 1);
// }

// if (field.querySelector(`[data-x="${dataX}"][data-y="${dataY + i * n}"]`) && field.querySelector(`[data-x="${dataX}"][data-y="${dataY + i * n}"]`).classList.contains('deployment-ships')) {
//   if (field.querySelector(`[data-x="${dataX + 1}"][data-y="${dataY + i * n}"]`)) {
//     field.querySelector(`[data-x="${dataX + 1}"][data-y="${dataY + i * n}"]`).classList.add('none-hit')
//   }
// }
// if (field.querySelector(`[data-x="${dataX}"][data-y="${dataY + i * n}"]`) && field.querySelector(`[data-x="${dataX}"][data-y="${dataY + i * n}"]`).classList.contains('deployment-ships')) {
//   if (field.querySelector(`[data-x="${dataX - 1}"][data-y="${dataY + i * n}"]`)) {
//     field.querySelector(`[data-x="${dataX - 1}"][data-y="${dataY + i * n}"]`).classList.add('none-hit')
//   }
// }

// Удаление классов коралбя
function removeClassShipLocations(ship, n) {
  let cellShipRelocation = ship.closest('.deployment-ships');
  let dataX = +cellShipRelocation.dataset.x;
  let dataY = +cellShipRelocation.dataset.y;

  if (ship.classList.contains('reverse')) {
    for (let i = 0; i < n; i++) {
      userField.querySelector(`[data-x="${dataX + i}"][data-y="${dataY}"]`).className = 'field-td';
    }
  }
  if (!ship.classList.contains('reverse')) {
    for (let i = 0; i < n; i++) {
      userField.querySelector(`[data-x="${dataX}"][data-y="${dataY + i}"]`).className = 'field-td';
    }
  }
}

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