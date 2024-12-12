window.addEventListener("load", solve);

function solve() {
  let addButtonEl = document.getElementById('add-btn');
  let nameEl = document.getElementById('name');
  let timeEl = document.getElementById('time');
  let descriptionEl = document.getElementById('description');
  let previewList = document.getElementById('preview-list');
  let archiveList = document.getElementById('archive-list');

  addButtonEl.addEventListener("click", addFunc);

  function addFunc(e) {
    e.preventDefault();

    if (nameEl.value.trim() === "" || timeEl.value.trim() === "" || descriptionEl.value.trim() === "") return;

    let taskLiEl = document.createElement('li');
    let buttonDiv = document.createElement('div');
    buttonDiv.className = 'buttons';
    let taskArticleEl = document.createElement('article');

    let nameP = document.createElement('p');
    nameP.textContent = `${nameEl.value}`;
    let ageP = document.createElement('p');
    ageP.textContent = `${timeEl.value}`;
    let descriptionP = document.createElement('p');
    descriptionP.textContent = `${descriptionEl.value}`;

    taskArticleEl.appendChild(nameP);
    taskArticleEl.appendChild(ageP);
    taskArticleEl.appendChild(descriptionP);

    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-btn");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => editTask(taskLiEl, nameEl, timeEl, descriptionEl));

    let doneBtn = document.createElement("button");
    doneBtn.className = "next-btn";
    doneBtn.textContent = "Next";
    doneBtn.addEventListener("click", () => moveToArchive(taskLiEl));

    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(doneBtn);

    taskLiEl.appendChild(taskArticleEl);
    taskLiEl.appendChild(buttonDiv);

    previewList.appendChild(taskLiEl);
    

    nameEl.value = '';
    timeEl.value = '';
    descriptionEl.value = '';
    addButtonEl.disabled = true;
  }

  function editTask(taskEl, nameEl, timeEl, descriptionEl) {
    let name = taskEl.querySelector('p:nth-child(1)').textContent.replace('Name: ', '');
    let time = taskEl.querySelector('p:nth-child(2)').textContent.replace('Time: ', '');
    let description = taskEl.querySelector('p:nth-child(3)').textContent.replace('Description: ', '');

    nameEl.value = name;
    timeEl.value = time;
    descriptionEl.value = description;

    taskEl.remove();
    addButtonEl.disabled = false;
  }

  function moveToArchive(taskEl) {
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "archive-btn";
    deleteBtn.textContent = "Archive";
    deleteBtn.addEventListener("click", () => taskEl.remove());
    taskEl.querySelector('.buttons').replaceWith(deleteBtn);
    archiveList.appendChild(taskEl);
    addButtonEl.disabled = false;
  }
}
