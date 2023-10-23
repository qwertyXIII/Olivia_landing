import { reviewsContainer, templateReview } from "../utils/constants.js";

export function createReview(data) {
  let element = templateReview.content.querySelector('.content').cloneNode(true);
  element.querySelector('.review__name').textContent = data.name;
  element.querySelector('.review__date').textContent = data.date;
  element.querySelector('.review__text').textContent = data.text;
  const stars = element.querySelectorAll('.review__star')
  reviewsContainer.prepend(element);
  for (let i = 0; i < stars.length; i++) {
    if (i != data.rate) {
      stars[i].classList.add('review__star_active');
    } else {
      return;
    }    
  }
}