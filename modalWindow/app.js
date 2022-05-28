'use strict';
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
let closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
