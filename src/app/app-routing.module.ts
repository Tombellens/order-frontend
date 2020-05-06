import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ItemInfoComponent} from './item-info.component';
import {ItemsComponent} from './items/items.component';
import {CreateItemComponent} from './create-item/create-item.component';


const routes: Routes = [
  {path: 'item-info', component: ItemInfoComponent},
  {path: 'items', component: ItemsComponent},
  {path: '', redirectTo: '/items', pathMatch: 'full'},
  {path: 'create-item', component: CreateItemComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
