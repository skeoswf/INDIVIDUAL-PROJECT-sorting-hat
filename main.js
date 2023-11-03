const houseSorterFunction = () => {
  let house = "";
  let houseNumber = Math.floor(Math.random() * 4);

  if (houseNumber === 0) {
    house = "gryffindor";
  } else if (houseNumber === 1) {
    house = "slytherin";
  } else if (houseNumber === 2) {
    house = "ravenclaw";
  } else if (houseNumber === 3) {
    house = "hufflepuff"
  }
  
    return house;
  }

const students = [
  {
    id: 1,
    name: "henry pousseur",
    house: "bubble"
  },
  {
    id: 2,
    name: "henry pousseur",
    house: "besties"
  }
] 

const studentCardsWrapper = document.querySelector("#studentCards");
const userForm = document.querySelector("#addUserForm");
const submitButton = docume
+nt.querySelector("#submitButton");



submitButton.addEventListener("submit", (e) => {
  e.preventDefault();
    userForm.reset();
  })

  let studentCard = "";

  const renderToDom = (array) => {

    let studentCard = "";
    for (let i = 0; i < students.length; i++) {

      studentCard += 
      `<div class="hogwartsStudent>
        <h1>${students[i].name}</h1>
        </div>`
    }

    studentCardsWrapper.innerHTML = studentCard;
  }

  renderToDom(students);


  console.log(students[0].house);
  console.log(students[1].house);
