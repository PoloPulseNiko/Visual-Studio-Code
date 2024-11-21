function solve() {
  const inputEl = document.querySelector('#input');
  const outputEl = document.querySelector('#output');
  const sentences = inputEl.value.split('. ');
  const sentencesPerParagraph = 3;
  const numberOfParagraphs = Math.ceil(sentences.length / sentencesPerParagraph);
  let output = ''
  for(let i = 0; i < numberOfParagraphs; i++){
    const start = i * sentencesPerParagraph;
    const end = start + sentencesPerParagraph;
    output += '<p>';
    output += sentences.slice(start, end).join('. ');
    output += '</p>';
  }
  outputEl.innerHTML = output;
}