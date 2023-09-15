import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFormComponent } from './data-form/data-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataTableComponent } from './data-table/data-table.component';
import { RouterModule } from '@angular/router';
import { ViewUserComponent } from './view-user/view-user.component';
import { HomeComponent } from './home/home.component';
import { DataTableRowComponent } from './data-table-row/data-table-row.component';
import { IdValidatorDirective } from './validators/idValidator/id-validator.directive';
import { ErrorPageComponent } from './error-page/error-page.component';


@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent,
    NavbarComponent,
    DataTableComponent,
    ViewUserComponent,
    HomeComponent,
    DataTableRowComponent,
    IdValidatorDirective,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'' , component: HomeComponent},
      {path:'view/:id', component: ViewUserComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
