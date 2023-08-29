var colEnum = 0;
var cardEnum = 0;
var listIdToRemove;
var cardIdToRemove;

function addList(element) {
    let listContainer = document.getElementById('list-container');

    let list = document.createElement('div');
    list.className = 'col-xxl-2 bg-black text-light rounded-4 m-3'; // Agrega la clase de transición
    list.innerHTML = `
        <div class="text-start m-3 mt-0 mb-0">
            <input class="nameable my-2" type="text" placeholder="New List">
        </div>
        <div id="col${colEnum}" class="scrollable-content">
            <div class="bg-black sticky-top m-3 pb-2">
            <div
            ondrop="drop(event, this)" ondragover="allowDrop(event)" 
            class="dropCard border border-secondary border-opacity-50 p-1 rounded-2" 
            style="background-color:rgba(255, 255, 255, 0.144);"><i class="bi bi-arrow-bar-down"></i></div>
            </div>
        </div>
        <div id="btn-group-card" class="btn-group mb-3" role="group" aria-label="Basic example">
            <button onclick="addCard(this)" type="button" class="btn btn-black text-light"><i class="bi bi-plus-circle"></i> Add card</button>
            <button data-bs-toggle="modal" data-bs-target="#modalId" onclick="captureListId(this)" 
            data-list-id="col${colEnum}" type="button" class="btn btn-black text-light"><i class="bi bi-x-circle"></i> Remove list</button>
        </div>
    `;

    listContainer.insertBefore(list, element);
    colEnum++;
}

function addCard(element) {
    let btnGroup = element.parentNode;
    let newDiv = document.createElement('div');

    newDiv.className = 'trello-card text-start bg-dark m-3 p-2 rounded-3';
    newDiv.id = `card${cardEnum}`;
    newDiv.setAttribute('draggable', 'true');
    newDiv.setAttribute('ondragstart', 'drag(event)');
    newDiv.innerHTML = `
        <div class="mb-1"></div>
        <input class="nameable" type="text" placeholder="New Card" style="font-weight:normal;">
        <div class="mb-1 text-center">
            <button data-bs-toggle="modal" data-bs-target="#modalCard" onclick="captureCardId(this)"
            card-list-id="card${cardEnum}" type="button" class="btn btn-sm btn-dark rounded-3"><i class="bi bi-trash3"></i></button>
        </div>`;

    btnGroup.parentNode.querySelector(".scrollable-content").appendChild(newDiv);
    cardEnum++;
}


function captureListId(button) {
    listIdToRemove = button.getAttribute("data-list-id");
}

function captureCardId(button) {
    cardIdToRemove = button.getAttribute("card-list-id");
}

function deleteList() {
    if (listIdToRemove) {
        const listElement = document.getElementById(listIdToRemove);
        if (listElement) {
            listElement.parentNode.remove();
            listIdToRemove = null;
        }
    }
}

//Remove card function
function removeCard() {
    if(cardIdToRemove){
        const cardElement = document.getElementById(cardIdToRemove);
        if (cardElement) {
            cardElement.remove();
            cardIdToRemove = null;
        }
    }
}

