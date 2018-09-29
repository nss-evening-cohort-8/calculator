import {calculate} from './components/calculator.js';
import buttonEvents from './helpers/buttonEvents.js';

const initializeApp = () => {
  buttonEvents();
  // calculate(4, 2, 'multiply'); //8
  // calculate(4, 2, 'divide'); //2
  // calculate(14, 2, 'add'); //16
  calculate(44, 2, 'subtract'); //42
};

initializeApp();