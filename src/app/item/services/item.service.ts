import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ItemService {

    url = ''

    constructor(
        private configService: ConfigService,
        private http: HttpClient
    ) { 
        this.url = this.configService.getConfiguration().url        
    }

    removeItemFromCart(id: number) {          
        return this.http.delete(this.url + '/cart/' + id)        
    }

    removeAllItemFromCart() {          
        return this.http.delete(this.url + '/cart/')        
    }

    getCartItems() {       
        return this.http.get(this.url + '/cart')        
    }

    addItemToCart(itemid: number, price: number, quantity: number) {        

        const body = {
            itemid: itemid,
            price: price,
            quantity: quantity
        }
        console.log(body)
        return this.http.post(this.url + '/cart', body)        
    }

    getItemsForCategory(category: number) {       
        return this.http.get(this.url + '/item/category/' + category)        
    }

    getCategories() {           
        return this.http.get(this.url + '/category')        
    }

    getHash(txnid: string, amount: number, pinfo: string, fname: string, email: string, udf5: string) {
        const body =  {
          txnid: txnid,
          amount: amount,
          pinfo: pinfo,
          fname: fname,
          email: email,
          udf5: udf5
        }
        console.log(body)
        return this.http.post(this.url + '/cart/hash', body)
    }    
}