import { notificationContainer, templateNotification } from "../utils/constants.js";




export function createNotification(type, message) {

  let element = templateNotification.content.querySelector('.content').cloneNode(true);
  switch (type) {
    case 'ok':
      element.querySelector('.notification__icon').setAttribute("name", "checkmark-circle-outline");
      break;
    case 'error':
      element.querySelector('.notification__icon').setAttribute("name", "alert-circle-outline");
      break;
  }
  element.querySelector('.notification__text').textContent = message;
  notificationContainer.prepend(element);
  setTimeout(() => {
    element.classList.add('notification_opened');
  }, 10);
  setTimeout(() => {
    element.classList.add('notification_closed');
    setTimeout(() => {
      element.remove();
    }, 500);
  }, 5000);
}