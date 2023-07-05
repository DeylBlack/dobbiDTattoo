import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ReviewModel} from "../../shared/models/review.model";
import {ReviewsService} from "../../shared/services/reviews.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ModalComponent} from "../../shared/modal/modal.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public reviews$: Observable<ReviewModel[]> = this.reviewService.getReviews();
  public portfolio: string[] = ['portfolio', 'portfolio', 'portfolio', 'portfolio', 'portfolio', 'portfolio', 'portfolio'];

  constructor(
      private reviewService: ReviewsService,
      public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
