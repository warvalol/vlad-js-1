const pricePerDroid = 3000;
let credits = 23580;

let message;

let shoppingCart = prompt("Сколько, Вы, хотите купить ремонтных дроидов?");

let totalPrice;
totalPrice = shoppingCart * pricePerDroid;

if (shoppingCart === null) {
  message = "Отменено пользователем!";
  console.log(message);
} else if (totalPrice <= credits) {
  message = `Вы купили ${shoppingCart} дроидов, на счету осталось ${(credits = credits - totalPrice)} кредитов`;
  console.log(message);
} else if (totalPrice > credits) {
  message = "Недостаточно средств на счету!";
  console.log(message);
}
