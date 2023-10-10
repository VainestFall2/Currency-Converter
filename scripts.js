const convertButton = document.querySelector('.convert-button');
const currencySelector = document.querySelector('.currency-selector');

function valueConvert(){
    const valueInput = document.querySelector('.currencyInput').value;

    const dolarToday = 5.25;
    const euroToday = 6.20;
    const libraToday = 7.20;
    const bitcoinToday = 0.000021;

    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValueConverted = document.querySelector('.currency-value-converted')

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valueInput);

    if(currencySelector.value === 'dolar'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valueInput/dolarToday);

     
        
    }
    if(currencySelector.value === 'euro'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valueInput/euroToday);
    }
    if(currencySelector.value === 'libra'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(valueInput/libraToday);
    }
    if(currencySelector.value === 'bitcoin'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'BTC' }).format(valueInput/bitcoinToday);
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
    
    if (currencySelector.value == 'libra'){
        currencyImg.src = "./assets/libra.png";
        currencyName.innerHTML = 'Libra Esterlina';
    }

    if (currencySelector.value == 'bitcoin'){
        currencyImg.src = "./assets/bitcoin.png";
        currencyName.innerHTML = 'Bitcoin';
    }

    valueConvert();

}

currencySelector.addEventListener('change', currencySwitched);
convertButton.addEventListener('click', valueConvert);