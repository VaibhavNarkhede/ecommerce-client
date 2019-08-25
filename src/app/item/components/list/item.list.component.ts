import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-item-list',
    templateUrl: './item.list.component.html',
    styleUrls: ['./item.list.component.css']
})

export class ItemListComponent implements OnInit {
    categories = []
    items = []
    selectedCategory = {id: -1}

    constructor(
        private router: Router,
        private service: ItemService
    ) { }

    ngOnInit() {
        this.loadCategories()
    }

    onCart() {
        this.router.navigate(['/item/cart'])
    }

    onLogout() {
        sessionStorage.removeItem('token')
        this.router.navigate(['/auth/signin'])
    }

    onAddToCart(item) {
        this.service
            .addItemToCart(item.id, item.price, 1)
            .subscribe(result => {
                if(result['status'] === 'success') {
                   alert('added to cart')
                } else {
                   alert(result['error'])
                }
           })
    }

    onSelectedCategory(category) {
        this.selectedCategory = category
        this.service
            .getItemsForCategory(category.id)
            .subscribe(result => {
                if(result['status'] === 'success') {
                   this.items = result['data']
                } else {
                   alert(result['error'])
                }
           })
    }

    loadCategories() {
        this.service
            .getCategories()
            .subscribe(result => {
                 if(result['status'] === 'success') {
                    this.categories = result['data']
                 } else {
                    alert(result['error'])
                 }
            })
    }
}