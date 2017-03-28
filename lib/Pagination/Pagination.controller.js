/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Mon Mar 06 2017 10:03:57 GMT+0800 (中国标准时间)
 * @example: http://www.fancyui.org/#/zh-cn/component/Pagination
 */


class PaginationController {
  constructor($scope) {
    'ngInject';
    this.name = 'Pagination';
    this.$scope = $scope;
    this.previousDisabled = false;
    this.nextDisabled = false;
    //开始页
    this.startPage = null;
    //结束页
    this.endPage = null;
    //每页数据条数
    this.pageSize = angular.isUndefined(this.pageSize) ? 10 : this.pageSize;
    //当前页数
    this.currentPage = angular.isUndefined(this.currentPage) ? 1 : this.currentPage;
    //数据总条数
    this.sourceData = angular.isUndefined(this.sourceData) ? null : this.sourceData;
    //显示最多页面限制
    this.limitPage = angular.isUndefined(this.limitPage) ? 5 : this.limitPage;
    //循环显示
    //this.rotate = angular.isUndefined(this.rotate) ? null : true;
    this.rotate = true;
    this.viewMore = true;
    this.ngModel = this.currentPage;
    $scope.$watch(
      () =>{
        return this.currentPage;
      },
      (newVal, oldVal) =>{
        this.getPages();
        if(newVal == 1){
          this.previousDisabled = true;
        }else{
          this.previousDisabled = false;
        }
        if(newVal == this.totalPageNum){
          this.nextDisabled = true;
        }else{
          this.nextDisabled = false;
        }
        console.log('page',this.ngModel);
        console.log('typeof', typeof this.ngModel);
        console.log('typeof', typeof this.currentPage);
      },
      true
    )
  }

  $onInit(){
    this.render();
  }
  render(){
    this.getPages();
  };

  //创建页码
  makePage(text, number, active){
    return {
      text: text,
      number: number,
      active: active
    }
  }

  //创建页码数组
  getPages() {
    this.pages = [];
    //总页数
    this.totalPageNum = Math.ceil(this.sourceData / (this.pageSize));
    this.startPage = 1;
    this.endPage = Math.ceil(this.sourceData / (this.pageSize));
    if(this.limitPage){
      if(this.rotate){
        this.startPage = Math.max(this.currentPage - Math.floor(this.limitPage / 2), 1);
        this.endPage = this.startPage + this.limitPage - 1;
        if(this.endPage > this.totalPageNum) {
          this.endPage = this.totalPageNum;
          this.startPage = this.endPage - this.limitPage + 1;
        }
      }else{
        this.startPage = (Math.ceil(this.currentPage / this.limitPage) - 1) * this.limitPage + 1;
        this.endPage = Math.min(this.startPage + this.limitPage - 1, this.totalPageNum);
      }
    }
    for(let i = this.startPage; i<= this.endPage; i++){
      let page = {};
      if(this.currentPage == i){
        page = this.makePage(i, i, true);
      }else{
        page = this.makePage(i, i, false);
      }
      this.pages.push(page);
    }
    //增加省略选项
    if(this.viewMore){
      let firstBtn = this.makePage(1, 1, false);
      let beforeMore = this.makePage('...', this.startPage -1, false);
      let lastBtn = this.makePage(this.totalPageNum, this.totalPageNum, false);
      let behindMore = this.makePage('...', this.endPage +1, false);
      if(this.startPage >2){
        if(this.startPage == 3){
          let secondBtn = this.makePage(2,2,false);
          this.pages.unshift(secondBtn);
          this.pages.unshift(firstBtn);
        }else{
          this.pages.unshift(beforeMore);
          this.pages.unshift(firstBtn);
        }
      }
      if(this.totalPageNum - this.endPage >= 2){
        this.pages.push(behindMore);
        this.pages.push(lastBtn);
      }
      if(this.startPage == 2){
        this.pages.unshift(firstBtn);
      }
      if(this.endPage == this.totalPageNum -1){
        this.pages.push(lastBtn);
      }
    }
    //if (this.limitPage) {
    //  if (this.rotate) {
    //    this.startPage = Math.max(this.currentPage - Math.floor(this.limitPage / 2), 1);
    //    this.endPage = this.startPage + this.limitPage - 1;
    //    for (let i = this.startPage; i <= this.endPage; i++) {
    //      let page = {};
    //      if (this.currentPage == i) {
    //        page = this.makePage(i, i, true);
    //      } else {
    //        page = this.makePage(i, i, false);
    //      }
    //      this.pages.push(page);
    //    }
    //  } else {
    //    //总页数
    //    let totalPageNum = Math.ceil(this.sourceData / (this.pageSize));
    //    //开始页
    //    this.startPage = 1;
    //    //结束页
    //    this.endPage = totalPageNum;
    //    for (let i = this.startPage; i <= this.endPage; i++) {
    //      let page = {};
    //      if (this.currentPage == i) {
    //        page = this.makePage(i, i, true);
    //      } else {
    //        page = this.makePage(i, i, false);
    //      }
    //      this.pages.push(page);
    //    }
    //  }
    //  console.log('pages', this.pages)
    //}
    return this.pages;
  }

  //给每个分页btn上加的点击事件
  selectPage(data, $index){
    let number = data && data.number;
    angular.forEach(this.pages, (item) =>{
      item.active = false;
    });
    this.pages[$index].active = true;
    this.currentPage = number;
    this.ngModel = number;
    //if(this.limitPage){
    //  if(this.rotate){
    //    if((this.limitPage - number) <= 1){
    //      this.getPages();
    //    }
    //    if(number == 3){
    //      this.getPages();
    //    }
    //  }
    //}
    //angular.forEach(this.pages, (item) =>{
    //  item.active = false;
    //});
    //this.pages[$index].active = true;
    //this.currentPage = $index + 1;
  }

  //点击上一页
  previous(){
    //let previousNum = this.currentPage - 2;
    //this.selectPage(previousNum);
    this.currentPage = this.currentPage -1;
    console.log('上一页',this.currentPage);
    this.getPages();
  }

  //点击下一页
  next(){
    this.currentPage = this.currentPage +1;
    //let nextNum = this.currentPage;
    //this.selectPage(nextNum);
    console.log('下一页',this.currentPage);
    this.getPages();
  }

  //点击到首页
  firstOne(){
    this.currentPage = 1;
    this.getPages();
  }

  //点击到尾页
  lastOne(){
    this.currentPage = this.totalPageNum;
    this.getPages();
  }

  //绑定事件
  onChange(){

  }
}

export default PaginationController;
