import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorPagesComponent } from './pages/selector-pages/selector-pages.component';
import {CountriesRountingModule} from "./countries-rounting.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    SelectorPagesComponent
  ],
  imports: [
    CommonModule,
    CountriesRountingModule,
    ReactiveFormsModule,
  ]
})
export class CountriesModule { }
