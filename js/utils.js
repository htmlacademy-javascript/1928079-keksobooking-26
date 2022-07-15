const renderElement = (container, element) => {
  container.insertAdjacentHTML('beforeend', element);
};

const isEcsEvt = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

export {isEcsEvt, renderElement};
