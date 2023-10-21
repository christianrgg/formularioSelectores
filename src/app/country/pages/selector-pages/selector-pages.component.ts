import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CountriesService} from "../../services/countries.service";
import {Region} from "../../interfaces/country.interfaces";

@Component({
  templateUrl: './selector-pages.component.html',
  styles: [
  ]
})
export class SelectorPagesComponent {

  public myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    borders: ['', Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService,
  ) {}

  get regions():Region[]{
    return  this.countriesService.regions;
  }
}
