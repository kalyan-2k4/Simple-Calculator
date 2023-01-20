const NUMBER1 = document.getElementById("number1");
const NUMBER2 = document.getElementById("number2");
const RESULT = document.getElementById("result");
const ERROR = document.getElementById("error");
const OPERATOR_BTNS = document.querySelectorAll(".operators");

OPERATOR_BTNS.forEach(btn => {
    btn.addEventListener("click", calculate);
});

function calculate() {
    let number1 = Number(NUMBER1.value);
    let number2 = Number(NUMBER2.value);
    let operator = this.dataset.operator;
    let result;

    if ((isNaN(number1) || number1 == "") || (isNaN(number2) || number2 == "")) {
        ERROR.style.display = "block";
        return;
    } else {
        ERROR.style.display = "none";
    }

    switch (operator) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 *
                number2;
            break;
        case "/":
            result = number1 / number2;
            break;
        case "%":
            result = number1 % number2;
            break;
        default:
            console.log("Invalid operator");
    }
    RESULT.value = result;
}