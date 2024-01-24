const firstNumber = document.getElementById('first-input-number');
const secondNumber = document.getElementById('second-input-number');
const operation = document.getElementById('operation');
const equals = document.getElementById('equal_button');

equals.addEventListener('click', () => {
    const firstValue = parseFloat(firstNumber.value);
    const secondValue = parseFloat(secondNumber.value);

    if (operation.value === 'plus') {
        const result = firstValue + secondValue;
        document.getElementById('result').innerHTML = result;
    } else if (operation.value === 'minus') {
        const result = firstValue - secondValue;
        document.getElementById('result').innerHTML = result;
    } else if (operation.value === 'multipl') {
        const result = firstValue * secondValue;
        document.getElementById('result').innerHTML = result;
    } else if (operation.value === 'division') {
        const result = firstValue / secondValue;
        document.getElementById('result').innerHTML = result;
    }
});