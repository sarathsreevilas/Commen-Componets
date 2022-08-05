import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-btn-component',
  templateUrl: './btn-component.component.html',
  styleUrls: ['./btn-component.component.css']
})
export class BtnComponentComponent implements OnInit {

  title='submit'
  color='red'
  @Input() params:any
  constructor() { }

  ngOnInit(): void {

    console.log(this.params);
    if(this.params){
      this.title=this.params

    }
    
  }

}
