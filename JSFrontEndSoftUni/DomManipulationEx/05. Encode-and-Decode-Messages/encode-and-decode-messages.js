document.addEventListener('DOMContentLoaded', solve);

function solve() {
    document.querySelector('#encode button').addEventListener('click', (e) => {
        e.preventDefault();

        const inputEl = document.querySelector('#encode textarea');
        const message = inputEl.value;
        const encodedMessage = message.split('').map(ch => String.fromCharCode(ch.charCodeAt() + 1)).join('');
        document.querySelector('#decode textarea').value = encodedMessage;
        inputEl.value = '';
    });

    document.querySelector('#decode button').addEventListener('click', (e) => {
        e.preventDefault();

        const outputEl = document.querySelector('#decode textarea');
        const message = outputEl.value;
        const decodedMessage = message.split('').map(ch => String.fromCharCode(ch.charCodeAt() - 1)).join('');
        outputEl.value = decodedMessage;
    });
}
