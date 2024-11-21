function editElement(element, match, replacer) {
    let text = element.textContent;
    let regex = new RegExp(match, 'g');
    text = text.replace(regex, replacer);
    element.textContent = text; // I'm Batman
}
