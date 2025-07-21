let inputBox=document.querySelector("#input_task");
let listContainer=document.querySelector("#list_container");
let addBtn=document.querySelector("#add_btn");

function addTask(){
    let task=inputBox.value.trim();
    if(!task){
        alert("Please enter a task!");
        return ;
    }
     let li=document.createElement("li");
     li.innerHTML=`<label class="label">
       <input class="checkbox" type="checkbox">
       <span class="task_line">${task}</span>
      </label>
      <button class="delete">Delete</button>
      <button class="edit">Edit</button>`;

     listContainer.appendChild(li);
     inputBox.value="";
};

addBtn.addEventListener("click",()=>{
addTask();
console.log("add button was pressed");
});

// let checkbox=document.querySelectorAll(".checkbox");
// let taskLine=document.querySelectorAll(".task_line");

// function taskDone(){
//  if(checkbox&&checkbox.checked){
//     taskLine.classList.toggle("striked");
//  }
// };

listContainer.addEventListener("click",(event)=>{
    const target = event.target;

    // When checkbox is clicked
    if (target.classList.contains("checkbox")) {
        let span = target.nextElementSibling;
        span.classList.toggle("striked");
    }

    // When delete button is clicked
    if (target.classList.contains("delete")) {
        target.closest("li").remove();
    }

     // When edit button is clicked
    if (target.classList.contains("edit")) {
        let edited=prompt("Make changes!");
        if (edited !== null) {
        const li = target.closest("li");
        const span = li.querySelector(".task_line");
        span.innerText = edited;
    }
    }
});




// let done=document.querySelector(".done");
// let task_input=document.querySelector(".task");

// // let ct=0;
// // done.onclick=(oc)=>{
// // ct++;
// // console.log(ct);
// // };

// function newTask(){
    
// }
