function focused() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            const parentDiv = input.parentElement;
            parentDiv.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            const parentDiv = input.parentElement;
            parentDiv.classList.remove('focused');
        });
    });
}
