// Variables
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

// Objects Literals
const Modal = {
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

// Functions
const calcIMC = (weight, height) => {
  return (weight / ((height / 100) ** 2)).toFixed(1);
}

const printModalImcMessage = (result) => {
  let lowWeight = result < 18.5;
  let eutrofy = result >= 18.5 && result <=24.9;
  let overweight = result >=25.0 && result <=29.9;
  let obesity1 = result >=30.0 && result <=34.9;
  let obesity2 = result >=35.0 && result <=39.9;
  let obesity3 = result >39.9;
  
  if(lowWeight) {
    return `Seu IMC é de ${result}, que se classifica como baixo peso.`
  } 
  else if(eutrofy) {
    return `Seu IMC é de ${result}, que se classifica como eutrofia (peso normal).`
  } 
  else if(overweight) {
    return `Seu IMC é de ${result}, que se classifica como sobrepeso.`
  } 
  else if(obesity1) {
    return `Seu IMC é de ${result}, que se classifica como Obesidade grau I.`
  } 
  else if(obesity2) {
    return `Seu IMC é de ${result}, que se classifica como Obesidade grau II.`
  } 
  else if(obesity3){
    return `Seu IMC é de ${result}, que se classifica como Obesidade grau III.`
  }
}

// Events
form.onsubmit = function(event) {
  event.preventDefault();
  
  let weight = Number(inputWeight.value);
  let height = Number(inputHeight.value);
  let result = calcIMC(weight, height);
  const resultMessage = printModalImcMessage(result);
  
  Modal.open();
  Modal.imcMessage.innerText = resultMessage;
}

Modal.buttonClose.onclick = () => {
  Modal.close()
  inputHeight.value = "";
  inputWeight.value = "";
}