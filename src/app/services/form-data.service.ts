import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor() { }

  formValues;

  saveUser(data){
    this.formValues = JSON.parse(JSON.stringify(data));
  }

  getUser(){
    console.log(this.formValues);
  }



}
