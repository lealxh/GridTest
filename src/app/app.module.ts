import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridServiceService } from './grid-service.service';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { GridComponentComponent } from './grid-component/grid-component.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponentComponent
  ],
  imports: [
    BrowserModule,CommonModule,BrowserAnimationsModule,TableModule
  ],
  providers: [GridServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
