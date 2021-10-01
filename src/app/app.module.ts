import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

//import { RouterModule } from '@angular/router'; //<-- newly add to fix issue
import { AppRoutingModule } from './app-routing.module'; //<-- suppose to be commented out

import { AppComponent } from './app.component';
import { VendorsComponent } from './vendors/vendors.component';


@NgModule({
  declarations: [
    AppComponent,
    VendorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //RouterModule //<-- newly add to fix issue
    //RouterModule.forRoot(appRoutes) 
    AppRoutingModule
  ],
  //exports: [RouterModule]
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
