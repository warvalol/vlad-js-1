let country;
let userInput = prompt(`Укажите страну доставки:`);

country = userInput;

console.log("userinput before: ", userInput);
const normolizedInput = userInput.toLowerCase();
console.log("userinput after: ", userInput);
console.log("normolizedInput: ", normolizedInput);
console.log(country === normolizedInput);


let price;
let message;

switch (normolizedInput) {
  case "китай":
    price = 100;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    alert(message);
    break;

  case "чили":
    price = 250;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    alert(message);
    break;

  case "австралия":
    price = 170;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    alert(message);
    break;

  case "индия":
    price = 80;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    alert(message);
    break;

  case "ямайка":
    price = 120;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    alert(message);
    break;

  default:
    alert("В вашей стране доставка не доступна");
}
