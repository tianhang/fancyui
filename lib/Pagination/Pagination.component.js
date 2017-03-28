import template from './Pagination.html';
import controller from './Pagination.controller';
import './Pagination.less';

let PaginationComponent = {
  restrict: 'E',
  bindings: {
    pageSize: '=?pageSize',
    currentPage: '=?currentPage',
    sourceData: '=?sourceData',
    limitPage: '=?limitPage',
    onChange: '&',
    ngModel: '='
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default PaginationComponent;
