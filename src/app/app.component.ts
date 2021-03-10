import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { BarcodeScannerLivestreamComponent } from "ngx-barcode-scanner";

@Component({
  selector: 'app-root',
  template: `
    <barcode-scanner-livestream
        [type]="['code_39', 'ean']"
        (valueChanges)="onValueChanges($event)"
        (started)="(onStarted)"
    ></barcode-scanner-livestream>
    <div [hidden]="!barcodeValue">
      Code : {{  barcodeValue }}
    </div>
    <div [hidden]="!barcodeValue">
      Format : {{ barcodeFormat }}
    </div>
  `
})
export class AppComponent implements AfterViewInit{
  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner: BarcodeScannerLivestreamComponent;
  //BARCODE_TYPES = [
  //   'code_128',
  //   'code_39',
  //   'code_39_vin',
  //   'ean',
  //   'ean_extended',
  //   'ean_8',
  //   'upc',
  //   'upc_e',
  //   'codabar',
  //   'i2of5',
  //   '2of5',
  //   'code_93'
  //   ];
  barcodeValue;
  barcodeFormat;

  ngAfterViewInit() {
    this.barcodeScanner.start();
  }

  onValueChanges(result) {
    this.barcodeValue = result.codeResult.code;
    this.barcodeFormat = result.codeResult.format;
  }

  onStarted(started) {
    console.log(started);
  }
}
