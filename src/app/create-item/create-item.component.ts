import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ValidatorService} from '../validator.service';
import { ItemService } from '../item.service';
import { Router} from '@angular/router';
import {Item} from '../item';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  public role = '';
  public maxChars = 255;
  chars = 0;

  constructor(private validatorService: ValidatorService, private itemService: ItemService, private router: Router) {

  }

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    price: new FormControl('', [Validators.required, this.validatorService.isInteger]),
    urgency: new FormControl('', [Validators.required, this.validatorService.isInteger])
  });

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.profileForm.value);
    const item = this.profileForm.value;
    this.itemService.addItem(item)
      .subscribe( () => this.finalizeCreation() );
  }
  finalizeCreation() {
    console.log(`Created new profile: ${this.profileForm.value}`);
    this.router.navigate(['/items']);
  }
}
