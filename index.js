import { createNotification } from "./components/createNotification.js";
import { formValidator } from "./components/formValidator.js";
import { form, formLoader, formSubmit, popup, popupCloseButton, practicesButtons } from "./utils/constants.js";

popupCloseButton.addEventListener("click", () => {
  popup.classList.add('popup_closed')
})

practicesButtons.forEach(el => {
  el.addEventListener('click', (e) => {
    popup.classList.remove('popup_closed')
    form.querySelector('#popup-input-training').value = e.target.getAttribute('content');
  })
});

formSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  if (formValidator(form, ['popup-input-training', 'popup-input-name', 'popup-input-number'])) {
    createNotification('ok', `Успешно отправленно! Ожидайте, я связжусь с вами в ближайшее время`);
    formLoader.classList.add('popup__loading_active');
  }
});

particlesJS.load('particles-js', 'utils/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

setTimeout(() => {
  createNotification('ok','Записывайтесь ко мне на тренинги!')
}, 30000);