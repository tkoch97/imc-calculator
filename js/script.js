// Object Literals
import { Modal } from './modals.js';
import { AlertError } from './alert-error.js';
import { calculateIMC, printModalImcMessage, notNumber} from './utils.js';

// Variables
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

// Functions
const displayResultMessage = (resultMessage) => {
  Modal.open();
  Modal.imcMessage.innerText = resultMessage;
}
const cleanWeightAndHeightValues = () => {
  inputHeight.value = "";
  inputWeight.value = "";
}


// Events
form.onsubmit = function(event) {
  event.preventDefault();
  
  let weight = Number(inputWeight.value);
  let height = Number(inputHeight.value);
  let result = calculateIMC(weight, height);
  let weightOrHeightIsNotANumber = notNumber(weight) || notNumber (height);

  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }
    AlertError.close();
    const resultMessage = printModalImcMessage(result);
    displayResultMessage(resultMessage);
    cleanWeightAndHeightValues();
  }
inputHeight.oninput = () => AlertError.close();
inputWeight.oninput = () => AlertError.close();
  