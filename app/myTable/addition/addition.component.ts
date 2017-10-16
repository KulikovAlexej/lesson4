import { Component, Input, Output, EventEmitter } from '@angular/core';
import  myTable  from '../my-table.component'

@Component({
    moduleId: module.id,
    selector: 'addition',
    templateUrl: 'addition.component.html',
    styleUrls: ['addition.component.css']
})

export default class addition {
    newProd: Object = {
        name: 'lemon',
        category: '2',
        price: '300'
    };

    @Input()
    Products: Array<Object> = [];

    @Input()
    Categories: Array<string> = [];

    @Output()
    AddNewProduct: EventEmitter<any> = new EventEmitter();

    CategoryList;

    ngOnInit(){
        this.CategoryList = [...this.Categories];
        this.CategoryList.splice(0,1)
    }

    addProduct(obj) {
        let cloneProduct = {...this.newProd};
        this.Products.push(cloneProduct);
        this.AddNewProduct.emit(this.Products); 
    }
}