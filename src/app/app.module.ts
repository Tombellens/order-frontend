import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ItemInfoComponent } from './item-info.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { CreateItemComponent } from './create-item/create-item.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemInfoComponent,
    NavbarComponent,
    SearchboxComponent,
    CreateItemComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
