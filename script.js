const shareTrigger = document.querySelector(".share__trigger");
const sharePanel = document.querySelector(".share__panel");

if (shareTrigger && sharePanel) {
  const setOpenState = (isOpen) => {
    shareTrigger.setAttribute("aria-expanded", String(isOpen));
    sharePanel.hidden = !isOpen;
  };

  shareTrigger.addEventListener("click", () => {
    const isOpen = shareTrigger.getAttribute("aria-expanded") === "true";

    setOpenState(!isOpen);
  });

  document.addEventListener("click", (event) => {
    if (!sharePanel.hidden && !event.target.closest(".share")) {
      setOpenState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setOpenState(false);
    }
  });
}
