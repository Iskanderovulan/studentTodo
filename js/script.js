let todos = []

const createTask=(e)=>{
    e.preventDefault()
    let message = document.getElementById('text')
    if(message.value.length>1){
        let todo ={
            id:todos.length === 0 ? 1 : todos[todos.length-1].id+1,
            status:false,
            message:message.value,
            date: new Date(),
        }
        todos.push(todo)
        message.value=''
        console.log(todos);
        renderTodos()
    }else{
        alert('Where is name?')
    }

  
       
}

const renderTodos =()=>{
    let output = document.getElementById('output')
    output.innerHTML=''
    todos.map(todo => {
        let block = document.createElement('div')
        block.style.backgroundColor = todo.status ? 'green' : 'aqua'

        let mess = document.createElement('h2')
        let del = document.createElement('button')
        let edit = document.createElement('button')
        let done = document.createElement('button')
        let date = document.createElement('p')

        del.addEventListener('click',()=> 
        todo.status  ? deleteTodo(todo.id) : alert("Press done button")
        )
      

        // edit.addEventListener('click', ()=>modalOpen(todo.id, todo.message))

      
        done.addEventListener('click', ()=>doneTodo(todo.id))
        done.style.display = todo.status ? 'none' : 'inline'


       
       

        mess.textContent=`Name: ${todo.message}`
        del.textContent = 'Delete'
        edit.textContent ='Edit'
        done.textContent= 'Done'

        let current_date = todo.date
        date.textContent=`Created  
        ${current_date.getDate()}
        -${current_date.getMonth()+1}
        -${current_date.getFullYear()} 
          ${current_date.getHours()} : ${current_date.getMinutes()} : ${current_date.getSeconds()}
        `
        block.append(mess, date, del,edit,done)
        output.append(block)
    })
}


const doneTodo =(id)=>{
    todos.map(el=>{
        if(el.id==id){
            el.status = true
            el.final = new Date()
            renderTodos()

        }
    })
}
const deleteTodo = (id)=>{
    todos = todos.filter(el=> el.id != id)
    renderTodos()
}
// оставляет все те которые неравны, если id равен id удаляет и заново перерисовывает


console.log(new Date())
console.log(new Date().getDate())
console.log(new Date().getMonth())//начинается с 0
console.log(new Date().getFullYear())
console.log(new Date().getHours())
console.log(new Date().getMinutes())
console.log(new Date().getSeconds())
