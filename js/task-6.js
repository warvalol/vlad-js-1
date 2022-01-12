// Алгоритм
// 1 - создать цикл который спрашивает пользователя ввести число
// 2 - если ввели null остановить
// 3 - если ввели не null преобразовать в число и добавить в total
// 4 - после цикла вывести общую сумму введенных чисел

let total = 0;

while (true) {
  let input = prompt("Введите число");

  if (input === null) {
    console.log("Отменено пользователем!");
    break;
  }

  input = Number(input); // если NaN

  const notANumber = Number.isNaN(input); // то это true (проверка на введенное число)

  if (notANumber) {
    console.log("Было введено не число, пропускаем текущую итерацию!");
    continue;
  }

  total += input;
}

console.log(`Общая сумма ${total}`);
