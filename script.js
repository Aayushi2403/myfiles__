let tasks=[]
document.getElementById('addtodobtn').addEventListener('click', addTask);
function addTask(){
    const taskinput= document.getElementById('todoinput');
    const tasktext = taskinput.value.trim();
    if(tasktext !== ''){
     tasks.push(tasktext);
     displaytask();
     taskinput.value= ''
    }
}
function displaytask(){
const tasklist = document.getElementById('todolist');
tasklist.innerHTML=''
tasks.forEach((task,index)=>{
    const li = document.createElement('li');
    li.textContent=task;
    const deletebtn = document.createElement('button');
    deletebtn.textContent='delete';
    deletebtn.onclick= function(){
        tasks.splice(index,1);
        displaytask()
    }

    const updatebtn = document.createElement('button');
    updatebtn.textContent='update';
    updatebtn.onclick=function(){
    const updatedtask =prompt('enter updated task:',task)
    if(updatedtask !== null){
        tasks[index]=updatedtask.trim()
        displaytask()
    }
}
    li.appendChild(deletebtn)
    li.appendChild(updatebtn)

    tasklist.appendChild(li)

})

}