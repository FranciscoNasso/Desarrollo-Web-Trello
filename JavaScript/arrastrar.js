function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    allowWhenDragging();

}

function drop(ev, element) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    dennyWhenDragging();
    element.parentNode.parentNode.appendChild(document.getElementById(data));
    
}

function allowWhenDragging() {
    let inputs = document.querySelectorAll(".nameable");

    inputs.forEach(input => {
        input.setAttribute('disabled', 'true');
    });
}

function dennyWhenDragging() {
    let inputs = document.querySelectorAll(".nameable");

    inputs.forEach(input => {
        input.removeAttribute('disabled');
    });
}