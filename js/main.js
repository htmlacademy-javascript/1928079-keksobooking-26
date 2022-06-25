function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

const getRandomElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const getAvatar = () => `img/avatars/user${  getRandomPositiveInteger (1, 10)  }.png`;

const TITLE_OF_OFFER = [
  'Захолустье',
  'Хижина',
  'Бунгало',
  'Домик',
  'Квартира',
  'Особняк',
  'Пентхаус',
  'Замок',
  'Комната',
  'Дворец',
  'Дюплекс'
];

const TYPE_OF_OFFER = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECK_IN_AND_OUT = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES_OF_OFFER = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const DESCRIPTION_OF_OFFER = [
  'Уютный дом',
  'Просторно',
  'Красивый вид из окна',
  'Рядом с морем',
  'Много спальных мест',
  'Ванная с джакузи',
  'Много света в помещении',
  'Рядом с парком',
  'Рядом с большим ТЦ',
  'Исторический район'
];

const PHOTOS_OF_OFFER = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const SIMILAR_OFFERS_COUNT = 10;

function shuffle() {
  for (let i = FEATURES_OF_OFFER.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [FEATURES_OF_OFFER[i], FEATURES_OF_OFFER[j]] = [FEATURES_OF_OFFER[j], FEATURES_OF_OFFER[i]];
  }
  return FEATURES_OF_OFFER;
}

const getFeatures = () => {
  shuffle(FEATURES_OF_OFFER);
  return FEATURES_OF_OFFER.slice(0, getRandomPositiveInteger(0, 5));
};

const createOffer = () => (
  {
    author: {
      avatar: getAvatar,
    },
    offer: {
      title: getRandomElement(TITLE_OF_OFFER),
      address: Object.values(location),
      price: getRandomPositiveInteger(50, 100000),
      type: getRandomElement(TYPE_OF_OFFER),
      rooms: getRandomPositiveInteger(1, 15),
      guests: getRandomPositiveInteger(1, 20),
      checkin: getRandomElement(CHECK_IN_AND_OUT),
      checkout: getRandomElement(CHECK_IN_AND_OUT),
      features: getFeatures(),
      description: getRandomElement(DESCRIPTION_OF_OFFER),
      photos: getRandomElement(PHOTOS_OF_OFFER),
    },
    location: {
      lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
      lng: getRandomPositiveFloat(139.70000, 139.80000, 5),
    },
  }
);

createOffer();


// const similarOffers = Array.from({length: SIMILAR_OFFERS_COUNT}, createOffer);
// способ из демки, не работает ...
// similarOffers();
