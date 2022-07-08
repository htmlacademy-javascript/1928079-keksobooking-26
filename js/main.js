import {renderCard} from './create-card.js';
import {setAdFormActions} from './ad-form.js';
import {deactivateForms, activateAdvertForm, activateMapFilterForm} from './page-states.js';

deactivateForms();
activateAdvertForm();
activateMapFilterForm();
renderCard();
setAdFormActions();
