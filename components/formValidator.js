import { createNotification } from "./createNotification.js";

export function formValidator(form, selectors) {
  for (let e of selectors) {
    if (form.querySelector(`#${e}`).value == '') {
      form.querySelector(`#${e}`).classList.add('popup__input_wrong')
      setTimeout(() => {
        form.querySelector(`#${e}`).classList.remove('popup__input_wrong')
      }, 2000);
      createNotification('error', 'Не все поля формы заполнены. Необходимо заполнить все обязательные поля, чтобы я могла связаться с вами')
      return false;
    }
  }
  return true;
}