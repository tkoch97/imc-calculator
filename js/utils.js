const calculateIMC = (weight, height) => (weight / ((height / 100) ** 2)).toFixed(1);

const printModalImcMessage = (result) => {
  let lowWeight = result < 18.5;
  let eutrofy = result >= 18.5 && result <=24.9;
  let overweight = result >=25.0 && result <=29.9;
  let obesity1 = result >=30.0 && result <=34.9;
  let obesity2 = result >=35.0 && result <=39.9;
  let obesity3 = result >39.9;
  
  if(lowWeight) {
    return `Seu IMC é de ${result},\nclassificado como baixo peso.`
  } 
  else if(eutrofy) {
    return `Seu IMC é de ${result},\nclassificado como eutrofia (peso normal).`
  } 
  else if(overweight) {
    return `Seu IMC é de ${result},\nclassificado como sobrepeso.`
  } 
  else if(obesity1) {
    return `Seu IMC é de ${result},\nclassificado como Obesidade grau I.`
  } 
  else if(obesity2) {
    return `Seu IMC é de ${result},\nclassificado como Obesidade grau II.`
  } 
  else if(obesity3){
    return `Seu IMC é de ${result},\nclassificado como Obesidade grau III.`
  }
}

const notNumber = (value) => isNaN(value) || value == "";

export { calculateIMC, printModalImcMessage, notNumber};