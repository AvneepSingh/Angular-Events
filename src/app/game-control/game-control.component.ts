import { Component,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() eventCreated = new EventEmitter<Number>;
  number = 0;
  id:any = null;
  onStart()
  {
    if(!this.id){
      this.id = setInterval(()=>{this.eventCreated.emit(++this.number);},1000);}
  }
  onStop()
  {
    if(this.id)
    {
      clearInterval(this.id);
      this.id = null;
    }
  }
}
