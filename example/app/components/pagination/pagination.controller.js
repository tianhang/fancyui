/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Mon Mar 06 2017 10:03:57 GMT+0800 (中国标准时间)
 * @example: http://www.fancyui.org/#/zh-cn/component/Pagination
 */

import Base from '../../base';
export default class PaginationController extends Base{
  constructor($state,$translate, $scope) {
    'ngInject';
    super($state,$translate);
    this.$scope = $scope;
    $scope.$watch(
      () =>{
        return this.page;
      },
      (newVal, oldVal) =>{
        console.log('page',newVal);
      },
      true
    )
  }
}