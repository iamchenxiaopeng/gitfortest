import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfiniteScrollPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infinite-scroll',
  templateUrl: 'infinite-scroll.html',
})
export class InfiniteScrollPage {
  private items: any[];//表示所有数据
  private newItem: any[] = [];//用来限制items长度，实现分页
  private pageSize: number;//每页显示数量
  private pageCount: number;//总的页数
  private pageNow: number = 1;//当前显示的是第几页

  constructor() {
    this.items = [{name:'小明'},{name:'小明'},{name:'小明'},{name:'小明'},{name:'小明'},
    {name:'小明'},{name:'小明'},{name:'小明'},{name:'小明'},{name:'小明'},
    {name:'小明'},{name:'小明'},{name:'小明'},{name:'小明'},{name:'小明'},
    {name:'小明'},{name:'小明'},{name:'小明'},{name:'小明'},{name:'小明'},
    {name:'小明'},{name:'小明'},{name:'小明'},{name:'小明'},{name:'小明'},
    {name:'小明'},{name:'小明'},{name:'小明'},{name:'小明'},{name:'小明'},
    {name:'小明'},{name:'多明'},{name:'小明'},{name:'小明'},{name:'小明'},
    {name:'小明'},{name:'小明'},{name:'小明'},{name:'小明'},{name:'小明'},
    {name:'小明'},{name:'小明'},{name:'小明'},{name:'小明'},{name:'小明'},
    {name:'小明'},{name:'小明'},{name:'小明'},{name:'小明'},{name:'小明'},
    {name:'少明'},{name:'小明'},{name:'小明'},{name:'小明'},{name:'小明'},
    {name:'小明'},{name:'小明'},{name:'小明'},{name:'小明'},{name:'小明'}];
    
    this.pageSize = 10;
    this.pageCount = Math.ceil(this.items.length/this.pageSize);
    console.log(this.pageCount);
    
    for(let i = 0; i<this.pageSize; i++){
      this.newItem = this.newItem.concat(this.items[i])
    }
    console.log(this.newItem);
      
  }
  

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      //如果当前页面不是最后一页
    if(this.pageNow<this.pageCount) {
      console.log('正在加载新页面');
      //伪分页（真正的分页是要从后台获取数据，这里是循环已有数据）
      for(let i = ((this.pageNow-1)*this.pageSize); i<(this.pageSize*this.pageNow); i++){
        if(this.items.length<i){
          console.log('没有页面了');
        }else{
          this.newItem = this.newItem.concat(this.items[i])
        }
      }
    }else{
      console.log('最后一页了');
    }

      console.log('Async operation has ended');
      infiniteScroll.complete();

      this.pageNow++;
    }, 500);
  }

  scrollEvent(e){
    console.log(e);
    
  }

}
