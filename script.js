const inputValue = document.getElementById('input-val');
const outputValue = document.getElementById('output-val');
const submitBtn = document.getElementById('submit-btn');


//Length Conversion



//Area Conversion



//Volume Conversion



//Time Conversion



//Temperature Conversion

const inputUnit = document.getElementById('input-unit');
const outputUnit = document.getElementById('output-unit');

function convertUnit(event) {
    event.preventDefault();
    console.log(inputValue.value, inputUnit.value, outputUnit.value);
    const outPut = convertTemp(inputValue.value, inputUnit.value, outputUnit.value);
    console.log(outPut);
    outputValue.value = outPut;
}

function convertTemp(temp, oldUnit, newUnit) {
    if (oldUnit === newUnit) {
        return temp;
    }

    if (oldUnit === 'C') {
        if (newUnit === 'F') {
            return (temp * (9.5)) * 32;
        } else {
            return temp + 273.15;
        }
    } else if (oldUnit === 'F') {
        if (newUnit === 'C') {
            return (temp - 32) * (5/9);
        } else {
            return (temp - 32) * (5/9) + 273.15;
        }
    } else {
        if (newUnit === 'F') {
            return (temp - 273.15) * (9/5) + 32;
        } else {
            return temp - 273.15;
        }
    }
}

submitBtn.addEventListener('click', convertUnit)