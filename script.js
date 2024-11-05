document.addEventListener('DOMContentLoaded', () => {
    const inputTemp = document.getElementById('inputTemp');
    const inputUnit = document.getElementById('inputUnit');
    const outputTemp = document.getElementById('outputTemp');
    const outputUnit = document.getElementById('outputUnit');
    const swapBtn = document.getElementById('swapBtn');

    function convertTemperature(){
        const input = parseFloat(inputTemp.value);
        if(isNaN(input)){
            outputTemp.value = '';
            return;
        }
        let celsius;
        switch(inputUnit.value){
            case 'Celsius':
                celsius = input;
                break;
            case 'Fahrenheit':
                celsius = (input - 32) * 5/9;
                break;
            case 'Kelvin':
                celsius = input - 273.15;
                break;
        }

        let result;
        switch(outputUnit.value){
            case 'Celsius':
                result = celsius;
                break;
            case 'Fahrenheit':
                result = celsius * 9/5 + 32;
                break;
            case 'Kelvin':
                result = celsius + 273.15;
                break;
    }
    outputTemp.value = result.toFixed(2);
    }
    function swapUnits(){
        const tempInputValue = inputTemp.value;
        const tempInputUnit = inputUnit.value;

        inputTemp.value = outputTemp.value;
        outputTemp.value = tempInputValue;
        inputUnit.value = outputUnit.value;
        outputUnit.value = tempInputUnit;

        convertTemperature();
    }

    inputTemp.addEventListener('input', convertTemperature);
    inputUnit.addEventListener('change', convertTemperature);
    outputUnit.addEventListener('change', convertTemperature);
    swapBtn.addEventListener('click', swapUnits);
});