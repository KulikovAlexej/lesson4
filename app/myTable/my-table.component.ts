import { Component, Input, OnInit } from '@angular/core';
import  addition  from './addition/addition.component'

@Component({
    moduleId: module.id,
    selector: 'my-table',
    templateUrl: 'my-table.component.html',
    styleUrls: ['my-table.component.css'],
    inputs: ["rows"]
})

export default class myTable {
    rows: number;
    NewProducts: Array<any>;
    Categories: Array<string> = ['All Categories', '1', '2', '3'];
    Category: string = this.Categories[0];
    
    Products: Array<any> = [
        { id: 1, name: 'product 1', price: 100, category: 1 },
        { id: 2, name: 'product 2', price: 200, category: 2 },
        { id: 3, name: 'product 3', price: 300, category: 3 },
        { id: 4, name: 'product 4', price: 400, category: 1 },
        { id: 5, name: 'product 5', price: 500, category: 2 },
        { id: 6, name: 'product 6', price: 600, category: 3 },
        { id: 7, name: 'product 7', price: 700, category: 1 },
        { id: 8, name: 'product 8', price: 800, category: 2 },
        { id: 9, name: 'product 9', price: 900, category: 3 }];
    //надо генерировать массив в зависимости от значения Category
    generateArr() {
        this.NewProducts = this.Products.slice(0, this.Products.length);
        if (this.Category != 'All Categories') {
            let numb = this.Category;
            this.NewProducts = this.NewProducts.filter(function (item) {
                return item.category == numb
            });
            console.log(this.Category)
        }

    }
    ngOnInit() {
        this.generateArr();
    }

    deleteProduct(obj) {
        let elem = this.NewProducts.indexOf(obj);
        this.NewProducts.splice(elem, 1);
        this.Products = this.NewProducts;
    }
}
