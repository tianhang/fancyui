/**
 * <%= codeName %> component define
 */

import controller from './<%= name %>.js';
import template from 'template.html';

'use strict';

let componentDefine = {
  template,
  controller,
  controllerAs: 'controller',
  bindings: {

  }
}

export default componentDefine;