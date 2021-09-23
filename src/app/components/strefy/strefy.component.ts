import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strefy',
  templateUrl: './strefy.component.html',
  styleUrls: ['./strefy.component.scss']
})
export class StrefyComponent implements OnInit {
  display = 'hide'
  rotate = 'noRotate'
  constructor() { }

  ngOnInit(): void {
  }
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
