import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './components/list/item.list.component';
import { CartComponent } from '../cart/cart.component';

const routes: Routes = [
    {path: 'list', component: ItemListComponent},
    {path: 'cart', component: CartComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
})
export class ItemRoutingModule { }