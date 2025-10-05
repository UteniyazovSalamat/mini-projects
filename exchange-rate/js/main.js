const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

const API_KEY = '376943f83501a4335339bddc';
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

async function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    try {
        const res = await fetch(`${BASE_URL}${currency_one}`);
        if (!res.ok) throw new Error('Error fetching data');

        const data = await res.json();
        if (data.result !== 'success') throw new Error('API returned an error');

        const rate = data.conversion_rates[currency_two];
        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    } catch (error) {
        rateEl.innerText = 'Failed to load data 😢';
        console.error(error);
    }
}

currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
});

calculate();
