const TYPES_OF_HOUSING = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const advertCard = document.querySelector('#card').content.querySelector('.popup');

const innerSimpleText = (parent, cssClass, data) => {
  const element = parent.querySelector(cssClass);

  if(!data) {
    element.remove();
    return;
  }
  element.textContent = data;
};

const innerSimpleSrc = (parent, cssClass, data) => {
  const  element = parent.querySelector(cssClass);
  if(!data) {
    element.remove();
    return;
  }
  element.src = data;
};

const innerPriceContent = (parent, cssClass, data) => {
  const  element = parent.querySelector(cssClass);
  if(!data) {
    element.remove();
    return;
  }
  element.textContent = `${data} ₽/ночь`;
};

const innerTimeContent = (parent, cssClass, dataIn, dataOut) => {
  const  element = parent.querySelector(cssClass);

  if(!dataIn && !dataOut) {
    element.remove();
    return;
  }

  const inText = dataIn ? `Заезд после ${dataIn}` : '';
  const outText = dataOut ? `выезд до ${dataOut}` : '';
  const divider = dataIn && dataOut ? ', ' : '';

  element.textContent = `${inText}${divider}${outText}`;
};

const innerRoomContent = (parent, cssClass, room, guest) => {
  const  element = parent.querySelector(cssClass);

  if(!room && !guest) {
    element.remove();
    return;
  }

  const rooms = room ? `${room} комнаты` : '';
  const guests = guest ? `для ${guest} гостей` : '';
  const divider = room && guest ? ' ' : '';

  element.textContent = `${rooms}${divider}${guests}`;
};

const innerPhotoContent = (parent, cssClassParent, cssClassChild, data) => {
  const parentElement = parent.querySelector(cssClassParent);
  const element = parent.querySelector(cssClassChild);
  parentElement.innerHTML = '';
  if(typeof data !== 'object' || !data.length) {
    parentElement.remove();
    return;
  }

  data.forEach((value) => {
    const newImg = element.cloneNode(true);
    newImg.src = value;
    parentElement.append(newImg);
  });
};

const innerFeaturesContent = (parent, cssClass, data) => {
  const element = parent.querySelector(cssClass);
  if(!data) {
    element.remove();
    return;
  }

  const elementList = parent.querySelector(cssClass).children;
  [...elementList].forEach((elementItem) => {
    const isNecessary = data.some(
      (featureClass) => elementItem.classList.contains(`popup__feature--${featureClass}`)
    );

    if (!isNecessary) {
      elementItem.remove();
    }
  });
};

const createCard = (({offer, author}) => {
  const advertElement = advertCard.cloneNode(true);
  innerSimpleSrc(advertElement, '.popup__avatar', author.avatar);
  innerSimpleText(advertElement, '.popup__title', offer.title);
  innerSimpleText(advertElement, '.popup__text--address', offer.address);
  innerSimpleText(advertElement, '.popup__type', TYPES_OF_HOUSING[offer.type]);
  innerSimpleText(advertElement, '.popup__description', offer.description);
  innerPriceContent(advertElement, '.popup__text--price', offer.price);
  innerTimeContent(advertElement, '.popup__text--time', offer.checkin, offer.checkout);
  innerRoomContent(advertElement, '.popup__text--capacity', offer.rooms, offer.guests);
  innerPhotoContent(advertElement, '.popup__photos', '.popup__photo', offer.photos);
  innerFeaturesContent (advertElement, '.popup__features', offer.features);
  return advertElement;
});

export {createCard};
