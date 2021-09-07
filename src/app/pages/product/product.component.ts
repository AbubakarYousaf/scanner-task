import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13, BarcodeFormat.CODE_128, BarcodeFormat.DATA_MATRIX /*, ...*/ ];
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  scanSuccessHandler (e:any) {
    console.log(e)
    this.router.navigate(['product', '02f8ec80-61a2-419c-8111-57ab9148c99a'])
  }

  camerasNotFound (e:any) {
    console.log(e)
  }
}
