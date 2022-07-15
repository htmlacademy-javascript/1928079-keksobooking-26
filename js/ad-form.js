import {sendData} from './api.js';

const MAX_PRICE_HOUSING = 100000;
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const formAdvert = document.querySelector('.ad-form');
const roomsInput = formAdvert.querySelector('#room_number');
const capacityInput = formAdvert.querySelector('#capacity');
const titleAdvert = formAdvert.querySelector('#title');
const typeRoom = formAdvert.querySelector('#type');
const priceRoom = formAdvert.querySelector('#price');
const timeIn = formAdvert.querySelector('#timein');
const timeOut = formAdvert.querySelector('#timeout');
const submitButton = document.querySelector('.ad-form__submit');

const roomsToOption = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const minHousingPrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const pristine = new Pristine(formAdvert, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__element--error-text',
});

const validateTitleAdvert = (value) => value.length >= MIN_TITLE_LENGTH && value.length <= MAX_TITLE_LENGTH;

const validatePriceAdvert = () =>
  priceRoom.value >= minHousingPrice[typeRoom.value] && priceRoom.value <= MAX_PRICE_HOUSING;

const validateRoomsInput = () => roomsToOption[roomsInput.value].includes(capacityInput.value);

const getTitleError = () => 'Длина заголовка должна быть от 30 до 100 символов';

const getPriceError = () => {
  if (priceRoom.value <= minHousingPrice[typeRoom.value]) {
    return `Минимальная цена ${minHousingPrice[typeRoom.value]}`;
  } else if (priceRoom.value >= MAX_PRICE_HOUSING) {
    return `Максимальная цена ${MAX_PRICE_HOUSING}`;
  }
};

const getRoomsError = () => {
  if (roomsInput.value === '1') {
    return 'Размещение для одного гостя';
  }
  if (roomsInput.value === '2') {
    return 'Размещение от одного до двух гостей';
  }
  if (roomsInput.value === '3') {
    return 'Размещение от одного до трех гостей';
  }
  if (roomsInput.value === '100') {
    return 'Не для гостей';
  }
};

const onTimeInChange = () => {
  timeOut.value = timeIn.value;
};

const onTimeOutChange = () => {
  timeIn.value = timeOut.value;
};

const onTypeRoomInputChange = () => {
  priceRoom.placeholder = minHousingPrice[typeRoom.value];
  priceRoom.min = minHousingPrice[typeRoom.value];
};

const addFormListeners = (onSuccess, onError) => {
  timeIn.addEventListener('change', onTimeInChange);
  timeOut.addEventListener('change', onTimeOutChange);
  typeRoom.addEventListener('change', onTypeRoomInputChange);
  formAdvert.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (pristine.validate()) {
      submitButton.disabled = true;
      const formData = new FormData(formAdvert);
      sendData(onSuccess, onError, formData);
    }
  });
};

const addFormValidator = () => {
  pristine.addValidator(capacityInput, validateRoomsInput, getRoomsError);
  pristine.addValidator(priceRoom, validatePriceAdvert, getPriceError);
  pristine.addValidator(titleAdvert, validateTitleAdvert, getTitleError);
};

const setAdFormActions = (onSuccess, onError) => {
  addFormValidator();
  addFormListeners(onSuccess, onError);
};

export {setAdFormActions};
