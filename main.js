

const houseSorterFunction = () => {
  let house = "";
  let houseNumber = Math.floor(Math.random() * 4);

  if (houseNumber === 0) {
    house = "gryffindor";
  } else if (houseNumber === 1) {
    house = "slytherin";
  } else if (houseNumber === 2) {
    house = "rawenclav";
  } else if (houseNumber === 3) {
    house = "hufflepuff"
  }
  
    return house;
  }


const students = [
  {
    id: 1,
    name: "henry pousseur",
    house: "slytherin",
  },
  {
    id: 2,
    name: "habitat gangster",
    house: "hufflepuff"
  },
  {
    id: 3,
    name: "pond easily",
    house: "gryffindor"
  },
  {
    id: 4,
    name: "dracula maestro",
    house: houseSorterFunction()
  },
] 

const voldyGang = [
  {
  id: 1,
  name: "luscious macro"
  },
  {
  id: 2,
  name: "king moldevort"
  }
]

const studentCardsWrapper = document.querySelector("#studentCardsWrapper");
const voldyGangWrapper = document.querySelector("#theVoldiesCardsWrapper");

const userForm = document.querySelector("#addUserForm");
const submitButton = document.querySelector("#submitButton");

const gryffindorFilterButton = document.querySelector("#gryffindorFilter");
const slytherinFilterButton = document.querySelector("#slytherinFilter");
const allFilterButton = document.querySelector("#allFilter");
const ravenclawFilterButton = document.querySelector("#ravenclawFilter");
const hufflepuffFilterButton = document.querySelector("#hufflepuffFilter");

let studentCardWrapperContent = "";
let voldyCardWrapperContent = "";

const renderStudents = (array) = () => {
  
  let studentCardWrapperContent = "";
  for (let i = 0; i < students.length; i++) {

    studentCardWrapperContent +=
    `<div class="hogwartsStudents">
    <h2>${students[i].name}</h2>
    <h5>${students[i].house}</h5>

    <button class="delete" id="delete--${students[i].id}">expel</button>
  </div>`;
  }

  studentCardsWrapper.innerHTML = studentCardWrapperContent

}

const renderVoldy = (array) = () => {
  
  let voldyCardWrapperContent = "";
  for (let i = 0; i < voldyGang.length; i++) {

    voldyCardWrapperContent +=
    `<div class="voldyGang">
    <h2>${voldyGang[i].name}</h2>
  </div>`;
  }

  voldyGangWrapper.innerHTML = voldyCardWrapperContent

}

renderStudents(students);
renderVoldy(voldyGang);

const filterGryffindor = () => {
  
  let studentCardWrapperContent = "";

  for (let i = 0; i < students.length; i++) {
    if (students[i].house === "gryffindor")
    studentCardWrapperContent +=
    `<div class="hogwartsStudents">
    <h2>${students[i].name}</h2>
    <h5>${students[i].house}</h5>

    <button class="delete" id="delete--${students[i].id}">expel</button>
  </div>`;
  }

  studentCardsWrapper.innerHTML = studentCardWrapperContent

}

const filterSlytherin = () => {
  
  let studentCardWrapperContent = "";

  for (let i = 0; i < students.length; i++) {
    if (students[i].house === "slytherin")
    studentCardWrapperContent +=
    `<div class="hogwartsStudents">
    <h2>${students[i].name}</h2>
    <h5>${students[i].house}</h5>

    <button class="delete" id="delete--${students[i].id}">expel</button>
  </div>`;
  }

  studentCardsWrapper.innerHTML = studentCardWrapperContent

}

const filterRavenclaw = () => {
  
  let studentCardWrapperContent = "";

  for (let i = 0; i < students.length; i++) {
    if (students[i].house === "ravenclaw")
    studentCardWrapperContent +=
    `<div class="hogwartsStudents">
    <h2>${students[i].name}</h2>
    <h5>${students[i].house}</h5>

    <button class="delete" id="delete--${students[i].id}">expel</button>
  </div>`;
  }

  studentCardsWrapper.innerHTML = studentCardWrapperContent

}

const filterHufflepuff = () => {
  
  let studentCardWrapperContent = "";

  for (let i = 0; i < students.length; i++) {
    if (students[i].house === "hufflepuff")
    studentCardWrapperContent +=
    `<div class="hogwartsStudents">
    <h2>${students[i].name}</h2>
    <h5>${students[i].house}</h5>

    <button class="delete" id="delete--${students[i].id}">expel</button>
  </div>`;
  }

  studentCardsWrapper.innerHTML = studentCardWrapperContent

}

const filterAll = () => {

  studentCardWrapperContent = ""
  renderStudents(students)
}

const deleteStudent = (event) => {
  if(event.target.id.includes("delete")) {
    const [, id] = event.target.id.split("--");
    const index = students.findIndex(obj => obj.id === Number(id));
    voldyGang.push(students[id - 1]);
    students.splice(index, 1);
    
    renderStudents(students);
    renderVoldy(voldyGang);
  }
}

// works fine if deleting starting at the end of array; will have to inspect line 192 to restructure

gryffindorFilterButton.addEventListener("click", filterGryffindor)
slytherinFilterButton.addEventListener("click", filterSlytherin)
allFilterButton.addEventListener("click", filterAll)
ravenclawFilterButton.addEventListener("click", filterRavenclaw)
hufflepuffFilterButton.addEventListener("click", filterHufflepuff)

studentCardsWrapper.addEventListener("click", deleteStudent);

// document.getElementById("#submitField").noValidate = "false";

// this allows for onValid and onInput to work with the required tag on html
// does NOT allow for the user to input a new student; other functionality still operational 
// noValidate was unnecessary on the pet form for some reason. placing noValidate at the end  or beginning of the document destroys functionality. 
// might be because of bootstrap or e.Default

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const newStudent = {
      id: students.length + 1,
      name: document.querySelector("#submitField").value,
      house: houseSorterFunction(),
    }

      students.push(newStudent);
      renderStudents(students);
      userForm.reset();
    })
