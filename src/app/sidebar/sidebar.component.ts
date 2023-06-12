import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MakeCallComponent } from '../call/make-call/make-call.component';

// other code
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(public dialog: MatDialog) {}

  openVideoPopup() {
    const dialogRef = this.dialog.open(MakeCallComponent, {
      width: '100%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
