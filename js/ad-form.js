const TitleLength = {
  min: 30,
  max: 100,
};

const form = document.querySelector('.ad-form');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

function validateTitle (value) {
  return value.length >= TitleLength.min && value.length <= TitleLength.max;
}

pristine.addValidator(
  form.querySelector('#title'),
  validateTitle,
  `Длина заголовка от ${TitleLength.min} до ${TitleLength.max} символов`
);

const priceField = form.querySelector('#price');
const minPrice = {
  bungalow: 0,
  flat: 1000,
  house: 3000,
  hotel: 5000,
  palace: 10000,
};

function validatePrice (value) {
  const type = form.querySelector('#type').content.querySelector('option:selected');
  return value.length && parseInt(value, 10) >= minPrice[type.value];
}

function getPriceErrorMessage () {
  const type = form.querySelector('#type').content.querySelector('option:selected');
  return `Не менее ${minPrice[type.value]} руб за ночь`;
}

pristine.addValidator(priceField, validatePrice, getPriceErrorMessage);

const roomsField = form.querySelector('[name="rooms"]');
const capacityField = form.querySelector('[name="capacity"]');
const accommodationOption = {
  '1 комната' : 'для 1 гостя',
  '2 комнаты' : ['для 2 гостей', 'для 1 гостя'],
  '3 комнаты' : ['для 3 гостей', 'для 2 гостей', 'для 1 гостя'],
  '100 комнат' : 'не для гостей'
};

function validateAccommodation () {
  return accommodationOption[roomsField.value].includes(capacityField.value);
}

function getAccommodationErrorMessage () {
  return `
    ${roomsField.value}
    ${capacityField.value}
    ${capacityField.value === 'Заселение такого количества гостей' ? 'невозможно' : 'невозможно'}
  `;
}

pristine.addValidator(roomsField, validateAccommodation, getAccommodationErrorMessage);
pristine.addValidator(capacityField, validateAccommodation, getAccommodationErrorMessage);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
