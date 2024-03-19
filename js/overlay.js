'use strict';

const showOverlay = () => {
  const overlay = document.querySelector('.overlay');
  const addItemButton = document.querySelector('.panel__add-goods');
  const closeModalButton = document.querySelector('.modal__close');
  const modal = document.querySelector('.modal');

  overlay.classList.remove('active');

  addItemButton.addEventListener('click', () => {
    overlay.classList.add('active');
  });

  closeModalButton.addEventListener('click', () => {
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', () => {
    if (overlay.classList.contains('active')) {
      overlay.classList.remove('active');
      modal.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    }
  });
};

showOverlay();
