import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { CardGridComponent } from './components/card-grid/card-grid.component';
import { CreateTodoDialogComponent } from './components/create-todo/create-todo.dialog.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    CardGridComponent,
    CreateTodoDialogComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
