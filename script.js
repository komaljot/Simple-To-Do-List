var taskIndex = 1;

const list = document.querySelector('.main-list')

function handleAdd(){
    const newTask = `
    <div style='order:${taskIndex}' id="${taskIndex}" class="list-item task-list">
        <div class="innerWrapper">
            <div class="task-label">
                <h4>
                    New Task ${taskIndex}
                </h4>
                <input type="text" style="display: none;">
                <div class="options">
                    <button class="optionsBtn" onclick="handleEdit('${taskIndex}')"><i class="fas fa-edit"></i></button>
                    <button class="optionsBtn" onclick="handleDelete('${taskIndex}')"><i class="fas fa-trash-alt"></i></button>
                </div>
            </div>
            <div class="task-description">
                New task, tap on edit button to change content
            </div>
            <textarea style="width: 100%; display: none;">
            </textarea>
        </div>
        <div class="moveOptions">
            <button onclick="moveUp('${taskIndex}')">
                <i class="fas fa-sort-up"></i>
            </button>
            <button onclick="moveDown('${taskIndex}')">
                <i class="fas fa-sort-down"></i>
            </button>
        </div>
    </div>
    `
    list.innerHTML+=newTask;
    taskIndex++;
}
function handleEdit(e){
    const parent = document.getElementById(e)
    const input = parent.querySelector('input')
    const textarea = parent.querySelector('textarea')
    const editBtn = parent.querySelectorAll('.optionsBtn')[0]

    
    const thisHeading = parent.querySelector('h4')
    console.log(parent)
    const headingContent = thisHeading.innerText
    
    const thisDes = parent.querySelector('.task-description')
    const descriptionContent = thisDes.innerText
    
    console.log(headingContent);
    console.log(descriptionContent);

    thisHeading.style.display='none'
    thisDes.style.display='none'
    input.style.display=''
    input.value = headingContent
    textarea.style.display=''
    textarea.value = descriptionContent

    editBtn.onclick = ()=>{handleSave(e)}
    console.log(editBtn.attributes.onclick)
    editBtn.innerHTML = '<i class="fas fa-check"></i>'
}
function handleSave(e){
    const parent = document.getElementById(e)
    const input = parent.querySelector('input')
    const textarea = parent.querySelector('textarea')
    const editBtn = parent.querySelectorAll('.optionsBtn')[0]

    
    const thisHeading = parent.querySelector('h4')
    
    const thisDes = parent.querySelector('.task-description')

    console.log(thisHeading);
    console.log(thisDes);

    const newH4 = input.value
    const newDes = textarea.value

    thisHeading.innerText = newH4
    thisDes.innerText = newDes

    thisHeading.style.display=''
    thisDes.style.display=''
    input.style.display='none'
    textarea.style.display='none'
    editBtn.onclick = ()=>{handleEdit(e)}
    console.log(editBtn.attributes.onclick)
    editBtn.innerHTML = '<i class="fas fa-edit"></i>'

    console.log(e);
}
function handleDelete(e){
    document.getElementById(e).style.display='none'
}
function moveUp(e){
    const parent = document.getElementById(e)
    const currentOrder = parent.style.order
    if(parseInt(currentOrder)<-1){
        return
    }
    parent.style.order = parseInt(currentOrder)-1
    console.log(e)
}
function moveDown(e){
    const parent = document.getElementById(e)
    const currentOrder = parent.style.order
    const arrayOfTasks = document.querySelectorAll('.main-list>div').length
    if(parseInt(currentOrder)>arrayOfTasks){
        return
    }
    parent.style.order = parseInt(currentOrder)+1
    console.log(e)
}