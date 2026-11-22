import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoComponent } from './info/info.component';
import { EducComponent } from './educ/educ.component';
import { ExperComponent } from './components/exper/exper.component';
import { HiComponent } from './hi/hi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    EducComponent,
    ExperComponent,
    HiComponent,
    HighlightDirective,
    ProductsComponent,
    ProductComponent,
    HomeComponent,
    ReactiveFormsModule
  ],
  imports: [BrowserModule, FormsModule, UsersComponent, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
