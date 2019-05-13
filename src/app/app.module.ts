import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSortModule,
  MatTableModule, MatToolbarModule, MatListModule, MatAutocompleteModule, MatCheckboxModule
} from '@angular/material';
import { DataService } from './services/data.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatListModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  entryComponents: [

  ],//    AddDialogComponent,EditDialogComponent,DeleteDialogComponent,
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
