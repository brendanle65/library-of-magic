const navigation = document.querySelector("#navigation");
const notes = document.querySelector("#notes");
const script = document.querySelector("#script");
const tutorialLines = document.querySelectorAll(".tutorial");

// handle HASH
toggleView(window.location.hash.trim().split("#")[1]);

// handle CLICK
navigation.removeEventListener("click", handleClick);
navigation.addEventListener("click", handleClick);
function handleClick(event) {
  const name = event.target.dataset.view;
  if (event.target.nodeName === "BUTTON") {
    window.location = `#${name}`;
    toggleView(name);
  }
}

// helper TOGGLE LOGIC
function toggleView(view = "spectator") {
  if (["magician", "notes", "spectator"].includes(view)) {
    navigation.querySelector(".navigation__button--selected").classList.remove("navigation__button--selected");
    navigation.querySelector(`[data-view="${view}"]`).classList.add("navigation__button--selected");
  }

  switch (view) {
    case "magician":
      notes.style.display = "none";
      script.style.display = "block";
      for (let index = 0; index < tutorialLines.length; index++) {
        tutorialLines[index].style.display = "block";
      }
      break;
    case "notes":
      notes.style.display = "block";
      script.style.display = "none";
      break;
    default: // "spectator" including
      notes.style.display = "none";
      script.style.display = "block";
      for (let index = 0; index < tutorialLines.length; index++) {
        tutorialLines[index].style.display = "none";
      }
      break;
  }
}
