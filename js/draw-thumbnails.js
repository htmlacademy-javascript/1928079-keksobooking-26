import {createOffers} from './data.js';

const similarListElement = document.querySelector('template#card');
const similarCardTemplate = document.querySelector('#card').content.querySelector('.popup');

const similarCard = createOffers();
const similarCardFragment = document.createDocumentFragment();

const drawThumbnails = () => {
  similarCard.forEach((offer)=> {
    const cardElement = similarCardTemplate.cloneNode(true);
    cardElement.querySelector('.popup__title').textContent = offer.title;
    cardElement.querySelector('.popup__text--address').textContent = offer.address;
    cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
    cardElement.querySelector('.popup__type').textContent = offer.type;
    cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
    cardElement.querySelector('.popup__features').textContent = offer.features;
    cardElement.querySelector('.popup__description').textContent = offer.description;
    cardElement.querySelector('.popup__photos').src = offer.photos;
    similarCardFragment.append(cardElement);
  });

  similarCard.forEach((author)=> {
    const cardElement = similarCardTemplate.cloneNode(true);
    cardElement.querySelector('.popup__avatar').src = author.avatar;
    similarCardFragment.append(cardElement);
  });

  similarListElement.append(similarCardFragment);
};


export {drawThumbnails};
