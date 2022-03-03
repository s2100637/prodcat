import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  productList: any[] = [];
  searchText!: string;
  order = '';

  selectChangeHandler(event: any) {
    this.order = event.target.value;
  }

  constructor(
    private orderPipe: OrderPipe,
    public phoneService: PhoneService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.phoneService.getAllProducts().subscribe((data: any[]) => {
      this.productList = data;
      this.productList.sort((a, b) => (a.age < b.age) ? 1 : (a.age === b.age) ? ((a.age < b.age) ? 1 : -1) : -1 )
    },
    (error: any) => {
      console.log('http-error:');
      console.log(error);
    });
  }

}
