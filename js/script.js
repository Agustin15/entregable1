const buttonAdd = document.getElementById("buttonAdd");
const taskName = document.getElementById("taskName");
const taskDate = document.getElementById("taskDate");
const taskTime = document.getElementById("taskTime");
const taskDescription = document.getElementById("taskDescription");
let buttonReset = document.getElementById("buttonReset");

let list = document.querySelector("ul");
let listTasks = [];

const createTask = (
  taskNameValue,
  taskDateValue,
  taskTimeValue,
  taskDescriptionValue
) => {
  const task = {
    name: taskNameValue,
    date: taskDateValue,
    time: taskTimeValue,
    description: taskDescriptionValue,
  };

  return task;
};

const addToList = (task) => {
  listTasks.push(task);
};

const removeToList = (taskDescriptionDelete) => {
  console.log(taskDescriptionDelete);
  listTasks = listTasks.filter(
    (task) => task.description !== taskDescriptionDelete
  );

  printList();
};

const printList = () => {
  cleanTaskList();
  listTasks.forEach((task) => {
    list.innerHTML += `
   
     <li>

     <div class="headerLi">
                    <div class="checkBoxTaskState">

                        <div>
                            <input type="checkbox" id="checkboxTask">
                        </div>
                        <div class="lblCheckBoxTask">

                            <label for="checkboxTask">Realizada</label>

                        </div>

                    </div>

                    <div class="deleteTask">

                    <img class="delete" id="${task.description}" title="Eliminar" src="../img/trash.png">
                    </div>

                    </div>


                    <div class="taskNameLi">

                        <span>${task.name}</span>
                    </div>


                    <div class="taskDateTimeLi">
                        <div class="taskDateLi">

                            <span>Fecha:${task.date}</span>
                        </div>

                        <div class="taskTimeLi">

                            <span>Hora:${task.time}</span>
                        </div>

                    </div>
                    <div class="taskDescriptionLi">

                        <span>Descripcion:${task.description}</span>
                    </div>



                </li>

   `;
  });

  let buttonDeletes = [...document.querySelectorAll(".delete")];

  if (buttonDeletes.length > 0) {
    [...buttonDeletes].forEach((buttonDelete) => {
      buttonDelete.addEventListener("click", () => {
        let taskDescriptionDelete = buttonDelete.id;
        removeToList(taskDescriptionDelete);
      });
    });
  }
};

const cleanForm = () => {
  document.querySelector("textarea").value = "";
  [...document.querySelectorAll("input")].forEach((input) => {
    input.value = "";
  });
};

const cleanTaskList = () => {
  list.innerHTML = "";
};

if (buttonAdd) {
  buttonAdd.addEventListener("click", (event) => {
    event.preventDefault();

    if (
      taskName.value.trim() == "" ||
      taskDate.value.trim() == "" ||
      taskTime.value.trim() == "" ||
      taskDescription.value.trim() == ""
    ) {
      alert("Complete todos los campos");
    } else {
      let task = createTask(
        taskName.value,
        taskDate.value,
        taskTime.value,
        taskDescription.value
      );
      addToList(task);
      printList();
    }
  });
}

if (buttonReset) {
  buttonReset.addEventListener("click", cleanForm());
}
