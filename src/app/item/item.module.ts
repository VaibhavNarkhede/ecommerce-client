import { NgModule } from '@angular/core';
import { ItemRoutingModule } from './item-routing.module';
import { FormsModule } from '@angular/forms';
import { ItemListComponent } from './components/list/item.list.component';
import { ItemService } from './services/item.service';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';

@NgModule({
    imports: [
        CommonModule,
        ItemRoutingModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        ItemListComponent,
        CartComponent
    ],
    providers: [
        ItemService
    ],
})
export class ItemModule { }
