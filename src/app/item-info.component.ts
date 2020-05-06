import { Component, OnInit } from '@angular/core';
import {ValidatorService} from './validator.service';
import {ItemService} from './item.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent implements OnInit {
  public role = '';
  public maxChars = 255;
  chars = 0;

  constructor(private validatorService: ValidatorService, private itemService: ItemService, private router: Router) { }

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    price: new FormControl('', [Validators.required, this.validatorService.isInteger]),
    urgency: new FormControl('', [Validators.required, this.validatorService.isInteger])
  });
  ngOnInit(): void {
  }

}
