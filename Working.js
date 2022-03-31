const addForm = document.querySelector('.add');
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')
const generateTemplate = todo => {

const html = `
<li class="list-group-item d-flex justify-content-between align-items-center">
<span>${todo}</span>
<i class="far fa-trash-alt delete"></i>
</li>`

list.innerHTML += html;
};

// deleting and item in the todo list
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
if(todo.length){

generateTemplate(todo);
addForm.reset()
}
})

list.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

const filterTodos = (term) => {
    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));

// Array.from(list.childern)
//     .filter((todo) =>{
//     // return todo.textContent
//     console.log(todo.textContent);
//     return true;
// });
};

// searching and filtering
search.addEventListener('keyup',() => {
    const term = search.value.trim().toLowerCase();
    // write function that will take in term and redo
 
    filterTodos(term)
})
