import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  name: string = ''
  flowValue: number = 0
  type: string = ''
  @Input() params : any
  @Output() addPoint = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  //pokazywanie panelu bocznego
  show(){
    let aside: any = document.querySelector('.aside')
    aside.style.width = '250px'
  }
  //czyszczenie formularza
  clear(){
    this.name = ''
    this.flowValue = 0
    this.type = ''
    this.addPoint.emit()
    let marker :any = document.querySelector('.leaflet-interactive')
    marker && marker.remove()
  }
  //dodawanie punktu
  onClick(){
    alert('wybierz punkt na mapie')
    let marker :any = document.querySelector('.leaflet-interactive')
    this.addPoint.emit()
    marker && marker.remove()
  }
  //wysyłanie formularza
  onSubmit(){
    if(!this.name){
      alert('Prosze wprowadzić przykładową nazwę.')
      return;
    }
    if(this.flowValue <=0){
      alert('Prosze wprowadzić średnią wartość przepływu.')
      return;
    }
    if(!this.type){
      alert('Prosze wybrać typ.')
      return;
    }
    if(this.params === "[0]"){
      console.log(this.params)
      alert('Prosze dodać punkt na mapie.')
      console.log(this.params)
      return;
    }


    console.log(this.params);
    const newFlowMeter = {
      name : this.name,
      flowValue: this.flowValue,
      type: this.type,
      location: this.params
    }
    console.log(newFlowMeter)
    alert('Dodano punkt.')
  }
}
