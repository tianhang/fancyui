/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date 2016-12-31
 * @example: http://www.fancyui.org/#/zh-cn/component/Slider
 */

import angular from 'angular';
import mocks from 'angular-mocks';

import SliderModule from './index';

class ElementFinder {
  constructor(element) {
    this.element = angular.element(element)[0];
  }

  controllerInstance() {
    return angular.element(this.element).scope().$$childHead.vm;
  }
}

describe('Slider', () => {
  let $rootScope,$compile;

  beforeEach(window.module(SliderModule.name));
  beforeEach(inject((_$rootScope_,_$compile_) => {
    $rootScope = _$rootScope_.$new();
    $compile = _$compile_;
  }));

  describe('测试组件', () => {
    describe('测试基本用法', () => {});
  });

});
