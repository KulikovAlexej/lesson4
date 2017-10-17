import { Injectable } from '@angular/core'

@Injectable()
export default class DataService{
    getData(){
        let arr = [1,2,3,4,5,6,7];
        return arr;
    }
}