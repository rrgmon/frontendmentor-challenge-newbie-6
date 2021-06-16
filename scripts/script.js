'use strict';

const shareEl = document.querySelector('.share');
const socialsEl = document.querySelector('.socials');

shareEl.addEventListener('click', () => {
  socialsEl.classList.toggle('socials-display');
});
