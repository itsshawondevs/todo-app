let input = document.querySelector('.input')
let btn = document.querySelector('.btn')
let err = document.querySelector('.err')

let list = document.querySelector('.list')
let todoarr = []

let editBtnIndex = ''

btn.addEventListener('click',function(){
    if(input.value !== '' && btn.innerHTML == 'add a task'){
        err.innerHTML = ''
        todoarr.push(input.value)
        input.value = ''
        todo()
    }
    else if(input.value !== '' && btn.innerHTML == 'update task'){
        todoarr[editBtnIndex] = input.value
        input.value = ''
        btn.innerHTML = 'add a task'
        todo()
    }
    else{
        err.innerHTML = '*please enter something'
    }
})

function todo () {
    list.innerHTML = ''
    todoarr.map((item) => {
        list.innerHTML += `<li>${item}<div class = 'btnlist'><button class = 'editbtn'>Edit</button><button class = 'removebtn'>remove</button></div></li>`
    })

    let editbtn = document.querySelectorAll('.editbtn')
    let editbtnarr = Array.from(editbtn)

    editbtnarr.map((editItem, editIndex)=>{
        editItem.addEventListener('click',function(){
            btn.innerHTML = 'update task'
            input.value = todoarr[editIndex]
            editBtnIndex = editIndex
        })
    })

    let removebtn = document.querySelectorAll('.removebtn')
    let removeBtnArr = Array.from(removebtn)

    removeBtnArr.map((removeItem, removeIndex)=>{
        removeItem.addEventListener('click',function(){
            todoarr.splice(removeIndex, 1)
            todo()
        })
    })
}


// function todo () {
//     let li = document.createElement('li')
//     list.appendChild(li)
    
//     const taskList = `${input.value}<button onclick = "removeTodo(this)">remove</button></i>`
    
//     input.value = ''
//     li.innerHTML = taskList    
// }


// function removeTodo(button){
//     let li = button.parentNode;
//     let list = li.parentNode;
//     list.removeChild(li)
// }





