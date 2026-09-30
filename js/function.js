/* 1) Функция для проверки длины строки. Она принимает строку, которую нужно проверить,
и максимальную длину и возвращает true, если строка меньше
или равна указанной длине, и false, если строка длиннее */

function checkStringLenght(string, maxLenght) {
  return string.length <= maxLenght;
}

/* 2)Функция для проверки, является ли строка палиндромом ,c пробелами */

function checkIfPalindrome (string) {
  string = string.replaceAll(' ', '').toUpperCase();
  let newString = '';
  for (let i = string.length - 1; i >= 0; i = i - 1) {
    newString += string[i];
  }
  return newString === string;
}

/*3)Функция принимает строку, извлекает содержащиеся
в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
Если в строке нет ни одной цифры, функция должна вернуть NaN */

function extractNumber(value) {
  let newValue = '';
  value = value.toString();
  for (let i = 0; i <= value.length; i++ ) {
    if (!isNaN(value[i]) && value[i] !== ' ') {
      newValue += value[i];
    }
  }
  if (newValue === '') {
    return NaN;
  } else {
    return newValue;
  }
}

extractNumber('1, 2, 3, 4, 5, 6, 7, 8, 9'); // вернет 123456789
checkIfPalindrome('А роза упала на лапу Азора'); // вернет true
checkStringLenght('Hello', 10); // вернет true
