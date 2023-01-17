export const AlertError = {
  message: document.querySelector('.alertError'),

  open: function () {
    AlertError.message.classList.add('open');
  },
  close: function () {
    AlertError.message.classList.remove('open');
  }
}