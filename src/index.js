import validator from './validator.js';

function myFunction() {
  let cardNumber1 = document.getElementById("cardNumber1");
  let cardNumber2 = document.getElementById("cardNumber2");
  let cardNumber3 = document.getElementById("cardNumber3");

  let secretNumbers = [cardNumber1, cardNumber2, cardNumber3];

  for (let i = 0; i < secretNumbers.length; i++){ 
  
    if(secretNumbers[i].type === "password") { 
      secretNumbers[i].type = "text";
    }else{
      secretNumbers[i].type = "password";
    }
  } 
}
document.getElementById("seePassword").addEventListener("click", myFunction);


document.getElementById("validateCard").addEventListener("click", validar);
function validar(){
  let cardNumber1 = document.getElementById("cardNumber1").value;
  let cardNumber2 = document.getElementById("cardNumber2").value;
  let cardNumber3 = document.getElementById("cardNumber3").value;
  let cardNumber4 = document.getElementById("cardNumber4").value;
  

  let cardNumbers = [cardNumber1 + cardNumber2 + cardNumber3 + cardNumber4]
  let cardNumbersString = cardNumbers.toString();
  

  if(cardNumbersString.length <16){
    return false
  } else{
    validator.maskify(cardNumbersString);
    validator.isValid(cardNumbersString);
  }

  const modalValid = document.getElementById("modalBoxValid");
  const modalInvalid = document.getElementById("modalBoxInvalid");
  document.getElementById("closeV").addEventListener("click", closeMB);
  document.getElementById("closeI").addEventListener("click", closeMB);


    if(validator.isValid(cardNumbersString) == true){
      modalValid.style.display = "block";
    }else{
      modalInvalid.style.display = "block";
    }
  

  function closeMB(){
    modalValid.style.display = "none";
    modalInvalid.style.display = "none";
  }
}

  
    
  
  

  
  
    
 
