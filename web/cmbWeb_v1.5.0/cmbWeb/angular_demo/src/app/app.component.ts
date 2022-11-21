import { Component } from '@angular/core';

// @ts-ignore
import * as _ from 'cmbsdk-cmbweb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cmbWeb demo';
  
  constructor() {
    
    //make mwbScanner global
    (window as any).mwbScanner = _;
  }
  
  public startScanning(): void {
    
    (window as any).mwbScanner.startScanning();
  }
  
  public closeScanner(): void {
    
    (window as any).mwbScanner.closeScanner();
  }
}
