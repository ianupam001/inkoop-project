const inputField = document.getElementById("input-field");
const outputDiv = document.getElementById("output");
inputField.addEventListener("input", handleInput);

function handleInput() {
    const inputValue = parseInt(inputField.value);

    if (isNaN(inputValue) || inputValue < 0) {
        outputDiv.innerText = "Enter a positive value";
    } else if (inputValue % 2 === 0) {
        const nextEvenNumbers = [
            inputValue + 2,
            inputValue + 4,
            inputValue + 6,
        ];
        outputDiv.innerText = `Next 3 even numbers: ${nextEvenNumbers.join(
            ", "
        )}`;
    } else {
        const nextOddNumbers = [
            inputValue + 2,
            inputValue + 4,
            inputValue + 6,
        ];
        outputDiv.innerText = `Next 3 odd numbers: ${nextOddNumbers.join(
            ", "
        )}`;
    }
}