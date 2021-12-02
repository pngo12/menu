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
  const isLlama = checkForLlama(name);

  const validName = checkForValidName(name);

  if (validName && isLlama) {
    const hideDefaults = document.querySelectorAll(".defaultItem");
    const showAlternatives = document.querySelectorAll(".alternativeItems");

    for (let i = 0; i < hideDefaults.length; i++) {
      hideDefaults[i].classList.add("defaultItemHide");
      showAlternatives[i].classList.remove("alternativeItems");
      showAlternatives[i].classList.add("alternativeItemsShow");
    }
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

const fadeOut = () => {
  const modal = document.getElementById("modal");
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
