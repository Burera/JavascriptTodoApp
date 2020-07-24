//ocalStorage.tasks = JSON.stringify([]);
updateList();
function addEvent()
{

    //take input from input box
   let input_value = document.getElementById("Task_add")

    //take data from localStorage and Store into array

    let taskArray = JSON.parse(localStorage.tasks);
    //push new data into array
    taskArray.push(input_value.value);
    //update that array to local storage
    localStorage.tasks = JSON.stringify(taskArray);
    //empty the input field
     input_value.value = "";
    //NOW update list

    updateList();
}

function updateList()
{
    //get reference ul (tasks)
    
    
    let upp = document.getElementById("update_task")

    // get task from localStorage

    let taskArray = JSON.parse(localStorage.tasks);
     console.log(taskArray)

     let length = taskArray.length - 1;
     let html = " ";
     for(let i =length ; i >= 0 ;i--)
     {
      console.log(taskArray[i])
      html += '<li class="list-group-item" id="' 
      + i + '">'+taskArray[i]+'<span class="btn btn-danger btn-sm float-right remove_btn" onclick = "deleteItem(this)"> <i class="fa fa-trash" aria-hidden="true"></i></span></li>'
     }

     upp.innerHTML = html;
}


function deleteItem(obj)
{ 
     let list_id = obj.parentElement.id;
     //get array 
     let taskArray = JSON.parse(localStorage.tasks);

     // update tasks ARRAY {remove}
     taskArray.splice(list_id , 1);
   
     //update localstorage new array

     localStorage.tasks =JSON.stringify(taskArray)

     updateList();
    console.log(obj)

}