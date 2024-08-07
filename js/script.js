const buttonAdd = document.getElementById("buttonAdd");

if (buttonAdd) {
  buttonAdd.addEventListener("click", function (event) {
    event.preventDefault();

    const taskName = document.getElementById("taskName");
    const taskDate = document.getElementById("taskDate");
    const taskTime = document.getElementById("taskTime");
    const taskDescription = document.getElementById("taskDescription");

    if (
      taskName.value.trim() == "" ||
      taskDate.value.trim() == "" ||
      taskTime.value.trim() == "" ||
      taskDescription.value.trim() == ""
    ) {
    } else {
      addToList(taskName, taskDate, taskTime, taskDescription);
      clean();
    }
  });
}

const addToList = (taskName, taskDate, taskTime, taskDescription) => {
  let list = document.querySelector("ul");

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

                    <img class="delete" title="Eliminar" src="../img/trash.png">
                    </div>

                    </div>


                    <div class="taskNameLi">

                        <span>${taskName.value}</span>
                    </div>


                    <div class="taskDateTimeLi">
                        <div class="taskDateLi">

                            <span>Fecha:${taskDate.value}</span>
                        </div>

                        <div class="taskTimeLi">

                            <span>Hora:${taskTime.value}</span>
                        </div>

                    </div>
                    <div class="taskDescriptionLi">

                        <span>Descripcion:${taskDescription.value}</span>
                    </div>



                </li>

   `;

  let buttonDeletes = document.querySelectorAll(".delete");

  [...buttonDeletes].forEach((btnDelete) => {
    btnDelete.addEventListener("click", function () {
      removeToList(btnDelete);
    });
  });
};

const removeToList = (btnDelete) => {
  let list = document.querySelector("ul");
  let fatherDiv = btnDelete.parentNode;
  list.removeChild(fatherDiv.parentNode.parentNode);
};

const clean = () => {
  document.querySelector("textarea").value = "";
  [...document.querySelectorAll("input")].forEach((input) => {
    input.value = "";
  });
};

let buttonReset = document.getElementById("buttonReset");

if (buttonReset) {
  buttonReset.addEventListener("click", function () {
    clean();
  });
}
