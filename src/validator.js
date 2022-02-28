const validator = {
  maskify(cardNumbersString){
    let numbersArr = cardNumbersString.split(""); 
    let last4 = numbersArr.splice(-4, 4).join(""); 
    let hiddenN = numbersArr.join("").replace(/\w/g, "#").replace(/\W/g, "#"); 
    let finalMasked = hiddenN + last4; 
    return(finalMasked);
  }

  , isValid(cardNumbersString){
    let cardNumbersReversed = cardNumbersString.split("").reverse();
    let cardNumbersEvenPositions = [];
    function numerosOp () {
      for(let i = 1; i < cardNumbersReversed.length; i+=2) {
       cardNumbersEvenPositions.push(cardNumbersReversed[i] *2);
      }
      return cardNumbersEvenPositions;
    }
    
    let numbersToAdd = numerosOp();
    function tenOrHigher(element){
      return element >= 10;
    }
    function lowerThanTen(element){
      return element < 10;
    }

    let newNumbers = numbersToAdd.filter(tenOrHigher);
    let numbersPure = numbersToAdd.filter(lowerThanTen);
    let numbersOp1 = newNumbers.map(function getArraySum(n){
      return (n - 1) % 9 + 1;
    })

    let oddNumbers = [];
    function numerosOp2 () {
      for(let i = 0; i < cardNumbersReversed.length; i+=2) {
       oddNumbers.push(cardNumbersReversed[i]*1);
      }
      return oddNumbers;
    }
    
    let numbersToAddOdd = numerosOp2();
    let finalNumbers = [...numbersToAddOdd, ...numbersOp1, ...numbersPure];
    
    function getArraySum(a){
      let total=0;
      for(let i in a) { 
          total += a[i];    
      }
      return total;
    }
  
    let finalNumbersTotal= getArraySum(finalNumbers); 
    let validateNumber = finalNumbersTotal%10    

    if (validateNumber === 0){
      return true;    
    } else {
      return false;
    }
  }
  
};

export default validator;



