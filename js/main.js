function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max || min < 0 || max <= 0) {
    return ('Oшибка! Укажите другие числа');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive(1,1);

function getRandomArbitrary(min, max, maxDigits = 1) {
  if (min >= max || min < 0 || max <= 0) {
    return ('Ошибка! Укажите другие числа.');
  }

  const digitsDegree = 10 ** maxDigits;
  return ~~((Math.random() * (max - min) + min) * digitsDegree) / digitsDegree;
}
getRandomArbitrary(1, 2, 6);
