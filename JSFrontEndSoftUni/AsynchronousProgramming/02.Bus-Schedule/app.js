function solve() {
    let stopId = 'depot';
    let stopName = '';
    let url = `http://localhost:3030/jsonstore/bus/schedule/${stopId}`
    const infoEl = document.querySelector('.info');
    const departButtonEl = document.getElementById('depart');
    const arriveButtonEl = document.getElementById('arrive');

    function depart() {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Stop not found');
                }
                return response.json();
            })
            .then((data) => {
                stopName = data.name;
                stopId = data.next;

                infoEl.textContent = `Next stop ${stopName}`;
                departButtonEl.disabled = true;
                arriveButtonEl.disabled = false;
            })
            .catch((error) => {
                infoEl.textContent = 'Error';
                departButtonEl.disabled = true;
                arriveButtonEl.disabled = true;
            });
    }

    function arrive() {
        infoEl.textContent = `Arriving at ${stopName}`;

        departButtonEl.disabled = false;
        arriveButtonEl.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
