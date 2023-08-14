const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const inputRegistration = document.getElementById("inputRegistration");

const checkRegistration = function () {
  nameToCheck = inputRegistration.value;
  if (nameToCheck in reservations) {
    console.log("In");
    if (reservations[nameToCheck].claimed === false)
      alert(`Welcome, ${nameToCheck}`);
    else alert("Hmm, someone already claimed this reservation");
  } else {
    alert("You have no reservation");
  }
};
