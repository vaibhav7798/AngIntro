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
   showmsg:string="hello vaibhav";
   username!:string;
   propertybinding="property binding example";

   postArray=["post 1","post 2","post 3","post 4","post 5"];
  objArray=[{"name":"vaibhav","add":"chalisgaon","age":24},
           {"name":"vaibhav1","add":"chalisgaon1","age":25}];

    middlename="sanjay";
    favColor="pink";
   constructor()
{
  console.log(this.childcomp);
  
}

ngAfterViewInit(){
//  this.message=this.childcomp.fromChild;
}

receivemessage(value:any)
{
  console.log(value);
  this.fromchildoutput=value;  
  
}

buttonClick()
{console.log("button clicked event work");
}

funkeyup()
{
  console.log("keyup is working");
  
}




}
