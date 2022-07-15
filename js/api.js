const GET_URL = 'https://26.javascript.pages.academy/keksobooking/data';
const SEND_URL = 'https://26.javascript.pages.academy/keksobooking';

const getData = (onSuccess, onFail) => {
  fetch(GET_URL)
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch(() => {
      onFail('Не удалось получить данные. Попробуйте ещё раз');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    SEND_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
