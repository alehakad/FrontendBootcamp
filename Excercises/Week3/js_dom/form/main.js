let checkForm = function () {
  console.log("checkForm");
  let name = document.getElementById("formName").value;
  let salary = parseInt(document.getElementById("formSalary").value); // can be NaN
  let birthdate = document.getElementById("formBirhday").value;
  let phone = document.getElementById("formPhone").value;
  console.log(name, salary, birthdate, phone);
  console.log("salary", salary, typeof salary, !(10000 < salary < 16000));
  let allErrors = [];
  // check name
  if (name.length <= 2) {
    allErrors.push("Name is too short");
  }
  // check salary
  if (salary < 10000 || salary > 16000) {
    allErrors.push("Such salary is unaffordable for us");
  }
  // check phone
  if (phone.length != 10) {
    allErrors.push("This is not a phone");
  }

  // empty error div
  errorDiv.innerHTML = "";

  for (let e of allErrors) {
    addToErrorDiv(e);
  }
  console.log(allErrors);
};

function addToErrorDiv(errorText) {
  // add new red error div

  let newError = document.createElement("div");
  newError.innerHTML = errorText;
  newError.style.color = "red";

  errorDiv.appendChild(newError);
}
