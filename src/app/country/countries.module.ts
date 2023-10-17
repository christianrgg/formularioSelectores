import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorPagesComponent } from './pages/selector-pages/selector-pages.component';
import {CountriesRountingModule} from "./countries-rounting.module";



@NgModule({
  declarations: [
    SelectorPagesComponent
  ],
  imports: [
    CommonModule,
    CountriesRountingModule,
  ]
})
export class CountriesModule { }
