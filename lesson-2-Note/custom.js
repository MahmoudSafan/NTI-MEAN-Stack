
showHide.addEventListener('click', function(e){
    form_div.classList.toggle('d-none')
    this.textContent == "Show" ? this.textContent='Hide': this.textContent='Show'
})

document.querySelector(".addBtn").addEventListener('click',function(e){
    this.textContent == "Edit" ? this.textContent='Add Task': this.textContent='Edit'
})

myAddForm.addEventListener('submit', function(e){
    e.preventDefault()
    let task = { status:false }
    formHeads.forEach(h => {
            task[h]= this.elements[h].value
    })
    console.log(task)
    addTask(task)
})