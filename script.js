const decimalInput = document.getElementById('decimalInput');
const conversionType = document.getElementById('conversionType');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');

// Event listener for the convert button
convertBtn.addEventListener('click', () => {
    const decimalValue = parseFloat(decimalInput.value);
    const selectedConversion = conversionType.value;
    let convertedValue = '';

    if (isNaN(decimalValue)) {
        resultDiv.innerText = 'Please enter a valid decimal number.';
        return;
    }

    if (selectedConversion === 'binary') {
        convertedValue = decimalValue.toString(2);
    } else if (selectedConversion === 'octal') {
        convertedValue = decimalValue.toString(8);
    } else if (selectedConversion === 'hexadecimal') {
        convertedValue = decimalValue.toString(16).toUpperCase();
    }

    resultDiv.innerText = `Result: ${convertedValue}`;
});