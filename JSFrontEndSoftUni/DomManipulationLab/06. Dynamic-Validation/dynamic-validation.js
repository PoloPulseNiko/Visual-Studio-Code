document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const emailInput = document.getElementById('email');
    
    emailInput.addEventListener('change', () => {
        const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if (emailRegex.test(emailInput.value)) {
            emailInput.classList.remove('error');
        } else {
            emailInput.classList.add('error');
        }
    });
}
