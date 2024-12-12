const baseURL = `http://localhost:3030/jsonstore/matches`;
const endPoints = {
    update: (id) => `${baseURL}/${id}`,
    delete: (id) => `${baseURL}/${id}`,
};

const hostEl = document.getElementById("host");
const guestEl = document.getElementById("guest");
const scoreEl = document.getElementById("score");

const matchesListEl = document.getElementById("matches");
const list = document.getElementById('list');

const addBtnEl = document.getElementById("add-match");
const editBtnEl = document.getElementById("edit-match");
const loadBtnEl = document.getElementById("load-matches");

let selectedTaskId = null;

function attachEvents() {
    loadBtnEl.addEventListener('click', loadBoardEventHandler);
    addBtnEl.addEventListener('click', createTaskEventHandler);
    editBtnEl.addEventListener('click', editTaskEventHandler);
}

function getElementByHost(host) {
    return fetch(baseURL)
        .then(res => res.json())
        .then(res => Object.entries(res).find(e => e[1].host == host)[1]._id);
}

async function loadBoardEventHandler() {
    clearAllSections();
    try {
        const res = await fetch(baseURL);
        const allMatches = await res.json();
        Object.values(allMatches).forEach((host) => {
            const containerLi = document.createElement('li');
            containerLi.className = 'match';

            const contentDiv = document.createElement('div');
            contentDiv.className = 'info';

            const hostElementP = document.createElement('p');
            hostElementP.textContent = host.host;

            const guestElementP = document.createElement('p');
            guestElementP.textContent = host.guest;

            const scoreElementP = document.createElement('p');
            scoreElementP.textContent = host.score;
           
            const buttonsContainerDiv = document.createElement('div'); 
            buttonsContainerDiv.className = 'btn-wrapper';

            const changeBtnEl = document.createElement('button');
            changeBtnEl.className = 'change-btn';
            changeBtnEl.textContent = 'Change';

            const doneBtnEl = document.createElement('button');
            doneBtnEl.className = 'delete-btn';
            doneBtnEl.textContent = 'Delete';

            buttonsContainerDiv.appendChild(changeBtnEl); 
            buttonsContainerDiv.appendChild(doneBtnEl);

            contentDiv.appendChild(hostElementP);
            contentDiv.appendChild(scoreElementP);
            contentDiv.appendChild(guestElementP);
            
            containerLi.appendChild(contentDiv);
            containerLi.appendChild(buttonsContainerDiv); 

            list.appendChild(containerLi);
        });
        attachEventListeners();
    } catch (err) {
        console.error(err);
    }
}

function attachEventListeners() {
    const changeButtons = document.querySelectorAll('.change-btn');
    const doneButtons = document.querySelectorAll('.delete-btn');

    changeButtons.forEach((changeButton) => {
        changeButton.addEventListener('click', (event) => {
            const taskEl = event.target.closest('.match');
            const host = taskEl.querySelector('p').textContent;
            const score = taskEl.querySelector('p:nth-child(2)').textContent;
            const guest = taskEl.querySelector('p:nth-child(3)').textContent;
            editTask(host, guest, score);
            enableEditBtn();
        });
    });

    doneButtons.forEach((doneButton) => {
        doneButton.addEventListener('click', (event) => {
            const taskElement = event.target.closest('.match');
            deleteTask(taskElement);
        });
    });
}

function enableEditBtn() {
    addBtnEl.disabled = true;
    editBtnEl.disabled = false;
}

function enableAddBtn() {
    addBtnEl.disabled = false;
    editBtnEl.disabled = true;
}

function createTaskEventHandler(ev) {
    ev.preventDefault();
    if (hostEl.value !== '' && scoreEl.value !== '' && guestEl.value !== '') {
        const headers = {
            method: 'POST',
            body: JSON.stringify({
                host: hostEl.value,
                score: scoreEl.value,
                guest: guestEl.value,
            }),
        };

        fetch(baseURL, headers)
            .then(loadBoardEventHandler)
            .catch(console.error);

        clearAllInputs();
    }
}

async function editTask(host, guest, score) {
    selectedTaskId = await getElementByHost(host);
    hostEl.value = host;
    guestEl.value = guest;
    scoreEl.value = score;
}

function editTaskEventHandler(ev) {
    ev.preventDefault();
    const data = {
        host: hostEl.value,
        score: scoreEl.value,
        guest: guestEl.value,
        _id: selectedTaskId,
    };

    fetch(endPoints.update(data._id), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(() => {
            clearAllInputs();
            loadBoardEventHandler();
            selectedTaskId = null;
            enableAddBtn();
        })
        .catch(console.error);
}

function deleteTask(taskEl) {
    const host = taskEl.querySelector('p').textContent;
    getElementByHost(host)
        .then((id) =>
            fetch(endPoints.delete(id), {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            })
        )
        .then(() => {
            clearAllSections();
            loadBoardEventHandler();
            selectedTaskId = null;
            enableAddBtn();
        })
        .catch(console.error);
}

function clearAllSections() {
    list.innerHTML = '';
}

function clearAllInputs() {
    hostEl.value = '';
    scoreEl.value = '';
    guestEl.value = '';
}

attachEvents();
