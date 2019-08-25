import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/services/item.service';
import { Router } from '@angular/router';
declare var bolt: any;
@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {

    items = []
    totalPrice = 0     
    constructor(
        private router: Router,
        private service: ItemService
    ) { }

    ngOnInit() { 
        this.loadCartItems()
    }     
      
    onRemove(item) {
        this.service
            .removeItemFromCart(item.id)
            .subscribe(result => {
                if(result['status'] === 'success') {
                   this.loadCartItems()
                } else {
                   alert(result['error'])
                }
           })
    }

    onRemoveAllItemInCart()
    {
          this.service
          .removeAllItemFromCart()
          .subscribe(result => {
              if(result['status'] === 'success') {
                this.router.navigate(['/item/list'])
              } else {
                alert(result['error'])
              }
        })
    }
    onItems() {
        this.router.navigate(['/item/list'])
    }

    loadCartItems() {
        this.service
            .getCartItems()
            .subscribe(result => {
                if(result['status'] === 'success') {
                   this.items = result['data']
                   this.totalPrice = 0
                   this.items.forEach(item => {
                       this.totalPrice += item.price
                   })
                } else {
                   alert(result['error'])
                }
           })
    }

    onPay() {
        const txnid = "123456"
        var hash = ''              
        this.service
          .getHash(txnid, this.totalPrice, 'Foods', sessionStorage['username'], 'vaibhavnarkhede@gmail.com',  '')
          .subscribe(response => {
            if(response['status'] === 'success') {              
              hash = response['data']
              console.log('hash: ' + hash)
            }                   
            bolt.launch({
              key: 'DHF7q9VM',
              txnid: txnid,
              hash: hash,
              amount: this.totalPrice,
              firstname: sessionStorage['username'],
              email: 'vaibhavnarkhede@gmail.com',
              phone: '+91345345',
              productinfo: 'Foods',
              udf5: '',
              surl : 'http://localhost:4200/success',
              furl: 'http://localhost:4200/failure'
            },
            { 
              responseHandler: function(BOLT) {
              console.log( BOLT.response.txnStatus );

              if(BOLT.response.txnStatus != 'CANCEL') {
                console.log(BOLT.response)                
              }
            },
              catchException: function(BOLT){
                 alert( BOLT.message );
              }
            });
          })

          this.onRemoveAllItemInCart()              
      }
}