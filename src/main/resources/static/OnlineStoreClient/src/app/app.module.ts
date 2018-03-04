import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ShoesFormComponent } from './components/shoes-form/shoes-form.component';
import { ListshoesComponent } from './components/listshoes/listshoes.component';
import { ShoesService } from './shared-service/shoes.service';


const appRoutes:Routes=[
  {path:'op',component:ShoesFormComponent},
  {path:'',component:ListshoesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ShoesFormComponent,
    ListshoesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ShoesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
