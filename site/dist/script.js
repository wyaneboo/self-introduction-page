const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
const mobileViewport = window.matchMedia("(max-width: 760px)");

if (menuButton && navigation) {
  document.documentElement.classList.add("js");
  menuButton.hidden = false;

  function closeMenu({ restoreFocus = false } = {}) {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
    if (restoreFocus) menuButton.focus();
  }

  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    navigation.classList.toggle("is-open", !open);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuButton.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu({ restoreFocus: true });
    }
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".header-inner")) closeMenu();
  });

  mobileViewport.addEventListener("change", () => closeMenu());
}
