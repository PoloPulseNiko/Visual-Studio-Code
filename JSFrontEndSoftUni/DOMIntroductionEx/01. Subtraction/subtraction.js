function subtract() {
    let firstNumberEl = document.getElementById('firstNumber').value;
    let secondNumberEl = document.getElementById('secondNumber').value;
    let resultEl = document.getElementById('result');
    resultEl.textContent = Number(firstNumberEl) - Number(secondNumberEl);
}