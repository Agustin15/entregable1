let list = document.querySelector("ul");
let listTasks = [];

const addToList = (task) => {
  listTasks.push(task);
};

const removeToList = (idTask) => {
  const confirmDelete = confirm("¿Esta seguro de querer eliminar esta tarea?");

  if (!confirmDelete) return;

  listTasks = listTasks.filter((task) => task.id !== idTask);

  printList();
};

const printList = () => {
  let tasksToPrint = listTasks.map((task) => {
    return `
   <li>

        <div class="headerLi">
   
                     
                       <div class="imageTask">
   
                         <img src="${task.imageUrl}">
   
                       </div>
   
   
                       <div class="taskNameLi">
   
                           <span>${task.name}</span>
                       </div>
   
                       </div>
   
                       <div class="taskDateTimeLi">
                           <div class="taskDateLi">
   
                               <span><a>Fecha:</a>${task.date}</span>
                           </div>
   
                           <div class="taskTimeLi">
   
                               <span><a>Hora:</a>${task.hour}</span>
                           </div>
   
                       </div>
                       <div class="taskDescriptionLi">
                           
                           <span><a>Descripcion:</a></span>
                           <div class="description">
                           <p>${task.description}</p>

                           </div>
                       </div>
   
   
                       <div class="containDelete">

                       <button onclick="removeToList(${task.id})">Eliminar</button>
                       </div>
   
                   </li>

   `;
  });

  list.innerHTML = tasksToPrint.join("");
};

function generateUniqueId() {
  return Date.now();
}

function createTask(event) {
  event.preventDefault();

  const form = event.target;

  const formData = new FormData(form);

  const task = {};
  task.id = generateUniqueId();

  formData.forEach((value, key) => (task[key] = value));

  addToList(task);

  form.reset();

  printList();
}

function cleanTasksList() {
  const confirmTasks = confirm(
    "¿Esta seguro de querer eliminar todas las tareas?"
  );

  if(!confirmTasks) return

  listTasks = [];
  printList();
}

document.addEventListener("DOMContentLoaded", () => {
  if (list) {
    printList();
  } else {
    console.error("Elemento #list no existe ");
  }
});
