import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit {

  allReady = false;
  phoneId = '';
  chosenPhone: any = '';
  newImageString = '';

  constructor(
    private phoneService: PhoneService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getAProduct();
  }
  
  getAProduct(): void {
    this.phoneId = this.route.snapshot.params['id'];
    this.route.params.subscribe((params) => {
      this.phoneId = params['id'];
    });
    this.phoneService.getProduct(this.phoneId).subscribe((data: any) => {
      this.chosenPhone = data;
      this.allReady = true;
    },
    (error: any) => {
      console.log('http-error: ');
      console.log(error);
    });
  }

  goBack(): void {
    this.location.back();
  }

  changeImg(event: any) {
    this.newImageString = event.target.getAttribute('src');
    document.getElementById('view-img')?.setAttribute('src', this.newImageString);
  }

}
