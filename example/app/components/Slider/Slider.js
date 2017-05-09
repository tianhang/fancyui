import Slider from '../../../../lib/Slider/index.js';

import SliderComponent from './Slider.component';
export default angular.module('Slider', [
  Slider.name
])
.component('slider', SliderComponent);
