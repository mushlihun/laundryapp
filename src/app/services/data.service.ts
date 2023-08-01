import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
public items: any=[];

  constructor() { 
    this.items = [
      
      {title:"FAQ", page:"/faq"},
      {title:"Service", page:"/laundryservice"},
      {title:"Laundry Tools", page:"/tools"},
    ]
  }

  filterItems(searchTerm) {
    return this.items.filter(item =>{
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}