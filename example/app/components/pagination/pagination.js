import Pagination from '../../../../lib/Pagination/index.js';

import paginationComponent from './pagination.component';
export default angular.module('pagination', [
  Pagination.name
])
.component('pagination', paginationComponent);
