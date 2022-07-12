import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { LearnModelComponent } from './learn-model/learn-model.component';

@NgModule({
  declarations: [
    AppComponent,
    LearnModelComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
