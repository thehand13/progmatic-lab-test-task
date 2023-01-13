calculate(200); // введите цель рассчёта

function calculate(myResult) {
  const resultArray = [];
  
  for (let i = 0; i < 19683; i++) {
    let numberString = '',
      number = i,
      signArrayIndex = 8;
    while (number > 0) {
      numberString = String(number % 3) + numberString;
      number = Math.floor(number / 3);
    }
    const numberArray = numberString.split(''),
      signArray = ['', '', '', '', '', '', '', '', ''];
    for (let j = numberArray.length - 1; j >= 0; j--) {
      if (numberArray[j] === '0') {
        signArray[signArrayIndex] = '';
      } else if (numberArray[j] === '1') {
        signArray[signArrayIndex] = '+';
      } else if (numberArray[j] === '2') {
        signArray[signArrayIndex] = '-';
      }
      signArrayIndex--;
    }
    let result = [];
    for (let j = 0; j < 9; j++) {
      result.push(9 - j);
      result.push(signArray[j]);
    }
    result.push('0');
    const calcString = result.join('');
    const calcResult = eval(calcString);
    if (myResult === calcResult) {
      resultArray.push(calcString);
    }
  }

  if (resultArray.length !== 0) {
    console.log(`Ответы: ${resultArray.join(', ')}`);
  } else {
    console.log('Ответов нет');
  }
}
