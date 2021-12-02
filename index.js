const allowedGuests = new Set([
  "rosanna",
  "chau",
  "duy",
  "gary",
  "matt",
  "llama",
  "andrew",
  "michael",
  "vanessa",
  "phillip",
]);

const submitName = () => {
  const name = document.getElementById("name").value.toLowerCase();

  const validName = checkForValidName(name);

  if (validName && checkForLlama(name)) {
    const hideDefaults = document.querySelectorAll(".show");
    const showAlternatives = document.querySelectorAll(".hide");

    for (let i = 0; i < hideDefaults.length; i++) {
      hideDefaults[i].classList.add("hide");
      showAlternatives[i].classList.remove("hide");
      showAlternatives[i].classList.add("show");
    }
    fadeOut();
  } else if (validName && checkForRosanna(name)) {
    document.body.style.background = "#d9dbf1";
    fadeOut();
  } else if (validName) {
    fadeOut();
  } else {
    showErrorMessage();
  }
};

const checkForLlama = (name) => {
  if (name === "llama") {
    return true;
  } else return false;
};

const checkForRosanna = (name) => {
  if (name === "rosanna") {
    return true;
  } else return false;
};

const fadeOut = () => {
  const modal = document.getElementById("nameModal");
  modal.classList.add("hideModal");
  modal.classList.remove("show");
};

const checkForValidName = (name) => {
  return allowedGuests.has(name);
};

const showErrorMessage = () => {
  const input = document.getElementById("name");
  const paragraph = document.getElementById("error");

  input.classList.add("is-danger");
  paragraph.classList.remove("is-hidden");
  paragraph.classList.add("has-text-danger");
};
