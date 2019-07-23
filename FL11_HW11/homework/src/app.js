let rootNode = document.getElementById('root');
let addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', newIthem);
let inputForm = document.getElementById('input-action');
let list = document.getElementById('check-list');
let mainForm = document.getElementById('input-form');
let ntfcspan = document.getElementById('ntfc');
function maxIthem() { 
    let listNumber = list.children.length;
    let maxListNum = 9;
    if (listNumber > maxListNum || !inputForm.value) {
        let notification = document.createElement('p');
        notification.className = 'notification-message';
        notification.innerHTML = 'Maximum item per list are created!';
        ntfcspan.appendChild(notification);
        addBtn.removeEventListener('click', newIthem); 
    }
}
function newIthem() {
    maxIthem();
    let checkboxithm = document.createElement('div');
    checkboxithm.className = 'div_checkbox';
    checkboxithm.setAttribute('draggable', 'true');
    checkboxithm.addEventListener('dragstart', dragStart, false);
    checkboxithm.addEventListener('dragover', dragOver, false);
    checkboxithm.addEventListener('drop', drapDrop, false);
    list.appendChild(checkboxithm);
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.className = 'checkbox';
    checkBox.setAttribute('onclick', `if(this.checked){ this.setAttribute('disabled', ''); }`);
    checkboxithm.appendChild(checkBox);
    let text = document.createElement('p');
    checkboxithm.appendChild(text);
    text.innerHTML = inputForm.value;
    let iconEdt = document.createElement('i');
    iconEdt.className = 'material-icons';
    iconEdt.innerHTML = 'edit_box';
    checkboxithm.appendChild(iconEdt);
    iconEdt.addEventListener('click', editList);
    let iconDlt = document.createElement('i');
    iconDlt.className = 'material-icons checkbox_icon_delete';
    iconDlt.innerHTML = 'delete_box';
    checkboxithm.appendChild(iconDlt);
    iconDlt.addEventListener('click', delIthem);
    function editList() {
        let edit = document.createElement('div');
        edit.className = 'edit';
        checkboxithm.style.display = 'none';
        list.insertBefore(edit, checkboxithm);
        let inputEdit = document.createElement('input');
        inputEdit.className = 'input_edit';
        edit.appendChild(inputEdit);
        let editIcon = document.createElement('i');
        editIcon.className = 'edit_icon material-icons';
        editIcon.innerHTML = 'save_box';
        editIcon.addEventListener('click', save);
        edit.appendChild(editIcon);
        function save(drop) {
            drop.target.parentElement.style.display = 'none';
            checkboxithm.style.display = 'flex';
            text.innerHTML = inputEdit.value;
        }
    }
    function delIthem() {
        checkboxithm.remove();
    }
}
let drag = null;

function dragStart(drop) {
    drag = drop.target;
    drop.dataTransfer.effectAllowed = 'move';
    drop.dataTransfer.setData('text/html', drop.target.innerHTML);
}
function dragOver(drop) {
    if (drop.preventDefault) {
        drop.preventDefault();
    }
    drop.dataTransfer.dropEffect = 'move';
    return false;
}
function drapDrop(drop) {
    if (drop.stopPropagation) {
        drop.stopPropagation(); 
    }
    if (drag !== true) {
        drag.innerHTML = drop.target.innerHTML;
        drop.target.innerHTML = drop.dataTransfer.getData('text/html');
    }
    return false;
}