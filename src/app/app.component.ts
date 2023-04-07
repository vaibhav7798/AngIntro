import { Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngIntro';
message!:any;
  parentMessage:string='mesage coming from the parent component';
  fromchildoutput!:string;
 @ViewChild(PostComponent) childcomp:any; 

constructor()
{
  console.log(this.childcomp);
  
}

ngAfterViewInit(){
  this.message=this.childcomp.fromChild;
}

receivemessage(value:any)
{
  console.log(value);
  this.fromchildoutput=value;  
  
}
}
