const convertButton = document.querySelector('.convert-button');
const currencySelector = document.querySelector('.currency-selector');

function valueConvert(){
    const valueInput = document.querySelector('.currencyInput').value;

    const dolarToday = 5.25;
    const euroToday = 6.20;

    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValueConverted = document.querySelector('.currency-value-converted')

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valueInput);

    if(currencySelector.value === 'dolar'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valueInput/dolarToday);

     
        
    }
    if(currencySelector.value === 'euro'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valueInput/euroToday);
    }

}

function currencySwitched(){
    const currencyImg = document.querySelector('.currency-image');
    const currencyName = document.getElementById('currency-name-converted')

    if (currencySelector.value == 'dolar'){
        currencyImg.src = './assets/dolar.png';
        currencyName.innerHTML = 'Dólar Americano';
    }

    if (currencySelector.value == 'euro'){
    currencyImg.src = "./assets/euro.png";
    currencyName.innerHTML = 'Euro';
    }   

    valueConvert();

}

currencySelector.addEventListener('change', currencySwitched);
convertButton.addEventListener('click', valueConvert);