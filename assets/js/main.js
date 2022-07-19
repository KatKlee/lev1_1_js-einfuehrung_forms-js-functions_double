let resultNumber

const numberInput = document.getElementById('number')
const result = document.getElementById('result')

function doubleNumber() {
    resultNumber = Number(numberInput.value * 2)
    result.innerHTML = resultNumber
}
