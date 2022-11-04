import "./styles/main.css";

const navToggle = document.getElementById("nav-toggle");
const navMaster = document.getElementById("nav-master");
const largeScreen = matchMedia("(min-width : 35.001em)");

largeScreen.addEventListener("change", function (ev) {
  if (ev.matches) {
    setAriaExpanded.call(navToggle, "false");
  }
});

document.body.addEventListener("nav:toggled", function (ev) {
  if (ev.detail.navigationState === "expanded") {
    this.style.setProperty("overflow-y", "hidden");
  } else {
    this.style.setProperty("overflow-y", "auto");
  }
});

navMaster.addEventListener("nav:toggled", function (ev) {
  this.querySelectorAll("[data-navigation-agent").forEach((agent) => {
    agent.dataset.navigationState = ev.detail.navigationState;
  });
});

navToggle.addEventListener("click", function () {
  toggleAriaExpanded.call(this);
});

function getAriaExpanded() {
  return this.getAttribute("aria-expanded");
}

function setAriaExpanded(value) {
  this.setAttribute("aria-expanded", value);

  queueMicrotask(() => {
    const current = getAriaExpanded.call(this);
    this.dispatchEvent(
      new CustomEvent("nav:toggled", {
        bubbles: true,
        detail: {
          navigationState: current === "true" ? "expanded" : "",
        },
      })
    );
  });
}

function toggleAriaExpanded() {
  const current = getAriaExpanded.call(this);

  if (current === "true") {
    setAriaExpanded.call(this, "false");
  } else if (current === "false") {
    setAriaExpanded.call(this, "true");
  }
}
