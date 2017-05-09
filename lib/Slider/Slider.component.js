import template from './Slider.html';
import controller from './Slider.controller';
import './Slider.less';

let SliderComponent = {
  restrict: 'E',
  bindings: {
    range: '<',
    min: '<',
    max: '<',
    step: '<',
    marks: '<',
    dots: '<',
    defaultValue: '<',
    disabled: '<',
    vertical: '<',
    onChange: '<',
    tipFormatter: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default SliderComponent;
