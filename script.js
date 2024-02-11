let input = document.querySelector('.input')
let btn = document.querySelector('.btn')
let err = document.querySelector('.err')

let list = document.querySelector('.list')
let todoarr = []

btn.addEventListener('click',function(){
    if(input.value == ''){
        err.innerHTML = '*please enter something'
    }else{
        err.innerHTML = ''
        todo()
    }
})

function todo () {
    let li = document.createElement('li')
    list.appendChild(li)
    
    const taskList = `${input.value}<button onclick = "removeTodo(this)">remove</button></i>`
    
    input.value = ''
    li.innerHTML = taskList    
}


function removeTodo(button){
    let li = button.parentNode;
    let list = li.parentNode;
    list.removeChild(li)
}


// function todo () {
//     todoarr.push(input.value)
//     list.innerHTML = ''

//     todoarr.map((item,index) => {
//         let li = `<li>${item}<button>remove</button></li>`
//         list.innerHTML += li
//     })
// }

// function deleteTodo(button) {
//     button.onclick = function() {
//         this.remove();
//      }
//     }

