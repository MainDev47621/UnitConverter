const inputValue = document.getElementById('input-val');
const outputValue = document.getElementById('output-val');
const submitBtn = document.getElementById('submit-btn');

const inputUnit = document.getElementById('input-unit');
const outputUnit = document.getElementById('output-unit');
const category = document.getElementById('category');


//Set up correct input and output unit option based on category selected

const setUpUnits = (units) => {
    inputUnit.innerHTML = '';
    outputUnit.innerHTML = '';
    [inputUnit, outputUnit].forEach(field => {
        for (let unit in units) {
            const option = document.createElement('option');
            option.innerHTML = unit;
            option.value = units[unit];
            field.appendChild(option);
        }
    });
}

const setCategory = () => {
    const category = document.getElementById('category').value;
    switch (category) {
        case 'length':
            setUpUnits({'Kilometer' : 'kilometer', 'Meter' : 'meter', 'Centimeter' : 'centimeter', 'Millimeter' : 'millimeter'});
            break;
        case 'temp':
            setUpUnits({'Celcius' : 'C', 'Fahrenheit' : 'F', 'Kelvin' : 'K'});
            break;
    }
}

category.addEventListener('change', setCategory);

setCategory();

const convertUnit = (event) => {
    event.preventDefault();
    console.log(inputValue.value, inputUnit.value, outputUnit.value);
    let outPut;
    const category = document.getElementById('category').value;
    switch (category) {
        case 'length':
            console.log('convertUnits');
            outPut = convertLength(inputValue.value, inputUnit.value, outputUnit.value);
            break;
        case 'temp':
            outPut = convertTemp(inputValue.value, inputUnit.value, outputUnit.value);
            break;
    }
    // console.log(outPut);
    outputValue.value = outPut;
}


//Length Conversion

const metricPrefixes = {
    'kilo': 1000,
    'unit': 1,
    'centi': 0.01,
    'milli': 0.001
}

// const convCoeffs = {
//     feetToMiles
// }

const metricUnit = unit => {
    if (unit === 'meter') {
        return 'unit';
    } else {
        return unit.slice(0, -5);
    }
}

const convertMeters = (len, oldUnit, newUnit) => {
    console.log('convertMeters');
    console.log(oldUnit, newUnit);
    oldUnit = metricUnit(oldUnit);
    newUnit = metricUnit(newUnit);
    console.log(oldUnit, newUnit);
    console.log(metricPrefixes[oldUnit], metricPrefixes[newUnit]);
    console.log(len * (metricPrefixes[oldUnit] / metricPrefixes[newUnit]));
    return len * (metricPrefixes[oldUnit] / metricPrefixes[newUnit]);
}

const convertLengthHelper = (len, oldUnit, newUnit) => {
    // if ()
}

const convertLength = (len, oldUnit, newUnit) => {
    console.log('convertLengthOuter');
    console.log(oldUnit, newUnit);
    if (oldUnit.includes('meter') && oldUnit.includes('meter')) {
        console.log('convertLengthInner');
        return convertMeters(len, oldUnit, newUnit);
    } else {
        return convertLengthHelper(len, oldUnit, newUnit);
    }
}


//Area Conversion



//Volume Conversion



//Time Conversion



//Temperature Conversion

const convertTemp = (temp, oldUnit, newUnit) => {
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