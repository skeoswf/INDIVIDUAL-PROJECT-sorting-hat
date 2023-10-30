

const userForm = document.querySelector("#addUserForm");
const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", () => {
    userForm.reset();
  })
