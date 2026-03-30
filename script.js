const planDialog = document.getElementById("plan-dialog");
const viewPlanButton = document.getElementById("view-plan");
const closePlanButton = document.getElementById("close-plan");

if (planDialog && viewPlanButton && closePlanButton) {
  viewPlanButton.addEventListener("click", () => {
    planDialog.showModal();
  });

  closePlanButton.addEventListener("click", () => {
    planDialog.close();
  });

  planDialog.addEventListener("click", (event) => {
    const rect = planDialog.getBoundingClientRect();
    const isOutside =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;

    if (isOutside) {
      planDialog.close();
    }
  });
}
