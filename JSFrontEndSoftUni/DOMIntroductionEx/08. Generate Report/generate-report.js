function solve() {
    const outputEl = document.querySelector('#output');
    
    const tableHeadRow = document.querySelector('table thead tr');
    const tableBodyRows = document.querySelectorAll('table tbody tr');

    const checkedInputElements = [...tableHeadRow.children]
        .map((th, i) => ({ el: th.children[0], name: th.children[0].getAttribute('name'), index: i }))
        .filter(object => object.el.checked);

    const outputData = [...tableBodyRows]
        .map(row => {
            return checkedInputElements.reduce((acc, input) => {
                acc[input.name] = row.children[input.index].textContent;
                return acc;
            }, {})
        });
    
    outputEl.value = JSON.stringify(outputData);
}