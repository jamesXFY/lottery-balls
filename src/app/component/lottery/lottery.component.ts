import { Component, OnDestroy } from '@angular/core';
import { LotteryService } from 'src/app/service/lottery.service';
import { Result } from 'src/app/service/lotter';
import { Subject, BehaviorSubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.scss']
})
export class LotteryComponent implements OnDestroy {
  public primaryBalls = [1, 2, 3, 4, 5, 6, 7];
  public secondaryBalls = [1];

  public lotterySquaresFirstLine = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public lotterySquaresSecondLine = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  public lotterySquaresThirdLine = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  public lotterySquaresForthLine = [31, 32, 33, 34, 35];

  public primaryNumbers?: number[] = [];
  public secondaryNumbers?: number[] = [];

  private readonly onDestroyed$ = new Subject<void>();

  constructor(private readonly lotterService: LotteryService) {}

  public loadResult(): void {
    this.lotterService
      .getLotteryNumbers()
      .pipe(takeUntil(this.onDestroyed$))
      .subscribe((result: Result) => {
        if (result.DrawResults && result.DrawResults.length > 0) {
          this.primaryNumbers = result.DrawResults[0].PrimaryNumbers;
          this.secondaryNumbers = result.DrawResults[0].SecondaryNumbers;
        }
      });
  }

  public ngOnDestroy(): void {
    this.onDestroyed$.next();
    this.onDestroyed$.complete();
  }
}
