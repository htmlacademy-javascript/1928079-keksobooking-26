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

const LOCATION_LENGTH = 5;

const AvatarCount = {
  min: 1,
  max: 10
};

const PriceCount = {
  min: 50,
  max: 100000
};

const LocationCount = {
  lat: {
    min: 35.65,
    max: 35.7
  },
  lng: {
    min: 139.7,
    max:  139.9
  }
};

const RoomsCount = {
  min: 1,
  max: 15
};

const GuestCount = {
  min: 1,
  max: 20
};

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
};

const getRandomElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const getAvatar = () => `img/avatars/user${  getRandomPositiveInteger (AvatarCount.min, AvatarCount.max)  }.png`;

const shuffle = () => {
  for (let i = Array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [Array[i], Array[j]] = [Array[j], Array[i]];
  }
  return Array;
};

const getFeatures = () => {
  shuffle(FEATURES_OF_OFFER);
  return FEATURES_OF_OFFER.slice(0, getRandomPositiveInteger(0, FEATURES_OF_OFFER.length - 1));
};

const getPhotos = () => {
  shuffle(PHOTOS_OF_OFFER);
  return PHOTOS_OF_OFFER.slice(0, getRandomPositiveInteger(0, PHOTOS_OF_OFFER.length - 1));
};

const createOffer = () => {
  const location = {
    lat: getRandomPositiveFloat(LocationCount.lat.min, LocationCount.lat.max, LOCATION_LENGTH),
    lng: getRandomPositiveFloat(LocationCount.lng.min, LocationCount.lng.max, LOCATION_LENGTH),
  };

  return {
    author: {
      avatar: getAvatar(),
    },
    offer: {
      title: getRandomElement(TITLE_OF_OFFER),
      address: `${location.lat}, ${location.lng}`,
      price: getRandomPositiveInteger(PriceCount.min, PriceCount.max),
      type: getRandomElement(TYPE_OF_OFFER),
      rooms: getRandomPositiveInteger(GuestCount.min, GuestCount.max),
      guests: getRandomPositiveInteger(RoomsCount.min, RoomsCount.max),
      checkin: getRandomElement(CHECK_IN_AND_OUT),
      checkout: getRandomElement(CHECK_IN_AND_OUT),
      features: getFeatures(),
      description: getRandomElement(DESCRIPTION_OF_OFFER),
      photos: getPhotos(),
    },
    location,
  };
};

const similarOffers = () => Array.from({length: SIMILAR_OFFERS_COUNT}, createOffer);

console.log(similarOffers());
