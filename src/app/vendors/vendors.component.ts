import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';

import { VENDORS } from '../mock-vendors';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  vendors = VENDORS;
  selectedVendor?: Vendor;

  //<!--vendor: Vendor = {    id: 1,    name: 'Beer'  };-->

  constructor() { }

  ngOnInit() {
  }

  
  onSelect(vendor: Vendor): void {
    this.selectedVendor = vendor;
  }

}
