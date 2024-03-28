'use strict';

const showOverlay = () => {
  const overlay = document.querySelector('.overlay');
  const addItemButton = document.querySelector('.panel__add-goods');
  const closeModalButton = document.querySelector('.modal__close');

  overlay.classList.remove('active');

  addItemButton.addEventListener('click', () => {
    overlay.classList.add('active');
  });

  closeModalButton.addEventListener('click', () => {
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', e => {
    const target = e.target;
    if (target === overlay) {
      overlay.classList.remove('active');
    }
  });
};

showOverlay();
