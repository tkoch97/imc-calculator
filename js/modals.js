// Objects Literals

export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  imcMessage: document.querySelector('.result span'),
  buttonClose: document.querySelector('.result button.close'),

  open: function () {
    Modal.wrapper.classList.toggle('open')
  },
  close: function () {
    Modal.wrapper.classList.toggle('open');
  }
}

Modal.buttonClose.onclick = () => {
  Modal.close()
}

window.addEventListener('keydown', handleKeyDown)
function handleKeyDown(event) {
  if(event.key === 'Escape') {
    Modal.close()
  }
}