function solve() {
  const textFieldEl = document.querySelector('#text').value.toLowerCase().split(' ')
  const conventionEl = document.querySelector('#naming-convention').value.toLowerCase().trim();
  const resultEl = document.querySelector('#result');
  function capitaliseWord(word) {
    return word[0].toUpperCase() + word.slice(1);
}

switch (conventionEl) {
    case 'camel case':
        resultEl.textContent = textFieldEl[0] + textFieldEl.slice(1).map(capitaliseWord).join('');
        break;
    case 'pascal case':
        resultEl.textContent = textFieldEl.map(capitaliseWord).join('');
        break;
    default:
        resultEl.textContent = 'Error!';
}
}