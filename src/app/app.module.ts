import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MapComponent } from './components/map/map.component';
import { StrefyComponent } from './components/strefy/strefy.component';
import { PrzepywyComponent } from './components/przepywy/przepywy.component';
import { PrzeplywomierzComponent } from './components/przeplywomierz/przeplywomierz.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    StrefyComponent,
    PrzepywyComponent,
    PrzeplywomierzComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
