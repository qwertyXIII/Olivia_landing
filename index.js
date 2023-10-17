import { form, formSubmit, popup, popupCloseButton, practicesButtons } from "./utils/constants.js";

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
  console.log(form);

  form.querySelectorAll('.popup__input').forEach(e => {
    console.log(e.value);
  });

  e.preventDefault();
})








particlesJS.load('particles-js', 'utils/particles.json', function() {
  console.log('callback - particles.js config loaded');
});