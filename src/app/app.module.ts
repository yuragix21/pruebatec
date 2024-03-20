import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { BuscadorComponent } from './pages/buscador/buscador.component';
import { HttpClientModule , HttpClient} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BuscadorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
