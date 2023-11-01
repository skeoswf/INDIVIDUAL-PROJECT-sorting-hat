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

const studentCards = [
  {
    id: 1,
    name: "henry pousseur",
    house: houseSorterFunction()
  },
  {
    id: 2,
    name: "henry pousseur",
    house: houseSorterFunction()
  }
] 

const studentCardsWrapper = document.querySelector("#studentCards");
const userForm = document.querySelector("#addUserForm");
const submitButton = document.querySelector("#submitButton");



submitButton.addEventListener("click", () => {
    userForm.reset();
  })

  console.log(studentCards[0].house);
  console.log(studentCards[1].house);
