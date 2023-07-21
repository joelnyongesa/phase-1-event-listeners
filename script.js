// create an alert
document.querySelector('#alert').addEventListener('click', () => alert('I have been Clicked!'))

// create a console.log()
document.querySelector('#log').addEventListener('click', () => console.log('I have been logged.'))

// Will delete task.
function handleDelete(e){
    e.target.parentNode.remove()
}


// Grabs button and deletes parent node.
function addEventListenerToDeleteButton(){
    let buttons = document.getElementsByClassName('delete_btn')
    for (btn of buttons){
        btn.addEventListener('click', handleDelete)
    }
}
addEventListenerToDeleteButton()
