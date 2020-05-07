import { Component, OnInit } from '@angular/core';
import {ValidatorService} from './validator.service';
import {ItemService} from './item.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ItemsComponent } from './items/items.component';
import {Item} from './item';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent implements OnInit {
  public role = '';
  public maxChars = 255;
  chars = 0;


  public nameInput = '';
  public descriptionTextArea = '';
  public  priceInput = '';
  public stockInput = '';


  public item = new Item('', '', '', 0, '', 0);

  constructor(private validatorService: ValidatorService, private itemService: ItemService, private router: Router,
              private route: ActivatedRoute) { }

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.maxLength(255)]),
    price: new FormControl('', [Validators.required, this.validatorService.isInteger]),
    urgency: new FormControl('', [Validators.required, this.validatorService.isInteger])
  });
  ngOnInit(): void {


    this.itemService.getItems()
      .subscribe( items => this.afterLoading(items));
  }

  onSubmit(){
    console.log(this.profileForm.value);
    const item = this.profileForm.value;
    this.itemService.updateItem(item, this.route.snapshot.paramMap.get('id'))
      .subscribe(() => this.finalizeUpdate());
  }
  afterLoading(items: Item[]) {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.item = this.getItem(items, id);
  }

  getItem(items: Item[], id): Item{
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < items.length; i++){
      if (items[i].id === id) {
        return items[i];
        console.log('item found');
      }
    }
  }

  finalizeUpdate() {
    console.log(`Updated profile: ${this.profileForm.value}`);
    this.router.navigate(['/items']);
  }
}
