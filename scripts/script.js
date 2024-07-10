document.addEventListener('DOMContentLoaded', () => {
    
    const converterForm = document.getElementById('converter-form');
    const resultDiv = document.getElementById('result');

    if (converterForm) {
        converterForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const amount = parseFloat(document.getElementById('amount').value);
            const fromCurrency = document.getElementById('from-currency').value;
            const toCurrency = document.getElementById('to-currency').value;

            const exchangeRates = {
                'USD': { 'EUR': 0.85, 'HRK': 6.3 },
                'EUR': { 'USD': 1.18, 'HRK': 7.5 },
                'HRK': { 'USD': 0.16, 'EUR': 0.13 }
            };

            if (isNaN(amount) || amount <= 0) {
                resultDiv.textContent = 'Unesite ispravan iznos.';
                return;
            }

            if (fromCurrency === toCurrency) {
                resultDiv.textContent = `Pretvoreni iznos: ${amount.toFixed(2)} ${toCurrency}`;
            } else {
                const rate = exchangeRates[fromCurrency][toCurrency];
                const convertedAmount = amount * rate;
                resultDiv.textContent = `Pretvoreni iznos: ${convertedAmount.toFixed(2)} ${toCurrency}`;
            }
        });
    }

    
   
        const contactForm = document.getElementById('contact-form');
        const formResultDiv = document.getElementById('form-result');
    
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
    
                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const message = document.getElementById('message').value.trim();
    
                if (!name) {
                    formResultDiv.textContent = 'Ime je obavezno.';
                    return;
                }
    
                if (!email) {
                    formResultDiv.textContent = 'Email je obavezan.';
                    return;
                }
    
                if (!validateEmail(email)) {
                    formResultDiv.textContent = 'Unesite ispravnu email adresu.';
                    return;
                }
    
                if (!message) {
                    formResultDiv.textContent = 'Poruka je obavezna.';
                    return;
                }
    
                formResultDiv.textContent = 'Poruka je uspješno poslana!';
                contactForm.reset();
            });
        }
    
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }

    
});
