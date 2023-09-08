import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
    selector: 'save-banner.dialog',
    templateUrl: 'save-banner.dialog.html',
    standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  })
  export class SaveBanerDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any,public router: Router ) {
      
    }
    showBanners(){
      this.router.navigate([this.data.route]);
    }
  }