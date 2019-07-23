let rootNode = document.getElementById(`root`);
let addAction = document.querySelector(`.button_add_action`),
    sectionTasks = document.querySelector(`.field`);
function addNewTask (){
    let margins = 10;
    if (document.querySelectorAll(`.section_div`).length < margins) {
        if (document.querySelector(`.addAction`).value !== ``) {
            let addToTaskDiv = document.createElement(`div`);
            addToTaskDiv.className = `section_div`;
            sectionTasks.insertBefore(addToTaskDiv, sectionTasks.firstChild);
            let addTaskDelEditDiv = document.createElement(`div`);
            addTaskDelEditDiv.className = `delete_edit_div`;
            document.querySelector(`.section_div`).insertBefore(addTaskDelEditDiv,
                document.querySelector(`.section_div`).firstChild);
            let addEditTask = document.createElement(`div`);
            addEditTask.className = `edit_`;
            document.querySelector(`.delete_edit_div`).insertBefore(addEditTask,
                document.querySelector(`.delete_edit_div`).firstChild);
            let addInputCheckTask = document.createElement(`input`);
            addInputCheckTask.className = `input_check`;
            addInputCheckTask.type = `checkbox`;
            document.querySelector(`.edit_`).insertBefore(addInputCheckTask,
                document.querySelector(`.edit_`).firstChild);
            let addTaskValue = document.createElement(`p`);
            addTaskValue.className = `value`;
            addTaskValue.innerHTML = document.querySelector(`.addAction`).value;
            document.querySelector(`.edit_`).appendChild(addTaskValue);
            let addEditTaskbutton = document.createElement(`button`);
            addEditTaskbutton.className = `editButton`;
            document.querySelector(`.edit_`).appendChild(addEditTaskbutton);
            let addMaterialIcons = document.createElement(`i`);
            addMaterialIcons.className = `material-icons`;
            addMaterialIcons.innerHTML = `create`;
            document.querySelector(`.editButton`).insertBefore(addMaterialIcons,
                document.querySelector(`.editButton`).firstChild);
            let addDelTask = document.createElement(`button`);
            addDelTask.className = `delete`;
            document.querySelector(`.delete_edit_div`).appendChild(addDelTask);
            let addDelMaterialIcons = document.createElement(`i`);
            addDelMaterialIcons.className = `material-icons`;
            addDelMaterialIcons.innerHTML = `delete`;
            document.querySelector(`.delete`).appendChild(addDelMaterialIcons);
            document.querySelector(`.addAction`).value = ``;
            document.querySelector(`.addAction`).focus()
        }
    } else {
        let addToMuchTasks = document.createElement(`h2`);
        addToMuchTasks.className = `overTask`;
        addToMuchTasks.innerHTML = `You reach the maximum for this time!`;
        document.querySelector(`header`).insertBefore(addToMuchTasks, document.querySelector(`header`).firstChild )
    }
}
addAction.addEventListener(`click`, addNewTask);
function editFunc(event) {
    if ( event.target.parentNode.className === `editButton` &&
        event.target.closest(`.section_div`).querySelectorAll(`.changeInput`).length < 1) {
        let addTaskEditedSaveDiv = document.createElement(`div`);
        addTaskEditedSaveDiv.className = `saveEdited`;
        this.firstChild.appendChild(addTaskEditedSaveDiv);
        let editInput = document.createElement(`input`);
        editInput.className = `changeInput`;
        editInput.type = `text`;
        editInput.value = event.target.closest(`.edit_`).querySelector(`.value`).innerHTML;
        let taskEditedSaveDiv = event.target.closest(`.section_div`).querySelector(`.saveEdited`);
        taskEditedSaveDiv.appendChild(editInput, taskEditedSaveDiv.firstChild);
        editInput.focus();
        let editSaveButton = document.createElement(`button`);
        editSaveButton.className = `editSaveButton`;
        editSaveButton.type = `submit`;
        taskEditedSaveDiv.appendChild(editSaveButton);
        let editMaterialIcons = document.createElement(`i`);
        editMaterialIcons.className = `material-icons`;
        editMaterialIcons.innerHTML = `save`;
        taskEditedSaveDiv.querySelector(`.editSaveButton`).appendChild(editMaterialIcons)
    }
}
sectionTasks.addEventListener(`click`, editFunc);
function saveEditedInputs (event) {
    if (event.target.parentNode.className === `editSaveButton`) {
        let TaskDiv = event.target.closest(`.section_div`);
        TaskDiv.querySelector(`.value`).innerHTML = TaskDiv.querySelector(`.changeInput`).value;
        TaskDiv.querySelector(`.saveEdited`).remove()
    }
}
sectionTasks.addEventListener(`click`, saveEditedInputs);
function deleteTask (event) {
    if (event.target.parentNode.className === `delete`) {
        event.target.closest(`.section_div`).remove()
    }
}
sectionTasks.addEventListener(`click`, deleteTask);
function disable_check_box (event) {
    let inputCheckTask = document.querySelector(`.input_check`);
    if (event.target === inputCheckTask) {
        if (event.target.checked) {
            event.target.setAttribute(`disabled`, `disabled`)
        }
    }
}


sectionTasks.addEventListener(`click`, disable_check_box);