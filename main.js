'use strict';

function gameNumber (num) {
  function qwe () {
    const a = +prompt('Угадай число от 1 до 100')
    
  if (a == 0) {
      return alert('Игра окончена 💩')
    } 
    if (a < num) {
     alert('Загаданное число больше 😭')
     qwe()
   }
   if (isNaN(a)) {
    alert('Введи число!')
    qwe()
   }
   if (a > num) {
     alert('Загаданное число меньше 😬')
     qwe()
   } 
   if (a == num) {
     alert('🎉 Поздравляю, Вы угадали!!! 🎉')
   } 

  }

  qwe()
}

gameNumber(Math.floor(Math.random() * 101))