import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

    products: Observable<any>;

    constructor(private http: HttpClient) {
        this.products = this.http.get('/api/products');
    }

    ngOnInit() {
    }

}
