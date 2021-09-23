import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-przepywy',
  templateUrl: './przepywy.component.html',
  styleUrls: ['./przepywy.component.scss']
})
export class PrzepywyComponent implements OnInit {
  display = 'hide'
  rotate = 'noRotate'


  constructor() { }

  ngOnInit(): void {}
  showItems(){
    if(this.display == 'hide') {
      this.display = 'show';
      this.rotate = 'rotate'
    } else {
      this.display = 'hide';
      this.rotate='noRotate'
    }
  }

}
