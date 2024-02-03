document.addEventListener('DOMContentLoaded', function () {
    const amount = document.getElementById("amount")
    const currency = document.getElementById("currency")
    const convert = document.getElementById("convert")
    const result = document.getElementById("result")

    const API_KEY = "HYGY2cz08gKZ60704/x3rg==8LkLqGiVtG8C24FX"
    const apiUrl = 'https://api.api-ninjas.com/v1/exchangerate?pair=USD_'

    convert.addEventListener('click', () => {
        const amountTotal = amount.value;  // Use .value to get the input value
        const currencyTotal = currency.value;  // Use .value to get the selected value
        const url = apiUrl + currencyTotal;

        fetch(url, {
            headers: {
                'x-API-KEY': API_KEY
            }
        })
            .then(response => response.json())
            .then(data => {
                const rate = data.exchange_rate;
                const result_price = amountTotal * rate;
                result.innerHTML = `${amountTotal} ${currencyTotal} = ${result_price.toFixed(2)} USD`;  // Use the correct variables
            })
            .catch(error => {
                console.error("Request failed", error);
                result.innerHTML = "An error occurred"
            })
    })
});
