import { Component, OnInit } from '@angular/core';

import { Item } from '../item';
import { ItemService } from '../item.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public items: Item[];


  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    (this.itemService.getItems())
      .subscribe(items => this.items = this.transformFetchedItems(items) );
  }

  transformFetchedItems(fetchedItems: Item[]): Item[]{
    // tslint:disable-next-line:prefer-const
    let itemsToReturn = new Array();
    for (let i = 0; i < fetchedItems.length; i++){
      console.log(`${i}`);
      itemsToReturn.push( new Item(fetchedItems[i].name, fetchedItems[i].description, fetchedItems[i].price, fetchedItems[i].stockUrgency));
    }
    return itemsToReturn;
  }

  getColor(stockUrgency: string): string{
    if (stockUrgency === 'High') {return '#008000'; }
    if (stockUrgency === 'Low') {return '#FF0000'; }
    if (stockUrgency === 'Medium') {return '#ffbf00'; }
  }
}
