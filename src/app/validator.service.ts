import { Injectable } from '@angular/core';
import {FormControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  public isInteger = (control: FormControl) => {
      let checker: number;
      checker = parseFloat(control.value);
      return (Number.isInteger(checker)) ?  null  :
      {notNumeric: true
      };

}


}
