let food = ["Machboos", "Spaghetti", "Kebap", "French Omelete"];

let choose = prompt("What is your orders number???");


switch (choose) {
    case "1":
        console.log(food[0]);
        break;
        
    case "2":
        console.log(food[1]);
        break;

    case "3":
        console.log(food[2]);
        break;

    case "4":
        console.log(food[3]);
        break;

    default:
        console.log("Unfortunately, we do not serve your order")
}

 let number1 = parseInt(prompt("Choose your first number"))
 let number2 = parseInt(prompt("Choose your second number"))
 let calcmethod = prompt("Enter your calculation method ( +, *, -, /)")

if (number1 && number2) {
    switch (calcmethod) {
        case "*":
            console.log(number1 * number2);
            break;
            
        case "+":
            console.log(number1 + number2);
            break;

        case "-":
            console.log(number1 - number2);
            break;

        case "/":
            console.log(number1 / number2);
            break;

        default:
            console.log("Error");
    }
}else {
    console.log("It's not a number")
}

let age = "15";
let qage = parseInt(prompt("How old are you?"));

if  (qage > 3 && qage < 6) {
    console.log("kindergarten");
}

if  (qage > 5 && qage < 11) {
    console.log("primary school");
}

if  (qage > 10 && qage < age) {
    console.log("elementary school");
}

if  (qage > 14 && qage < 18) {
    console.log("secondary school");
}

if  (qage > 17 && qage < 24) {
    console.log("university")
}


