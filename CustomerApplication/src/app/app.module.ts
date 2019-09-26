import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from'@angular/forms';
import {RouterModule} from'@angular/router';

import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';

import { WelcomeComponent } from './app/welcome/welcome.component';

import { ProductsModule } from './product/products.module';



@NgModule({
  declarations: [
    AppComponent,
       WelcomeComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
                          {path:'welcome', component:WelcomeComponent},
                          {path:' ', redirectTo:'welcome',pathMatch:'full'},
                          {path:'** ', redirectTo:'welcome',pathMatch:'full'}],{useHash:true}),
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
