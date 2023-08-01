import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
public searchTerm: string = "";
public items: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {this.setFilteredItems();
  }

  setFilteredItems(){
    this.items = this.dataService.filterItems(this.searchTerm);
  }
}
