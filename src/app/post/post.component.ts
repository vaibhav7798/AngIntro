import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

title:string="vaibhav";

name:string="chalisgaon";
@Input() fromParent!:string;

fromChild:string="from child compont....";

outputChildMessage:string='message from child component via output';

@Output() messageEvent=new EventEmitter<string>();

sendmessage()
{
  console.log('clicked');
 this.messageEvent.emit(this.outputChildMessage); 
}


}
