import { createNotification } from "./components/createNotification.js";
import { createReview } from "./components/createReview.js";
import { formValidator } from "./components/formValidator.js";
import { serverDataSender } from "./components/serverDataSender.js";
import { serverDataLoader } from "./components/serverDataLoader.js";
import { buttons, form, formInputName, formInputNumber, formInputTelegram, formInputTraining, formLoader, formSubmit, links, popup, popupCloseButton, practicesButtons, formInputEmail, formInputCheckbox } from "./utils/constants.js";

popupCloseButton.addEventListener("click", () => {
  popup.classList.add('popup_closed')
})

practicesButtons.forEach(el => {
  el.addEventListener('click', (e) => {
    popup.classList.remove('popup_closed')
    form.querySelector('#popup-input-training').value = e.target.getAttribute('content');
  })
});

/*
formSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  if (formValidator(form, ['popup-input-training', 'popup-input-name', 'popup-input-number', 'popup-input-email'])) {
    formLoader.classList.add('popup__loading_active');
    formSubmit.classList.add('popup__send_inactive');
    formSubmit.disabled = true;
    serverDataSender('application', {name: formInputName.value, typeOfService: formInputTraining.value, number: formInputNumber.value, telegram: formInputTelegram.value, email: formInputEmail.value, consentToMailing: formInputCheckbox.checked})
      .then(() => {
        createNotification('ok', `Успешно отправленно! Ожидайте, я связжусь с вами в ближайшее время`);
        formLoader.classList.remove('popup__loading_active');
        formSubmit.classList.remove('popup__send_inactive');
        formSubmit.disabled = false;
        popup.classList.add('popup_closed')
      }).catch(() => {
        createNotification('error', `Что-то пошло не так. Попробуйте позже.`);
        formLoader.classList.remove('popup__loading_active');
        formSubmit.classList.remove('popup__send_inactive');
        formSubmit.disabled = false;
      });
  }
});

buttons.forEach((e) => {
  e.addEventListener('click', (e) => {
    serverDataSender('user_actions', {userAgent: navigator.userAgent, action: 'click', object: e.target.getAttribute('observer')});
  })
})
links.forEach((e) => {
  e.addEventListener('click', (e) => {
    serverDataSender('user_actions', {userAgent: navigator.userAgent, action: 'click', object: e.target.getAttribute('observer')});
  })
})

serverDataSender('visit', {userAgent: navigator.userAgent, location: Intl.DateTimeFormat().resolvedOptions().timeZone});
*/

particlesJS.load('particles-js', 'utils/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

serverDataLoader('review')
  .then((answer) => {
    for (let e of answer) {
      e.date = e.date.slice(0, -14)
      createReview(e);
    }
  })

setTimeout(() => {
  createNotification('ok','Записывайтесь ко мне на тренинги!')
}, 30000);



/// временное решение ===>>>
formSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  if (formValidator(form, ['popup-input-training', 'popup-input-name', 'popup-input-number', 'popup-input-email'])) {
    formLoader.classList.add('popup__loading_active');
    formSubmit.classList.add('popup__send_inactive');
    formSubmit.disabled = true;


    
    const BOT_TOKEN = '6424649838:AAGGfAMevuRHqZJ1JQ5-B0qAMb_WQ46XIIQ';
    const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const url = `${TELEGRAM_API}?chat_id=812132855&text=${encodeURIComponent(createMSG({name: formInputName.value, typeOfService: formInputTraining.value, number: formInputNumber.value, telegram: formInputTelegram.value, email: formInputEmail.value, consentToMailing: formInputCheckbox.checked}))}`;
    fetch(url, { muteHttpExceptions: true })
    .then(() => {
      createNotification('ok', `Успешно отправленно! Ожидайте, я связжусь с вами в ближайшее время`);
      formLoader.classList.remove('popup__loading_active');
      formSubmit.classList.remove('popup__send_inactive');
      formSubmit.disabled = false;
      popup.classList.add('popup_closed')
    }).catch(() => {
      createNotification('error', `Что-то пошло не так. Попробуйте позже.`);
      formLoader.classList.remove('popup__loading_active');
      formSubmit.classList.remove('popup__send_inactive');
      formSubmit.disabled = false;
    });
  }
});

function createMSG(data) {
  return `
  Новая заявка 🙌
  
  🙋‍♀️ Имя: ${data.name}
  📞 Телефон: ${data.number}
  ✈️ Телеграмм: ${data.telegram}
  📃 Тип заявки: ${data.typeOfService}
  🤝 Согласие рассылку: ${data.consentToMailing}`
}