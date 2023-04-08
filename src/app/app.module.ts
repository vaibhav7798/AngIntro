import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';//registred sussfully
import { PostComponent } from './post/post.component';
import { PostlistComponent } from './postlist/postlist.component';
import { FormsModule } from '@angular/forms';
@NgModule({     //directives+component+pipes
  declarations: [
    AppComponent,
    NavbarComponent,//registred sussfully
    PostComponent, PostlistComponent,
  ],
  imports: [  //module
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
