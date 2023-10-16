import { popup, popupCloseButton, practicesButton } from "./utils/constants.js";


practicesButton.addEventListener("click", () => {
  popup.classList.remove('popup_closed');
})

popupCloseButton.addEventListener("click", () => {
  popup.classList.add('popup_closed')
})