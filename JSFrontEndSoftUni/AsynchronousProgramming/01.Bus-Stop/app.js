function getInfo() {
    const stopNameEl = document.getElementById('stopName');
    const busesEl = document.getElementById('buses');
    stopNameEl.textContent = '';
    busesEl.innerHTML = '';

    const stopId = document.getElementById('stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Stop ID not found');
            }
            return response.json();
        })
        .then((data) => {
            stopNameEl.textContent = data.name;

            Object.entries(data.buses).forEach(([busId, time]) => {
                const listItem = document.createElement('li');
                listItem.textContent = `Bus ${busId} arrives in ${time} minutes`;
                busesEl.appendChild(listItem);
            });
        })
        .catch(() => {
            stopNameEl.textContent = 'Error';
        });
}
